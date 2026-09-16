"use strict";

/* =========================================================
   MAKKAH DELIVERY HUB
   COMPLETE ENGLISH / ARABIC LANGUAGE SYSTEM
   Works with the current index.html
   ========================================================= */

const WHATSAPP_NUMBER = "966550865064";
const LANGUAGE_KEY = "makkahDeliveryHubLanguage";


/* =========================================================
   TRANSLATION DATA
   ========================================================= */

const EN = {
  langButton: "العربية",

  navWhatsApp: "WhatsApp",

  heroEyebrow: "FOOD DELIVERY IN MAKKAH",
  heroTitle: "Food Delivery in Makkah",
  heroText:
    "Order your favorite food from restaurants in Makkah and get it delivered directly to your hotel or location.",
  heroPoints: [
    "✓ Restaurant Pickup",
    "✓ Hotel Delivery",
    "✓ Central Makkah"
  ],
  heroOrder: "Order Food",
  heroWhatsApp: "WhatsApp Us",
  heroFee:
    "Service fee starts from 30 SAR. Food cost is separate.",

  heroCardTitle: "Restaurant → Hotel",
  heroCardText:
    "We purchase your food and deliver it to your hotel or location in Makkah.",
  heroBadge: "Fast • Simple • Convenient",

  localKicker: "MAKKAH DELIVERY SERVICE",
  localTitle: "Food Delivery in Makkah for Hotels & Visitors",
  localIntro:
    "Looking for reliable food delivery in Makkah? Makkah Delivery Hub helps you order food from your favorite restaurants and get it delivered directly to your hotel or location.",
  localParagraphs: [
    "We provide convenient Makkah food delivery for visitors, pilgrims and hotel guests. You can request food from popular restaurants or choose another restaurant in Makkah. We purchase your food and deliver it directly to your hotel or meeting point.",
    "Our delivery service covers popular central areas including Clock Tower, Ajyad, Jabal Omar, Ibrahim Al Khalil and Central Makkah.",
    "Need hotel food delivery in Makkah near Masjid al-Haram? Send us your restaurant name, food order, hotel name, room number and location through WhatsApp. Our service fee starts from 30 SAR.",
    "We also provide restaurant pickup and delivery in Makkah when you want food from a restaurant that does not offer convenient delivery to your hotel."
  ],

  howKicker: "HOW IT WORKS",
  howTitle: "How Makkah Food Delivery Works",
  howText: "Order in a few simple steps through WhatsApp.",
  steps: [
    ["Choose", "Choose your favorite restaurant and food."],
    ["Send", "Send the restaurant and order details through WhatsApp."],
    ["We Buy", "We purchase your food from the requested restaurant."],
    ["We Deliver", "We deliver your food to your hotel or location in Makkah."]
  ],

  ctaKicker: "READY TO ORDER?",
  ctaTitle: "Get Your Food Delivered in Makkah",
  ctaText: "Send your order on WhatsApp and we will confirm the details.",
  ctaButton: "Order on WhatsApp",

  restaurantsKicker: "POPULAR CHOICES",
  restaurantsTitle: "Popular Restaurants in Makkah",
  restaurantsText:
    "You can also request food from another restaurant in Makkah.",

  restaurants: [
    ["Al Baik", "البيك"],
    ["McDonald's", "ماكدونالدز"],
    ["Al Tazaj", "الطازج"],
    ["Kudu", "كودو"],
    ["Al Romansiah", "الرومانسية"],
    ["Other Restaurant", "مطعم آخر"]
  ],

  orderKicker: "PLACE YOUR ORDER",
  orderTitle: "Order Food Delivery in Makkah",
  orderText:
    "Fill in the details below. Your order will open in WhatsApp.",

  formLabels: [
    "Your Name",
    "Restaurant",
    "Food Order",
    "Hotel Name",
    "Room / Meeting Point",
    "Google Maps Location",
    "WhatsApp Number",
    "Notes (Optional)"
  ],

  placeholders: [
    "Enter your name",
    "Select restaurant",
    "Write your food items and quantities",
    "Hotel name",
    "Room number or meeting point",
    "Paste your Google Maps link",
    "+966...",
    "Any special instructions"
  ],

  submit: "Send Order on WhatsApp",

  formNote:
    "Service fee starts from 30 SAR. Food cost is separate.",

  areasKicker: "SERVICE AREAS",
  areasTitle: "Food Delivery Areas in Makkah",
  areasText:
    "We serve customer locations and hotels in central Makkah.",

  areas: [
    "Clock Tower",
    "Ajyad",
    "Jabal Omar",
    "Ibrahim Al Khalil",
    "Central Makkah"
  ],

  areaParagraphs: [
    "Our Makkah food delivery service covers hotels and customer locations around the central Makkah area, including Clock Tower, Ajyad, Jabal Omar and Ibrahim Al Khalil.",
    "Staying near Masjid al-Haram? Send us your hotel name, room number and Google Maps location and we will arrange your restaurant pickup and delivery."
  ],

  faqKicker: "FAQ",
  faqTitle: "Frequently Asked Questions",
  faqText:
    "Common questions about food delivery in Makkah.",

  faq: [
    [
      "Do you provide food delivery in Makkah?",
      "Yes. Makkah Delivery Hub provides restaurant pickup and food delivery to hotels and customer locations in Makkah."
    ],
    [
      "Can I order food from a restaurant that is not listed?",
      "Yes. Send us the restaurant name and your food order through WhatsApp and we will check the request."
    ],
    [
      "Do you deliver food to hotels near Masjid al-Haram?",
      "Yes. We serve hotels and customer locations in central Makkah, including areas around the Clock Tower, Ajyad, Jabal Omar and Ibrahim Al Khalil."
    ],
    [
      "How much is the delivery service fee?",
      "The service fee starts from 30 SAR. The cost of the food is separate and depends on the restaurant and order."
    ],
    [
      "How do I place a food delivery order?",
      "Send your restaurant name, food order, hotel or location details and room number through WhatsApp. We will confirm the order and delivery details."
    ],
    [
      "Can pilgrims use Makkah Delivery Hub?",
      "Yes. Our service is designed for visitors, pilgrims and hotel guests who need convenient restaurant food delivery in Makkah."
    ],
    [
      "Do you buy the food from the restaurant for me?",
      "Yes. We can purchase the requested food from the restaurant and deliver it to your hotel or location. Food cost is separate from the service fee."
    ],
    [
      "What information do you need for hotel delivery?",
      "Please provide your hotel name, room number or meeting point, and your Google Maps location when possible."
    ]
  ],

  finalTitle: "Need Food Delivered in Makkah?",
  finalText:
    "Send your restaurant and hotel details on WhatsApp.",
  finalButton: "WhatsApp Makkah Delivery Hub",

  footerDescription:
    "Food purchasing, restaurant pickup and hotel delivery service in Makkah.",

  quickLinks: "Quick Links",
  howLink: "How It Works",
  restaurantsLink: "Restaurants",
  orderLink: "Order Food",
  areasLink: "Delivery Areas",
  faqLink: "FAQ",

  contact: "Contact",
  website: "Website",

  copyright: "© 2026 Makkah Delivery Hub. All rights reserved.",

  floatingWhatsApp: "WhatsApp",

  alertName: "Please enter your name.",
  alertRestaurant: "Please select a restaurant.",
  alertFood: "Please enter your food order.",
  alertHotel: "Please enter your hotel name.",
  alertRoom: "Please enter your room number or meeting point.",
  alertLocation: "Please enter your Google Maps location.",
  alertPhone: "Please enter your WhatsApp number."
};


