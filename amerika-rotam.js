"use strict";
// Amerika Rotam • 11 Kasım 2026 • UTF-8 • bağımlılıksız klasik JS / CommonJS
// Düzenleme kaynağı bu dosyadır. JSON dışa aktarımı: JSON.stringify(visaData, null, 2)
const catalogInfo = {
  "asOf": "2026-11-11",
  "scope": "Türkiye’den ilk konsolosluk başvurusu yapan Türk vatandaşı ve ayrıca işaretlenmiş özel giriş, türev, eski dosya ve program yolları. Bir satır bir uygulanabilirlik sorusudur; kodlar, alt yollar ve burslar aynı sayım birimi değildir.",
  "budget": "Tek kişi, USD. Başvuru ve girişe hak kazanmak için hazırlanacak net kaynak. Okul örneklerinde sunulacak ilk dönem/yıl finansmanı, yatırımcıda sermaye dahil. Normal seyahat, taşınma, giriş sonrası statü değişimi, ek aile fertleri ve işverenin yasal giderleri hariç. Kanuni sermaye eşiği dışında örnek bütçe sınırları danışmanlık/model varsayımıdır.",
  "time": "Ay. Dosya hazırlığı veya dilekçe başlangıcından konsolosluk sonucuna örnek senaryo; iş/okul/sponsor arama süresi hariç. Burslarda çağrıdan sonuç aşamasına. İdari inceleme, kota, gerileme ve kapanış süreyi uzatabilir. Orta nokta istatistiksel ortalama değildir.",
  "levels": "Başlangıç ≈ A1–A2, Orta ≈ B1–B2, İleri ≈ C1–C2. Sponsor değerlendirmesi veya sınav puanı ayrıca aranır.",
  "legal": "11 Kasım 2026 kesiti. Ocak 2026’da Türkiye dahil 75 ülke için getirilen göçmen vizesi veriliş duraklaması, State Department güncellemesine göre 21 Ağustos 2026 itibarıyla kalktı.",
  "observations": [
    {
      "date": "2026-10-21",
      "metric": "Mülakat zorunlu dosyalarda önceki ay B1/B2 ortalaması; sıradaki B, F/M/J, H/L/O/P/Q ve C/D randevusu. Ay. null yayımlanmamış.",
      "posts": {
        "Ankara": {
          "previousBMean": 2,
          "nextB": 4,
          "nextFMJ": "<0.5",
          "nextHLOPQ": 1,
          "nextCD": null
        },
        "İstanbul": {
          "previousBMean": null,
          "nextB": 6,
          "nextFMJ": 2,
          "nextHLOPQ": 2,
          "nextCD": "<0.5"
        }
      },
      "source": "https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/global-visa-wait-times.html"
    },
    {
      "date": "2026-11-06",
      "metric": "Ankara NVC randevusu verilen, vize numarası mevcut ve evrakları tamamlanmış dosyaların ayı.",
      "posts": {
        "Ankara": {
          "employment": "2026-06",
          "familyPreference": "2023-09",
          "immediateRelative": "2025-03"
        }
      },
      "source": "https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/iv-wait-times.html"
    },
    {
      "date": "2026-08-30",
      "metric": "USCIS FY2026 kısmi yıl, tüm ofisler, yalnız dilekçe aşaması; ulusal medyan ay.",
      "months": {
        "I129_regular": 5.1,
        "I129_premium": 0.6,
        "I129F": 8.2,
        "I130_immediateRelative": 12.8,
        "I140_regular": 3.6,
        "I140_premium": 1
      },
      "source": "https://egov.uscis.gov/processing-times/historic-pt"
    },
    {
      "date": "2026-10-31",
      "metric": "PERM analist incelemesi, son 90 gün ortalaması; ön hazırlık ve konsolosluk hariç.",
      "days": 315,
      "source": "https://flag.dol.gov/processingtimes"
    },
    {
      "date": "2026-11",
      "metric": "Türkiye doğumluların genellikle girdiği All Chargeability Areas Except Those Listed sütunu, Final Action Dates. Başka ülkeye yüklenebilirlik ayrıca incelenir.",
      "cutoffs": {
        "EB1": "C",
        "EB2": "2025-04-01",
        "EB3": "2024-06-15",
        "otherWorkers": "2022-06-01",
        "EB4": "2022-12-15",
        "SR": "2022-12-15"
      },
      "source": "https://travel.state.gov/content/dam/visas/Bulletins/visabulletin_November2026.pdf"
    }
  ],
  "sources": [
    "https://travel.state.gov/en/newsroom/visas/2026/immigrant-visa-processing-updates-for-nationalities-at-high-risk-of-public-benefits-usage.html",
    "https://travel.state.gov/content/travel/en/us-visas/Visa-Reciprocity-and-Civil-Documents-by-Country/Turkey.html",
    "https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/fees/fees-visa-services.html",
    "https://travel.state.gov/en/newsroom/visas/2026/announcement-of-expanded-screening-and-vetting-for-visa-applicants.html"
  ]
};
const sourceRegistry = {
  "niv": "https://fam.state.gov/FAM/09FAM/09FAM040201.html",
  "iv": "https://fam.state.gov/FAM/09FAM/09FAM050201.html",
  "tr": "https://travel.state.gov/content/travel/en/us-visas/Visa-Reciprocity-and-Civil-Documents-by-Country/Turkey.html",
  "fees": "https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/fees/fees-visa-services.html",
  "wait": "https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/global-visa-wait-times.html",
  "queue": "https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/iv-wait-times.html",
  "usc": "https://egov.uscis.gov/processing-times/historic-pt",
  "filing": "https://www.uscis.gov/g-1055",
  "dol": "https://flag.dol.gov/processingtimes",
  "vb": "https://travel.state.gov/content/dam/visas/Bulletins/visabulletin_November2026.pdf",
  "b": "https://travel.state.gov/content/travel/en/us-visas/tourism-visit/visitor.html",
  "crew": "https://travel.state.gov/content/travel/en/us-visas/other-visa-categories/crewmember-visa.html",
  "e": "https://fam.state.gov/FAM/09FAM/09FAM040209.html",
  "treaty": "https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/fees/treaty.html",
  "work": "https://travel.state.gov/content/travel/en/us-visas/employment/temporary-worker-visas.html",
  "f": "https://fam.state.gov/FAM/09FAM/09FAM040205.html",
  "study": "https://educationusa.state.gov/your-5-steps-us-study/finance-your-studies",
  "sevis": "https://www.ice.gov/sites/default/files/documents/Document/2019/SEVP-FinalFeeRule-FAQs.pdf",
  "j": "https://j1visa.state.gov/programs/",
  "j2": "https://j1visa.state.gov/basics/j2-visa/",
  "family": "https://fam.state.gov/FAM/09FAM/09FAM050202.html",
  "eb": "https://fam.state.gov/FAM/09FAM/09FAM050204.html",
  "special": "https://fam.state.gov/FAM/09FAM/09FAM050205.html",
  "imm": "https://travel.state.gov/content/travel/en/us-visas/immigrate/employment-based-immigrant-visas.html",
  "eb5": "https://www.govinfo.gov/content/pkg/USCODE-2024-title8/pdf/USCODE-2024-title8-chap12-subchapII-partI-sec1153.pdf",
  "gold": "https://trumpcard.gov/",
  "dv": "https://travel.state.gov/content/travel/en/us-visas/immigrate/diversity-visa-program-entry/diversity-visa-if-you-are-selected/diversity-visa-confirm-your-qualifications.html",
  "dvnews": "https://travel.state.gov/en/newsroom/visas/2025/changes-to-2027-dv-program-entry-period.html",
  "court": "https://www.govinfo.gov/content/pkg/USCOURTS-ca9-26-6943/pdf/USCOURTS-ca9-26-6943-0.pdf",
  "dvissue": "https://travel.state.gov/en/newsroom/visas/2025/diversity-visa-issuance-updated-guidance.html",
  "trpause": "https://travel.state.gov/en/newsroom/visas/2026/immigrant-visa-processing-updates-for-nationalities-at-high-risk-of-public-benefits-usage.html",
  "h1": "https://www.whitehouse.gov/presidential-actions/2026/09/restriction-on-entry-of-certain-nonimmigrant-workers-faad/",
  "hc": "https://www.govinfo.gov/content/pkg/USCOURTS-cand-4_25-cv-08454/pdf/USCOURTS-cand-4_25-cv-08454-17.pdf",
  "official": "https://fam.state.gov/FAM/09FAM/09FAM040203.html",
  "victim": "https://fam.state.gov/FAM/09FAM/09FAM040206.html",
  "ful": "https://www.fulbright.org.tr/turk-vatandaslarina-verilen-burslar",
  "flex": "https://www.turkkulturvakfi.org.tr/flexglobal/",
  "flexOffice": "https://www.discoverflexglobal.org/apply-to-flex",
  "ytili": "https://www.ytili.org/information-for-applicants",
  "tech": "https://techgirlsglobal.org/apply/eligibility-and-application-2/",
  "yes": "https://www.yesprograms.org/countries",
  "bft": "https://exchanges.state.gov/non-us/program/benjamin-franklin-transatlantic-fellowship.html",
  "meb": "https://yyegm.meb.gov.tr/www/sss.php",
  "tb1": "https://tubitak.gov.tr/tr/burslar/lisansustu/arastirma-burs-programlari/2214-yurt-disi-doktora-sirasi-arastirma-burs-programi",
  "tb2": "https://tubitak.gov.tr/tr/burslar/doktora-sonrasi/arastirma-burs-programlari/2219-yurt-disi-doktora-sonrasi-arastirma-burs-programi",
  "csp": "https://fam.state.gov/FAM/09FAM/09FAM050201.html",
  "sb": "https://travel.state.gov/content/travel/en/us-visas/immigrate/returning-resident.html",
  "ier": "https://public-inspection.federalregister.gov/2024-16138.pdf",
  "parole": "https://www.uscis.gov/humanitarian/humanitarian_parole",
  "ref": "https://www.govinfo.gov/content/pkg/FR-2026-10-02/pdf/2026-20318.pdf",
  "cnmi": "https://www.govinfo.gov/content/pkg/FR-2020-05-14/pdf/2020-08524.pdf",
  "asylum": "https://www.uscis.gov/humanitarian/refugees-and-asylum/asylum",
  "follow": "https://www.uscis.gov/i-730",
  "si": "https://www.uscis.gov/working-in-the-united-states/special-immigrants/special-immigrant-juveniles",
  "vwp": "https://travel.state.gov/content/travel/en/us-visas/tourism-visit/visa-waiver-program.html",
  "aos": "https://www.uscis.gov/green-card/green-card-eligibility-categories",
  "scan": "https://travel.state.gov/en/newsroom/visas/2026/announcement-of-expanded-screening-and-vetting-for-visa-applicants.html",
  "dvform": "https://www.govinfo.gov/content/pkg/FR-2026-03-11/pdf/2026-04737.pdf",
  "rules": "https://www.ecfr.gov/current/title-22/chapter-I/subchapter-E/part-62",
  "legal": "https://www.govinfo.gov/content/pkg/COMPS-1376/pdf/COMPS-1376.pdf",
  "schoolExample": "https://www.grcc.edu/students-resources/admissions-student-services/apply-grcc/international/current-international-students/financial-requirements",
  "eslExample": "https://www.wichita.edu/admissions/international/intensive_english/estimatedexpenses.php",
  "swtExample": "https://www.iccpturkey.com/work-and-travel-maliyetleri-devami/",
  "eb5fees": "https://www.govinfo.gov/content/pkg/FR-2026-09-30/html/2026-20016.htm",
  "ciee": "https://www.ciee.org/partner/employers/host-interns-and-trainees/fee-disclosure"
};
const educationDescriptions = {
  "higherStudent": "Yükseköğretimde aktif öğrenci.",
  "schoolStudent": "Ortaöğretimde aktif öğrenci.",
  "secondaryDegree": "Lise mezunu veya dengi.",
  "bachelor": "Lisans veya üstü derece."
};
const availabilityLabels = {
  "standard": "Kategori mevcut",
  "paused": "Yeni kayıtlar durduruldu",
  "closed": "Başvuru kapalı",
  "domestic": "ABD içi işlem",
  "otherNationality": "Ek vatandaşlık/belge gerekir",
  "unconfirmed": "Türkiye için açık çağrı doğrulanmadı",
  "cycle": "Dönem ve kontenjan teyidi",
  "legacy": "Korunmuş veya tarihsel dosya",
  "invitation": "Davet veya resmî sevk gerekir",
  "case": "Dosyaya özel inceleme"
};
const planningProfiles = {
  "visit": {
    "consularFeeUsd": 185,
    "sevisFeeUsd": 0,
    "otherPlanningUsd": [
      50,
      350
    ],
    "planningMonths": [
      2,
      8
    ],
    "assumption": "Olağan, tek kişilik ziyaret dosyası; harç dışında evrak ve yerel ulaşım için örnek ödenek. Tedavi/seyahat finansmanı ayrıca belgelenir."
  },
  "crew": {
    "consularFeeUsd": 185,
    "sevisFeeUsd": 0,
    "otherPlanningUsd": [
      0,
      450
    ],
    "planningMonths": [
      0.5,
      4
    ],
    "assumption": "Görev ve belgeler hazır; ulaşım ve belge giderlerinin kimin üstlendiği değişir."
  },
  "school": {
    "consularFeeUsd": 185,
    "sevisFeeUsd": 350,
    "otherPlanningUsd": [
      34695,
      42245
    ],
    "planningMonths": [
      1,
      6
    ],
    "assumption": "Burs öncesi bir akademik yıl. GRCC 2026–27 ilanındaki standart ve yüksek maliyetli programlar örnektir; okulun I-20 tutarı belirleyicidir."
  },
  "language": {
    "consularFeeUsd": 185,
    "sevisFeeUsd": 350,
    "otherPlanningUsd": [
      7100,
      7100
    ],
    "planningMonths": [
      1,
      5
    ],
    "assumption": "Wichita State 2026–27 sekiz haftalık yoğun dil programı okul/yaşam örneği. Süre ve okul değişirse toplam yeniden hesaplanır."
  },
  "vocational": {
    "consularFeeUsd": 185,
    "sevisFeeUsd": 350,
    "otherPlanningUsd": [
      null,
      null
    ],
    "planningMonths": [
      1,
      6
    ],
    "assumption": "Meslek okulunun öğrenim ve geçim dökümü gerekir; uçuş eğitimi ile kısa meslek programları arasında tek temsilî maliyet yok."
  },
  "fundedF": {
    "consularFeeUsd": 185,
    "sevisFeeUsd": 350,
    "otherPlanningUsd": [
      0,
      1500
    ],
    "planningMonths": [
      1,
      6
    ],
    "assumption": "Yazılı tam bursun öğrenim ve ilk yıl yaşam giderlerini karşıladığı örnek; eksik finansman okul belgesinden eklenir."
  },
  "eTrade": {
    "consularFeeUsd": 315,
    "sevisFeeUsd": 0,
    "otherPlanningUsd": [
      null,
      null
    ],
    "planningMonths": [
      2,
      10
    ],
    "assumption": "Ticaret hacmi, mevcut işletme ve belge giderleri dosyaya bağlıdır. Ticaret hacmi kişisel başvuru harcı değildir."
  },
  "eInvest": {
    "consularFeeUsd": 315,
    "sevisFeeUsd": 0,
    "otherPlanningUsd": [
      null,
      null
    ],
    "planningMonths": [
      2,
      10
    ],
    "assumption": "Başvuru bütçesi işletmenin satın alma/kuruluş maliyetini ve fiilen taahhüt edilmiş riskteki sermayeyi kapsar. İşletme değerlemesi olmadan toplam belirlenemez."
  },
  "eStaff": {
    "consularFeeUsd": 315,
    "sevisFeeUsd": 0,
    "otherPlanningUsd": [
      100,
      1200
    ],
    "planningMonths": [
      2,
      10
    ],
    "assumption": "Uygun şirketin desteklediği tek çalışan; işletmenin yatırımı çalışana yüklenmez."
  },
  "petition": {
    "consularFeeUsd": 205,
    "sevisFeeUsd": 0,
    "otherPlanningUsd": [
      50,
      900
    ],
    "planningMonths": [
      2,
      10
    ],
    "assumption": "İşveren dilekçeyi hazırlamaya başladığında; normal veya hızlandırılmış işlem, kota mevsimi ve randevu sonucu değiştirir. İşveren harçları kişisel bütçe dışında."
  },
  "seasonal": {
    "consularFeeUsd": 205,
    "sevisFeeUsd": 0,
    "otherPlanningUsd": [
      0,
      450
    ],
    "planningMonths": [
      2,
      8
    ],
    "assumption": "İşverenin DOL ve dilekçe takvimiyle; işverenin üstlenmesi veya geri ödemesi gereken kalemlerde net kişisel gider daha düşük olabilir."
  },
  "dependent": {
    "consularFeeUsd": 185,
    "sevisFeeUsd": 0,
    "otherPlanningUsd": [
      40,
      700
    ],
    "planningMonths": [
      1,
      6
    ],
    "assumption": "Asıl dosya hazır kabul edilerek aile ferdinin ayrı işlemi. Asıl dosya bekleniyorsa o bekleyiş ayrıca eklenir."
  },
  "exchange": {
    "consularFeeUsd": 185,
    "sevisFeeUsd": 220,
    "otherPlanningUsd": [
      null,
      null
    ],
    "planningMonths": [
      2,
      9
    ],
    "assumption": "Özel J programında sponsor bedeli, burs ve sigorta sözleşmeye bağlı; muaf federal programlarda konsolosluk/SEVIS bedelleri sıfır olabilir."
  },
  "schoolJ": {
    "consularFeeUsd": 185,
    "sevisFeeUsd": 220,
    "otherPlanningUsd": [
      null,
      null
    ],
    "planningMonths": [
      2,
      12
    ],
    "assumption": "Sponsor desteği düşüldükten sonra okul ve geçim maliyeti; belirli federal programlarda harç muafiyeti olabilir."
  },
  "swt": {
    "consularFeeUsd": 185,
    "sevisFeeUsd": 35,
    "otherPlanningUsd": [
      3150,
      3150
    ],
    "planningMonths": [
      3,
      8
    ],
    "assumption": "ICCP Türkiye 2027 full placement 1 Ekim–15 Aralık 2026 örnek teklifi; uçak, başlangıç harçlığı, konaklama/depozito ayrıca bütçelenir."
  },
  "aupair": {
    "consularFeeUsd": 185,
    "sevisFeeUsd": 35,
    "otherPlanningUsd": [
      100,
      1400
    ],
    "planningMonths": [
      2,
      8
    ],
    "assumption": "Özel program, ailenin/sponsorun karşıladığı giderler sonrası örnek katılımcı bütçesi; sözleşme esas."
  },
  "official": {
    "consularFeeUsd": 0,
    "sevisFeeUsd": 0,
    "otherPlanningUsd": [
      0,
      250
    ],
    "planningMonths": [
      null,
      null
    ],
    "assumption": "Resmî görevde genellikle kurum karşılar; bireysel görev takvimine bağlı."
  },
  "relative": {
    "consularFeeUsd": 325,
    "sevisFeeUsd": 0,
    "otherPlanningUsd": [
      450,
      1900
    ],
    "planningMonths": [
      18,
      44
    ],
    "assumption": "Örnek tek kişilik konsolosluk dosyasında dilekçe, belgeler, sağlık ve kart giderleri; I-130, NVC ve Ankara mülakatı dahil. Sponsora ait tutar aile bütçesinden ödeniyorsa dahil."
  },
  "adoption": {
    "consularFeeUsd": 325,
    "sevisFeeUsd": 0,
    "otherPlanningUsd": [
      null,
      null
    ],
    "planningMonths": [
      null,
      null
    ],
    "assumption": "Ülke, mutat ikamet, evlat edinme makamları, aracı kurum ve mahkeme giderleri/süreleri belirleyicidir."
  },
  "preference": {
    "consularFeeUsd": 325,
    "sevisFeeUsd": 0,
    "otherPlanningUsd": [
      450,
      1900
    ],
    "planningMonths": [
      null,
      null
    ],
    "assumption": "Yeni dosyada toplam bekleme öncelik tarihine, sınıfa ve doğum ülkesine bağlı; bültendeki kesim tarihinden gelecek ay sayısı hesaplanamaz."
  },
  "fiance": {
    "consularFeeUsd": 265,
    "sevisFeeUsd": 0,
    "otherPlanningUsd": [
      500,
      1700
    ],
    "planningMonths": [
      10,
      26
    ],
    "assumption": "Örnek K dosyasında I-129F, sağlık/evrak ve mülakat; giriş sonrası evlilik/statü uyarlaması bütçesi ve süresi hariç."
  },
  "employment": {
    "consularFeeUsd": 345,
    "sevisFeeUsd": 0,
    "otherPlanningUsd": [
      350,
      1550
    ],
    "planningMonths": [
      8,
      30
    ],
    "assumption": "İşveren dilekçesi ve Ankara konsolosluk işlemi. Kullanılabilir numara varsayılır; sıra gerilerse bu senaryo geçersiz."
  },
  "self": {
    "consularFeeUsd": 345,
    "sevisFeeUsd": 0,
    "otherPlanningUsd": [
      1300,
      8500
    ],
    "planningMonths": [
      9,
      36
    ],
    "assumption": "Kendi I-140 dosyası, evrak, sağlık ve isteğe bağlı profesyonel hizmet için örnek aralık; kullanılabilir numara varsayımı."
  },
  "perm": {
    "consularFeeUsd": 345,
    "sevisFeeUsd": 0,
    "otherPlanningUsd": [
      350,
      1550
    ],
    "planningMonths": [
      24,
      60
    ],
    "assumption": "İşverenin ücret belirleme, işe alım, PERM, I-140, NVC ve mülakat aşamaları; ayrıca vize numarası beklenebilir. İşverene ait PERM gideri hariç."
  },
  "special": {
    "consularFeeUsd": 205,
    "sevisFeeUsd": 0,
    "otherPlanningUsd": [
      null,
      null
    ],
    "planningMonths": [
      null,
      null
    ],
    "assumption": "I-360 veya sınıfa özgü süreç, istisnalar, öncelik tarihi ve muafiyetler dosyaya göre."
  },
  "unboundedEB": {
    "consularFeeUsd": 345,
    "sevisFeeUsd": 0,
    "otherPlanningUsd": [
      null,
      null
    ],
    "planningMonths": [
      null,
      null
    ],
    "assumption": "Hizmetin tamamlanma tarihi, öncelik ve dilekçe dosyasına bağlı."
  },
  "investor": {
    "consularFeeUsd": 345,
    "sevisFeeUsd": 0,
    "otherPlanningUsd": [
      5000,
      90000
    ],
    "planningMonths": [
      null,
      null
    ],
    "assumption": "Yasal yatırım ayrıca eklenir; kalan tutar tek yatırımcı için model evrak, dilekçe, proje/idare ve danışmanlık giderleri. Vize numarası, proje ve dilekçe hızı belirleyici."
  },
  "gold": {
    "consularFeeUsd": 345,
    "sevisFeeUsd": 0,
    "otherPlanningUsd": [
      15000,
      18500
    ],
    "planningMonths": [
      null,
      null
    ],
    "assumption": "Kişisel katkıya DHS’nin 15.000 USD işlem bedeli ve olası ek bireysel giderler eklenir. Vize bulunabilirliği ayrıca gerekir."
  },
  "goldCorp": {
    "consularFeeUsd": 345,
    "sevisFeeUsd": 0,
    "otherPlanningUsd": [
      0,
      1600
    ],
    "planningMonths": [
      null,
      null
    ],
    "assumption": "Sponsorun çalışan başına 2 milyon USD ve 15.000 USD ödemesi kişisel bütçe dışında. Eş ve çocukların ayrı katkıları hariç."
  },
  "derivedIV": {
    "consularFeeUsd": null,
    "sevisFeeUsd": 0,
    "otherPlanningUsd": [
      null,
      null
    ],
    "planningMonths": [
      null,
      null
    ],
    "assumption": "Aile veya istihdam temeline, vize numarasına, asıl dosya durumuna ve katılma zamanına bağlı."
  },
  "grant": {
    "consularFeeUsd": 0,
    "sevisFeeUsd": 0,
    "otherPlanningUsd": [
      0,
      1400
    ],
    "planningMonths": [
      5,
      18
    ],
    "assumption": "Tam fonlu resmî değişim örneği; başvuranın karşılaması gereken belgeler ve yerel giderler. Takvim açık çağrıdan vize sonucuna. Bursun gerçek kapsamı esas."
  },
  "mobile": {
    "consularFeeUsd": null,
    "sevisFeeUsd": null,
    "otherPlanningUsd": [
      null,
      null
    ],
    "planningMonths": [
      3,
      14
    ],
    "assumption": "Hibe ve kurum belgelerine göre net okul, program ve yaşam gideri; okul ve vize takvimi birlikte değerlendirilir."
  },
  "lottery": {
    "consularFeeUsd": 330,
    "sevisFeeUsd": 0,
    "otherPlanningUsd": [
      400,
      1600
    ],
    "planningMonths": [
      null,
      null
    ],
    "assumption": "Seçilmiş bir asıl kişi için IV harcı, sağlık ve belgeler; 1 USD kayıt bedeli ayrıca. Başvuru kapalıyken işleyen sonuç takvimi yok."
  },
  "return": {
    "consularFeeUsd": 205,
    "sevisFeeUsd": 0,
    "otherPlanningUsd": [
      400,
      1600
    ],
    "planningMonths": [
      2,
      12
    ],
    "assumption": "DS-117 belirleme harcı 180 USD ayrıca; sağlık ve belgeler kişinin durumuna göre."
  },
  "unknown": {
    "consularFeeUsd": null,
    "sevisFeeUsd": null,
    "otherPlanningUsd": [
      null,
      null
    ],
    "planningMonths": [
      null,
      null
    ],
    "assumption": "Hukuki dayanak, belge türü, kurum ve dosya evresi bilinmeden karşılaştırılabilir toplam çıkarılamaz."
  }
};

