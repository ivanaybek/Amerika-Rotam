"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const {visaData, catalogInfo, filterVisas, englishRank, educationProfiles, availabilityLabels} = AmerikaRotam;
  const form = document.getElementById("profile");
  const wizard = document.getElementById("wizard");
  const matches = document.getElementById("matches");
  const results = document.getElementById("results");
  const stages = [...document.querySelectorAll(".stage")];
  const stepLinks = [...document.querySelectorAll(".step-link")];
  const tabs = [...document.querySelectorAll(".result-tab")];
  const back = document.getElementById("back");
  const message = document.getElementById("message");
  let currentStep = 0;
  let furthestStep = 0;
  let matchedRoutes = {general: [], special: []};
  let activeGroup = "general";
  let pageIndex = 0;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const prompts = [
    ["Kaç yaşındasın?", "Yaşına, eğitimine ve İngilizce seviyene göre sana uygun ABD yollarını keşfet."],
    ["Eğitim durumun ne?", "Öğrenciliğini veya tamamladığın eğitim düzeyini seç."],
    ["İngilizcen ne düzeyde?", "Kendine en yakın düzeyi seç. Başvuru koşullarını sonuçlarda görebilirsin."]
  ];

  function element(tag, text, className) {
    const node = document.createElement(tag);
    if (text !== undefined) node.textContent = text;
    if (className) node.className = className;
    return node;
  }
  function externalLink(text, url) {
    const link = element("a", text);
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    return link;
  }
  function animateEntrance(node, horizontalOffset = 0) {
    if (reducedMotion.matches) return;
    node.getAnimations().forEach(animation => animation.cancel());
    node.animate([
      {opacity: 0, transform: "translate(" + horizontalOffset + "px, 6px)"},
      {opacity: 1, transform: "translate(0, 0)"}
    ], {duration: 280, easing: "cubic-bezier(.2,.75,.25,1)"});
  }
  function openDialog(dialog) {
    if (dialog.open) return;
    dialog.classList.remove("is-closing");
    dialog.showModal();
    if (reducedMotion.matches) return;
    dialog.animate([
      {opacity: 0, transform: "translateY(16px) scale(.97)"},
      {opacity: 1, transform: "translateY(0) scale(1)"}
    ], {duration: 280, easing: "cubic-bezier(.2,.75,.25,1)"});
  }
  function closeDialog(dialog) {
    if (!dialog.open || dialog.classList.contains("is-closing")) return;
    if (reducedMotion.matches) {
      dialog.close();
      return;
    }
    dialog.getAnimations().forEach(animation => animation.cancel());
    dialog.classList.add("is-closing");
    const exit = dialog.animate([
      {opacity: 1, transform: "translateY(0) scale(1)"},
      {opacity: 0, transform: "translateY(10px) scale(.98)"}
    ], {duration: 180, easing: "ease-in", fill: "forwards"});
    exit.finished.then(() => {
      dialog.close();
      exit.cancel();
      dialog.classList.remove("is-closing");
    }, () => dialog.classList.remove("is-closing"));
  }
  // Dokunma anında geri bildirim verir; işlem tamamlandığında öğe temizlenir.
  document.addEventListener("pointerdown", event => {
    const button = event.target.closest("button");
    if (!button || button.disabled || event.button !== 0 || reducedMotion.matches) return;
    button.querySelectorAll(".tap-ripple").forEach(ripple => ripple.remove());
    const bounds = button.getBoundingClientRect();
    const size = Math.max(bounds.width, bounds.height) * 2;
    const ripple = element("span", undefined, "tap-ripple");
    ripple.setAttribute("aria-hidden", "true");
    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = event.clientX - bounds.left - size / 2 + "px";
    ripple.style.top = event.clientY - bounds.top - size / 2 + "px";
    button.append(ripple);
    const animation = ripple.animate([
      {transform: "scale(0)", opacity: .7},
      {transform: "scale(1)", opacity: 0}
    ], {duration: 480, easing: "ease-out"});
    animation.finished.then(() => ripple.remove(), () => ripple.remove());
  });
  function showStep(index, focus = true) {
    const direction = index < currentStep ? -14 : 14;
    currentStep = index;
    furthestStep = Math.max(furthestStep, index);
    stages.forEach((stage, i) => { stage.hidden = i !== index; });
    stepLinks.forEach((link, i) => {
      link.disabled = i > furthestStep;
      link.classList.toggle("complete", i < index);
      if (i === index) link.setAttribute("aria-current", "step");
      else link.removeAttribute("aria-current");
    });
    document.getElementById("question").textContent = prompts[index][0];
    document.getElementById("intro").textContent = prompts[index][1];
    document.getElementById("next-label").textContent = index === 2 ? "Yolları keşfet" : "Devam et";
    back.hidden = index === 0;
    message.textContent = "";
    if (focus) stages[index].querySelector("input,select").focus({preventScroll: true});
    animateEntrance(document.getElementById("question"), direction);
    animateEntrance(document.getElementById("intro"));
    animateEntrance(stages[index], direction);
  }

  for (const [field, values] of [["englishLevel", englishRank], ["educationStatus", educationProfiles]]) {
    for (const value of Object.keys(values)) form.elements[field].add(new Option(value, value));
  }
  back.addEventListener("click", () => showStep(currentStep - 1));
  stepLinks.forEach((link, i) => link.addEventListener("click", () => showStep(i)));
  document.getElementById("edit-profile").addEventListener("click", () => {
    matches.hidden = true;
    wizard.hidden = false;
    showStep(0);
  });

  function range(values, unit) {
    if (values[0] === null) return "Dosyaya göre";
    const formatted = values.map(value => value.toLocaleString("tr-TR"));
    return (values[0] === values[1] ? formatted[0] : formatted.join("–")) + " " + unit;
  }
  function costLabel(visa) {
    if (visa.cost.planningRangeUsd[0] !== null) return range(visa.cost.planningRangeUsd, "$");
    if (visa.cost.bindingFloorUsd > 0) return "En az " + visa.cost.bindingFloorUsd.toLocaleString("tr-TR") + " $";
    return "Dosyaya göre";
  }
  function entry({visa, reasons}, openInDialog = false) {
    const card = element("article", undefined, "visa-card");
    card.append(element("p", visa.kind, "card-kind"), element("h3", visa.name), element("p", visa.visaCode, "card-code"));
    const metrics = element("dl", undefined, "card-metrics");
    for (const [label, value] of [["Tahmini toplam", costLabel(visa)], ["Tahmini süre", range(visa.time.planningRangeMonths, "ay")]]) {
      const metric = element("div");
      metric.append(element("dt", label), element("dd", value));
      metrics.append(metric);
    }
    card.append(metrics, element("p", availabilityLabels[visa.availability] + " · Ek koşullar incelenmeli", "card-condition"));
    const details = element("details", undefined, "card-details");
    details.append(element("summary", "Koşulları ve maliyeti incele"));
    const age = visa.eligibility.age;
    const ageText = age.min === null && age.max === null ? age.detail :
      (age.min ?? 0) + "–" + (age.max ?? "üst sınır yok") + " yaş. " + age.detail;
    details.append(
      element("p", "Yaş · " + ageText),
      element("p", "Eğitim · " + visa.eligibility.education.detail),
      element("p", "İngilizce · " + (visa.eligibility.english.minimum || visa.eligibility.english.rule)),
      element("h4", "Maliyet aralığına dahil olanlar"),
      element("p", visa.cost.assumption)
    );
    if (visa.note) details.append(element("p", visa.note));
    if (reasons.length) {
      const list = element("ul");
      for (const reason of reasons) list.append(element("li", reason));
      details.append(element("h4", "Başvurudan önce doğrulanacak koşullar"), list);
    }
    const sources = element("div", undefined, "sources");
    visa.sources.forEach((url, i) => sources.append(externalLink("Kaynak " + (i + 1) + " ↗", url)));
    details.append(sources);
    if (openInDialog) {
      const button = element("button", "Koşulları ve maliyeti incele ↗", "card-open");
      button.type = "button";
      button.addEventListener("click", () => {
        details.open = true;
        details.querySelector("summary").hidden = true;
        document.getElementById("route-title").textContent = visa.name + " · " + visa.visaCode;
        document.getElementById("route-body").replaceChildren(details);
        openDialog(document.getElementById("route-dialog"));
      });
      card.append(button);
    } else card.append(details);
    return card;
  }

  function displayResults(group, resetPage = true) {
    activeGroup = group;
    if (resetPage) pageIndex = 0;
    tabs.forEach(tab => {
      const active = tab.dataset.group === group;
      tab.classList.toggle("active", active);
      tab.setAttribute("aria-pressed", String(active));
    });
    const pageSize = window.innerWidth <= 600 ? 1 : window.innerWidth <= 900 ? 2 : 3;
    const pageCount = Math.max(1, Math.ceil(matchedRoutes[group].length / pageSize));
    pageIndex = Math.min(pageIndex, pageCount - 1);
    const start = pageIndex * pageSize;
    results.replaceChildren(...matchedRoutes[group].slice(start, start + pageSize).map(item => entry(item, true)));
    document.getElementById("page-info").textContent = (pageIndex + 1) + " / " + pageCount;
    document.getElementById("previous-page").disabled = pageIndex === 0;
    document.getElementById("next-page").disabled = pageIndex >= pageCount - 1;
    if (!matchedRoutes[group].length) {
      results.append(element("p", "Bu grupta profilinle eşleşen bir yol bulunamadı. Diğer gruptaki yolları inceleyebilirsin.", "empty-state"));
    }
  }
  tabs.forEach(tab => tab.addEventListener("click", () => displayResults(tab.dataset.group)));
  document.getElementById("previous-page").addEventListener("click", () => {
    pageIndex--;
    displayResults(activeGroup, false);
  });
  document.getElementById("next-page").addEventListener("click", () => {
    pageIndex++;
    displayResults(activeGroup, false);
  });
  window.addEventListener("resize", () => {
    if (!matches.hidden) displayResults(activeGroup, false);
  });

  const specialKinds = new Set(["Resmî görev", "Türev vize", "Aile göçmenliği", "Türev göçmen vizesi", "Koruma / özel statü", "Mevcut statüyle dönüş", "Seyahat belgesi / muafiyet", "Geçiş vizesi", "Özel yol", "İnsani kabul", "Geçici giriş izni", "Vatandaşlıkla seyahat", "Aile amaçlı geçici vize"]);
  const firstRoutes = ["F-1", "F-1-ESL", "F-1-FUNDED", "M-1", "J-1-SWT", "J-1-INTERN", "J-1-AU-PAIR", "J-1-CAMP", "B-2", "B-1/B-2"];
  function routeOrder(item) {
    const index = firstRoutes.indexOf(item.visa.id);
    return index === -1 ? firstRoutes.length : index;
  }
  form.addEventListener("submit", event => {
    event.preventDefault();
    if (!stages[currentStep].querySelector("input,select").reportValidity()) return;
    if (currentStep < 2) {
      showStep(currentStep + 1);
      return;
    }
    const invalidIndex = stages.findIndex(stage => !stage.querySelector("input,select").checkValidity());
    if (invalidIndex !== -1) {
      showStep(invalidIndex);
      stages[invalidIndex].querySelector("input,select").reportValidity();
      return;
    }
    try {
      // Bütçe ve süre sonuçları sınırlamaz. Kartlarda bilgilendirme olarak yer alır.
      const answer = filterVisas(Object.fromEntries(new FormData(form)));
      const items = [...answer.kesin, ...answer.sartli].sort((a, b) => routeOrder(a) - routeOrder(b));
      matchedRoutes = {general: [], special: []};
      for (const item of items) {
        const special = specialKinds.has(item.visa.kind) || ["legacy", "invitation", "unconfirmed", "case"].includes(item.visa.availability);
        matchedRoutes[special ? "special" : "general"].push(item);
      }
      tabs[0].textContent = "Genel yollar (" + matchedRoutes.general.length + ")";
      tabs[1].textContent = "Özel koşullu yollar (" + matchedRoutes.special.length + ")";
      document.getElementById("count").textContent = items.length + " yol profil bilgilerinle ön eşleşti.";
      displayResults(matchedRoutes.general.length ? "general" : "special");
      wizard.hidden = true;
      matches.hidden = false;
      document.getElementById("matches-title").focus({preventScroll: true});
    } catch (error) {
      message.textContent = error.message;
    }
  });

  const method = document.getElementById("method");
  for (const text of [
    "Sonuçlar yaş, eğitim durumu ve İngilizce bilgine göre gösterilir. Bütçe ve bekleme süresi eleme ölçütü olarak kullanılmaz.",
    "Ön eşleşmelerde okul kabulü, işveren, sponsor, aile bağı veya mesleki yeterlilik gibi ek koşulların doğrulanması gerekir. Yetkili makam başvuruyu ayrıca değerlendirir.",
    catalogInfo.budget, catalogInfo.time, catalogInfo.levels, catalogInfo.legal
  ]) method.append(element("p", text));

  function prepareDialog(dialog) {
    dialog.querySelector(".close-dialog").addEventListener("click", () => closeDialog(dialog));
    dialog.addEventListener("cancel", event => {
      event.preventDefault();
      closeDialog(dialog);
    });
    dialog.addEventListener("click", event => {
      if (event.target !== dialog) return;
      const bounds = dialog.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) closeDialog(dialog);
    });
  }
  document.querySelectorAll("dialog").forEach(prepareDialog);
  document.querySelectorAll("[data-dialog]").forEach(button => button.addEventListener("click", () => {
    const dialog = document.getElementById(button.dataset.dialog);
    if (dialog.id === "catalog-dialog") {
      const list = document.getElementById("catalog-list");
      if (!list.childElementCount) {
        for (const visa of visaData) {
          if (!visa.notice) list.append(entry({visa, reasons: Object.values(visa.eligibility.facts)}));
        }
      }
    }
    openDialog(dialog);
  }));

  // Duyuru ekranın altında her profil için görünür. Tam açıklama ayrı pencerede açılır.
  const dv = visaData.find(visa => visa.notice);
  if (dv) {
    const dialog = element("dialog");
    dialog.id = "notice-dialog";
    dialog.setAttribute("aria-labelledby", "notice-title");
    const heading = element("div", undefined, "dialog-heading");
    const title = element("h2", dv.name);
    title.id = "notice-title";
    const close = element("button", "×", "close-dialog");
    close.type = "button";
    close.setAttribute("aria-label", "Duyuruyu kapat");
    heading.append(title, close);
    const body = element("div", undefined, "dialog-body");
    body.append(element("p", dv.notice.title), element("p", dv.notice.body),
      element("p", "Son kontrol " + dv.notice.asOf.split("-").reverse().join(".")),
      externalLink("Temyiz kararı ↗", dv.notice.source), element("p"),
      externalLink("ABD Dışişleri duyurusu ↗", dv.notice.agencySource));
    dialog.append(heading, body);
    document.body.append(dialog);
    prepareDialog(dialog);
    const bar = element("article", undefined, "notice-bar");
    const copy = element("div");
    copy.append(element("strong", dv.notice.title), element("small", "Green Card çekilişi · Son kontrol " + dv.notice.asOf.split("-").reverse().join(".")));
    const button = element("button", "Detaylar ↗", "notice-button");
    button.type = "button";
    button.addEventListener("click", () => openDialog(dialog));
    bar.append(copy, button);
    document.getElementById("notices").replaceChildren(bar);
  }
  showStep(0, false);
});