const AR = {
  langButton: "English",

  navWhatsApp: "واتساب",

  heroEyebrow: "توصيل الطعام في مكة",
  heroTitle: "توصيل الطعام في مكة",
  heroText:
    "اطلب طعامك المفضل من المطاعم في مكة وسنقوم بتوصيله مباشرة إلى الفندق أو الموقع الذي تحدده.",
  heroPoints: [
    "✓ استلام الطلب من المطعم",
    "✓ توصيل إلى الفندق",
    "✓ وسط مكة"
  ],
  heroOrder: "اطلب الطعام",
  heroWhatsApp: "تواصل معنا عبر واتساب",
  heroFee:
    "رسوم الخدمة تبدأ من 30 ريال. سعر الطعام منفصل.",

  heroCardTitle: "المطعم → الفندق",
  heroCardText:
    "نقوم بشراء الطعام وتوصيله إلى الفندق أو الموقع الذي تحدده في مكة.",
  heroBadge: "سريع • بسيط • مريح",

  localKicker: "خدمة توصيل الطعام في مكة",
  localTitle: "توصيل الطعام في مكة للفنادق والزوار",
  localIntro:
    "هل تبحث عن خدمة موثوقة لتوصيل الطعام في مكة؟ تساعدك Makkah Delivery Hub على طلب الطعام من مطعمك المفضل وتوصيله مباشرة إلى الفندق أو الموقع الذي تحدده.",
  localParagraphs: [
    "نوفر خدمة توصيل الطعام في مكة للزوار والمعتمرين ونزلاء الفنادق. يمكنك طلب الطعام من المطاعم المشهورة أو اختيار مطعم آخر في مكة. نقوم بشراء الطعام وتوصيله مباشرة إلى الفندق أو نقطة الالتقاء.",
    "تغطي خدمة التوصيل المناطق المركزية المشهورة مثل برج الساعة وأجياد وجبل عمر وإبراهيم الخليل ووسط مكة.",
    "تحتاج إلى توصيل الطعام إلى فندق بالقرب من المسجد الحرام؟ أرسل اسم المطعم وطلب الطعام واسم الفندق ورقم الغرفة والموقع عبر واتساب. تبدأ رسوم الخدمة من 30 ريال.",
    "نوفر أيضاً خدمة استلام الطلب من المطعم وتوصيله في مكة عندما لا يكون توصيل المطعم مناسباً إلى الفندق."
  ],

  howKicker: "طريقة الطلب",
  howTitle: "كيف تعمل خدمة توصيل الطعام في مكة",
  howText: "اطلب طعامك من خلال واتساب في خطوات بسيطة.",
  steps: [
    ["اختر", "اختر مطعمك المفضل والطعام الذي تريده."],
    ["أرسل", "أرسل اسم المطعم وتفاصيل الطلب عبر واتساب."],
    ["نشتري", "نقوم بشراء الطعام من المطعم المطلوب."],
    ["نوصل", "نقوم بتوصيل الطعام إلى الفندق أو الموقع في مكة."]
  ],

  ctaKicker: "جاهز للطلب؟",
  ctaTitle: "احصل على طعامك في مكة",
  ctaText: "أرسل طلبك عبر واتساب وسنؤكد التفاصيل.",
  ctaButton: "اطلب عبر واتساب",

  restaurantsKicker: "الخيارات المشهورة",
  restaurantsTitle: "مطاعم مشهورة في مكة",
  restaurantsText:
    "يمكنك أيضاً طلب الطعام من أي مطعم آخر في مكة.",

  restaurants: [
    ["البيك", "Al Baik"],
    ["ماكدونالدز", "McDonald's"],
    ["الطازج", "Al Tazaj"],
    ["كودو", "Kudu"],
    ["الرومانسية", "Al Romansiah"],
    ["مطعم آخر", "Other Restaurant"]
  ],

  orderKicker: "ضع طلبك",
  orderTitle: "طلب توصيل الطعام في مكة",
  orderText:
    "أدخل البيانات التالية وسيتم فتح طلبك في واتساب.",

  formLabels: [
    "اسمك",
    "المطعم",
    "طلب الطعام",
    "اسم الفندق",
    "رقم الغرفة / نقطة الالتقاء",
    "موقع خرائط Google",
    "رقم واتساب",
    "ملاحظات (اختياري)"
  ],

  placeholders: [
    "أدخل اسمك",
    "اختر المطعم",
    "اكتب أصناف الطعام والكميات",
    "اسم الفندق",
    "رقم الغرفة أو نقطة الالتقاء",
    "الصق رابط خرائط Google",
    "+966...",
    "أي تعليمات خاصة"
  ],

  submit: "إرسال الطلب عبر واتساب",

  formNote:
    "رسوم الخدمة تبدأ من 30 ريال. سعر الطعام منفصل.",

  areasKicker: "مناطق الخدمة",
  areasTitle: "مناطق توصيل الطعام في مكة",
  areasText:
    "نخدم الفنادق ومواقع العملاء في وسط مكة.",

  areas: [
    "برج الساعة",
    "أجياد",
    "جبل عمر",
    "إبراهيم الخليل",
    "وسط مكة"
  ],

  areaParagraphs: [
    "تغطي خدمة توصيل الطعام في مكة الفنادق ومواقع العملاء في المنطقة المركزية، بما في ذلك برج الساعة وأجياد وجبل عمر وإبراهيم الخليل.",
    "هل تقيم بالقرب من المسجد الحرام؟ أرسل اسم الفندق ورقم الغرفة وموقع خرائط Google وسنقوم بترتيب استلام الطلب من المطعم وتوصيله."
  ],

  faqKicker: "الأسئلة الشائعة",
  faqTitle: "الأسئلة الشائعة",
  faqText:
    "أسئلة شائعة حول توصيل الطعام في مكة.",

  faq: [
    [
      "هل توفرون توصيل الطعام في مكة؟",
      "نعم. توفر Makkah Delivery Hub خدمة استلام الطعام من المطاعم وتوصيله إلى الفنادق ومواقع العملاء في مكة."
    ],
    [
      "هل يمكنني الطلب من مطعم غير موجود في القائمة؟",
      "نعم. أرسل اسم المطعم وطلب الطعام عبر واتساب وسنتحقق من إمكانية الطلب."
    ],
    [
      "هل توصلون الطعام إلى الفنادق بالقرب من المسجد الحرام؟",
      "نعم. نخدم الفنادق ومواقع العملاء في وسط مكة، بما في ذلك المناطق حول برج الساعة وأجياد وجبل عمر وإبراهيم الخليل."
    ],
    [
      "كم تبلغ رسوم خدمة التوصيل؟",
      "تبدأ رسوم الخدمة من 30 ريال. سعر الطعام منفصل ويعتمد على المطعم والطلب."
    ],
    [
      "كيف يمكنني طلب توصيل الطعام؟",
      "أرسل اسم المطعم وطلب الطعام وبيانات الفندق أو الموقع ورقم الغرفة عبر واتساب. سنؤكد تفاصيل الطلب والتوصيل."
    ],
    [
      "هل يمكن للمعتمرين استخدام Makkah Delivery Hub؟",
      "نعم. خدمتنا مخصصة للزوار والمعتمرين ونزلاء الفنادق الذين يحتاجون إلى توصيل الطعام من المطاعم في مكة."
    ],
    [
      "هل تقومون بشراء الطعام من المطعم نيابة عني؟",
      "نعم. يمكننا شراء الطعام المطلوب من المطعم وتوصيله إلى الفندق أو الموقع. سعر الطعام منفصل عن رسوم الخدمة."
    ],
    [
      "ما المعلومات المطلوبة لتوصيل الطعام إلى الفندق؟",
      "يرجى إرسال اسم الفندق ورقم الغرفة أو نقطة الالتقاء وموقع خرائط Google عند الإمكان."
    ]
  ],

  finalTitle: "تحتاج إلى توصيل الطعام في مكة؟",
  finalText:
    "أرسل اسم المطعم وبيانات الفندق عبر واتساب.",
  finalButton: "واتساب Makkah Delivery Hub",

  footerDescription:
    "خدمة شراء الطعام واستلام الطلب من المطاعم وتوصيله إلى الفنادق في مكة.",

  quickLinks: "روابط سريعة",
  howLink: "طريقة الطلب",
  restaurantsLink: "المطاعم",
  orderLink: "طلب الطعام",
  areasLink: "مناطق التوصيل",
  faqLink: "الأسئلة الشائعة",

  contact: "تواصل معنا",
  website: "الموقع الإلكتروني",

  copyright: "© 2026 Makkah Delivery Hub. جميع الحقوق محفوظة.",

  floatingWhatsApp: "واتساب",

  alertName: "يرجى إدخال اسمك.",
  alertRestaurant: "يرجى اختيار المطعم.",
  alertFood: "يرجى إدخال طلب الطعام.",
  alertHotel: "يرجى إدخال اسم الفندق.",
  alertRoom: "يرجى إدخال رقم الغرفة أو نقطة الالتقاء.",
  alertLocation: "يرجى إدخال موقع خرائط Google.",
  alertPhone: "يرجى إدخال رقم واتساب."
};