function buildVisa(row) {
  const plan = planningProfiles[row.p || "unknown"];
  const consularFee = row.fee === undefined ? plan.consularFeeUsd : row.fee;
  const sevisFee = plan.sevisFeeUsd;
  const capital = row.capital || 0;
  const extraFee = row.p === "lottery" ? 1 : row.p === "return" ? 180 : 0;
  const known = capital + (consularFee ?? 0) + (sevisFee ?? 0) + extraFee;
  const costRange = plan.otherPlanningUsd.map(value => value === null ? null : known + value);
  if (row.p === "seasonal") costRange[0] = 0; // İşverenin peşin ödemesi mümkündür.
  const mid = ([low, high]) => low === null || high === null ? null : (low + high) / 2;
  const band = usd => usd === null ? "Belirsiz" : usd < 2000 ? "Düşük" : usd <= 10000 ? "Orta" : "Yüksek";
  const state = row.state || "standard";
  const blocksNewApplication = ["closed", "paused", "domestic"].includes(state);
  const activeTime = blocksNewApplication ? [null, null] : plan.planningMonths;
  const sourceKeys = (row.refs || "niv").split(" ");
  sourceKeys.push("fees");
  if (row.p === "petition" || row.p === "self" || row.p === "perm") sourceKeys.push("usc", "filing");
  if (["visit","crew","school","language","petition","fundedF","exchange","swt","aupair","dependent"].includes(row.p)) sourceKeys.push("wait");
  if (["relative","preference","employment","derivedIV","self","perm","special","investor"].includes(row.p)) sourceKeys.push("queue","vb");
  const urls = [...new Set(sourceKeys.map(key => sourceRegistry[key]))];
  if (row.extraSource) urls.push(row.extraSource);
  const facts = {basis:row.rule};
  if (state === "otherNationality") facts.extraNationality = "Türk pasaportuna ek olarak bu yolun kabul ettiği vatandaşlık veya belge doğrulandı.";
  facts.documents = row.doc || "Bu sınıf için gerekli belgeler, varsa dilekçe, kabul, sponsor veya davet ve güncel kurum talimatları dosyada doğrulandı.";
  facts.review = "Seyahat amacı, kişisel giriş engelleri, gerekli istisnalar ve bu dosyaya uygulanacak tüm özel koşullar incelendi.";
  if (["cycle","legacy","invitation","case"].includes(state)) facts.access = "Bu dönemde kişiye açık kontenjan, davet, korunmuş eski dosya veya özel yasal erişim dayanağı doğrulandı.";
  if (row.lang && !row.minLanguage) facts.language = row.lang + ". İstenen sınav, dil yeterliği veya geçerli muafiyet doğrulandı.";
  if (["employment","self","perm","special","preference","investor","gold","goldCorp","unboundedEB","derivedIV"].includes(row.p)) facts.priority = "Dosyanın öncelik tarihi, yüklenebilirlik ülkesi ve uygun bülten tablosu/numara durumu bu işlem aşaması için kontrol edildi.";
  return {
    id:row.id, name:row.name, visaCode:row.code, kind:row.kind, checkedOn:catalogInfo.asOf,
    availability:state, ...(row.notice ? {notice:row.notice} : {}),
    eligibility:{
      age:{min:row.age?.[0] ?? null, max:row.age?.[1] ?? null, detail:row.ageText || (row.age ? "İlgili kesim tarihinde tamamlanmış yaş, sınırlar dahil." : "Genel bir sayısal sınır atanmadı. Aile/çocuk tanımı ve özel yaş kuralları aşağıdaki şartlarda.")},
      english:{minimum:row.minLanguage || null, rule:row.lang || "Genel dil barajı yok", suggested:row.recommended || null},
      education:{rule:row.edu || "any", detail:row.education || (row.edu ? educationDescriptions[row.edu] : "Genel diploma/öğrencilik barajı yok; sınıfa özgü mesleki koşullar geçerli.")},
      facts
    },
    cost:{currency:"USD",consularFeeUsd:consularFee,sevisFeeUsd:sevisFee,otherSpecifiedFeeUsd:extraFee,capitalUsd:capital || null,
      // Yalnızca kanuni/kurucu sermaye veya katkı tutarını değişmez taban say.
      bindingFloorUsd:capital + (row.p === "gold" ? 15000 : 0),
      planningRangeUsd:costRange,planningMidpointUsd:mid(costRange),planningBand:band(mid(costRange)),observedMeanUsd:null,
      assumption:plan.assumption},
    time:{unit:"ay",planningRangeMonths:activeTime,planningMidpointMonths:mid(activeTime),observedMeanMonths:null,
      detail:row.timeNote || (blocksNewApplication ? "Bu profille yeni başvuru için işlem takvimi yok." : plan.assumption)},
    note:row.note || null, sources:urls
  };
}

