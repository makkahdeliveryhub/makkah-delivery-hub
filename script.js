"use strict";

/* =========================================================
   MAKKAH DELIVERY HUB
   FINAL LANGUAGE + ORDER SCRIPT
   English / Arabic
   ========================================================= */

const WHATSAPP_NUMBER = "966550865064";
const LANGUAGE_KEY = "makkahDeliveryHubLanguage";


/* =========================================================
   TRANSLATIONS
   ========================================================= */

const translations = {

  en: {

    languageButton: "العربية",

    heroEyebrow: "FOOD DELIVERY IN MAKKAH",

    heroTitle: "Food Delivery in Makkah",

    heroText:
      "Order food from your favorite restaurant in Makkah and we will purchase it and deliver it directly to your hotel or location.",

    heroOrderBtn: "Order Now",

    heroWhatsAppBtn: "WhatsApp",

    heroFee: "Service fee starts from 30 SAR",

    localKicker: "LOCAL FOOD DELIVERY",

    localTitle: "Food Delivery to Hotels and Locations in Makkah",

    localIntro:
      "Makkah Delivery Hub helps visitors, pilgrims and hotel guests order food from popular restaurants in Makkah.",

    localP1:
      "We purchase your selected food from the restaurant and deliver it directly to your hotel, room or location in Makkah.",

    localP2:
      "Our service is useful for visitors staying around Makkah Clock Tower, Ajyad, Jabal Omar, Ibrahim Al Khalil and nearby areas.",

    localP3:
      "Simply send us your food order through WhatsApp. The food price is separate and our delivery service fee starts from 30 SAR.",

    localP4:
      "We focus on convenient food purchasing and hotel delivery for visitors and pilgrims in Makkah.",


    howKicker: "HOW IT WORKS",

    howTitle: "How Makkah Delivery Hub Works",

    step1Title: "Send Your Order",

    step1Text:
      "Tell us the restaurant and food you want through WhatsApp or our order form.",

    step2Title: "We Buy Your Food",

    step2Text:
      "We purchase your selected food from the restaurant.",

    step3Title: "We Pick It Up",

    step3Text:
      "Our delivery service collects the prepared food from the restaurant.",

    step4Title: "We Deliver",

    step4Text:
      "Your food is delivered directly to your hotel or location in Makkah.",


    ctaTitle: "Need Food Delivered in Makkah?",

    ctaText:
      "Send your order on WhatsApp and let us handle the restaurant pickup and delivery.",

    ctaButton: "Order on WhatsApp",


    restaurantsKicker: "POPULAR RESTAURANTS",

    restaurantsTitle: "Restaurants We Can Purchase From",

    restaurantsText:
      "Tell us what you want from your preferred restaurant. Restaurant availability may vary by location.",


    restaurant1: "Al Baik",

    restaurant1Text:
      "Chicken, seafood, meals and popular Al Baik items.",

    restaurant2: "McDonald's",

    restaurant2Text:
      "Burgers, meals, fries, drinks and more.",

    restaurant3: "Al Tazaj",

    restaurant3Text:
      "Grilled chicken and Arabic-style meals.",

    restaurant4: "Kudu",

    restaurant4Text:
      "Burgers, sandwiches, meals and drinks.",

    restaurant5: "Al Romansiah",

    restaurant5Text:
      "Traditional Saudi rice and meat dishes.",

    restaurant6: "Other Restaurants",

    restaurant6Text:
      "You can request food from another restaurant in Makkah.",


    orderKicker: "PLACE YOUR ORDER",

    orderTitle: "Food Delivery Order",

    orderText:
      "Fill in your details and we will open WhatsApp with your order information.",

    nameLabel: "Your Name",

    namePlaceholder: "Enter your name",

    restaurantLabel: "Restaurant",

    restaurantPlaceholder: "Select restaurant",

    restaurantOther: "Other Restaurant",

    foodLabel: "Food Order",

    foodPlaceholder: "Example: 2 Chicken Meals + 2 Pepsi",

    hotelLabel: "Hotel Name",

    hotelPlaceholder: "Enter hotel name",

    roomLabel: "Room Number",

    roomPlaceholder: "Enter room number",

    locationLabel: "Delivery Location",

    locationPlaceholder: "Hotel / building / location",

    phoneLabel: "Your WhatsApp Number",

    phonePlaceholder: "Enter WhatsApp number",

    notesLabel: "Additional Notes",

    notesPlaceholder: "Any special instructions?",

    submitButton: "Send Order on WhatsApp",


    areasKicker: "DELIVERY AREAS",

    areasTitle: "Food Delivery Areas in Makkah",

    areasText:
      "We provide food purchasing and delivery service in central Makkah and nearby locations.",

    area1: "Makkah Clock Tower",

    area2: "Ajyad",

    area3: "Jabal Omar",

    area4: "Ibrahim Al Khalil",

    area5: "Central Makkah",

    areaText:
      "Delivery availability depends on the exact location and restaurant.",

    areaStrong:
      "Contact us on WhatsApp to confirm delivery.",


    faqKicker: "FAQ",

    faqTitle: "Frequently Asked Questions",

    q1: "What is Makkah Delivery Hub?",

    a1:
      "Makkah Delivery Hub is a food purchasing and delivery service in Makkah. We purchase food from your selected restaurant and deliver it to your hotel or location.",

    q2: "How much is the delivery service fee?",

    a2:
      "Our service fee starts from 30 SAR. The restaurant food cost is separate.",

    q3: "Can you deliver food to my hotel room?",

    a3:
      "Yes. We can deliver to your hotel or another suitable location, subject to access and delivery availability.",

    q4: "Can I order from a restaurant not listed on the website?",

    a4:
      "Yes. Send us the restaurant name and your food order through WhatsApp and we will check availability.",

    q5: "How do I place an order?",

    a5:
      "You can use the order form on this website or contact us directly through WhatsApp.",

    q6: "Do I pay the restaurant food price separately?",

    a6:
      "Yes. The food cost and our service fee are separate.",

    q7: "Can you deliver to hotels near Makkah Clock Tower?",

    a7:
      "Yes. We serve many locations around central Makkah, including the Clock Tower and nearby hotel areas.",

    q8: "How can I contact Makkah Delivery Hub?",

    a8:
      "Contact us directly through WhatsApp using the order button on this website.",


    finalTitle: "Order Food Easily in Makkah",

    finalText:
      "Send us your restaurant and food order. We will purchase it and deliver it to your hotel or location.",

    finalButton: "Contact Us on WhatsApp",


    footerText:
      "Food purchasing and delivery service in Makkah.",

    footerCopyright:
      "© 2026 Makkah Delivery Hub. All rights reserved.",


    alertName: "Please enter your name.",

    alertRestaurant: "Please select a restaurant.",

    alertFood: "Please enter your food order.",

    alertHotel: "Please enter your hotel name.",

    alertRoom: "Please enter your room number.",

    alertLocation: "Please enter your delivery location.",

    alertPhone: "Please enter your WhatsApp number.",

    successTitle: "Order Ready",

    successText:
      "Your order information is ready. WhatsApp will open now."

  },


  ar: {

    languageButton: "English",

    heroEyebrow: "توصيل الطعام في مكة",

    heroTitle: "توصيل الطعام في مكة",

    heroText:
      "اطلب الطعام من مطعمك المفضل في مكة وسنقوم بشرائه وتوصيله مباشرة إلى الفندق أو الموقع الذي تحدده.",

    heroOrderBtn: "اطلب الآن",

    heroWhatsAppBtn: "واتساب",

    heroFee: "رسوم الخدمة تبدأ من 30 ريال",

    localKicker: "توصيل الطعام المحلي",

    localTitle: "توصيل الطعام إلى الفنادق والمواقع في مكة",

    localIntro:
      "تساعد خدمة Makkah Delivery Hub الزوار والمعتمرين ونزلاء الفنادق على طلب الطعام من المطاعم في مكة.",

    localP1:
      "نقوم بشراء الطعام الذي تختاره من المطعم وتوصيله مباشرة إلى الفندق أو الغرفة أو الموقع الذي تحدده في مكة.",

    localP2:
      "خدمتنا مناسبة للزوار المقيمين بالقرب من برج الساعة وأجياد وجبل عمر وإبراهيم الخليل والمناطق القريبة.",

    localP3:
      "أرسل طلب الطعام عبر واتساب بسهولة. سعر الطعام منفصل ورسوم خدمة التوصيل تبدأ من 30 ريال.",

    localP4:
      "نركز على تسهيل شراء الطعام وتوصيله للزوار والمعتمرين في مكة.",


    howKicker: "طريقة الطلب",

    howTitle: "كيف تعمل خدمة Makkah Delivery Hub",

    step1Title: "أرسل طلبك",

    step1Text:
      "أرسل اسم المطعم والطعام الذي تريده عبر واتساب أو نموذج الطلب.",

    step2Title: "نشتري الطعام",

    step2Text:
      "نقوم بشراء الطعام الذي اخترته من المطعم.",

    step3Title: "نستلم الطلب",

    step3Text:
      "نستلم الطعام الجاهز من المطعم.",

    step4Title: "نوصّل الطلب",

    step4Text:
      "نقوم بتوصيل الطعام مباشرة إلى الفندق أو الموقع في مكة.",


    ctaTitle: "تحتاج إلى توصيل طعام في مكة؟",

    ctaText:
      "أرسل طلبك عبر واتساب وسنتولى شراء الطعام واستلامه وتوصيله.",

    ctaButton: "اطلب عبر واتساب",


    restaurantsKicker: "المطاعم المشهورة",

    restaurantsTitle: "المطاعم التي يمكننا الشراء منها",

    restaurantsText:
      "أخبرنا بما تريده من المطعم المفضل لديك. قد تختلف إمكانية الطلب حسب الموقع.",


    restaurant1: "البيك",

    restaurant1Text:
      "دجاج ومأكولات بحرية ووجبات وأصناف البيك المشهورة.",

    restaurant2: "ماكدونالدز",

    restaurant2Text:
      "برجر ووجبات وبطاطس ومشروبات وغيرها.",

    restaurant3: "الطازج",

    restaurant3Text:
      "دجاج مشوي ووجبات عربية.",

    restaurant4: "كودو",

    restaurant4Text:
      "برجر وساندويتشات ووجبات ومشروبات.",

    restaurant5: "الرومانسية",

    restaurant5Text:
      "أطباق الأرز واللحوم السعودية التقليدية.",

    restaurant6: "مطاعم أخرى",

    restaurant6Text:
      "يمكنك طلب الطعام من مطعم آخر في مكة.",


    orderKicker: "اطلب الآن",

    orderTitle: "طلب توصيل الطعام",

    orderText:
      "أدخل بياناتك وسنفتح واتساب مع معلومات طلبك.",

    nameLabel: "اسمك",

    namePlaceholder: "أدخل اسمك",

    restaurantLabel: "المطعم",

    restaurantPlaceholder: "اختر المطعم",

    restaurantOther: "مطعم آخر",

    foodLabel: "طلب الطعام",

    foodPlaceholder: "مثال: وجبتان دجاج + 2 بيبسي",

    hotelLabel: "اسم الفندق",

    hotelPlaceholder: "أدخل اسم الفندق",

    roomLabel: "رقم الغرفة",

    roomPlaceholder: "أدخل رقم الغرفة",

    locationLabel: "موقع التوصيل",

    locationPlaceholder: "الفندق / المبنى / الموقع",

    phoneLabel: "رقم واتساب",

    phonePlaceholder: "أدخل رقم واتساب",

    notesLabel: "ملاحظات إضافية",

    notesPlaceholder: "أي تعليمات خاصة؟",

    submitButton: "إرسال الطلب عبر واتساب",


    areasKicker: "مناطق التوصيل",

    areasTitle: "مناطق توصيل الطعام في مكة",

    areasText:
      "نقدم خدمة شراء وتوصيل الطعام في وسط مكة والمناطق القريبة.",

    area1: "برج الساعة",

    area2: "أجياد",

    area3: "جبل عمر",

    area4: "إبراهيم الخليل",

    area5: "وسط مكة",

    areaText:
      "تختلف إمكانية التوصيل حسب الموقع والمطعم.",

    areaStrong:
      "تواصل معنا عبر واتساب لتأكيد إمكانية التوصيل.",


    faqKicker: "الأسئلة الشائعة",

    faqTitle: "الأسئلة الشائعة",

    q1: "ما هي خدمة Makkah Delivery Hub؟",

    a1:
      "Makkah Delivery Hub هي خدمة شراء وتوصيل الطعام في مكة. نقوم بشراء الطعام من المطعم الذي تختاره وتوصيله إلى الفندق أو الموقع الذي تحدده.",

    q2: "كم تبلغ رسوم خدمة التوصيل؟",

    a2:
      "تبدأ رسوم الخدمة من 30 ريال. سعر الطعام من المطعم منفصل.",

    q3: "هل يمكنكم توصيل الطعام إلى غرفتي في الفندق؟",

    a3:
      "نعم. يمكننا توصيل الطعام إلى الفندق أو الموقع المناسب، حسب إمكانية الدخول والتوصيل.",

    q4: "هل يمكنني الطلب من مطعم غير موجود في الموقع؟",

    a4:
      "نعم. أرسل اسم المطعم وطلب الطعام عبر واتساب وسنتحقق من إمكانية الطلب.",

    q5: "كيف يمكنني الطلب؟",

    a5:
      "يمكنك استخدام نموذج الطلب في الموقع أو التواصل معنا مباشرة عبر واتساب.",

    q6: "هل سعر الطعام منفصل عن رسوم الخدمة؟",

    a6:
      "نعم. سعر الطعام ورسوم الخدمة منفصلان.",

    q7: "هل توصلون إلى الفنادق بالقرب من برج الساعة؟",

    a7:
      "نعم. نخدم العديد من المواقع في وسط مكة، بما في ذلك برج الساعة والمناطق الفندقية القريبة.",

    q8: "كيف يمكنني التواصل مع Makkah Delivery Hub؟",

    a8:
      "يمكنك التواصل معنا مباشرة عبر واتساب باستخدام أزرار الطلب الموجودة في الموقع.",


    finalTitle: "اطلب الطعام بسهولة في مكة",

    finalText:
      "أرسل اسم المطعم وطلب الطعام وسنقوم بشرائه وتوصيله إلى الفندق أو الموقع الذي تحدده.",

    finalButton: "تواصل معنا عبر واتساب",


    footerText:
      "خدمة شراء وتوصيل الطعام في مكة.",

    footerCopyright:
      "© 2026 Makkah Delivery Hub. جميع الحقوق محفوظة.",


    alertName: "يرجى إدخال اسمك.",

    alertRestaurant: "يرجى اختيار المطعم.",

    alertFood: "يرجى إدخال طلب الطعام.",

    alertHotel: "يرجى إدخال اسم الفندق.",

    alertRoom: "يرجى إدخال رقم الغرفة.",

    alertLocation: "يرجى إدخال موقع التوصيل.",

    alertPhone: "يرجى إدخال رقم واتساب.",

    successTitle: "الطلب جاهز",

    successText:
      "تم تجهيز معلومات طلبك. سيتم فتح واتساب الآن."

  }

};