/* =========================================================
   HELPERS
   ========================================================= */

function text(element, value) {
  if (element) {
    element.textContent = value;
  }
}


function html(element, value) {
  if (element) {
    element.innerHTML = value;
  }
}


function all(selector) {
  return Array.from(document.querySelectorAll(selector));
}


function currentLanguage() {
  return localStorage.getItem(LANGUAGE_KEY) === "ar"
    ? "ar"
    : "en";
}


/* =========================================================
   WHATSAPP LINKS
   ========================================================= */

function setupWhatsAppLinks() {

  all('a[href*="wa.me"]').forEach(function(link) {

    link.href = "https://wa.me/" + WHATSAPP_NUMBER;

    if (!link.href.includes("wa.me")) {
      link.href = "https://wa.me/" + WHATSAPP_NUMBER;
    }

  });

}


/* =========================================================
   APPLY LANGUAGE
   ========================================================= */

function applyLanguage(language) {

  const isArabic = language === "ar";
  const t = isArabic ? AR : EN;

  document.documentElement.lang = language;
  document.documentElement.dir = isArabic ? "rtl" : "ltr";

  document.body.classList.toggle("rtl", isArabic);

  localStorage.setItem(LANGUAGE_KEY, language);


  /* -------------------------------------------------------
     Header
     ------------------------------------------------------- */

  text(
    document.getElementById("languageToggle"),
    t.langButton
  );

  const navWhatsApp =
    document.querySelector(".nav-whatsapp");

  text(navWhatsApp, t.navWhatsApp);


  /* -------------------------------------------------------
     Hero
     ------------------------------------------------------- */

  text(
    document.getElementById("heroEyebrow"),
    t.heroEyebrow
  );

  text(
    document.getElementById("heroTitle"),
    t.heroTitle
  );

  text(
    document.getElementById("heroText"),
    t.heroText
  );


  const heroPoints =
    all(".hero-points span");

  heroPoints.forEach(function(item, index) {

    if (t.heroPoints[index]) {
      text(item, t.heroPoints[index]);
    }

  });


  text(
    document.getElementById("heroOrderBtn"),
    t.heroOrder
  );

  text(
    document.getElementById("heroWhatsAppBtn"),
    t.heroWhatsApp
  );


  /* Preserve strong 30 SAR formatting */

  const heroFee =
    document.getElementById("heroFee");

  if (heroFee) {

    if (isArabic) {
      heroFee.innerHTML =
        "رسوم الخدمة تبدأ من <strong>30 ريال</strong>. سعر الطعام منفصل.";
    } else {
      heroFee.innerHTML =
        "Service fee starts from <strong>30 SAR</strong>. Food cost is separate.";
    }

  }


  /* Hero card */

  const heroCard =
    document.querySelector(".hero-card");

  if (heroCard) {

    const h2 = heroCard.querySelector("h2");
    const p = heroCard.querySelector("p");
    const badge = heroCard.querySelector(".mini-badge");

    text(h2, t.heroCardTitle);
    text(p, t.heroCardText);
    text(badge, t.heroBadge);

  }


  /* -------------------------------------------------------
     Local SEO section
     ------------------------------------------------------- */

  const localSection =
    document.querySelector(".local-seo-section");

  if (localSection) {

    const kicker =
      localSection.querySelector(".section-kicker");

    const h2 =
      localSection.querySelector("h2");

    const intro =
      localSection.querySelector(".section-head p");

    const paragraphs =
      localSection.querySelectorAll(".local-seo-content p");

    text(kicker, t.localKicker);
    text(h2, t.localTitle);
    text(intro, t.localIntro);

    paragraphs.forEach(function(p, index) {

      if (t.localParagraphs[index]) {

        /*
          Keep the important SEO strong text.
          The complete sentence is translated.
        */

        text(p, t.localParagraphs[index]);

      }

    });

  }


  /* -------------------------------------------------------
     How it works
     ------------------------------------------------------- */

  const howSection =
    document.querySelector(".how-section");

  if (howSection) {

    const kicker =
      howSection.querySelector(".section-kicker");

    const h2 =
      howSection.querySelector("h2");

    const intro =
      howSection.querySelector(".section-head p");

    text(kicker, t.howKicker);
    text(h2, t.howTitle);
    text(intro, t.howText);


    const cards =
      howSection.querySelectorAll(".step-card");

    cards.forEach(function(card, index) {

      const title =
        card.querySelector("h3");

      const paragraph =
        card.querySelector("p");

      if (t.steps[index]) {

        text(title, t.steps[index][0]);
        text(paragraph, t.steps[index][1]);

      }

    });

  }


  /* -------------------------------------------------------
     CTA section
     ------------------------------------------------------- */

  const cta =
    document.querySelector(".cta-section");

  if (cta) {

    text(
      cta.querySelector(".section-kicker"),
      t.ctaKicker
    );

    text(
      cta.querySelector("h2"),
      t.ctaTitle
    );

    text(
      cta.querySelector("p"),
      t.ctaText
    );

    text(
      cta.querySelector("a"),
      t.ctaButton
    );

  }


  /* -------------------------------------------------------
     Restaurants
     ------------------------------------------------------- */

  const restaurantsSection =
    document.querySelector(".restaurants-section");

  if (restaurantsSection) {

    text(
      restaurantsSection.querySelector(".section-kicker"),
      t.restaurantsKicker
    );

    text(
      restaurantsSection.querySelector("h2"),
      t.restaurantsTitle
    );

    text(
      restaurantsSection.querySelector(".section-head p"),
      t.restaurantsText
    );


    const cards =
      restaurantsSection.querySelectorAll(".restaurant-card");

    cards.forEach(function(card, index) {

      const h3 =
        card.querySelector("h3");

      const p =
        card.querySelector("p");

      if (t.restaurants[index]) {

        text(h3, t.restaurants[index][0]);
        text(p, t.restaurants[index][1]);

      }

    });

  }


  /* -------------------------------------------------------
     Order form
     ------------------------------------------------------- */

  const orderSection =
    document.querySelector(".order-section");

  if (orderSection) {

    text(
      orderSection.querySelector(".section-kicker"),
      t.orderKicker
    );

    text(
      orderSection.querySelector("h2"),
      t.orderTitle
    );

    text(
      orderSection.querySelector(".section-head p"),
      t.orderText
    );


    const labels =
      orderSection.querySelectorAll("label");

    labels.forEach(function(label, index) {

      if (t.formLabels[index]) {
        text(label, t.formLabels[index]);
      }

    });


    const inputs =
      orderSection.querySelectorAll(
        "input, textarea, select"
      );


    inputs.forEach(function(input, index) {

      if (
        input.tagName.toLowerCase() === "select"
      ) {

        const first =
          input.querySelector("option[value='']");

        if (first) {
          text(first, t.placeholders[index]);
        }

      } else {

        if (t.placeholders[index]) {
          input.placeholder =
            t.placeholders[index];
        }

      }

    });


    const submit =
      orderSection.querySelector(
        "button[type='submit']"
      );

    text(submit, t.submit);


    const formNote =
      orderSection.querySelector(".form-note");

    if (formNote) {

      if (isArabic) {
        formNote.innerHTML =
          "رسوم الخدمة تبدأ من <strong>30 ريال</strong>. سعر الطعام منفصل.";
      } else {
        formNote.innerHTML =
          "Service fee starts from <strong>30 SAR</strong>. Food cost is separate.";
      }

    }

  }


  /* -------------------------------------------------------
     Restaurant select options
     ------------------------------------------------------- */

  const select =
    document.getElementById("restaurant");

  if (select) {

    const options =
      select.querySelectorAll("option");

    options.forEach(function(option) {

      const value =
        option.value.toLowerCase();

      if (!value) {

        text(
          option,
          t.placeholders[1]
        );

        return;

      }

      if (value.includes("al baik")) {

        text(
          option,
          isArabic
            ? "البيك"
            : "Al Baik - البيك"
        );

      } else if (value.includes("mcdonald")) {

        text(
          option,
          isArabic
            ? "ماكدونالدز"
            : "McDonald's - ماكدونالدز"
        );

      } else if (value.includes("tazaj")) {

        text(
          option,
          isArabic
            ? "الطازج"
            : "Al Tazaj - الطازج"
        );

      } else if (value.includes("kudu")) {

        text(
          option,
          isArabic
            ? "كودو"
            : "Kudu - كودو"
        );

      } else if (value.includes("romansiah")) {

        text(
          option,
          isArabic
            ? "الرومانسية"
            : "Al Romansiah - الرومانسية"
        );

      } else if (value.includes("other")) {

        text(
          option,
          isArabic
            ? "مطعم آخر"
            : "Other Restaurant - مطعم آخر"
        );

      }

    });

  }


  /* -------------------------------------------------------
     Areas
     ------------------------------------------------------- */

  const areasSection =
    document.querySelector(".areas-section");

  if (areasSection) {

    text(
      areasSection.querySelector(".section-kicker"),
      t.areasKicker
    );

    text(
      areasSection.querySelector("h2"),
      t.areasTitle
    );

    text(
      areasSection.querySelector(".section-head p"),
      t.areasText
    );


    const cards =
      areasSection.querySelectorAll(".area-card");

    cards.forEach(function(card, index) {

      const span =
        card.querySelector("span");

      if (span && t.areas[index]) {
        text(span, t.areas[index]);
      }

    });


    const localText =
      areasSection.querySelectorAll(
        ".local-area-text p"
      );

    localText.forEach(function(p, index) {

      if (t.areaParagraphs[index]) {
        text(p, t.areaParagraphs[index]);
      }

    });

  }


  /* -------------------------------------------------------
     FAQ
     ------------------------------------------------------- */

  const faqSection =
    document.querySelector(".faq-section");

  if (faqSection) {

    text(
      faqSection.querySelector(".section-kicker"),
      t.faqKicker
    );

    text(
      faqSection.querySelector("h2"),
      t.faqTitle
    );

    text(
      faqSection.querySelector(".section-head p"),
      t.faqText
    );


    const items =
      faqSection.querySelectorAll(".faq-item");

    items.forEach(function(item, index) {

      const question =
        item.querySelector("summary");

      const answer =
        item.querySelector(".faq-answer");

      if (t.faq[index]) {

        text(question, t.faq[index][0]);
        text(answer, t.faq[index][1]);

      }

    });

  }


  /* -------------------------------------------------------
     Final CTA
     ------------------------------------------------------- */

  const finalCTA =
    document.querySelector(".final-cta");

  if (finalCTA) {

    text(
      finalCTA.querySelector("h2"),
      t.finalTitle
    );

    text(
      finalCTA.querySelector("p"),
      t.finalText
    );

    text(
      finalCTA.querySelector("a"),
      t.finalButton
    );

  }


  /* -------------------------------------------------------
     Footer
     ------------------------------------------------------- */

  const footer =
    document.querySelector(".site-footer");

  if (footer) {

    const paragraphs =
      footer.querySelectorAll(
        ".footer-grid > div:first-child p"
      );

    if (paragraphs[0]) {
      text(
        paragraphs[0],
        t.footerDescription
      );
    }


    const footerColumns =
      footer.querySelectorAll(
        ".footer-grid > div"
      );


    if (footerColumns[1]) {

      text(
        footerColumns[1].querySelector("h3"),
        t.quickLinks
      );

      const links =
        footerColumns[1].querySelectorAll("a");

      const linkTexts = [
        t.howLink,
        t.restaurantsLink,
        t.orderLink,
        t.areasLink,
        t.faqLink
      ];

      links.forEach(function(link, index) {

        if (linkTexts[index]) {
          text(link, linkTexts[index]);
        }

      });

    }


    if (footerColumns[2]) {

      text(
        footerColumns[2].querySelector("h3"),
        t.contact
      );

      const links =
        footerColumns[2].querySelectorAll("a");

      if (links[1]) {
        text(links[1], t.website);
      }

    }


    const bottom =
      footer.querySelector(".footer-bottom p");

    text(bottom, t.copyright);

  }


  /* -------------------------------------------------------
     Floating WhatsApp
     ------------------------------------------------------- */

  const floating =
    document.querySelector(".floating-whatsapp");

  text(floating, t.floatingWhatsApp);


  /* -------------------------------------------------------
     Update WhatsApp URLs
     ------------------------------------------------------- */

  setupWhatsAppLinks();

}