const visaData = [
  {
    "id": "B-1",
    "name": "Geçici iş ziyareti",
    "code": "B-1",
    "kind": "Geçici vize",
    "rule": "Toplantı, sözleşme görüşmesi veya izin verilen başka bir iş faaliyeti; seyahat geçici, masraflar karşılanabilir ve ABD’de yerel istihdam yok.",
    "refs": "b",
    "p": "visit"
  },
  {
    "id": "B-2",
    "name": "Turizm, yakın ziyareti veya tedavi",
    "code": "B-2",
    "kind": "Geçici vize",
    "rule": "Geçici ziyaret, geri dönüş planı ve yeterli finansman. Tedavide ayrıca hekim teşhisi, ABD’de kabul ve maliyet belgeleri.",
    "refs": "b",
    "p": "visit",
    "note": "Tedavi için hastane/hekimin yazılı tahmini ve konaklama bütçesi ayrıca gerekir."
  },
  {
    "id": "B-1/B-2",
    "name": "Birleşik iş ve ziyaret vizesi",
    "code": "B-1/B-2",
    "kind": "Geçici vize",
    "rule": "İş veya ziyaret amacı B kapsamına giriyor; geçici kalış, dönüş ve finansman belgelenebiliyor.",
    "refs": "b",
    "p": "visit",
    "note": "Türk vatandaşlığına ait karşılıklılık tablosu normalde çok girişli 120 ay geçerlilik gösterir. ABD’de izinli kalış her girişte I-94 ile belirlenir."
  },
  {
    "id": "B-1-DOM",
    "name": "B-1 kapsamında ev hizmetlisi",
    "code": "B-1",
    "kind": "Geçici vize",
    "rule": "İşverenin uygun statüsü, yurt dışı istihdam ilişkisi, ücret, sözleşme ve işverenin ödeme yükümlülükleri incelenir.",
    "refs": "b niv",
    "p": "visit",
    "extraSource": "https://fam.state.gov/FAM/09FAM/09FAM040202.html"
  },
  {
    "id": "C-1",
    "name": "ABD üzerinden transit",
    "code": "C-1",
    "kind": "Geçici vize",
    "rule": "Başka ülkeye derhal ve sürekli transit; devam yolculuğu ve hedef ülkeye giriş hakkı.",
    "refs": "crew niv",
    "p": "crew"
  },
  {
    "id": "D",
    "name": "Hava veya deniz mürettebatı",
    "code": "D",
    "kind": "Geçici vize",
    "rule": "Uluslararası taşıtta olağan işletme görevi, taşıt ve ayrılış planı.",
    "refs": "crew niv",
    "p": "crew"
  },
  {
    "id": "C-1/D",
    "name": "Transit ve mürettebat",
    "code": "C-1/D",
    "kind": "Geçici vize",
    "rule": "ABD’den geçerek görev yapılacak hava veya deniz taşıtına katılma.",
    "refs": "crew niv",
    "p": "crew"
  },
  {
    "id": "C-4",
    "name": "Sıvı yük aktarma gemisine transit",
    "code": "C-4",
    "kind": "Geçici vize",
    "rule": "Dış ticarette gemiden gemiye sıvı yük aktaran gemiye katılmak üzere transit.",
    "refs": "crew niv",
    "p": "crew"
  },
  {
    "id": "D-3",
    "name": "Gemiden gemiye sıvı yük aktarımı",
    "code": "D-3",
    "kind": "Geçici vize",
    "rule": "Uygun mürettebat ve en çok 180 günlük aktarma görevi.",
    "refs": "crew niv",
    "p": "crew"
  },
  {
    "id": "C-4/D-3",
    "name": "Yük aktarma mürettebatı ve transit",
    "code": "C-4/D-3",
    "kind": "Geçici vize",
    "rule": "C-4 transit amacı ile D-3 mürettebat görevinin ikisini de belgeleme.",
    "refs": "crew niv",
    "p": "crew"
  },
  {
    "id": "F-1",
    "name": "Akademik eğitim",
    "code": "F-1",
    "kind": "Geçici vize",
    "rule": "SEVP onaylı okuldan tam zamanlı programa kabul, I-20, finansman ve geçici eğitim amacı. Devlet ilkokulu/yetişkin eğitimi kısıtları ve devlet lisesinde 12 ay/tam maliyet kuralı incelenir.",
    "refs": "f sevis study schoolExample",
    "p": "school",
    "education": "Kabul düzeyini okul belirler.",
    "lang": "Okul belirler"
  },
  {
    "id": "F-1-ESL",
    "name": "Yoğun İngilizce dil eğitimi",
    "code": "F-1",
    "kind": "Geçici vize",
    "rule": "Akredite ve SEVP onaylı dil programından I-20, tam zamanlı eğitim ve finansman. Başlangıç sınıfının kabul şartları kontrol edilir.",
    "refs": "f sevis study eslExample",
    "p": "language"
  },
  {
    "id": "M-1",
    "name": "Mesleki veya teknik eğitim",
    "code": "M-1",
    "kind": "Geçici vize",
    "rule": "SEVP onaylı mesleki okuldan I-20; tam zamanlı program, tüm eğitim ve yaşam giderlerine kaynak, geçici kalış.",
    "refs": "f sevis study",
    "p": "vocational",
    "lang": "Okul belirler",
    "education": "Programın giriş yeterliliği."
  },
  {
    "id": "E-1",
    "name": "Anlaşmalı tüccar",
    "code": "E-1",
    "kind": "Geçici vize",
    "rule": "Kayda değer, sürekli uluslararası ticaret; işletmenin uluslararası ticaret hacminin %50’den fazlası ABD ile Türkiye arasında. İşletmenin anlaşma ülkesine ait milliyeti ve başvuranın uygun milliyeti; yatırım yoluyla edinilen vatandaşlıkta uygulanıyorsa üç yıllık ikamet şartı; statü bitiminde ayrılma niyeti.",
    "refs": "e treaty tr",
    "p": "eTrade"
  },
  {
    "id": "E-2",
    "name": "Anlaşmalı yatırımcı",
    "code": "E-2",
    "kind": "Geçici vize",
    "rule": "Gerçek, faal ve marjinal olmayan işletmeye risk altında, orantılı ve önemli sermaye; işletmeyi geliştirme/yönetme. Kanunda sabit dolar eşiği yok. İşletmenin anlaşma ülkesine ait milliyeti ve başvuranın uygun milliyeti; yatırım yoluyla edinilen vatandaşlıkta uygulanıyorsa üç yıllık ikamet şartı; statü bitiminde ayrılma niyeti.",
    "refs": "e treaty tr",
    "p": "eInvest"
  },
  {
    "id": "E-1-EMP",
    "name": "E-1 işletmesinde çalışan",
    "code": "E-1",
    "kind": "Geçici vize",
    "rule": "Anlaşma işletmesi ve aynı milliyetten yönetici, denetleyici veya esaslı niteliklere sahip çalışan. Kişisel yatırım gerekmez. İşletmenin anlaşma ülkesine ait milliyeti ve başvuranın uygun milliyeti; yatırım yoluyla edinilen vatandaşlıkta uygulanıyorsa üç yıllık ikamet şartı; statü bitiminde ayrılma niyeti.",
    "refs": "e treaty tr",
    "p": "eStaff"
  },
  {
    "id": "E-2-EMP",
    "name": "E-2 işletmesinde çalışan",
    "code": "E-2",
    "kind": "Geçici vize",
    "rule": "Anlaşma işletmesi ve aynı milliyetten yönetici, denetleyici veya esaslı niteliklere sahip çalışan. Kişisel yatırım gerekmez. İşletmenin anlaşma ülkesine ait milliyeti ve başvuranın uygun milliyeti; yatırım yoluyla edinilen vatandaşlıkta uygulanıyorsa üç yıllık ikamet şartı; statü bitiminde ayrılma niyeti.",
    "refs": "e treaty tr",
    "p": "eStaff"
  },
  {
    "id": "H-1B",
    "name": "Uzmanlık mesleği",
    "code": "H-1B",
    "kind": "Geçici vize",
    "rule": "Belirli ve doğrudan ilişkili uzmanlıkta lisans veya denk eğitim/deneyim, uygun iş ve ücret, LCA, işveren dilekçesi. Kotaya tabi dosyada kayıt/seçim, muaf işverende muafiyet. FY2027 kotasında ağırlıklı seçim sistemi uygulanır.",
    "refs": "work h1 hc dol",
    "p": "petition",
    "education": "İlgili lisans veya denklik sağlayan eğitim/deneyim.",
    "note": "18 Eylül 2026 başkanlık bildirisi kısıtlamayı uzattı. 30 Eylül 2026 Global Nurse Force kararı, 100.000 USD ödeme için kurum uygulamasını durdurdu. İşverenin başvuru tarihindeki güncel mahkeme ve USCIS uygulaması kontrol edilir; kişisel MRV giderine bu tutar eklenmez.",
    "timeNote": "Kotaya tabi yeni dosyada bir sonraki kayıt dönemi ve işe başlama takvimi ayrıca beklenebilir."
  },
  {
    "id": "H-1B2",
    "name": "Savunma Bakanlığı Ar-Ge projesi",
    "code": "H-1B",
    "kind": "Geçici vize",
    "rule": "Belirlenmiş ortak DoD araştırma/geliştirme veya ortak üretim projesi, uygun uzmanlık ve işveren dilekçesi.",
    "refs": "work niv",
    "p": "petition",
    "education": "Lisans düzeyi uzmanlık veya denkliği."
  },
  {
    "id": "H-1B3",
    "name": "Seçkin moda modeli",
    "code": "H-1B",
    "kind": "Geçici vize",
    "rule": "Meslekte seçkinlik, uygun ABD görevi, LCA ve işveren dilekçesi.",
    "refs": "work",
    "p": "petition"
  },
  {
    "id": "H-2A",
    "name": "Geçici tarım işçisi",
    "code": "H-2A",
    "kind": "Geçici vize",
    "rule": "Mevsimlik/geçici tarım ihtiyacı, DOL sertifikası ve ABD’li işveren dilekçesi; ücret ve ulaşım geri ödemeleri işverene göre belirlenir.",
    "refs": "work dol",
    "p": "seasonal",
    "note": "İşçinin işe alım ücreti ödememesi ve işverenin vize/seyahat giderlerini karşılama veya geri ödeme yükümlülüğü ayrıca dikkate alınır."
  },
  {
    "id": "H-2B",
    "name": "Geçici tarım dışı işçi",
    "code": "H-2B",
    "kind": "Geçici vize",
    "rule": "ABD’li işverenin geçici ihtiyacı, DOL sertifikası, I-129 ve geçerli kota veya muafiyet.",
    "refs": "work dol",
    "p": "seasonal",
    "note": "İşçinin işe alım ücreti ödememesi ve işverenin vize/seyahat giderlerini karşılama veya geri ödeme yükümlülüğü ayrıca dikkate alınır."
  },
  {
    "id": "H-3",
    "name": "İşbaşı eğitimi veya özel eğitim değişimi",
    "code": "H-3",
    "kind": "Geçici vize",
    "rule": "Kendi ülkesinde edinilemeyen uygun eğitim veya özel eğitim değişim programı, belgeli plan ve ABD’li dilekçe sahibi. Olağan istihdam sınırlıdır.",
    "refs": "work",
    "p": "petition"
  },
  {
    "id": "L-1A",
    "name": "Şirket içi yönetici transferi",
    "code": "L-1A",
    "kind": "Geçici vize",
    "rule": "İlgili şirketler, son üç yılda yurtdışında kesintisiz en az bir yıl nitelikli çalışma ve ABD’de yönetici/üst yönetici görevi.",
    "refs": "work niv",
    "p": "petition"
  },
  {
    "id": "L-1B",
    "name": "Şirket içi uzman transferi",
    "code": "L-1B",
    "kind": "Geçici vize",
    "rule": "Nitelikli şirket bağı, son üç yılda yurtdışında bir kesintisiz yıl ve ABD’de şirkete özgü uzmanlık bilgisi gerektiren görev.",
    "refs": "work niv",
    "p": "petition"
  },
  {
    "id": "O-1A",
    "name": "Bilim, eğitim, iş veya sporda olağanüstü yetenek",
    "code": "O-1A",
    "kind": "Geçici vize",
    "rule": "Sürekli ulusal/uluslararası tanınırlık, uzmanlık alanında ABD faaliyeti, ABD’li işveren veya acente dilekçesi.",
    "refs": "work niv",
    "p": "petition"
  },
  {
    "id": "O-1B",
    "name": "Sanat, sinema veya televizyonda olağanüstü yetenek/başarı",
    "code": "O-1B",
    "kind": "Geçici vize",
    "rule": "İlgili sanat ya da sinema/TV standardına göre başarı kanıtı, proje ve ABD’li işveren/acente.",
    "refs": "work niv",
    "p": "petition"
  },
  {
    "id": "O-2",
    "name": "O-1 için zorunlu destek personeli",
    "code": "O-2",
    "kind": "Geçici vize",
    "rule": "Sanat, sinema/TV veya spor performansına özgü gerekli deneyim ve beceri; uygun O-1 ve destek dilekçesi.",
    "refs": "work niv",
    "p": "petition"
  },
  {
    "id": "P-1A",
    "name": "Sporcu veya spor takımı",
    "code": "P-1A",
    "kind": "Geçici vize",
    "rule": "Uygulanabilir P-1A sporcu alt grubunun ölçütleri, uygun müsabaka/lig ve dilekçe.",
    "refs": "work niv",
    "p": "petition"
  },
  {
    "id": "P-1B",
    "name": "Tanınmış eğlence grubu üyesi",
    "code": "P-1B",
    "kind": "Geçici vize",
    "rule": "Uluslararası tanınırlığı olan grubun performansı, üyelik geçmişi veya istisnası ve dilekçe.",
    "refs": "work niv",
    "p": "petition"
  },
  {
    "id": "P-2",
    "name": "Karşılıklı değişim sanatçısı",
    "code": "P-2",
    "kind": "Geçici vize",
    "rule": "Kurumlar arası karşılıklı değişim anlaşması, uygun sanatçı ve dilekçe.",
    "refs": "work niv",
    "p": "petition"
  },
  {
    "id": "P-3",
    "name": "Kültüre özgü sanat programı",
    "code": "P-3",
    "kind": "Geçici vize",
    "rule": "Kültüre özgü sanatın icrası, öğretilmesi veya tanıtımı, program kanıtı ve dilekçe.",
    "refs": "work niv",
    "p": "petition"
  },
  {
    "id": "P-SUPPORT",
    "name": "P grupları için zorunlu destek",
    "code": "P-1S/P-2S/P-3S",
    "kind": "Geçici vize",
    "rule": "P-1, P-2 veya P-3 etkinliğine ayrılmaz katkı, gerekli beceri ve ayrı destek dilekçesi.",
    "refs": "work niv",
    "p": "petition"
  },
  {
    "id": "Q-1",
    "name": "Uluslararası kültürel değişim çalışanı",
    "code": "Q-1",
    "kind": "Geçici vize",
    "rule": "Onaylanabilir kültürel değişim programı, halka kültürü aktarma becerisi ve işveren dilekçesi.",
    "refs": "work niv",
    "p": "petition",
    "age": [
      18,
      null
    ]
  },
  {
    "id": "R-1",
    "name": "Geçici din görevlisi",
    "code": "R-1",
    "kind": "Geçici vize",
    "rule": "Aynı mezhepte önceki iki yıl üyelik, ABD’de nitelikli kuruluşta haftada ortalama en az 20 saat uygun din görevi ve dilekçe.",
    "refs": "work niv",
    "p": "petition"
  },
  {
    "id": "I",
    "name": "Yabancı basın temsilcisi",
    "code": "I",
    "kind": "Geçici vize",
    "rule": "Yabancı haber kuruluşunun gazetecilik/bilgilendirme faaliyeti, istihdam ve yabancı merkezle bağ.",
    "refs": "niv scan",
    "p": "crew"
  },
  {
    "id": "CW-1",
    "name": "Kuzey Mariana Adaları geçici işçisi",
    "code": "CW-1",
    "kind": "Geçici vize",
    "rule": "Yalnız CNMI’de çalışmak için uygun iş, CW dilekçesi, DOL işlemi ve kota; ABD ana karasında çalışma için kullanılamaz.",
    "refs": "cnmi dol",
    "p": "petition",
    "fee": 205
  },
  {
    "id": "E-2C",
    "name": "CNMI geçiş yatırımcısı",
    "code": "E-2C (asıl ve uygun aile)",
    "kind": "Geçici vize",
    "rule": "Eski CNMI yatırımcı iznine dayanan geçiş rejiminde korunmuş uygun dosya ve süresi içinde ilk başvuru gerekir.",
    "refs": "cnmi",
    "p": "eStaff",
    "state": "legacy"
  },
  {
    "id": "J-1-SWT",
    "name": "Summer Work Travel",
    "code": "J-1",
    "kind": "Değişim vizesi",
    "rule": "ABD dışındaki akredite bir yükseköğretim kurumunda örgün, tam zamanlı öğrenim, tamamlanmış en az bir dönem ve Türk pasaportuyla girişten önce ayarlanmış uygun iş.",
    "p": "swt",
    "lang": "Sponsor değerlendirir",
    "recommended": "Orta",
    "refs": "j rules sevis swtExample",
    "extraSource": "https://j1visa.state.gov/programs/summer-work-travel/",
    "edu": "higherStudent",
    "education": "Aktif, örgün yükseköğretim öğrencisi.",
    "doc": "Yetkili sponsor DS-2019 düzenledi, faaliyet, finansman, sigorta ve dile ilişkin sponsor şartları belgeli; varsa INA 212(e) koşulu incelendi."
  },
  {
    "id": "J-1-AU-PAIR",
    "name": "Au pair",
    "code": "J-1",
    "kind": "Değişim vizesi",
    "rule": "Ev sahibi aileyle eşleşme, konuşma İngilizcesi, lise diploması veya dengi, uygun sağlık ve geçmiş kontrolleri; yaş program kabulünde.",
    "p": "aupair",
    "lang": "Sponsor değerlendirir",
    "recommended": "Orta",
    "refs": "j rules sevis",
    "extraSource": "https://j1visa.state.gov/programs/au-pair/",
    "age": [
      18,
      26
    ],
    "edu": "secondaryDegree",
    "education": "Lise diploması veya üstü.",
    "doc": "Yetkili sponsor DS-2019 düzenledi, faaliyet, finansman, sigorta ve dile ilişkin sponsor şartları belgeli; varsa INA 212(e) koşulu incelendi."
  },
  {
    "id": "J-1-CAMP",
    "name": "Kamp danışmanı",
    "code": "J-1",
    "kind": "Değişim vizesi",
    "rule": "Gençlik çalışanı, öğretmen, öğrenci veya özel becerili kişi olarak uygun kamp görevi ve iletişim için yeterli İngilizce.",
    "p": "aupair",
    "lang": "Sponsor değerlendirir",
    "recommended": "Orta",
    "refs": "j rules sevis",
    "extraSource": "https://j1visa.state.gov/programs/camp-counselor/",
    "age": [
      18,
      null
    ],
    "doc": "Yetkili sponsor DS-2019 düzenledi, faaliyet, finansman, sigorta ve dile ilişkin sponsor şartları belgeli; varsa INA 212(e) koşulu incelendi."
  },
  {
    "id": "J-1-INTERN",
    "name": "Stajyer",
    "code": "J-1",
    "kind": "Değişim vizesi",
    "rule": "ABD dışında diploma/sertifika veren yükseköğretim kurumunda güncel kayıt veya program başlangıcından önceki 12 ayda mezuniyet. DS-7002 eğitim planı.",
    "p": "exchange",
    "lang": "Sponsor değerlendirir",
    "recommended": "Orta",
    "refs": "j rules sevis ciee",
    "extraSource": "https://j1visa.state.gov/programs/intern/",
    "education": "Yükseköğretim öğrencisi veya son 12 ayda ilgili mezun.",
    "doc": "Yetkili sponsor DS-2019 düzenledi, faaliyet, finansman, sigorta ve dile ilişkin sponsor şartları belgeli; varsa INA 212(e) koşulu incelendi.",
    "note": "CIEE örnek sağlayıcı tavanı 5.981 USD. Türkiye için yayımlanmış sağlayıcı tavanıdır. Paket içeriğindeki kalemleri ikinci kez eklemeyin."
  },
  {
    "id": "J-1-TRAINEE",
    "name": "Mesleki gelişim",
    "code": "J-1",
    "kind": "Değişim vizesi",
    "rule": "Yurt dışı yükseköğretim diploma/mesleki sertifikası ve ilgili alanda ABD dışında en az bir yıl deneyim veya ABD dışında aynı alanda beş yıl deneyim. DS-7002.",
    "p": "exchange",
    "lang": "Sponsor değerlendirir",
    "recommended": "Orta",
    "refs": "j rules sevis ciee",
    "extraSource": "https://j1visa.state.gov/programs/trainee/",
    "education": "İlgili diploma/sertifika ve deneyim veya beş yıllık deneyim.",
    "doc": "Yetkili sponsor DS-2019 düzenledi, faaliyet, finansman, sigorta ve dile ilişkin sponsor şartları belgeli; varsa INA 212(e) koşulu incelendi.",
    "note": "CIEE örnek sağlayıcı tavanı 6.785 USD. Türkiye için yayımlanmış sağlayıcı tavanıdır. Paket içeriğindeki kalemleri ikinci kez eklemeyin."
  },
  {
    "id": "J-1-SECONDARY",
    "name": "Lise değişimi",
    "code": "J-1",
    "kind": "Değişim vizesi",
    "rule": "Başlangıçta 15–18 yıl 6 ay aralığı VEYA en fazla 11 yıllık ilk/ortaöğrenimi tamamlama ölçütü; önceki ABD F/J okul/değişim geçmişi ve yerleştirme sınırlamaları.",
    "p": "exchange",
    "lang": "Sponsor değerlendirir",
    "recommended": "Orta",
    "refs": "j rules sevis",
    "extraSource": "https://j1visa.state.gov/programs/secondary-school-student/",
    "education": "İlk/orta öğrenimde tamamlanan yıl sayısı ve sponsor incelemesi.",
    "ageText": "15–18 yıl 6 ay veya eğitim yılı alternatifi; salt yaşla elenmez.",
    "doc": "Yetkili sponsor DS-2019 düzenledi, faaliyet, finansman, sigorta ve dile ilişkin sponsor şartları belgeli; varsa INA 212(e) koşulu incelendi.",
    "edu": "schoolStudent"
  },
  {
    "id": "J-1-COLLEGE",
    "name": "Üniversite öğrencisi veya öğrenci stajyeri",
    "code": "J-1",
    "kind": "Değişim vizesi",
    "rule": "Uygun yükseköğretim kabulü; program sözleşmesi veya nitelikli finansman gibi yasal dayanak; öğrenci stajında ilgili yabancı diploma programı ve eğitim planı.",
    "p": "schoolJ",
    "lang": "Sponsor değerlendirir",
    "recommended": "Orta",
    "refs": "j rules sevis",
    "extraSource": "https://j1visa.state.gov/programs/college-and-university-student/",
    "education": "Kabul veya öğrenci stajyerinin aktif diploma programı.",
    "doc": "Yetkili sponsor DS-2019 düzenledi, faaliyet, finansman, sigorta ve dile ilişkin sponsor şartları belgeli; varsa INA 212(e) koşulu incelendi."
  },
  {
    "id": "J-1-TEACHER",
    "name": "Öğretmen",
    "code": "J-1",
    "kind": "Değişim vizesi",
    "rule": "Lisans dengi, öğretmenlik yetkinliği, en az iki yıllık ilgili deneyim, çalışılan okul veya alternatif yeni derece koşulu ve ev sahibi eyalet yeterlilikleri.",
    "p": "exchange",
    "lang": "Sponsor değerlendirir",
    "recommended": "Orta",
    "refs": "j rules sevis",
    "extraSource": "https://j1visa.state.gov/programs/teacher/",
    "edu": "bachelor",
    "education": "Lisans veya ABD lisansına denk derece.",
    "doc": "Yetkili sponsor DS-2019 düzenledi, faaliyet, finansman, sigorta ve dile ilişkin sponsor şartları belgeli; varsa INA 212(e) koşulu incelendi."
  },
  {
    "id": "J-1-PHYSICIAN",
    "name": "Hekim değişimi",
    "code": "J-1",
    "kind": "Değişim vizesi",
    "rule": "Klinik lisansüstü eğitimde uygun tıp diploması, sınavlar, ECFMG/Intealth sponsorluğu ve ihtiyaç yazısı. Klinik dışı araştırmanın sponsoru ve kapsamı ayrıca belirlenir.",
    "p": "exchange",
    "lang": "Sponsor değerlendirir",
    "recommended": "Orta",
    "refs": "j rules sevis",
    "extraSource": "https://j1visa.state.gov/programs/physician/",
    "education": "Tıp mezunu; klinik görev için gerekli belgeler.",
    "doc": "Yetkili sponsor DS-2019 düzenledi, faaliyet, finansman, sigorta ve dile ilişkin sponsor şartları belgeli; varsa INA 212(e) koşulu incelendi."
  },
  {
    "id": "J-1-PROF",
    "name": "Profesör",
    "code": "J-1",
    "kind": "Değişim vizesi",
    "rule": "Uygun ev sahibi kurumda öğretim/araştırma, kadrolu sürekli pozisyon kısıtı ve önceki J programlarına ilişkin tekrar katılım kuralları.",
    "p": "exchange",
    "lang": "Sponsor değerlendirir",
    "recommended": "Orta",
    "refs": "j rules sevis",
    "extraSource": "https://j1visa.state.gov/programs/professor/",
    "doc": "Yetkili sponsor DS-2019 düzenledi, faaliyet, finansman, sigorta ve dile ilişkin sponsor şartları belgeli; varsa INA 212(e) koşulu incelendi."
  },
  {
    "id": "J-1-RESEARCH",
    "name": "Araştırmacı",
    "code": "J-1",
    "kind": "Değişim vizesi",
    "rule": "Ev sahibi kurumda uygun araştırma ve geçmiş J statüsüne ilişkin 12/24 aylık katılım kısıtları veya istisna.",
    "p": "exchange",
    "lang": "Sponsor değerlendirir",
    "recommended": "Orta",
    "refs": "j rules sevis",
    "extraSource": "https://j1visa.state.gov/programs/research-scholar/",
    "doc": "Yetkili sponsor DS-2019 düzenledi, faaliyet, finansman, sigorta ve dile ilişkin sponsor şartları belgeli; varsa INA 212(e) koşulu incelendi."
  },
  {
    "id": "J-1-SHORT",
    "name": "Kısa süreli akademisyen",
    "code": "J-1",
    "kind": "Değişim vizesi",
    "rule": "Kısa süreli araştırma, ders veya danışmanlık; uygun akademik profil ve davet.",
    "p": "exchange",
    "lang": "Sponsor değerlendirir",
    "recommended": "Orta",
    "refs": "j rules sevis",
    "extraSource": "https://j1visa.state.gov/programs/short-term-scholar/",
    "doc": "Yetkili sponsor DS-2019 düzenledi, faaliyet, finansman, sigorta ve dile ilişkin sponsor şartları belgeli; varsa INA 212(e) koşulu incelendi."
  },
  {
    "id": "J-1-SPECIALIST",
    "name": "Uzman",
    "code": "J-1",
    "kind": "Değişim vizesi",
    "rule": "Uzman bilgi/beceri, gözlem, danışmanlık veya gösterim amacıyla ev sahibi kurum ve uygun pozisyon.",
    "p": "exchange",
    "lang": "Sponsor değerlendirir",
    "recommended": "Orta",
    "refs": "j rules sevis",
    "extraSource": "https://j1visa.state.gov/programs/specialist/",
    "doc": "Yetkili sponsor DS-2019 düzenledi, faaliyet, finansman, sigorta ve dile ilişkin sponsor şartları belgeli; varsa INA 212(e) koşulu incelendi."
  },
  {
    "id": "J-1-GOV",
    "name": "Kamu ziyaretçisi",
    "code": "J-1",
    "kind": "Değişim vizesi",
    "rule": "Yetkili ABD kamu kurumunun seçimi ve geçerli değişim programında uzmanlık ziyareti.",
    "p": "exchange",
    "lang": "Sponsor değerlendirir",
    "recommended": "Orta",
    "refs": "j rules sevis",
    "extraSource": "https://j1visa.state.gov/programs/government-visitor/",
    "doc": "Yetkili sponsor DS-2019 düzenledi, faaliyet, finansman, sigorta ve dile ilişkin sponsor şartları belgeli; varsa INA 212(e) koşulu incelendi."
  },
  {
    "id": "J-1-INTL",
    "name": "Uluslararası ziyaretçi / IVLP",
    "code": "J-1",
    "kind": "Değişim vizesi",
    "rule": "ABD Dışişleri Bakanlığı seçimi/daveti, liderlik profili ve resmî program; IVLP adaylığı davetle yürür.",
    "p": "grant",
    "lang": "Program ve varsa tercüman düzeni belirler",
    "recommended": "Orta",
    "refs": "j rules sevis",
    "extraSource": "https://j1visa.state.gov/programs/international-visitor/",
    "state": "invitation",
    "doc": "Yetkili sponsor DS-2019 düzenledi, faaliyet, finansman, sigorta ve dile ilişkin sponsor şartları belgeli; varsa INA 212(e) koşulu incelendi."
  },
  {
    "id": "F-2",
    "name": "F-1 öğrenci ailesi",
    "code": "F-2",
    "kind": "Türev vize",
    "rule": "Asıl kişiyle yasal eşlik veya 21 yaş altı evlenmemiş çocuk ilişkisi; eşlere çocuk yaş sınırı uygulanmaz. F-1 ve bağımlıya ait I-20.",
    "p": "dependent",
    "fee": 185,
    "refs": "niv tr"
  },
  {
    "id": "M-2",
    "name": "M-1 öğrenci ailesi",
    "code": "M-2",
    "kind": "Türev vize",
    "rule": "Asıl kişiyle yasal eşlik veya 21 yaş altı evlenmemiş çocuk ilişkisi; eşlere çocuk yaş sınırı uygulanmaz. M-1 ve bağımlıya ait I-20.",
    "p": "dependent",
    "fee": 185,
    "refs": "niv tr"
  },
  {
    "id": "J-2",
    "name": "J-1 değişim katılımcısı ailesi",
    "code": "J-2",
    "kind": "Türev vize",
    "rule": "Asıl kişiyle yasal eşlik veya 21 yaş altı evlenmemiş çocuk ilişkisi; eşlere çocuk yaş sınırı uygulanmaz. Bağımlı DS-2019 ve uygun sponsor; au pair, kamp danışmanı, lise değişimi ve Summer Work Travel kategorileri J-2 vermez.",
    "p": "dependent",
    "fee": 185,
    "refs": "j2 tr"
  },
  {
    "id": "H-4",
    "name": "H çalışanı veya kursiyerin ailesi",
    "code": "H-4",
    "kind": "Türev vize",
    "rule": "Asıl kişiyle yasal eşlik veya 21 yaş altı evlenmemiş çocuk ilişkisi; eşlere çocuk yaş sınırı uygulanmaz. Uygun H asıl dosyası.",
    "p": "dependent",
    "fee": 205,
    "refs": "niv tr"
  },
  {
    "id": "L-2",
    "name": "Şirket içi transfer ailesi",
    "code": "L-2",
    "kind": "Türev vize",
    "rule": "Asıl kişiyle yasal eşlik veya 21 yaş altı evlenmemiş çocuk ilişkisi; eşlere çocuk yaş sınırı uygulanmaz. L-1 dosyası.",
    "p": "dependent",
    "fee": 205,
    "refs": "niv tr"
  },
  {
    "id": "O-3",
    "name": "O-1/O-2 ailesi",
    "code": "O-3",
    "kind": "Türev vize",
    "rule": "Asıl kişiyle yasal eşlik veya 21 yaş altı evlenmemiş çocuk ilişkisi; eşlere çocuk yaş sınırı uygulanmaz. O-1 veya O-2 dosyası.",
    "p": "dependent",
    "fee": 205,
    "refs": "niv tr"
  },
  {
    "id": "P-4",
    "name": "P ailesi",
    "code": "P-4",
    "kind": "Türev vize",
    "rule": "Asıl kişiyle yasal eşlik veya 21 yaş altı evlenmemiş çocuk ilişkisi; eşlere çocuk yaş sınırı uygulanmaz. P-1, P-2 veya P-3 dosyası.",
    "p": "dependent",
    "fee": 205,
    "refs": "niv tr"
  },
  {
    "id": "R-2",
    "name": "Din görevlisinin ailesi",
    "code": "R-2",
    "kind": "Türev vize",
    "rule": "Asıl kişiyle yasal eşlik veya 21 yaş altı evlenmemiş çocuk ilişkisi; eşlere çocuk yaş sınırı uygulanmaz. R-1 dosyası.",
    "p": "dependent",
    "fee": 205,
    "refs": "niv tr"
  },
  {
    "id": "CW-2",
    "name": "CNMI çalışanı ailesi",
    "code": "CW-2",
    "kind": "Türev vize",
    "rule": "Asıl kişiyle yasal eşlik veya 21 yaş altı evlenmemiş çocuk ilişkisi; eşlere çocuk yaş sınırı uygulanmaz. CW-1 ve yalnız CNMI ikameti.",
    "p": "dependent",
    "fee": 205,
    "refs": "niv tr"
  },
  {
    "id": "E-1-FAM",
    "name": "Tüccarın ailesi",
    "code": "E-1",
    "kind": "Türev vize",
    "rule": "Asıl kişiyle yasal eşlik veya 21 yaş altı evlenmemiş çocuk ilişkisi; eşlere çocuk yaş sınırı uygulanmaz. E-1 dosyası. Aile ferdinin anlaşma ülkesi milliyeti şartı yok.",
    "p": "dependent",
    "fee": 315,
    "refs": "niv tr"
  },
  {
    "id": "E-2-FAM",
    "name": "Yatırımcının ailesi",
    "code": "E-2",
    "kind": "Türev vize",
    "rule": "Asıl kişiyle yasal eşlik veya 21 yaş altı evlenmemiş çocuk ilişkisi; eşlere çocuk yaş sınırı uygulanmaz. E-2 dosyası. Aile ferdinin anlaşma ülkesi milliyeti şartı yok.",
    "p": "dependent",
    "fee": 315,
    "refs": "niv tr"
  },
  {
    "id": "E-3D",
    "name": "Avustralyalı uzmanın ailesi",
    "code": "E-3D",
    "kind": "Türev vize",
    "rule": "Asıl kişiyle yasal eşlik veya 21 yaş altı evlenmemiş çocuk ilişkisi; eşlere çocuk yaş sınırı uygulanmaz. Avustralyalı E-3 asıl kişi. Aile ferdinin Türk vatandaşı olması engel oluşturmaz.",
    "p": "dependent",
    "fee": 315,
    "refs": "niv tr"
  },
  {
    "id": "I-FAM",
    "name": "Basın temsilcisinin ailesi",
    "code": "I",
    "kind": "Türev vize",
    "rule": "Asıl kişiyle yasal eşlik veya 21 yaş altı evlenmemiş çocuk ilişkisi; eşlere çocuk yaş sınırı uygulanmaz. I asıl dosyası.",
    "p": "dependent",
    "fee": 185,
    "refs": "niv tr"
  },
  {
    "id": "TD",
    "name": "TN uzmanının ailesi",
    "code": "TD",
    "kind": "Türev vize",
    "rule": "Asıl kişiyle yasal eşlik veya 21 yaş altı evlenmemiş çocuk ilişkisi; eşlere çocuk yaş sınırı uygulanmaz. Kanada/Meksika vatandaşı TN asıl kişi. Türk eş veya çocuk TD alabilir.",
    "p": "dependent",
    "fee": 185,
    "refs": "niv tr"
  },
  {
    "id": "A-1",
    "name": "Üst düzey diplomat/konsolos",
    "code": "A-1",
    "kind": "Resmî görev",
    "rule": "Üst düzey diplomat/konsolos sıfatının belgelenmesi, uygun makamın görevlendirmesi veya sınıfa göre tanınan aile bağı. Kişisel hizmetlide sözleşme ve ücret şartları incelenir.",
    "p": "official",
    "refs": "official tr"
  },
  {
    "id": "A-2",
    "name": "Diğer resmî görevli veya uygun askerî personel",
    "code": "A-2",
    "kind": "Resmî görev",
    "rule": "Diğer resmî görevli veya uygun askerî personel sıfatının belgelenmesi, uygun makamın görevlendirmesi veya sınıfa göre tanınan aile bağı. Kişisel hizmetlide sözleşme ve ücret şartları incelenir.",
    "p": "official",
    "refs": "official tr"
  },
  {
    "id": "A-3",
    "name": "A-1/A-2 kişisel hizmetlisi",
    "code": "A-3",
    "kind": "Resmî görev",
    "rule": "A-1/A-2 kişisel hizmetlisi sıfatının belgelenmesi, uygun makamın görevlendirmesi veya sınıfa göre tanınan aile bağı. Kişisel hizmetlide sözleşme ve ücret şartları incelenir.",
    "p": "official",
    "refs": "official tr"
  },
  {
    "id": "G-1",
    "name": "Tanınmış üye devletin sürekli temsilciliği",
    "code": "G-1",
    "kind": "Resmî görev",
    "rule": "Tanınmış üye devletin sürekli temsilciliği sıfatının belgelenmesi, uygun makamın görevlendirmesi veya sınıfa göre tanınan aile bağı. Kişisel hizmetlide sözleşme ve ücret şartları incelenir.",
    "p": "official",
    "refs": "official tr"
  },
  {
    "id": "G-2",
    "name": "Tanınmış üye devletin geçici temsilcisi",
    "code": "G-2",
    "kind": "Resmî görev",
    "rule": "Tanınmış üye devletin geçici temsilcisi sıfatının belgelenmesi, uygun makamın görevlendirmesi veya sınıfa göre tanınan aile bağı. Kişisel hizmetlide sözleşme ve ücret şartları incelenir.",
    "p": "official",
    "refs": "official tr"
  },
  {
    "id": "G-3",
    "name": "Tanınmayan/üye olmayan devlet temsilcisi",
    "code": "G-3",
    "kind": "Resmî görev",
    "rule": "Tanınmayan/üye olmayan devlet temsilcisi sıfatının belgelenmesi, uygun makamın görevlendirmesi veya sınıfa göre tanınan aile bağı. Kişisel hizmetlide sözleşme ve ücret şartları incelenir.",
    "p": "official",
    "refs": "official tr"
  },
  {
    "id": "G-4",
    "name": "Uluslararası kuruluş görevlisi",
    "code": "G-4",
    "kind": "Resmî görev",
    "rule": "Uluslararası kuruluş görevlisi sıfatının belgelenmesi, uygun makamın görevlendirmesi veya sınıfa göre tanınan aile bağı. Kişisel hizmetlide sözleşme ve ücret şartları incelenir.",
    "p": "official",
    "refs": "official tr"
  },
  {
    "id": "G-5",
    "name": "G görevlisinin kişisel hizmetlisi",
    "code": "G-5",
    "kind": "Resmî görev",
    "rule": "G görevlisinin kişisel hizmetlisi sıfatının belgelenmesi, uygun makamın görevlendirmesi veya sınıfa göre tanınan aile bağı. Kişisel hizmetlide sözleşme ve ücret şartları incelenir.",
    "p": "official",
    "refs": "official tr"
  },
  {
    "id": "NATO-1",
    "name": "Üst düzey NATO temsilcisi",
    "code": "NATO-1",
    "kind": "Resmî görev",
    "rule": "Üst düzey NATO temsilcisi sıfatının belgelenmesi, uygun makamın görevlendirmesi veya sınıfa göre tanınan aile bağı. Kişisel hizmetlide sözleşme ve ücret şartları incelenir.",
    "p": "official",
    "refs": "official tr"
  },
  {
    "id": "NATO-2",
    "name": "NATO delegesi, danışmanı veya anlaşma kapsamındaki kuvvet ve ailesi",
    "code": "NATO-2",
    "kind": "Resmî görev",
    "rule": "NATO delegesi, danışmanı veya anlaşma kapsamındaki kuvvet ve ailesi sıfatının belgelenmesi, uygun makamın görevlendirmesi veya sınıfa göre tanınan aile bağı. Kişisel hizmetlide sözleşme ve ücret şartları incelenir.",
    "p": "official",
    "refs": "official tr"
  },
  {
    "id": "NATO-3",
    "name": "Delegasyona eşlik eden büro personeli",
    "code": "NATO-3",
    "kind": "Resmî görev",
    "rule": "Delegasyona eşlik eden büro personeli sıfatının belgelenmesi, uygun makamın görevlendirmesi veya sınıfa göre tanınan aile bağı. Kişisel hizmetlide sözleşme ve ücret şartları incelenir.",
    "p": "official",
    "refs": "official tr"
  },
  {
    "id": "NATO-4",
    "name": "Diğer NATO görevlisi",
    "code": "NATO-4",
    "kind": "Resmî görev",
    "rule": "Diğer NATO görevlisi sıfatının belgelenmesi, uygun makamın görevlendirmesi veya sınıfa göre tanınan aile bağı. Kişisel hizmetlide sözleşme ve ücret şartları incelenir.",
    "p": "official",
    "refs": "official tr"
  },
  {
    "id": "NATO-5",
    "name": "NATO misyon uzmanı",
    "code": "NATO-5",
    "kind": "Resmî görev",
    "rule": "NATO misyon uzmanı sıfatının belgelenmesi, uygun makamın görevlendirmesi veya sınıfa göre tanınan aile bağı. Kişisel hizmetlide sözleşme ve ücret şartları incelenir.",
    "p": "official",
    "refs": "official tr"
  },
  {
    "id": "NATO-6",
    "name": "Uygun sivil bileşen personeli",
    "code": "NATO-6",
    "kind": "Resmî görev",
    "rule": "Uygun sivil bileşen personeli sıfatının belgelenmesi, uygun makamın görevlendirmesi veya sınıfa göre tanınan aile bağı. Kişisel hizmetlide sözleşme ve ücret şartları incelenir.",
    "p": "official",
    "refs": "official tr"
  },
  {
    "id": "NATO-7",
    "name": "NATO görevlisinin kişisel hizmetlisi",
    "code": "NATO-7",
    "kind": "Resmî görev",
    "rule": "NATO görevlisinin kişisel hizmetlisi sıfatının belgelenmesi, uygun makamın görevlendirmesi veya sınıfa göre tanınan aile bağı. Kişisel hizmetlide sözleşme ve ücret şartları incelenir.",
    "p": "official",
    "refs": "official tr"
  },
  {
    "id": "C-2",
    "name": "BM merkez bölgesine transit",
    "code": "C-2",
    "kind": "Resmî görev",
    "rule": "BM merkez bölgesine transit sıfatının belgelenmesi, uygun makamın görevlendirmesi veya sınıfa göre tanınan aile bağı. Kişisel hizmetlide sözleşme ve ücret şartları incelenir.",
    "p": "official",
    "refs": "official tr"
  },
  {
    "id": "C-3",
    "name": "Yabancı görevli, ailesi veya hizmetlisinin resmî transiti",
    "code": "C-3",
    "kind": "Resmî görev",
    "rule": "Yabancı görevli, ailesi veya hizmetlisinin resmî transiti sıfatının belgelenmesi, uygun makamın görevlendirmesi veya sınıfa göre tanınan aile bağı. Kişisel hizmetlide sözleşme ve ücret şartları incelenir.",
    "p": "official",
    "refs": "official tr"
  },
  {
    "id": "NATO-SOFA",
    "name": "NATO hareket emriyle giriş",
    "code": "SOFA",
    "kind": "Seyahat belgesi / muafiyet",
    "rule": "SOFA kapsamındaki kuvvet mensubu, askerî kimlik ve bireysel/toplu hareket emri; aile ve sivillerin belge kuralları ayrı.",
    "p": "official",
    "refs": "official"
  },
  {
    "id": "IR-1-CR-1",
    "name": "ABD vatandaşının eşi",
    "code": "IR1/CR1",
    "kind": "Aile göçmenliği",
    "rule": "Hukuken geçerli, gerçek evlilik, ABD vatandaşı eşin I-130 dilekçesi ve uygulanabilen mali destek beyanı. ABD’ye göçmen olarak kabul tarihinde evlilik iki yıldan kısaysa CR1.",
    "p": "relative",
    "refs": "family iv queue"
  },
  {
    "id": "IR-2-CR-2",
    "name": "ABD vatandaşının çocuğu",
    "code": "IR2/CR2",
    "kind": "Aile göçmenliği",
    "rule": "Uygun evlenmemiş çocuk ilişkisi, ayrı I-130 ve hukuki yaş/CSPA değerlendirmesi. Üvey çocukta evlilik 18 yaştan önce. Önce doğuştan ABD vatandaşlığı kontrol edilir.",
    "p": "relative",
    "refs": "family iv queue"
  },
  {
    "id": "IR-5",
    "name": "ABD vatandaşının annesi veya babası",
    "code": "IR5",
    "kind": "Aile göçmenliği",
    "rule": "Dilekçe veren ABD vatandaşı en az 21 yaşında; başvuru sahibinin ebeveynlik bağı, I-130 ve destek belgeleri.",
    "p": "relative",
    "refs": "family iv queue"
  },
  {
    "id": "IR-IH-ADOPT",
    "name": "Uluslararası evlat edinme",
    "code": "IH3/IH4/IR3/IR4",
    "kind": "Aile göçmenliği",
    "rule": "Türkiye’de mutat ikamet halinde Lahey süreci ve merkezi makamlar; I-800A/I-800. Lahey dışı mutat ikamette ve geçiş dosyalarında orphan/I-600; yaş, istisnalar ve evlat edinmenin nerede kesinleştiği sınıfı belirler.",
    "p": "adoption",
    "refs": "family iv queue"
  },
  {
    "id": "IW",
    "name": "ABD vatandaşının dul eşi ve uygun çocuğu",
    "code": "IW1/IW2",
    "kind": "Aile göçmenliği",
    "rule": "Gerçek evlilik, ölüm tarihinde yasal ayrılık olmaması ve yeniden evlenmeme; genellikle iki yılda I-360 veya uygun I-130 dönüşümü. Uygun çocuk eşlik edebilir.",
    "p": "relative",
    "refs": "family iv queue",
    "fee": 205
  },
  {
    "id": "FAMILY-F1",
    "name": "ABD vatandaşının evlenmemiş yetişkin çocuğu",
    "code": "F11/F12",
    "kind": "Aile göçmenliği",
    "rule": "ABD vatandaşı ebeveyn ve evlenmemiş, çocuk sınıfının dışında kalan oğul/kız; eşlik eden çocuk için ayrı türev değerlendirmesi yapılır.",
    "p": "preference",
    "refs": "family iv queue",
    "ageText": "Asıl yararlanıcının hukuki yaşı; türev çocuk için IV-DERIV kaydı kullanılır.",
    "age": [
      21,
      null
    ]
  },
  {
    "id": "FAMILY-F2A",
    "name": "Daimi oturum sahibinin eşi veya çocuğu",
    "code": "F21/F22/F23/FX/C2/CX",
    "kind": "Aile göçmenliği",
    "rule": "LPR eş veya hukuken 21 yaş altı evlenmemiş çocuk ilişkisi; CSPA, mali destek ve öncelik tarihi.",
    "p": "preference",
    "refs": "family iv queue"
  },
  {
    "id": "FAMILY-F2B",
    "name": "Daimi oturum sahibinin evlenmemiş yetişkin çocuğu",
    "code": "F24/F25/C24/C25",
    "kind": "Aile göçmenliği",
    "rule": "LPR ebeveyn ve evlenmemiş, çocuk sınıfının dışında kalan oğul/kız; eşlik eden çocuk için ayrı türev değerlendirmesi yapılır.",
    "p": "preference",
    "refs": "family iv queue",
    "ageText": "Asıl yararlanıcının hukuki yaşı; türev çocuk için IV-DERIV kaydı kullanılır.",
    "age": [
      21,
      null
    ]
  },
  {
    "id": "FAMILY-F3",
    "name": "ABD vatandaşının evli çocuğu",
    "code": "F31/F32/F33/C31/C32/C33",
    "kind": "Aile göçmenliği",
    "rule": "ABD vatandaşı ebeveyn ile soybağı, asıl yararlanıcının evli olması ve öncelik tarihi; eş ve uygun çocuk türev olabilir.",
    "p": "preference",
    "refs": "family iv queue"
  },
  {
    "id": "FAMILY-F4",
    "name": "ABD vatandaşının kardeşi",
    "code": "F41/F42/F43",
    "kind": "Aile göçmenliği",
    "rule": "ABD vatandaşı sponsor en az 21 yaşında ve kardeşlik bağı belgeli; eş ve uygun çocuk türev olabilir.",
    "p": "preference",
    "refs": "family iv queue"
  },
  {
    "id": "VAWA",
    "name": "İstismar durumunda bağımsız aile dilekçesi",
    "code": "IB/B11/B12/B21–25/B31–33/BX",
    "kind": "Aile göçmenliği",
    "rule": "ABD vatandaşı veya LPR eş/ebeveyn ya da belirli ABD vatandaşı yetişkin çocukla nitelikli ilişki, şiddet/ağır kötü muamele ve diğer VAWA şartları. Yurt dışından dosyalamada özel bağlantı ölçütlerinden biri gerekir.",
    "p": "special",
    "refs": "family aos",
    "fee": null
  },
  {
    "id": "K-1",
    "name": "ABD vatandaşının nişanlısı",
    "code": "K-1",
    "kind": "Aile amaçlı geçici vize",
    "rule": "Tarafların evlenmeye hukuken serbest olması, genellikle son iki yılda yüz yüze görüşme veya istisna, I-129F ve ABD’ye girişten sonra 90 gün içinde dilekçe sahibiyle evlilik.",
    "p": "fiance",
    "refs": "family iv queue"
  },
  {
    "id": "K-2",
    "name": "K-1 nişanlının çocuğu",
    "code": "K-2",
    "kind": "Türev vize",
    "rule": "K-1 asıl kişinin uygun evlenmemiş çocuğu, başvuru/ülkeye kabul yaşı ve eşlik/sonradan katılım süresi.",
    "p": "fiance",
    "refs": "family iv queue"
  },
  {
    "id": "K-3",
    "name": "ABD vatandaşının eşi için geçiş",
    "code": "K-3",
    "kind": "Aile amaçlı geçici vize",
    "rule": "Evlilik, eş için I-130 ve I-129F. Onaylı I-130 NVC’ye önce veya aynı anda ulaşırsa K-3 dosyası idari olarak kapanır.",
    "p": "fiance",
    "refs": "family iv queue"
  },
  {
    "id": "K-4",
    "name": "K-3 eşin çocuğu",
    "code": "K-4",
    "kind": "Türev vize",
    "rule": "Geçerli K-3 dosyasında uygun evlenmemiş çocuk; daimi oturumda gereken ayrı dilekçe ve üvey çocuk kuralları.",
    "p": "fiance",
    "refs": "family iv queue"
  },
  {
    "id": "V",
    "name": "Eski aile birleşimi bekleme dosyası",
    "code": "V-1/V-2/V-3",
    "kind": "Geçiş vizesi",
    "rule": "LPR aile dilekçesinin en geç 21 Aralık 2000 tarihinde sunulmuş olması, üç yıllık bekleme ve kanundaki diğer şartlar; türev çocuklar dahil.",
    "p": "unknown",
    "refs": "niv family",
    "fee": 185,
    "state": "legacy"
  },
  {
    "id": "EB-1A",
    "name": "Olağanüstü yetenek",
    "code": "E11",
    "kind": "İstihdam temelli göçmenlik",
    "rule": "Kalıcı ulusal/uluslararası takdir, büyük tek ödül veya gerekli kanıt ölçütleri ve bütünsel değerlendirme; alanda çalışmaya devam etme. Kişi kendi I-140 dilekçesini sunabilir.",
    "p": "self",
    "refs": "imm eb vb"
  },
  {
    "id": "EB-1B",
    "name": "Seçkin profesör veya araştırmacı",
    "code": "E12",
    "kind": "İstihdam temelli göçmenlik",
    "rule": "Uluslararası tanınmışlık, en az üç yıl ilgili öğretim/araştırma deneyimi ve nitelikli ABD işvereninden uygun kalıcı araştırma veya tenure/tenure-track teklifi.",
    "p": "employment",
    "refs": "imm eb vb"
  },
  {
    "id": "EB-1C",
    "name": "Çok uluslu yönetici",
    "code": "E13",
    "kind": "İstihdam temelli göçmenlik",
    "rule": "Uygun dönemde yurt dışında ilişkili kurumda en az bir yıl yöneticilik, ABD’de en az bir yıldır faal nitelikli işveren ve yönetici görevi.",
    "p": "employment",
    "refs": "imm eb vb"
  },
  {
    "id": "EB-2-AD",
    "name": "İleri derece gerektiren meslek",
    "code": "E21",
    "kind": "İstihdam temelli göçmenlik",
    "rule": "İleri derece gerektiren iş ve ilgili ileri derece veya lisans sonrası beş yıl ilerleyici ilgili deneyim; kural olarak iş teklifi ve PERM.",
    "p": "perm",
    "refs": "eb dol vb",
    "edu": "bachelor",
    "education": "İleri derece veya ilgili lisans ve beş yıl ilerleyici deneyim."
  },
  {
    "id": "EB-2-EA",
    "name": "İstisnai yetenek",
    "code": "E21",
    "kind": "İstihdam temelli göçmenlik",
    "rule": "Bilim, sanat veya iş alanında normalin önemli ölçüde üstünde uzmanlık ve kanıtlar; kural olarak iş teklifi ve PERM.",
    "p": "perm",
    "refs": "eb dol vb"
  },
  {
    "id": "EB-2-NIW",
    "name": "Ulusal çıkar muafiyeti",
    "code": "E21",
    "kind": "İstihdam temelli göçmenlik",
    "rule": "Önce EB-2 ileri derece veya istisnai yetenek. Önerilen çalışmanın esaslı değeri ve ulusal önemi, kişisel ilerletme kapasitesi, iş teklifi ve emek sertifikasını kaldırmanın ABD’ye yararı; kendi dilekçesi mümkün.",
    "p": "self",
    "refs": "imm eb vb",
    "education": "İleri derece veya istisnai yetenek alternatifi."
  },
  {
    "id": "EB-2-NIW-MD",
    "name": "Hekim için ulusal çıkar muafiyeti",
    "code": "E21",
    "kind": "İstihdam temelli göçmenlik",
    "rule": "Uygun hizmet açığı bölgesinde veya VA kurumunda kural olarak toplam beş yıl tam zamanlı klinik hizmet ve yetkili kamu kurumu yarar beyanı. Zaten tamamlanan hizmet süreyi değiştirir.",
    "p": "unboundedEB",
    "refs": "imm eb vb",
    "education": "Hekimlik ve gerekli lisans/yeterlilikler."
  },
  {
    "id": "EB-3-SKILLED",
    "name": "Nitelikli işçi",
    "code": "E31",
    "kind": "İstihdam temelli göçmenlik",
    "rule": "İş en az iki yıl eğitim/deneyim gerektiriyor ve aday bunu karşılıyor; kalıcı tam zamanlı teklif, PERM veya uygun özel yöntem.",
    "p": "perm",
    "refs": "eb dol vb"
  },
  {
    "id": "EB-3-PRO",
    "name": "Lisans mezunu profesyonel",
    "code": "E32",
    "kind": "İstihdam temelli göçmenlik",
    "rule": "Mesleğe giriş için normal olarak gerekli ABD lisansı veya yabancı dengi ve ilgili derece gerektiren kalıcı iş. Bu alt grupta deneyim lisansın yerine geçmez.",
    "p": "perm",
    "refs": "eb dol vb",
    "edu": "bachelor",
    "education": "Uygun lisans veya yabancı eşdeğeri."
  },
  {
    "id": "EB-3-OTHER",
    "name": "Diğer işçiler",
    "code": "EW3",
    "kind": "İstihdam temelli göçmenlik",
    "rule": "İki yıldan az eğitim veya deneyim gerektiren, mevsimlik olmayan kalıcı tam zamanlı iş, uygun aday, işveren ve emek sertifikası.",
    "p": "perm",
    "refs": "eb dol vb"
  },
  {
    "id": "SCHEDULE-A",
    "name": "Schedule A üzerinden işveren dilekçesi",
    "code": "EB-2/EB-3",
    "kind": "İstihdam temelli göçmenlik",
    "rule": "Grup I profesyonel hemşire/fizyoterapist veya Grup II bilim/sanat/gösteri sanatları istisnai yetenek; uygun iş teklifine bağlı. DOL ön sertifikasyonu bireysel PERM bekleyişini kaldırır; mesleki belge ve sağlık çalışanı sertifikası duruma bağlı.",
    "p": "employment",
    "refs": "imm eb vb"
  },
  {
    "id": "EB-4-MIN",
    "name": "Din görevlisi",
    "code": "SD1",
    "kind": "İstihdam temelli göçmenlik",
    "rule": "En az iki yıl mezhep üyeliği ve uygun dinî çalışma geçmişi, ABD’de tam zamanlı ücretli nitelikli din görevi.",
    "p": "special",
    "refs": "special imm vb"
  },
  {
    "id": "EB-4-REL",
    "name": "Diğer dinî meslek ve görevler",
    "code": "SR1",
    "kind": "İstihdam temelli göçmenlik",
    "rule": "SD dışındaki nitelikli dinî görev, üyelik ve iş geçmişi; süreyle uzatılan SR hükmünün vize verileceği tarihte yürürlükte olması.",
    "p": "special",
    "refs": "special imm vb"
  },
  {
    "id": "EB-4-BC",
    "name": "Uluslararası yayıncı",
    "code": "BC1",
    "kind": "İstihdam temelli göçmenlik",
    "rule": "Yetkili ABD uluslararası yayın kuruluşu veya uygun hibe alıcısı adına uygun yayıncılık görevi.",
    "p": "special",
    "refs": "special imm vb"
  },
  {
    "id": "EB-4-SE",
    "name": "ABD’nin yurt dışı çalışanı",
    "code": "SE1",
    "kind": "İstihdam temelli göçmenlik",
    "rule": "Uygun uzun hizmet, istisnai sadakat ve görev yeri yöneticisinin tavsiyesi, DS-1884 ve gerekli onaylar.",
    "p": "special",
    "refs": "special imm vb",
    "fee": null
  },
  {
    "id": "EB-4-SS",
    "name": "Yurt dışı ABD çalışanının geride kalan ailesi",
    "code": "SS1",
    "kind": "İstihdam temelli göçmenlik",
    "rule": "Ölen uygun ABD hükümeti çalışanının eşi/çocuğu ve özel yasal şartlar; görev yeri ve DS-1884 süreci.",
    "p": "special",
    "refs": "special imm vb",
    "fee": null
  },
  {
    "id": "EB-4-G4",
    "name": "Uluslararası kuruluş çalışanı veya ailesi",
    "code": "SK1–SK4",
    "kind": "İstihdam temelli göçmenlik",
    "rule": "G-4 geçmişi olan emekli, uygun evlenmemiş çocuk veya sağ kalan eş; statü, ikamet ve başvuru süresi dosyaya göre.",
    "p": "special",
    "refs": "special imm vb"
  },
  {
    "id": "EB-4-NATO",
    "name": "NATO sivil çalışanı veya ailesi",
    "code": "SN1–SN4",
    "kind": "İstihdam temelli göçmenlik",
    "rule": "NATO-6 geçmişi olan emekli veya belirli aile fertleri; ikamet ve başvuru süresi şartları.",
    "p": "special",
    "refs": "special imm vb"
  },
  {
    "id": "EB-4-MIL",
    "name": "ABD silahlı kuvvetleri özel göçmeni",
    "code": "SM1–SM3",
    "kind": "İstihdam temelli göçmenlik",
    "rule": "ABD dışında alınmış, uygulanabilir anlaşma ve 12 yıllık hizmet veya kanundaki hizmet taahhüdü ile gerekli tavsiye.",
    "p": "special",
    "refs": "special imm vb"
  },
  {
    "id": "EB-4-CANAL",
    "name": "Panama Kanalı eski çalışanları",
    "code": "SF/SG/SH",
    "kind": "İstihdam temelli göçmenlik",
    "rule": "Tarihsel kurum, hizmet tarihi ve alt kategori şartları; SG asıl kişi için Panama vatandaşlığı.",
    "p": "special",
    "refs": "special imm vb",
    "state": "legacy"
  },
  {
    "id": "EB-4-SIV",
    "name": "Irak/Afganistan hizmetiyle bağlantılı özel dosya",
    "code": "SI/SQ",
    "kind": "İstihdam temelli göçmenlik",
    "rule": "Asıl kişi için ilgili Irak/Afgan milliyeti, hizmet ve kanuni süreler. Türk eşi/çocuğu veya kanunun koruduğu sağ kalan aile ferdi kendi dayanağını gösterebilir; ülke tedbirleri ayrıca kontrol edilir.",
    "p": "special",
    "refs": "special imm vb",
    "state": "legacy",
    "fee": null
  },
  {
    "id": "EB-4-SIJ",
    "name": "Özel göçmen çocuk statüsü",
    "code": "SL1",
    "kind": "İstihdam temelli göçmenlik",
    "rule": "ABD’de fiziksel bulunma, uygun çocuk mahkemesi kararı, I-360 sunulurken evlenmemiş ve 21 yaş altı olma.",
    "p": "special",
    "refs": "si special",
    "state": "domestic"
  },
  {
    "id": "EB-4-MED",
    "name": "Tarihsel yabancı tıp mezunu statü uyarlaması",
    "code": "SJ1",
    "kind": "İstihdam temelli göçmenlik",
    "rule": "Kanundaki tarihsel ABD hekimlik ve statü şartları; asıl kişi için ABD içi statü uyarlaması.",
    "p": "special",
    "refs": "special imm vb",
    "state": "domestic"
  },
  {
    "id": "EB-5-STANDARD",
    "name": "EB-5 · Standart yatırım",
    "code": "EB-5",
    "kind": "İstihdam temelli göçmenlik",
    "rule": "Standart yatırım için yasal kaynaklı ve riskte sermaye, uygun yeni ticari işletme ve en az 10 nitelikli tam zamanlı iş. Doğrudan I-526 veya bölgesel merkez I-526E; altyapıda özel proje ve bölgesel merkez şartları.",
    "p": "investor",
    "refs": "eb5 imm vb eb5fees",
    "capital": 1050000,
    "note": "Yeni EB-5 USCIS ücret düzenlemesinin ilan edilmiş yürürlük tarihi 30 Kasım 2026. Posta gönderim tarihine ait tarife uygulanır."
  },
  {
    "id": "EB-5-TEA",
    "name": "EB-5 · Hedef istihdam bölgesi",
    "code": "EB-5",
    "kind": "İstihdam temelli göçmenlik",
    "rule": "Hedef istihdam bölgesi için yasal kaynaklı ve riskte sermaye, uygun yeni ticari işletme ve en az 10 nitelikli tam zamanlı iş. Doğrudan I-526 veya bölgesel merkez I-526E; altyapıda özel proje ve bölgesel merkez şartları. Kırsal ve yüksek işsizlik alanları ayrı rezervlere tabidir.",
    "p": "investor",
    "refs": "eb5 imm vb eb5fees",
    "capital": 800000,
    "note": "Yeni EB-5 USCIS ücret düzenlemesinin ilan edilmiş yürürlük tarihi 30 Kasım 2026. Posta gönderim tarihine ait tarife uygulanır."
  },
  {
    "id": "EB-5-INFRA",
    "name": "EB-5 · Nitelikli altyapı projesi",
    "code": "EB-5",
    "kind": "İstihdam temelli göçmenlik",
    "rule": "Nitelikli altyapı projesi için yasal kaynaklı ve riskte sermaye, uygun yeni ticari işletme ve en az 10 nitelikli tam zamanlı iş. Doğrudan I-526 veya bölgesel merkez I-526E; altyapıda özel proje ve bölgesel merkez şartları.",
    "p": "investor",
    "refs": "eb5 imm vb eb5fees",
    "capital": 800000,
    "note": "Yeni EB-5 USCIS ücret düzenlemesinin ilan edilmiş yürürlük tarihi 30 Kasım 2026. Posta gönderim tarihine ait tarife uygulanır."
  },
  {
    "id": "GOLD-IND",
    "name": "Bireysel Gold Card süreci",
    "code": "EB-1/EB-2",
    "kind": "İstihdam temelli göçmenlik",
    "rule": "EB-1 veya EB-2 uygunluğu, kullanılabilir vize numarası ve inceleme. Kişi başına 15.000 USD işlem ve 1 milyon USD katkı.",
    "p": "gold",
    "refs": "gold vb",
    "capital": 1000000
  },
  {
    "id": "GOLD-CORP",
    "name": "Kurumsal Gold Card süreci",
    "code": "EB-1/EB-2",
    "kind": "İstihdam temelli göçmenlik",
    "rule": "EB-1 veya EB-2 uygunluğu, kullanılabilir vize numarası ve inceleme. Kurumsal sponsor çalışan başına 15.000 USD işlem ve 2 milyon USD katkıyı karşılar; aile ayrıca ücretlendirilir.",
    "p": "goldCorp",
    "refs": "gold vb",
    "capital": 0
  },
  {
    "id": "IV-DERIV",
    "name": "İstihdam veya aile tercih dosyasına eşlik / sonradan katılma",
    "code": "E14/E15/E22/E23/E34/E35/EW4/EW5 ve ilgili türev kodları",
    "kind": "Türev göçmen vizesi",
    "rule": "Asıl dosyanın türeve izin vermesi, eş veya evlenmemiş çocuk bağı, ilişkinin kuruluş tarihi, asıl göçmenlik ve CSPA; gerektiğinde I-824. ABD vatandaşının immediate-relative dosyasında genel türev hakkı yok.",
    "p": "derivedIV",
    "refs": "iv family vb",
    "fee": null
  },
  {
    "id": "DV-2027",
    "name": "Green Card çekilişi · DV-2027",
    "code": "DV1/DV2/DV3",
    "kind": "Özel yol",
    "rule": "Yıllık uygun doğum ülkesi veya eş/ebeveyn üzerinden kanuni yüklenebilirlik istisnası. Asıl kişi için ABD lise eğitimine denk örgün eğitim veya son beş yılda iki yıl nitelikli iş deneyimi. Seçim, sıra numarası, kullanılabilir numara ve mali yıl son tarihi gerekir.",
    "p": "lottery",
    "refs": "dv dvnews court dvissue dvform fees",
    "state": "paused",
    "education": "Lise denkliği veya nitelikli iş deneyimi; türev eş/çocukta bu koşul aranmaz.",
    "notice": {
      "title": "DV-2027 yeni kayıtları şu anda durduruldu",
      "body": "29 Ekim 2026 tarihli temyiz kararı, kayıtların açılmasını emreden tedbirin uygulanmasını durdurdu. Yeni kayıt tarihi açıklanmadı. Bu duyuru yeni çekiliş kaydını kapsar.",
      "asOf": "2026-11-11",
      "source": "https://www.govinfo.gov/content/pkg/USCOURTS-ca9-26-6943/pdf/USCOURTS-ca9-26-6943-0.pdf",
      "agencySource": "https://travel.state.gov/en/newsroom/visas/2025/changes-to-2027-dv-program-entry-period.html"
    }
  },
  {
    "id": "SB-1",
    "name": "Daimi oturum sahibinin geri dönüşü",
    "code": "SB1",
    "kind": "Özel yol",
    "rule": "ABD’den geçici ayrılmış LPR için kontrol dışı nedenlerle uzamış kalış ve terk etmeme kanıtı; önce DS-117, onay sonrası göçmen vizesi.",
    "p": "return",
    "refs": "sb fees"
  },
  {
    "id": "LPR-RETURN",
    "name": "Mevcut Green Card veya yeniden giriş belgesiyle dönüş",
    "code": "I-551/I-327/I-131A",
    "kind": "Mevcut statüyle dönüş",
    "rule": "Mevcut LPR statüsü, geçerli seyahat belgeleri ve ikametin terk edilmemiş olması; kayıp kartta koşulları varsa taşıma belgesi.",
    "p": "unknown",
    "refs": "sb"
  },
  {
    "id": "TRAVEL-DOC",
    "name": "Önceden düzenlenmiş seyahat belgesiyle dönüş",
    "code": "I-512/I-571",
    "kind": "Mevcut statüyle dönüş",
    "rule": "Geçerli advance parole veya refugee travel document ve ona dayanak oluşturan ABD dosyası/statüsü; belgenin geçerliliği ve geri kabul şartları.",
    "p": "unknown",
    "refs": "aos parole"
  },
  {
    "id": "LPR-NEWBORN",
    "name": "LPR ebeveynin dışarıda doğan çocuğu",
    "code": "8 CFR 211.1(b)(1)",
    "kind": "Özel yol",
    "rule": "LPR annenin geçici yurt dışı ziyareti sırasında doğum, iki yıl içinde uygun ebeveynin çocuğun doğumundan sonraki ilk geri dönüşüne eşlik ve belge şartları; göçmen vizesi alınmadan kabul istisnası.",
    "p": "unknown",
    "refs": "iv",
    "age": [
      0,
      1
    ],
    "extraSource": "https://www.ecfr.gov/current/title-8/chapter-I/subchapter-B/part-211/section-211.1",
    "ageText": "İlgili iki yıllık süre çocuğun doğum tarihinden itibaren hesaplanır."
  },
  {
    "id": "N-8",
    "name": "Belirli SK/SN çocuklarının ebeveyni",
    "code": "N-8",
    "kind": "Özel yol",
    "rule": "SK3 veya SN3 sınıfındaki kişinin uygun ebeveyni.",
    "p": "unknown",
    "refs": "niv",
    "fee": 185
  },
  {
    "id": "N-9",
    "name": "N-8 veya belirli SK/SN kişilerinin çocuğu",
    "code": "N-9",
    "kind": "Özel yol",
    "rule": "N-8 veya SK1/SK2/SK4/SN1/SN2/SN4 asıl kişinin kanundaki çocuk tanımına giren aile ferdi.",
    "p": "unknown",
    "refs": "niv",
    "fee": 185
  },
  {
    "id": "S-5",
    "name": "Suç örgütü hakkında bilgi veren tanık",
    "code": "S-5",
    "kind": "Koruma / özel statü",
    "rule": "Nitelikli kritik bilgi ve yetkili ABD kolluk makamının talebi.",
    "p": "unknown",
    "refs": "victim iv",
    "state": "invitation",
    "fee": 185
  },
  {
    "id": "S-6",
    "name": "Terörizm konusunda bilgi veren tanık",
    "code": "S-6",
    "kind": "Koruma / özel statü",
    "rule": "Yetkili makamların gerekli tespiti, bilgi, risk ve ödül şartları.",
    "p": "unknown",
    "refs": "victim iv",
    "state": "invitation",
    "fee": 185
  },
  {
    "id": "S-7",
    "name": "S tanığının ailesi",
    "code": "S-7",
    "kind": "Koruma / özel statü",
    "rule": "S-5/S-6 dosyasına yetkili makamca dahil edilmiş nitelikli aile ferdi.",
    "p": "unknown",
    "refs": "victim iv",
    "state": "invitation",
    "fee": 185
  },
  {
    "id": "U-1",
    "name": "Nitelikli suç mağduru",
    "code": "U-1",
    "kind": "Koruma / özel statü",
    "rule": "ABD’de işlenen veya ABD hukukunu ihlal eden nitelikli suç, ciddi fiziksel/ruhsal zarar, yardım ve genellikle I-918 Supplement B sertifikası; dışarıdan uygun dilekçe mümkündür.",
    "p": "unknown",
    "refs": "victim iv",
    "state": "case",
    "fee": 185
  },
  {
    "id": "U-FAMILY",
    "name": "U mağdurunun ailesi",
    "code": "U-2/U-3/U-4/U-5",
    "kind": "Koruma / özel statü",
    "rule": "U-2 eş, U-3 çocuk; asıl kişi ilgili tarihte 21 yaş altındaysa U-4 ebeveyn veya U-5 18 yaş altı evlenmemiş kardeş. I-918A ve yaş koruması incelenir.",
    "p": "unknown",
    "refs": "victim iv",
    "state": "case",
    "fee": 185
  },
  {
    "id": "T-1",
    "name": "İnsan ticareti mağduru ana statüsü",
    "code": "T-1",
    "kind": "Koruma / özel statü",
    "rule": "İnsan ticareti nedeniyle ABD’de veya kanunun kapsadığı yerde bulunma ve diğer şartlar; konsolosluk T-1 vizesi düzenlemez.",
    "p": "unknown",
    "refs": "victim iv",
    "state": "domestic",
    "fee": null
  },
  {
    "id": "T-FAMILY",
    "name": "T mağdurunun yurt dışındaki ailesi",
    "code": "T-2/T-3/T-4/T-5/T-6",
    "kind": "Koruma / özel statü",
    "rule": "T-2 eş, T-3 çocuk; T-4 ebeveyn, T-5 kardeş, T-6 türev aile ferdinin çocuğu için yaş veya misilleme tehlikesi hükümleri, I-914 Supplement A onayı.",
    "p": "unknown",
    "refs": "victim iv",
    "state": "case",
    "fee": 185
  },
  {
    "id": "SU",
    "name": "U-1 statüsünden daimi oturuma geçen kişinin ailesi",
    "code": "SU2/SU3/SU5",
    "kind": "Koruma / özel statü",
    "rule": "Önceden U statüsü almamış uygun eş/çocuk/ebeveyn için I-929, ağır güçlük ve asıl kişinin statü uyarlaması.",
    "p": "unknown",
    "refs": "victim iv",
    "state": "case",
    "fee": null
  },
  {
    "id": "PAROLE",
    "name": "Acil insani neden veya önemli kamu yararı",
    "code": "Parole",
    "kind": "Geçici giriş izni",
    "rule": "Somut acil insani neden veya önemli kamu yararı, destek belgeleri ve mali destek; DHS her dosyada takdir kullanır.",
    "p": "unknown",
    "refs": "parole"
  },
  {
    "id": "IER",
    "name": "Girişimci parole izni",
    "code": "IER/I-941",
    "kind": "Geçici giriş izni",
    "rule": "Son beş yılda kurulmuş ABD girişimi, ilk başvuruda genellikle en az %10 pay ve aktif merkezî rol; nitelikli ABD yatırımı, kamu fonu veya kısmi eşik ve güçlü alternatif kanıt. Aile bireylerinde ayrı başvuru.",
    "p": "unknown",
    "refs": "ier parole"
  },
  {
    "id": "USRAP",
    "name": "Yurt dışı mülteci yerleştirmesi",
    "code": "INA 207",
    "kind": "İnsani kabul",
    "rule": "Mülteci tanımı, çoğunlukla vatandaşlık ülkesinin dışında bulunma, USRAP erişim/sevk dayanağı ve FY2027 istisnai kabul kararı. Öncelikler ve ülke bazlı tedbirler uygulanır.",
    "p": "unknown",
    "refs": "ref",
    "state": "invitation"
  },
  {
    "id": "I-730",
    "name": "Mülteci veya sığınmacı ailesinin sonradan katılması",
    "code": "V92/V93",
    "kind": "Özel yol",
    "rule": "ABD’de iltica veya mülteci kabulü almış kişiyle uygun tarihte kurulmuş eş/çocuk bağı ve kural olarak iki yıl içinde I-730; istisna ve seyahat onayı kontrol edilir.",
    "p": "unknown",
    "refs": "follow ref",
    "extraSource": "https://travel.state.gov/content/travel/en/us-visas/immigrate/follow-to-join-refugees-and-asylees.html"
  },
  {
    "id": "ASYLUM",
    "name": "ABD’de iltica",
    "code": "INA 208",
    "kind": "Özel yol",
    "rule": "ABD’de bulunma veya varış noktasında olma ve korunma ölçütleri. Türkiye’deki konsolosluğa ilk gidiş başvurusu yapılamaz.",
    "p": "unknown",
    "refs": "asylum",
    "state": "domestic"
  },
  {
    "id": "DV26",
    "name": "DV-2026 dönemi",
    "code": "DV1/DV2/DV3",
    "kind": "Özel yol",
    "rule": "FY2026 için olağan vize veriliş süresi 30 Eylül 2026’da sona erdi.",
    "p": "lottery",
    "refs": "dvissue dv",
    "state": "closed",
    "extraSource": "https://travel.state.gov/content/travel/en/us-visas/immigrate/diversity-visa-program-entry/dv-2026-selected-entrants.html"
  },
  {
    "id": "US-CITIZEN",
    "name": "Doğuştan/kazanılmış ABD vatandaşlığıyla seyahat",
    "code": "ABD pasaportu/CRBA",
    "kind": "Vatandaşlıkla seyahat",
    "rule": "Türk-Amerikan çifte vatandaşlığı veya doğumda vatandaşlık aktarımı belgelenir. ABD vatandaşı ABD pasaportuyla giriş yapar.",
    "p": "unknown",
    "refs": "family",
    "extraSource": "https://travel.state.gov/content/travel/en/legal/travel-legal-considerations/us-citizenship/dual-nationality.html",
    "state": "otherNationality"
  },
  {
    "id": "E-3",
    "name": "Avustralyalı uzman",
    "code": "E-3",
    "kind": "Özel yol",
    "rule": "Asıl başvuran Avustralya vatandaşı olmalı; ilgili uzmanlık işi, eğitim/denklik ve LCA. E-3R dönüş/yenileme.",
    "p": "unknown",
    "refs": "niv legal",
    "state": "otherNationality"
  },
  {
    "id": "H-1B1",
    "name": "Şili/Singapur uzmanı",
    "code": "H-1B1",
    "kind": "Özel yol",
    "rule": "Asıl kişi Şili veya Singapur vatandaşı olmalı ve nitelikli uzmanlık işi/LCA bulunmalı.",
    "p": "unknown",
    "refs": "niv legal",
    "state": "otherNationality"
  },
  {
    "id": "TN",
    "name": "USMCA meslekleri",
    "code": "TN",
    "kind": "Özel yol",
    "rule": "Kanada veya Meksika vatandaşlığı, listelenen meslek ve uygun görev.",
    "p": "unknown",
    "refs": "niv legal",
    "state": "otherNationality"
  },
  {
    "id": "F-3/M-3",
    "name": "Sınır ötesi öğrenci",
    "code": "F-3/M-3",
    "kind": "Özel yol",
    "rule": "Kanada/Meksika vatandaşlığı, o ülkede ikamet ve sınırdan gidip gelme şartları.",
    "p": "unknown",
    "refs": "niv legal",
    "state": "otherNationality"
  },
  {
    "id": "BCC",
    "name": "Meksika sınır geçiş kartı",
    "code": "BCC",
    "kind": "Özel yol",
    "rule": "Meksika vatandaşlığı ve ikameti, ilgili B ziyaret şartları.",
    "p": "unknown",
    "refs": "niv legal",
    "state": "otherNationality"
  },
  {
    "id": "ESTA",
    "name": "Vizesiz seyahat programı",
    "code": "ESTA",
    "kind": "Özel yol",
    "rule": "Uygun VWP ülkesi pasaportu, ESTA onayı ve tüm kişisel seyahat geçmişi koşulları; Türkiye pasaportu tek başına kapsama girmez.",
    "p": "unknown",
    "refs": "vwp",
    "state": "otherNationality"
  },
  {
    "id": "COMPACT",
    "name": "Serbest birlik anlaşmalarıyla giriş",
    "code": "COMPACT",
    "kind": "Özel yol",
    "rule": "Mikronezya Federal Devletleri, Marshall Adaları veya Palau’nun anlaşmadaki vatandaşlık ve giriş şartları.",
    "p": "unknown",
    "refs": "niv legal",
    "state": "otherNationality"
  },
  {
    "id": "SC",
    "name": "Eski ABD vatandaşlarına özel hükümler",
    "code": "SC",
    "kind": "Özel yol",
    "rule": "SC1/SC2 için evlilik veya yabancı silahlı kuvvetlerde hizmet nedeniyle tarihsel vatandaşlık kaybı.",
    "p": "unknown",
    "refs": "iv niv",
    "state": "legacy"
  },
  {
    "id": "AM",
    "name": "Amerasian ve aile dosyaları",
    "code": "AM",
    "kind": "Özel yol",
    "rule": "Doğum ülkesi ve tarihleri, ABD vatandaşı baba ve yürürlükteki tarihsel programa özgü soybağı; AM ve ilgili aile tercih hükümleri.",
    "p": "unknown",
    "refs": "iv niv",
    "state": "legacy"
  },
  {
    "id": "VI5",
    "name": "Virgin Adaları tarihsel ebeveyn dosyası",
    "code": "VI5",
    "kind": "Özel yol",
    "rule": "Belirtilen tarihsel kanunla oturum almış ABD vatandaşının ebeveyni.",
    "p": "unknown",
    "refs": "iv niv",
    "state": "legacy"
  },
  {
    "id": "H-1C",
    "name": "Eski hemşire vizesi",
    "code": "H-1C",
    "kind": "Özel yol",
    "rule": "Yeni H-1C başvurusu için kanuni yetki sona erdi.",
    "p": "unknown",
    "refs": "iv niv",
    "state": "closed"
  },
  {
    "id": "H-2R",
    "name": "Eski H-2B geri dönen işçi işareti",
    "code": "H-2R",
    "kind": "Özel yol",
    "rule": "Geçmiş programın sembolü; yeni başvuruda H-2B ve ilgili yılın kota hükümlerini inceleyin.",
    "p": "unknown",
    "refs": "iv niv",
    "state": "closed"
  },
  {
    "id": "Q-2/Q-3",
    "name": "İrlanda barış süreci programı",
    "code": "Q-2/Q-3",
    "kind": "Özel yol",
    "rule": "Tarihsel süreli program; yeni başvuru yolu yok.",
    "p": "unknown",
    "refs": "iv niv",
    "state": "closed"
  },
  {
    "id": "FULBRIGHT-MA",
    "name": "Fulbright Türkiye · Yüksek lisans",
    "code": "J-1",
    "kind": "Burs / program",
    "rule": "ABD yüksek lisans kabul ölçütleri, lisans mezuniyeti veya çağrıdaki son sınıf istisnası.",
    "state": "closed",
    "p": "grant",
    "refs": "ful j",
    "lang": "Program belirler",
    "recommended": "İleri",
    "education": "ABD yüksek lisans kabul ölçütleri, lisans mezuniyeti veya çağrıdaki son sınıf istisnası.",
    "edu": "any",
    "doc": "İlgili çağrının vatandaşlık, dil puanı, ikamet ve önceki ABD deneyimi kuralları; burs kapsamı, sponsorluk ve DS-2019.",
    "note": "11 Kasım 2026 kontrolünde komisyonun T.C. burs listesinde başvuru kapalı görünüyor. Yeni dönem açılırsa ayrı kontrol gerekir."
  },
  {
    "id": "FULBRIGHT-PHD",
    "name": "Fulbright Türkiye · Doktora",
    "code": "J-1",
    "kind": "Burs / program",
    "rule": "Çağrıda kabul edilen önceki dereceler/son sınıf durumu, doktora alanı ve akademik yeterlilik.",
    "state": "closed",
    "p": "grant",
    "refs": "ful j",
    "lang": "Program belirler",
    "recommended": "İleri",
    "education": "Çağrıda kabul edilen önceki dereceler/son sınıf durumu, doktora alanı ve akademik yeterlilik.",
    "edu": "any",
    "doc": "İlgili çağrının vatandaşlık, dil puanı, ikamet ve önceki ABD deneyimi kuralları; burs kapsamı, sponsorluk ve DS-2019.",
    "note": "11 Kasım 2026 kontrolünde komisyonun T.C. burs listesinde başvuru kapalı görünüyor. Yeni dönem açılırsa ayrı kontrol gerekir."
  },
  {
    "id": "FULBRIGHT-SENIOR",
    "name": "Fulbright Türkiye · Akademik araştırma",
    "code": "J-1",
    "kind": "Burs / program",
    "rule": "Kıdemli akademisyen, uygun disiplin, kurum ve araştırma projesi.",
    "state": "closed",
    "p": "grant",
    "refs": "ful j",
    "lang": "Program belirler",
    "recommended": "İleri",
    "education": "Kıdemli akademisyen, uygun disiplin, kurum ve araştırma projesi.",
    "edu": "any",
    "doc": "İlgili çağrının vatandaşlık, dil puanı, ikamet ve önceki ABD deneyimi kuralları; burs kapsamı, sponsorluk ve DS-2019.",
    "note": "11 Kasım 2026 kontrolünde komisyonun T.C. burs listesinde başvuru kapalı görünüyor. Yeni dönem açılırsa ayrı kontrol gerekir."
  },
  {
    "id": "FULBRIGHT-POSTDOC",
    "name": "Fulbright Türkiye · Doktora sonrası araştırma",
    "code": "J-1",
    "kind": "Burs / program",
    "rule": "Son başvuru tarihinden önceki beş yılda tamamlanmış doktora ve uygun araştırma.",
    "state": "closed",
    "p": "grant",
    "refs": "ful j",
    "lang": "Program belirler",
    "recommended": "İleri",
    "education": "Son başvuru tarihinden önceki beş yılda tamamlanmış doktora ve uygun araştırma.",
    "edu": "any",
    "doc": "İlgili çağrının vatandaşlık, dil puanı, ikamet ve önceki ABD deneyimi kuralları; burs kapsamı, sponsorluk ve DS-2019.",
    "note": "11 Kasım 2026 kontrolünde komisyonun T.C. burs listesinde başvuru kapalı görünüyor. Yeni dönem açılırsa ayrı kontrol gerekir."
  },
  {
    "id": "FULBRIGHT-KENNEDY",
    "name": "Fulbright Türkiye · Kennedy Center sahne sanatları ve bilim",
    "code": "J-1",
    "kind": "Burs / program",
    "rule": "Uygun sanatçı, eğitimci veya bilim insanı ve Kennedy Center’da işbirliği projesi.",
    "state": "closed",
    "p": "grant",
    "refs": "ful j",
    "lang": "Program belirler",
    "recommended": "İleri",
    "education": "Uygun sanatçı, eğitimci veya bilim insanı ve Kennedy Center’da işbirliği projesi.",
    "edu": "any",
    "doc": "İlgili çağrının vatandaşlık, dil puanı, ikamet ve önceki ABD deneyimi kuralları; burs kapsamı, sponsorluk ve DS-2019.",
    "note": "11 Kasım 2026 kontrolünde komisyonun T.C. burs listesinde başvuru kapalı görünüyor. Yeni dönem açılırsa ayrı kontrol gerekir."
  },
  {
    "id": "FULBRIGHT-DISS",
    "name": "Fulbright Türkiye · Doktora tezi araştırma",
    "code": "J-1",
    "kind": "Burs / program",
    "rule": "Türkiye’de doktoraya kayıt, tez konusunu belirleme ve çağrıda istenen ders/tez aşaması.",
    "state": "closed",
    "p": "grant",
    "refs": "ful j",
    "lang": "Program belirler",
    "recommended": "İleri",
    "education": "Türkiye’de doktoraya kayıt, tez konusunu belirleme ve çağrıda istenen ders/tez aşaması.",
    "edu": "higherStudent",
    "doc": "İlgili çağrının vatandaşlık, dil puanı, ikamet ve önceki ABD deneyimi kuralları; burs kapsamı, sponsorluk ve DS-2019.",
    "note": "11 Kasım 2026 kontrolünde komisyonun T.C. burs listesinde başvuru kapalı görünüyor. Yeni dönem açılırsa ayrı kontrol gerekir."
  },
  {
    "id": "FULBRIGHT-FLTA",
    "name": "Fulbright Türkiye · Yabancı dil öğretim asistanlığı",
    "code": "J-1",
    "kind": "Burs / program",
    "rule": "Türkçe öğretimi için uygun son sınıf veya kariyerinin başında uygun öğretmen; programın alan ve dil şartları.",
    "state": "closed",
    "p": "grant",
    "refs": "ful j",
    "lang": "Program belirler",
    "recommended": "İleri",
    "education": "Türkçe öğretimi için uygun son sınıf veya kariyerinin başında uygun öğretmen; programın alan ve dil şartları.",
    "edu": "any",
    "doc": "İlgili çağrının vatandaşlık, dil puanı, ikamet ve önceki ABD deneyimi kuralları; burs kapsamı, sponsorluk ve DS-2019.",
    "note": "11 Kasım 2026 kontrolünde komisyonun T.C. burs listesinde başvuru kapalı görünüyor. Yeni dönem açılırsa ayrı kontrol gerekir."
  },
  {
    "id": "FULBRIGHT-TEA",
    "name": "Fulbright Türkiye · Eğitimde mükemmeliyet ve başarı",
    "code": "J-1",
    "kind": "Burs / program",
    "rule": "Ortaokul veya lise düzeyinde tam zamanlı İngilizce öğretmenliği ve gerekli deneyim.",
    "state": "closed",
    "p": "grant",
    "refs": "ful j",
    "lang": "Program belirler",
    "recommended": "İleri",
    "education": "Ortaokul veya lise düzeyinde tam zamanlı İngilizce öğretmenliği ve gerekli deneyim.",
    "edu": "any",
    "doc": "İlgili çağrının vatandaşlık, dil puanı, ikamet ve önceki ABD deneyimi kuralları; burs kapsamı, sponsorluk ve DS-2019.",
    "note": "11 Kasım 2026 kontrolünde komisyonun T.C. burs listesinde başvuru kapalı görünüyor. Yeni dönem açılırsa ayrı kontrol gerekir."
  },
  {
    "id": "FULBRIGHT-HUMPHREY",
    "name": "Fulbright Türkiye · Hubert H. Humphrey",
    "code": "J-1",
    "kind": "Burs / program",
    "rule": "Orta kariyerde kamu hizmeti/liderlik, lisans ve programın mesleki deneyim şartları.",
    "state": "closed",
    "p": "grant",
    "refs": "ful j",
    "lang": "Program belirler",
    "recommended": "İleri",
    "education": "Orta kariyerde kamu hizmeti/liderlik, lisans ve programın mesleki deneyim şartları.",
    "edu": "any",
    "doc": "İlgili çağrının vatandaşlık, dil puanı, ikamet ve önceki ABD deneyimi kuralları; burs kapsamı, sponsorluk ve DS-2019.",
    "note": "11 Kasım 2026 kontrolünde komisyonun T.C. burs listesinde başvuru kapalı görünüyor. Yeni dönem açılırsa ayrı kontrol gerekir."
  },
  {
    "id": "FULBRIGHT-CCI",
    "name": "Fulbright Türkiye · Meslek yüksekokulu öğrenimi",
    "code": "J-1",
    "kind": "Burs / program",
    "rule": "Türkiye’de uygun MYO programına güncel kayıt.",
    "state": "closed",
    "p": "grant",
    "refs": "ful j",
    "lang": "Program belirler",
    "recommended": "İleri",
    "education": "Türkiye’de uygun MYO programına güncel kayıt.",
    "edu": "higherStudent",
    "doc": "İlgili çağrının vatandaşlık, dil puanı, ikamet ve önceki ABD deneyimi kuralları; burs kapsamı, sponsorluk ve DS-2019.",
    "note": "11 Kasım 2026 kontrolünde komisyonun T.C. burs listesinde başvuru kapalı görünüyor. Yeni dönem açılırsa ayrı kontrol gerekir."
  },
  {
    "id": "FULBRIGHT-SIR",
    "name": "Fulbright Türkiye · Scholar-in-Residence",
    "code": "J-1",
    "kind": "Burs / program",
    "rule": "ABD yükseköğretim kurumunun daveti ve kurumsal başvurusu, ders verecek akademisyenin seçimi.",
    "state": "closed",
    "p": "grant",
    "refs": "ful j",
    "lang": "Program belirler",
    "recommended": "İleri",
    "education": "ABD yükseköğretim kurumunun daveti ve kurumsal başvurusu, ders verecek akademisyenin seçimi.",
    "edu": "any",
    "doc": "İlgili çağrının vatandaşlık, dil puanı, ikamet ve önceki ABD deneyimi kuralları; burs kapsamı, sponsorluk ve DS-2019.",
    "note": "11 Kasım 2026 kontrolünde komisyonun T.C. burs listesinde başvuru kapalı görünüyor. Yeni dönem açılırsa ayrı kontrol gerekir."
  },
  {
    "id": "FLEX-TR",
    "name": "FLEX Global Türkiye 2027–28",
    "code": "J-1",
    "kind": "Burs / program",
    "rule": "Türkiye’de uygun lisede 9–11. sınıf, 15.01.2010–15.08.2012 doğum, iki yıllık not şartları, ELTiS, veli izni ve istenen pasaport geçerliliği.",
    "p": "grant",
    "refs": "flex flexOffice",
    "lang": "B1",
    "minLanguage": "Orta",
    "edu": "schoolStudent",
    "ageText": "2027–28 çağrısında doğum 15 Ocak 2010–15 Ağustos 2012; tam yaştan kesin sonuç çıkarılmaz.",
    "education": "Uygun lisede 9, 10 veya 11. sınıf.",
    "state": "cycle",
    "note": "2027–28 alımı için Türkiye ofisi duyurusu ve yerel son gün kontrol edilmelidir.",
    "doc": "Türkiye kontenjanı ve dönem takvimi, seçim/kabul, bursun karşılayacağı kalemler ve ev sahibi kurumun uygun göçmenlik belgesi teyit edildi.",
    "age": [
      14,
      16
    ]
  },
  {
    "id": "YES-TR",
    "name": "Kennedy-Lugar YES · Türkiye dönem kontrolü",
    "code": "J-1",
    "kind": "Burs / program",
    "rule": "Türkiye için ilgili YES döneminde açık ülke kontenjanı ve yerel seçim gerekir. 2027–28 duyurusu FLEX Global’e yönlendiriyor.",
    "p": "grant",
    "state": "unconfirmed",
    "refs": "yes flexOffice",
    "edu": "schoolStudent",
    "doc": "Türkiye kontenjanı ve dönem takvimi, seçim/kabul, bursun karşılayacağı kalemler ve ev sahibi kurumun uygun göçmenlik belgesi teyit edildi."
  },
  {
    "id": "AFS-TR",
    "name": "AFS Türkiye · ABD lise değişimi",
    "code": "J-1 veya okul/sponsor belgesindeki sınıf",
    "kind": "Burs / program",
    "rule": "ABD yerleştirmesi, AFS dönemi, lise ve doğum tarihi ölçütleri, sponsor onayı. Program ücretli veya burslu olabilir.",
    "p": "schoolJ",
    "state": "cycle",
    "refs": "j",
    "extraSource": "https://www.turkkulturvakfi.org.tr/countries/amerika-birlesik-devletleri/",
    "edu": "schoolStudent",
    "lang": "Program belirler",
    "doc": "Türkiye kontenjanı ve dönem takvimi, seçim/kabul, bursun karşılayacağı kalemler ve ev sahibi kurumun uygun göçmenlik belgesi teyit edildi."
  },
  {
    "id": "TECHGIRLS-TR",
    "name": "TechGirls Türkiye",
    "code": "J-1 / sponsor belgesi",
    "kind": "Burs / program",
    "rule": "2026 çağrısında program başında 15–17 yaş, STEM ilgisi olan kız öğrenciler, ileri-orta düzey İngilizce, ikamet ve seyahat geçmişi şartları.",
    "p": "grant",
    "state": "closed",
    "age": [
      15,
      17
    ],
    "refs": "tech",
    "lang": "Program belirler",
    "recommended": "İleri",
    "education": "Programa dönüşte en az bir okul dönemi.",
    "doc": "Türkiye kontenjanı ve dönem takvimi, seçim/kabul, bursun karşılayacağı kalemler ve ev sahibi kurumun uygun göçmenlik belgesi teyit edildi."
  },
  {
    "id": "YTILI-TR",
    "name": "YTILI girişimcilik değişimi",
    "code": "J-1 / sponsor belgesi",
    "kind": "Burs / program",
    "rule": "Türkiye’de vatandaşlık ve ikamet, uygun girişimcilik deneyimi, İngilizce ve güncel çağrının tarih koşulları.",
    "p": "grant",
    "age": [
      25,
      35
    ],
    "state": "unconfirmed",
    "refs": "ytili",
    "lang": "Program belirler",
    "doc": "Türkiye kontenjanı ve dönem takvimi, seçim/kabul, bursun karşılayacağı kalemler ve ev sahibi kurumun uygun göçmenlik belgesi teyit edildi."
  },
  {
    "id": "BFT-TR",
    "name": "Benjamin Franklin Transatlantic Fellowship",
    "code": "J-1 / sponsor belgesi",
    "kind": "Burs / program",
    "rule": "Avrupa gençlik programı; Türkiye için ilgili yılın ülke adaylığı, yaş kesimi ve kontenjanı teyit edilir.",
    "p": "grant",
    "age": [
      16,
      18
    ],
    "state": "unconfirmed",
    "refs": "bft",
    "lang": "Program belirler",
    "doc": "Türkiye kontenjanı ve dönem takvimi, seçim/kabul, bursun karşılayacağı kalemler ve ev sahibi kurumun uygun göçmenlik belgesi teyit edildi.",
    "ageText": "Genel program 16–18 yaş; ilgili seçim döneminin esas aldığı tarih kontrol edilir."
  },
  {
    "id": "YLSY",
    "name": "MEB 1416 / YLSY · ABD yerleşimi",
    "code": "F-1/J-1 (belgeye göre)",
    "kind": "Burs / program",
    "rule": "YLSY çağrısında lisans, yaş, ALES ve alan şartları; ABD için tahsis, okul kabulü, finansman, yüklenme ve dönüş/hizmet yükümlülüğü.",
    "p": "mobile",
    "state": "cycle",
    "edu": "bachelor",
    "education": "Çağrıya uygun lisans.",
    "refs": "meb f",
    "doc": "Türkiye kontenjanı ve dönem takvimi, seçim/kabul, bursun karşılayacağı kalemler ve ev sahibi kurumun uygun göçmenlik belgesi teyit edildi."
  },
  {
    "id": "TUBITAK-2214A",
    "name": "TÜBİTAK 2214-A · ABD’de doktora sırası araştırma",
    "code": "J-1/kurumun belirlediği sınıf",
    "kind": "Burs / program",
    "rule": "Türkiye’de doktora ve programın aşama koşulları, uygun ABD kurumundan davet ve burs döneminde seçim.",
    "p": "mobile",
    "state": "cycle",
    "edu": "higherStudent",
    "education": "Doktora veya çağrıda sayılan eşdeğer program.",
    "refs": "tb1 j",
    "doc": "Türkiye kontenjanı ve dönem takvimi, seçim/kabul, bursun karşılayacağı kalemler ve ev sahibi kurumun uygun göçmenlik belgesi teyit edildi."
  },
  {
    "id": "TUBITAK-2219",
    "name": "TÜBİTAK 2219 · ABD’de doktora sonrası araştırma",
    "code": "J-1/kurumun belirlediği sınıf",
    "kind": "Burs / program",
    "rule": "Doktora veya çağrıda kabul edilen eşdeğer uzmanlık, uygun ABD araştırma kurumu, davet ve güncel çağrı.",
    "p": "mobile",
    "state": "cycle",
    "edu": "bachelor",
    "education": "Doktora veya kabul edilen eşdeğer uzmanlık.",
    "refs": "tb2 j",
    "doc": "Türkiye kontenjanı ve dönem takvimi, seçim/kabul, bursun karşılayacağı kalemler ve ev sahibi kurumun uygun göçmenlik belgesi teyit edildi."
  },
  {
    "id": "F-1-FUNDED",
    "name": "Burslu üniversite / asistanlıkla eğitim",
    "code": "F-1",
    "kind": "Öğrenci vizesi",
    "rule": "SEVP okulundan kabul ve I-20, yazılı burs/asistanlık ve karşılanmayan giderleri karşılayacak kaynak. Çalışma yetkisi verilen göreve ve F-1 kurallarına bağlı.",
    "p": "fundedF",
    "lang": "Okul belirler",
    "refs": "f study sevis"
  },
  {
    "id": "ERASMUS-KA171",
    "name": "Erasmus+ KA171 · ABD kurumuna hareketlilik",
    "code": "J-1/F-1 (belgeye göre)",
    "kind": "Burs / program",
    "rule": "Türk üniversitesi ile ABD kurumu arasında yürürlükte proje ve giden öğrenci kontenjanı, üniversite seçimi, süre, hibe ve kabul.",
    "state": "cycle",
    "p": "mobile",
    "edu": "higherStudent",
    "lang": "Program belirler",
    "refs": "j f",
    "extraSource": "https://www.ua.gov.tr/programlar/firsatlar/ka1-ka171-programla-iliskili-olmayan-ucuncu-ulkelerde-ogrenim/"
  },
  {
    "id": "SOFA-US-OTHER",
    "name": "Kanada vatandaşlığıyla vize muafiyeti / özel sınır hükümleri",
    "code": "INA 212(d)(4) / 8 CFR 212.1",
    "kind": "Seyahat belgesi / muafiyet",
    "rule": "Kanada vatandaşlığı veya mevzuatta sayılan belirli ülke, bölge ve seyahat belgesi koşulları; bazı vize sınıflarında muafiyet işlemez.",
    "p": "unknown",
    "state": "otherNationality",
    "refs": "legal",
    "extraSource": "https://www.ecfr.gov/current/title-8/chapter-I/subchapter-B/part-212/section-212.1"
  },
  {
    "id": "SUSI",
    "name": "Study of the U.S. Institutes",
    "code": "J-1 / sponsor belgesi",
    "kind": "Burs / program",
    "rule": "Öğrenci lideri, öğretmen veya akademisyen grubuna uygun profil ve yerel temsilcilik seçimi. Güncel Türkiye kontenjanı teyit edilmelidir.",
    "p": "grant",
    "state": "unconfirmed",
    "lang": "Program belirler",
    "refs": "j",
    "extraSource": "https://exchanges.state.gov/non-us/program/study-us-institutes"
  }
].map(buildVisa);