/* =========================================================
   HELPER
   ========================================================= */

function setText(id, text) {

  const element = document.getElementById(id);

  if (element) {
    element.textContent = text;
  }

}


function setPlaceholder(id, text) {

  const element = document.getElementById(id);

  if (element) {
    element.placeholder = text;
  }

}


/* =========================================================
   APPLY LANGUAGE
   ========================================================= */

function applyLanguage(lang) {

  if (!translations[lang]) {
    lang = "en";
  }

  const t = translations[lang];

  /* HTML direction */

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  document.body.classList.toggle("rtl", lang === "ar");


  /* Language button */

  setText("languageToggle", t.languageButton);


  /* Hero */

  setText("heroEyebrow", t.heroEyebrow);
  setText("heroTitle", t.heroTitle);
  setText("heroText", t.heroText);
  setText("heroOrderBtn", t.heroOrderBtn);
  setText("heroWhatsAppBtn", t.heroWhatsAppBtn);
  setText("heroFee", t.heroFee);


  /* Local SEO */

  setText("localSeoKicker", t.localKicker);
  setText("localSeoTitle", t.localTitle);
  setText("localSeoIntro", t.localIntro);
  setText("localSeoP1", t.localP1);
  setText("localSeoP2", t.localP2);
  setText("localSeoP3", t.localP3);
  setText("localSeoP4", t.localP4);


  /* How it works */

  setText("howKicker", t.howKicker);
  setText("howTitle", t.howTitle);

  setText("step1Title", t.step1Title);
  setText("step1Text", t.step1Text);

  setText("step2Title", t.step2Title);
  setText("step2Text", t.step2Text);

  setText("step3Title", t.step3Title);
  setText("step3Text", t.step3Text);

  setText("step4Title", t.step4Title);
  setText("step4Text", t.step4Text);


  /* CTA */

  setText("ctaTitle", t.ctaTitle);
  setText("ctaText", t.ctaText);
  setText("ctaButton", t.ctaButton);


  /* Restaurants */

  setText("restaurantsKicker", t.restaurantsKicker);
  setText("restaurantsTitle", t.restaurantsTitle);
  setText("restaurantsText", t.restaurantsText);

  setText("restaurant1", t.restaurant1);
  setText("restaurant1Text", t.restaurant1Text);

  setText("restaurant2", t.restaurant2);
  setText("restaurant2Text", t.restaurant2Text);

  setText("restaurant3", t.restaurant3);
  setText("restaurant3Text", t.restaurant3Text);

  setText("restaurant4", t.restaurant4);
  setText("restaurant4Text", t.restaurant4Text);

  setText("restaurant5", t.restaurant5);
  setText("restaurant5Text", t.restaurant5Text);

  setText("restaurant6", t.restaurant6);
  setText("restaurant6Text", t.restaurant6Text);


  /* Order form */

  setText("orderKicker", t.orderKicker);
  setText("orderTitle", t.orderTitle);
  setText("orderText", t.orderText);

  setText("nameLabel", t.nameLabel);
  setText("restaurantLabel", t.restaurantLabel);
  setText("foodLabel", t.foodLabel);
  setText("hotelLabel", t.hotelLabel);
  setText("roomLabel", t.roomLabel);
  setText("locationLabel", t.locationLabel);
  setText("phoneLabel", t.phoneLabel);
  setText("notesLabel", t.notesLabel);

  setPlaceholder("customerName", t.namePlaceholder);
  setPlaceholder("foodOrder", t.foodPlaceholder);
  setPlaceholder("hotelName", t.hotelPlaceholder);
  setPlaceholder("roomNumber", t.roomPlaceholder);
  setPlaceholder("location", t.locationPlaceholder);
  setPlaceholder("phone", t.phonePlaceholder);
  setPlaceholder("notes", t.notesPlaceholder);

  setText("submitOrderBtn", t.submitButton);


  /* Restaurant select */

  const restaurantSelect = document.getElementById("restaurant");

  if (restaurantSelect) {

    const options = restaurantSelect.querySelectorAll("option");

    options.forEach(function(option) {

      const value = option.value;

      if (value === "") {
        option.textContent = t.restaurantPlaceholder;
      }

      else if (
        value.toLowerCase().includes("al baik") ||
        value.toLowerCase() === "baik"
      ) {
        option.textContent =
          lang === "ar" ? "البيك" : "Al Baik";
      }

      else if (
        value.toLowerCase().includes("mcdonald")
      ) {
        option.textContent =
          lang === "ar" ? "ماكدونالدز" : "McDonald's";
      }

      else if (
        value.toLowerCase().includes("tazaj")
      ) {
        option.textContent =
          lang === "ar" ? "الطازج" : "Al Tazaj";
      }

      else if (
        value.toLowerCase().includes("kudu")
      ) {
        option.textContent =
          lang === "ar" ? "كودو" : "Kudu";
      }

      else if (
        value.toLowerCase().includes("romansiah") ||
        value.toLowerCase().includes("romansia")
      ) {
        option.textContent =
          lang === "ar" ? "الرومانسية" : "Al Romansiah";
      }

      else {
        option.textContent = t.restaurantOther;
      }

    });

  }


  /* Areas */

  setText("areasKicker", t.areasKicker);
  setText("areasTitle", t.areasTitle);
  setText("areasText", t.areasText);

  setText("area1", t.area1);
  setText("area2", t.area2);
  setText("area3", t.area3);
  setText("area4", t.area4);
  setText("area5", t.area5);

  setText("areaText", t.areaText);
  setText("areaStrong", t.areaStrong);


  /* FAQ */

  setText("faqKicker", t.faqKicker);
  setText("faqTitle", t.faqTitle);

  for (let i = 1; i <= 8; i++) {

    setText("q" + i, t["q" + i]);
    setText("a" + i, t["a" + i]);

  }


  /* Final CTA */

  setText("finalTitle", t.finalTitle);
  setText("finalText", t.finalText);
  setText("finalButton", t.finalButton);


  /* Footer */

  setText("footerText", t.footerText);
  setText("footerCopyright", t.footerCopyright);


  /* Static WhatsApp buttons */

  document.querySelectorAll("a").forEach(function(link) {

    const href = link.getAttribute("href") || "";

    if (
      href.includes("wa.me") ||
      href.includes("whatsapp")
    ) {

      link.setAttribute(
        "href",
        "https://wa.me/" + WHATSAPP_NUMBER
      );

      const text = link.textContent.trim();

      if (
        text === "WhatsApp" ||
        text === "Order on WhatsApp" ||
        text === "Contact Us on WhatsApp"
      ) {

        link.textContent =
          lang === "ar"
            ? "واتساب"
            : text;

      }

    }

  });


  /* Save language */

  localStorage.setItem(LANGUAGE_KEY, lang);

}