/* =========================================================
   LANGUAGE BUTTON
   ========================================================= */

function setupLanguageButton() {

  const button =
    document.getElementById("languageToggle");

  if (!button) {
    return;
  }

  button.addEventListener("click", function() {

    const next =
      currentLanguage() === "en"
        ? "ar"
        : "en";

    applyLanguage(next);

  });

}


/* =========================================================
   ORDER FORM
   ========================================================= */

function setupOrderForm() {

  const form =
    document.getElementById("orderForm");

  if (!form) {
    return;
  }


  form.addEventListener("submit", function(event) {

    event.preventDefault();


    const language =
      currentLanguage();

    const t =
      language === "ar"
        ? AR
        : EN;


    const getValue = function(id) {

      const element =
        document.getElementById(id);

      return element
        ? element.value.trim()
        : "";

    };


    const name =
      getValue("customerName");

    const restaurant =
      getValue("restaurant");

    const food =
      getValue("foodOrder");

    const hotel =
      getValue("hotelName");

    const room =
      getValue("roomNumber");

    const location =
      getValue("location");

    const phone =
      getValue("phone");

    const notes =
      getValue("notes");


    /* Validation */

    if (!name) {
      alert(t.alertName);
      return;
    }

    if (!restaurant) {
      alert(t.alertRestaurant);
      return;
    }

    if (!food) {
      alert(t.alertFood);
      return;
    }

    if (!hotel) {
      alert(t.alertHotel);
      return;
    }

    if (!room) {
      alert(t.alertRoom);
      return;
    }

    if (!location) {
      alert(t.alertLocation);
      return;
    }

    if (!phone) {
      alert(t.alertPhone);
      return;
    }


    /* Restaurant name */

    let restaurantName = restaurant;

    if (restaurant === "Al Baik") {

      restaurantName =
        language === "ar"
          ? "البيك"
          : "Al Baik";

    } else if (restaurant === "McDonald's") {

      restaurantName =
        language === "ar"
          ? "ماكدونالدز"
          : "McDonald's";

    } else if (restaurant === "Al Tazaj") {

      restaurantName =
        language === "ar"
          ? "الطازج"
          : "Al Tazaj";

    } else if (restaurant === "Kudu") {

      restaurantName =
        language === "ar"
          ? "كودو"
          : "Kudu";

    } else if (restaurant === "Al Romansiah") {

      restaurantName =
        language === "ar"
          ? "الرومانسية"
          : "Al Romansiah";

    } else if (restaurant === "Other Restaurant") {

      restaurantName =
        language === "ar"
          ? "مطعم آخر"
          : "Other Restaurant";

    }


    /* -----------------------------------------------------
       WhatsApp message
       ----------------------------------------------------- */

    let message;


    if (language === "ar") {

      message =
`🍽️ *طلب توصيل طعام جديد*

👤 الاسم: ${name}

🍴 المطعم: ${restaurantName}

🍔 طلب الطعام:
${food}

🏨 الفندق: ${hotel}

🚪 رقم الغرفة / نقطة الالتقاء:
${room}

📍 موقع التوصيل:
${location}

📱 رقم واتساب:
${phone}

📝 ملاحظات:
${notes || "لا توجد"}

💰 رسوم الخدمة تبدأ من 30 ريال
سعر الطعام منفصل.

شكراً لاستخدام Makkah Delivery Hub.`;

    } else {

      message =
`🍽️ *New Food Delivery Order*

👤 Name: ${name}

🍴 Restaurant: ${restaurantName}

🍔 Food Order:
${food}

🏨 Hotel:
${hotel}

🚪 Room / Meeting Point:
${room}

📍 Delivery Location:
${location}

📱 WhatsApp Number:
${phone}

📝 Notes:
${notes || "None"}

💰 Service fee starts from 30 SAR
Food cost is separate.

Thank you for using Makkah Delivery Hub.`;

    }


    const url =
      "https://wa.me/" +
      WHATSAPP_NUMBER +
      "?text=" +
      encodeURIComponent(message);


    window.open(url, "_blank");

  });

}


/* =========================================================
   INITIALIZE
   ========================================================= */

function init() {

  setupLanguageButton();

  setupOrderForm();

  setupWhatsAppLinks();

  applyLanguage(currentLanguage());

}


/* =========================================================
   START
   ========================================================= */

if (
  document.readyState === "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    init
  );

} else {

  init();

}