// Sayı alanları HTML formundan metin olarak da gelebilir. Boş alan sıfır sayılmaz.
function nonnegativeNumber(value, label) {
  const validType = typeof value === "number" ||
    (typeof value === "string" && /^\d+(?:[.,]\d+)?$/.test(value.trim()));
  const result = validType ? Number(String(value).trim().replace(",", ".")) : NaN;
  if (!Number.isFinite(result) || result < 0) throw new TypeError(label + " negatif olmayan bir sayı olmalı.");
  return result;
}

const englishRank = {"Yok":0, "Başlangıç":1, "Orta":2, "İleri":3};
// Derece, tamamlanmış en yüksek eğitimi belirtir. Yalnız derece bildiren
// kişinin halen başka bir programa kayıtlı olup olmadığı bilinmez.
const educationProfiles = {
  "Öğrenci": {student:true}, "Mezun": {}, "Fark etmez": {},
  "Öğrenci değil": {student:false},
  "Lise öğrencisi": {student:true, enrollment:"school", degree:0},
  "Üniversite öğrencisi": {student:true, enrollment:"higher", degree:1},
  "Lisansüstü öğrencisi": {student:true, enrollment:"higher", degree:3},
  "Lise altı": {degree:0}, "Lise mezunu": {degree:1},
  "Ön lisans mezunu": {degree:2}, "Lisans mezunu": {degree:3},
  "Yüksek lisans mezunu": {degree:4}, "Doktora mezunu": {degree:5}
};