/* =========================================================
   LANGUAGE TOGGLE
   ========================================================= */

function setupLanguageToggle() {

  const button = document.getElementById("languageToggle");

  if (!button) {
    return;
  }

  button.addEventListener("click", function() {

    const current =
      localStorage.getItem(LANGUAGE_KEY) || "en";

    const next =
      current === "en" ? "ar" : "en";

    applyLanguage(next);

  });

}


/* =========================================================
   WHATSAPP ORDER
   ========================================================= */

function setupOrderForm() {

  const form = document.getElementById("orderForm");

  if (!form) {
    return;
  }


  form.addEventListener("submit", function(event) {

    event.preventDefault();


    const lang =
      localStorage.getItem(LANGUAGE_KEY) || "en";

    const t = translations[lang];


    const name =
      document.getElementById("customerName")?.value.trim() || "";

    const restaurant =
      document.getElementById("restaurant")?.value.trim() || "";

    const food =
      document.getElementById("foodOrder")?.value.trim() || "";

    const hotel =
      document.getElementById("hotelName")?.value.trim() || "";

    const room =
      document.getElementById("roomNumber")?.value.trim() || "";

    const location =
      document.getElementById("location")?.value.trim() || "";

    const phone =
      document.getElementById("phone")?.value.trim() || "";

    const notes =
      document.getElementById("notes")?.value.trim() || "";


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


    /* Restaurant display */

    let restaurantName = restaurant;

    if (restaurant.toLowerCase().includes("baik")) {
      restaurantName =
        lang === "ar" ? "البيك" : "Al Baik";
    }

    else if (restaurant.toLowerCase().includes("mcdonald")) {
      restaurantName =
        lang === "ar" ? "ماكدونالدز" : "McDonald's";
    }

    else if (restaurant.toLowerCase().includes("tazaj")) {
      restaurantName =
        lang === "ar" ? "الطازج" : "Al Tazaj";
    }

    else if (restaurant.toLowerCase().includes("kudu")) {
      restaurantName =
        lang === "ar" ? "كودو" : "Kudu";
    }

    else if (
      restaurant.toLowerCase().includes("romans")
    ) {
      restaurantName =
        lang === "ar" ? "الرومانسية" : "Al Romansiah";
    }


    /* WhatsApp message */

    let message = "";


    if (lang === "ar") {

      message =
`🍽️ *طلب توصيل طعام جديد*

👤 الاسم: ${name}

🍴 المطعم: ${restaurantName}

🍔 الطلب:
${food}

🏨 الفندق: ${hotel}

🚪 رقم الغرفة: ${room}

📍 موقع التوصيل: ${location}

📱 رقم واتساب: ${phone}

📝 ملاحظات:
${notes || "لا توجد"}

💰 رسوم الخدمة تبدأ من 30 ريال
سعر الطعام منفصل.

شكراً لاستخدام Makkah Delivery Hub.`;

    }

    else {

      message =
`🍽️ *New Food Delivery Order*

👤 Name: ${name}

🍴 Restaurant: ${restaurantName}

🍔 Food Order:
${food}

🏨 Hotel: ${hotel}

🚪 Room Number: ${room}

📍 Delivery Location: ${location}

📱 WhatsApp Number: ${phone}

📝 Notes:
${notes || "None"}

💰 Service fee starts from 30 SAR
Food cost is separate.

Thank you for using Makkah Delivery Hub.`;

    }


    /* Open WhatsApp */

    const whatsappURL =
      "https://wa.me/" +
      WHATSAPP_NUMBER +
      "?text=" +
      encodeURIComponent(message);


    window.open(whatsappURL, "_blank");


    /* Optional confirmation */

    setTimeout(function() {

      alert(
        t.successTitle +
        "\n\n" +
        t.successText
      );

    }, 500);

  });

}


/* =========================================================
   INIT
   ========================================================= */

function init() {

  const savedLanguage =
    localStorage.getItem(LANGUAGE_KEY);

  const language =
    savedLanguage === "ar" ? "ar" : "en";

  applyLanguage(language);

  setupLanguageToggle();

  setupOrderForm();

}


/* =========================================================
   START
   ========================================================= */

if (document.readyState === "loading") {

  document.addEventListener(
    "DOMContentLoaded",
    init
  );

} else {

  init();

}