function educationFit(rule, profile) {
  if (rule === "any") return true;
  if (rule === "higherStudent" || rule === "schoolStudent") {
    if (profile.student === false) return false;
    if (!profile.enrollment) return null;
    return profile.enrollment === (rule === "higherStudent" ? "higher" : "school");
  }
  if (profile.degree === undefined) return null;
  // Lisans okuyan kişinin daha önce başka bir lisans bitirmiş olması mümkündür.
  if (rule === "bachelor" && profile.enrollment === "higher" && profile.degree < 3) return null;
  return profile.degree >= (rule === "bachelor" ? 3 : 1);
}

function budgetLimit(value) {
  if (value === "Düşük") return {amount:2000, exclusive:true};
  if (value === "Orta") return {amount:10000, exclusive:false};
  if (value === "Yüksek" || value === "Sınırsız") return {amount:Infinity, exclusive:false};
  return {amount:nonnegativeNumber(value, "maxBudget"), exclusive:false};
}

function aboveLimit(value, limit) {
  return limit.exclusive ? value >= limit.amount : value > limit.amount;
}

function caseRange(value, label) {
  if (value === undefined) return null;
  const range = Array.isArray(value) ? value : [value,value];
  if (range.length !== 2) throw new TypeError(label + " iki uç değer içermeli.");
  const [low,high] = range.map(item => nonnegativeNumber(item,label));
  if (low > high) throw new RangeError(label + " alt sınırı üst sınırı aşamaz.");
  return [low,high];
}

// Tercih bir üst sınırdır. Hiç kesişmeyen senaryo planlama nedeniyle elenir.
// Belgeli burs, okul teklifi veya randevu bilgisi varsayılan aralığın yerini alır.
function checkRange(label, scenario, individual, limit, missing, blocked) {
  if (limit.amount === Infinity) return;
  const [low,high] = individual || scenario;
  if (low === null || high === null) {
    missing.push(label + " için kişisel tahmin gerekiyor.");
  } else if (aboveLimit(low,limit)) {
    const reason = label + " alt sınırı (" + low + ") tercihi aşıyor.";
    blocked.push(individual ? reason : "Örnek plana göre elendi: " + reason);
  } else if (aboveLimit(high,limit)) {
    missing.push(label + " aralığının yalnız bir bölümü tercihe uyuyor.");
  } else if (!individual) {
    missing.push(label + " örnek planda uyuyor; kişisel aralık teyidi gerekiyor.");
  }
}

// İkinci argüman isteğe bağlıdır ve yalnız doğrulanmış dosya bilgileri içindir.
// Örn. caseFiles["B-2"] = {facts:{basis:true, documents:true, review:true},
//                          costUsd:[250,600], timeMonths:[3,6]}.
// 'Kesin' beş tercih + veri setindeki belge koşullarının ön eşleşmesidir.
// Kararı konsolosluk/DHS verir. Gelecekteki süre bir tahmindir.
function filterVisas({age,educationStatus,englishLevel,maxBudget = "Sınırsız",maxTime = "Sınırsız"}, caseFiles = {}) {
  const years = nonnegativeNumber(age,"age");
  if (!Number.isSafeInteger(years)) throw new TypeError("age tamamlanmış tam yıl olmalı.");
  if (!Object.hasOwn(educationProfiles,educationStatus)) throw new TypeError("Geçersiz educationStatus.");
  if (!Object.hasOwn(englishRank,englishLevel)) throw new TypeError("Geçersiz englishLevel.");
  const money = budgetLimit(maxBudget);
  const time = {amount:maxTime === "Sınırsız" ? Infinity : nonnegativeNumber(maxTime,"maxTime"), exclusive:false};
  const result = {kesin:[], sartli:[], elenen:[], duyurular:visaData.filter(v => v.notice)};
  for (const visa of visaData) {
    const {age:ages,english,education,facts} = visa.eligibility;
    const file = caseFiles?.[visa.id] ?? {};
    const confirmed = file.facts || {};
    const blocked = [], missing = [];
    if (["closed","paused","domestic"].includes(visa.availability) ||
        (visa.availability === "otherNationality" && confirmed.extraNationality !== true)) {
      result.elenen.push({visa,status:availabilityLabels[visa.availability],reasons:[availabilityLabels[visa.availability]]});
      continue;
    }
    if (visa.availability === "unconfirmed") missing.push(availabilityLabels.unconfirmed);
    if ((ages.min !== null && years < ages.min) || (ages.max !== null && years > ages.max)) blocked.push("Yaş aralığının dışında.");
    if (english.suggested && englishRank[englishLevel] < englishRank[english.suggested] && confirmed.language !== true) missing.push("Önerilen dil düzeyi " + english.suggested + "; sponsorun değerlendirmesi gerekli.");
    if (english.minimum && englishRank[englishLevel] < englishRank[english.minimum]) blocked.push("Programın İngilizce alt sınırı karşılanmıyor.");
    const fit = educationFit(education.rule, educationProfiles[educationStatus]);
    if (fit === false) blocked.push("Eğitim şartı karşılanmıyor: " + education.detail);
    if (fit === null && confirmed.education !== true) missing.push("Eğitim ayrıntısı gerekiyor: " + education.detail);
    if (confirmed.education === false && education.rule !== "any") blocked.push("Dosyada eğitim şartı karşılanmıyor.");
    for (const [key,description] of Object.entries(facts)) {
      if (confirmed[key] === false) blocked.push(description);
      else if (confirmed[key] !== true) missing.push(description);
    }
    if (aboveLimit(visa.cost.bindingFloorUsd,money)) blocked.push("Bağlayıcı sermaye/katkı bütçeyi aşıyor.");
    const cost = caseRange(file.costUsd, "costUsd");
    if (cost && cost[0] < visa.cost.bindingFloorUsd) throw new RangeError(visa.id + " bütçesi bağlayıcı tabanın altında.");
    checkRange("Bütçe (USD)",visa.cost.planningRangeUsd,cost,money,missing,blocked);
    checkRange("Süre (ay)",visa.time.planningRangeMonths,caseRange(file.timeMonths,"timeMonths"),time,missing,blocked);
    if (blocked.length) result.elenen.push({visa,status:"Elendi",reasons:blocked});
    else if (missing.length) result.sartli.push({visa,status:"Şartlı Başvurulabilir",reasons:missing});
    else result.kesin.push({visa,status:"Kesin Başvurulabilir",reasons:[]});
  }
  return result;
}

// Profil doldurulmadan çağrılır. Filtrelerin yeniden çizildiği kapsayıcıdan
// ayrı bir kapsayıcı kullanılır. Kullanıcı girdisi HTML olarak işlenmez.
function renderVisaNotices(container) {
  const doc = container.ownerDocument;
  const cards = visaData.filter(visa => visa.notice).map(visa => {
    const {notice} = visa;
    const card = doc.createElement("article");
    card.className = "dv-notice";
    card.lang = "tr";
    card.setAttribute("aria-label", visa.name);
    card.style.cssText = "background:#fff5f4;border:1px solid #e5afaa;border-left:5px solid #a32020;border-radius:8px;padding:1rem 1.2rem;color:#302221";
    const status = doc.createElement("strong");
    status.style.cssText = "display:block;color:#991b1b;font-size:1.1rem";
    status.textContent = notice.title;
    const title = doc.createElement("h2");
    title.textContent = visa.name;
    const body = doc.createElement("p");
    body.textContent = notice.body;
    const date = doc.createElement("time");
    date.dateTime = notice.asOf;
    date.textContent = "Son kontrol " + notice.asOf.split("-").reverse().join(".");
    const court = doc.createElement("a");
    court.href = notice.source;
    court.target = "_blank";
    court.rel = "noopener noreferrer";
    court.textContent = "Temyiz kararı";
    const agency = doc.createElement("a");
    agency.href = notice.agencySource;
    agency.target = "_blank";
    agency.rel = "noopener noreferrer";
    agency.textContent = "ABD Dışişleri duyurusu";
    card.append(status,title,body,date," · ",court," · ",agency);
    return card;
  });
  container.replaceChildren(...cards);
}

const AmerikaRotam = {visaData, catalogInfo, filterVisas, renderVisaNotices, educationProfiles, englishRank, availabilityLabels};
if (typeof module !== "undefined" && module.exports) module.exports = AmerikaRotam;
