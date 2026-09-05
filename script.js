let arabic = false;

const translations = {
  en: {
    navOrder: "Order Now",
    badge: "🕋 Food Delivery Service in Makkah",
    heroTitle: "Your Favorite Food.<br><span>Delivered to You.</span>",
    heroText: "Choose any restaurant you like. We buy your food and deliver it directly to your hotel or location in Makkah.",
    heroOrder: "🍔 Order Food",
    heroWhatsApp: "📱 WhatsApp",
    heroNote: "Service fee starts from 30 SAR • Food cost is separate",

    cardTitle: "Makkah Food Delivery",
    available: "Available",
    cardHeading: "From your restaurant to your hotel",
    cardText: "Tell us what you want. We handle the pickup and delivery for you.",
    feeSmall: "Service fee",
    orderSmall: "Easy ordering",

    trustStrong1: "🍔 Any Restaurant",
    trust1: "Your choice",
    trustStrong2: "🏨 Hotel Delivery",
    trust2: "Makkah hotels",
    trustStrong3: "📍 Your Location",
    trust3: "Easy delivery",
    trustStrong4: "📱 WhatsApp",
    trust4: "Simple ordering",

    howTitle: "How It Works",
    howText: "Ordering your favorite food in Makkah is simple.",
    s1Title: "Choose a Restaurant",
    s1Text: "Choose your favorite restaurant or tell us another one.",
    s2Title: "Send Your Order",
    s2Text: "Tell us exactly what food you want.",
    s3Title: "We Buy It",
    s3Text: "We purchase your order from the restaurant.",
    s4Title: "We Deliver",
    s4Text: "We bring your order to your hotel or location.",

    ctaTitle: "Hungry? Let's get your food.",
    ctaText: "Order from your favorite restaurant in Makkah today.",
    ctaButton: "Order Now →",

    restTitle: "Popular Restaurants",
    restText: "You can request food from these or any other restaurant.",
    otherRestaurant: "Other Restaurant",

    orderTitle: "Place Your Order",
    orderText: "Tell us what you want and we will buy it from the restaurant and deliver it to you.",

    nameLabel: "👤 Your Name",
    phoneLabel: "📱 Your WhatsApp Number",
    restaurantLabel: "🍽️ Restaurant",
    foodLabel: "📝 Food Order",
    quantityLabel: "🔢 Quantity",
    hotelLabel: "🏨 Hotel / Delivery Location",
    roomLabel: "🚪 Room Number",
    locationLabel: "📍 Google Maps Location / Address",
    deliveryTimeLabel: "🕐 Preferred Delivery Time",
    notesLabel: "📝 Special Instructions",

    feeTitle: "💰 Service & Delivery Fee",
    feeText: "Service fee starts from <b>30 SAR</b>. Food price is separate and will be confirmed before purchase.",

    summaryTitle: "📋 Order Summary",
    reviewButton: "👀 Review Order",
    sendButton: "📱 Confirm & Send to WhatsApp",

    areaTitle: "Makkah Delivery Areas",
    areaText: "We focus on hotels and customer locations in central Makkah.",

    faqTitle: "Frequently Asked Questions",

    q1: "Do you deliver food to hotels in Makkah?",
    a1: "Yes. We provide food delivery to hotels and customer locations in central Makkah. Send us your hotel name, room number and Google Maps location through WhatsApp.",

    q2: "Can I order from any restaurant in Makkah?",
    a2: "Yes. You can request food from your favorite restaurant in Makkah. If the restaurant is not listed on our website, simply tell us the restaurant name and your food order.",

    q3: "Do you deliver food near Makkah Clock Tower?",
    a3: "Yes. We focus on central Makkah delivery areas including Makkah Clock Tower, Ajyad, Jabal Omar, Ibrahim Al Khalil and nearby hotels.",

    q4: "How much does food delivery cost in Makkah?",
    a4: "Our service and delivery fee starts from 30 SAR. The restaurant food price is separate and will be confirmed before we purchase the order.",

    q5: "How can I order food through WhatsApp?",
    a5: "Fill in the order form on our website with your name, WhatsApp number, restaurant, food order, hotel and location. Then review your order and send it directly to our WhatsApp.",

    q6: "Can I send my Google Maps location?",
    a6: "Yes. You can paste your Google Maps link in the order form. This helps us find your hotel or delivery location in Makkah.",

    q7: "Do you have your own restaurant?",
    a7: "No. Makkah Delivery Hub is a food purchasing and delivery service. We buy food from the restaurant you choose and deliver it to your hotel or location.",

    q8: "How long does food delivery take?",
    a8: "Delivery time depends on the restaurant, food preparation time, traffic and your location. You can tell us your preferred delivery time when placing your order.",

    footerAbout: "Food purchasing and delivery service in Makkah. We bring food from your favorite restaurant to your location.",
    footerService: "Service",
    footerOrder: "Order Food",
    footerFee: "Service Fee",
    footerFaq: "FAQ",
    footerContact: "Contact"
  },

  ar: {
    navOrder: "اطلب الآن",
    badge: "🕋 خدمة توصيل الطعام في مكة",
    heroTitle: "طعامك المفضل.<br><span>نوصله إليك.</span>",
    heroText: "اختر أي مطعم تريده. نشتري لك الطعام ونوصله مباشرة إلى فندقك أو موقعك في مكة.",
    heroOrder: "🍔 اطلب الطعام",
    heroWhatsApp: "📱 واتساب",
    heroNote: "رسوم الخدمة تبدأ من 30 ريال • سعر الطعام منفصل",

    cardTitle: "توصيل الطعام في مكة",
    available: "متاح",
    cardHeading: "من مطعمك إلى فندقك",
    cardText: "أخبرنا بما تريد وسنتولى شراء الطعام وتوصيله إليك.",
    feeSmall: "رسوم الخدمة",
    orderSmall: "طلب سهل",

    trustStrong1: "🍔 أي مطعم",
    trust1: "اختيارك",
    trustStrong2: "🏨 توصيل للفندق",
    trust2: "فنادق مكة",
    trustStrong3: "📍 موقعك",
    trust3: "توصيل سهل",
    trustStrong4: "📱 واتساب",
    trust4: "طلب سريع",

    howTitle: "كيف تعمل الخدمة؟",
    howText: "طلب طعامك المفضل في مكة أصبح سهلاً.",
    s1Title: "اختر المطعم",
    s1Text: "اختر مطعمك المفضل أو أخبرنا بمطعم آخر.",
    s2Title: "أرسل طلبك",
    s2Text: "أخبرنا بالتفصيل بالطعام الذي تريده.",
    s3Title: "نشتري الطعام",
    s3Text: "نشتري طلبك من المطعم.",
    s4Title: "نوصل الطلب",
    s4Text: "نوصل الطلب إلى فندقك أو موقعك.",

    ctaTitle: "جائع؟ دعنا نحضر لك طعامك.",
    ctaText: "اطلب من مطعمك المفضل في مكة اليوم.",
    ctaButton: "اطلب الآن ←",

    restTitle: "المطاعم المشهورة",
    restText: "يمكنك الطلب من هذه المطاعم أو أي مطعم آخر.",
    otherRestaurant: "مطعم آخر",

    orderTitle: "اطلب طعامك",
    orderText: "أدخل بياناتك وأرسل الطلب مباشرة إلى واتساب.",

    nameLabel: "👤 الاسم",
    phoneLabel: "📱 رقم الواتساب",
    restaurantLabel: "🍽️ المطعم",
    foodLabel: "📝 طلب الطعام",
    quantityLabel: "🔢 الكمية",
    hotelLabel: "🏨 الفندق / موقع التوصيل",
    roomLabel: "🚪 رقم الغرفة",
    locationLabel: "📍 موقع Google Maps / العنوان",
    deliveryTimeLabel: "🕐 وقت التوصيل المفضل",
    notesLabel: "📝 ملاحظات إضافية",

    feeTitle: "💰 رسوم الخدمة والتوصيل",
    feeText: "رسوم الخدمة تبدأ من <b>30 ريال</b>. سعر الطعام منفصل وسيتم تأكيده قبل الشراء.",

    summaryTitle: "📋 ملخص الطلب",
    reviewButton: "👀 مراجعة الطلب",
    sendButton: "📱 إرسال الطلب عبر واتساب",

    areaTitle: "مناطق التوصيل في مكة",
    areaText: "نركز على الفنادق ومواقع العملاء في وسط مكة.",

    faqTitle: "الأسئلة الشائعة",

    q1: "هل توصلون الطعام إلى الفنادق في مكة؟",
    a1: "نعم. نوفر خدمة توصيل الطعام إلى الفنادق ومواقع العملاء في وسط مكة. أرسل اسم الفندق ورقم الغرفة وموقع Google Maps عبر واتساب.",

    q2: "هل يمكنني الطلب من أي مطعم في مكة؟",
    a2: "نعم. يمكنك طلب الطعام من مطعمك المفضل في مكة. إذا لم يكن المطعم موجوداً في موقعنا، أخبرنا باسم المطعم وطلب الطعام.",

    q3: "هل توصلون الطعام بالقرب من برج الساعة في مكة؟",
    a3: "نعم. نركز على مناطق التوصيل في وسط مكة، بما في ذلك برج الساعة وأجياد وجبل عمر وإبراهيم الخليل والفنادق القريبة.",

    q4: "كم تكلفة توصيل الطعام في مكة؟",
    a4: "تبدأ رسوم الخدمة والتوصيل من 30 ريال. سعر الطعام من المطعم منفصل وسيتم تأكيده قبل شراء الطلب.",

    q5: "كيف يمكنني طلب الطعام عبر واتساب؟",
    a5: "املأ نموذج الطلب في موقعنا باسمك ورقم واتساب والمطعم وطلب الطعام والفندق والموقع. ثم راجع طلبك وأرسله مباشرة إلى واتساب.",

    q6: "هل يمكنني إرسال موقع Google Maps؟",
    a6: "نعم. يمكنك لصق رابط Google Maps في نموذج الطلب. يساعدنا ذلك في العثور على الفندق أو موقع التوصيل في مكة.",

    q7: "هل لديكم مطعم خاص بكم؟",
    a7: "لا. Makkah Delivery Hub هي خدمة شراء وتوصيل الطعام. نشتري الطعام من المطعم الذي تختاره ونوصله إلى فندقك أو موقعك.",

    q8: "كم يستغرق توصيل الطعام؟",
    a8: "يعتمد وقت التوصيل على المطعم ووقت تجهيز الطعام وحركة المرور وموقعك. يمكنك إخبارنا بوقت التوصيل المفضل عند تقديم الطلب.",

    footerAbout: "خدمة شراء وتوصيل الطعام في مكة. نحضر لك الطعام من مطعمك المفضل إلى موقعك.",
    footerService: "الخدمة",
    footerOrder: "اطلب الطعام",
    footerFee: "رسوم الخدمة",
    footerFaq: "الأسئلة الشائعة",
    footerContact: "تواصل معنا"
  }
};


const translationIds = Object.keys(translations.en);


function setText(id, value) {
  const element = document.getElementById(id);

  if (element) {
    element.innerHTML = value;
  }
}


function applyLanguage() {

  const lang = arabic
    ? translations.ar
    : translations.en;

  document.body.classList.toggle("rtl", arabic);

  document.documentElement.lang =
    arabic ? "ar" : "en";

  document.documentElement.dir =
    arabic ? "rtl" : "ltr";


  const langButton =
    document.getElementById("langBtn");

  if (langButton) {
    langButton.textContent =
      arabic ? "English" : "العربية";
  }


  translationIds.forEach(id => {
    setText(id, lang[id]);
  });


  const placeholders = arabic
    ? {
        customerName: "أدخل اسمك",
        customerPhone: "+966 5XXXXXXXX",
        foodOrder: "مثال: برجر دجاج، بطاطس، بيبسي",
        quantity: "كم عدد الأصناف؟",
        hotel: "اسم الفندق أو موقع التوصيل",
        room: "مثال: 805",
        location: "ضع رابط Google Maps أو اكتب العنوان",
        deliveryTime: "مثال: في أقرب وقت / 8:00 مساءً",
        notes: "هل لديك أي طلب خاص؟"
      }
    : {
        customerName: "Enter your name",
        customerPhone: "+966 5XXXXXXXX",
        foodOrder: "Example: Chicken Burger, Fries, Pepsi",
        quantity: "How many items?",
        hotel: "Hotel name or delivery location",
        room: "Example: 805",
        location: "Paste your Google Maps link or write your address",
        deliveryTime: "Example: As soon as possible / 8:00 PM",
        notes: "Any special request?"
      };


  Object.entries(placeholders).forEach(
    ([id, text]) => {

      const element =
        document.getElementById(id);

      if (element) {
        element.placeholder = text;
      }

    }
  );


  const restaurantOptions = arabic
    ? {
        restaurantPlaceholder: "اختر المطعم",
        optBaik: "البيك",
        optMc: "ماكدونالدز",
        optTazaj: "الطازج",
        optKudu: "كودو",
        optRom: "الرومانسية",
        optOther: "مطعم آخر"
      }
    : {
        restaurantPlaceholder: "Select Restaurant",
        optBaik: "Al Baik - البيك",
        optMc: "McDonald's - ماكدونالز",
        optTazaj: "Al Tazaj - الطازج",
        optKudu: "Kudu - كودو",
        optRom: "Al Romansiah - الرومانسية",
        optOther: "Other Restaurant"
      };


  Object.entries(restaurantOptions).forEach(
    ([id, text]) => {

      const element =
        document.getElementById(id);

      if (element) {
        element.textContent = text;
      }

    }
  );
}


function toggleLanguage() {

  arabic = !arabic;

  applyLanguage();
}


function escapeHTML(value) {

  return String(value).replace(
    /[&<>"']/g,
    char => {

      const map = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
      };

      return map[char];

    }
  );
}


function getOrderData() {

  return {

    name:
      document.getElementById("customerName")
        .value.trim(),

    phone:
      document.getElementById("customerPhone")
        .value.trim(),

    restaurant:
      document.getElementById("restaurant")
        .value.trim(),

    food:
      document.getElementById("foodOrder")
        .value.trim(),

    quantity:
      document.getElementById("quantity")
        .value.trim(),

    hotel:
      document.getElementById("hotel")
        .value.trim(),

    room:
      document.getElementById("room")
        .value.trim(),

    location:
      document.getElementById("location")
        .value.trim(),

    deliveryTime:
      document.getElementById("deliveryTime")
        .value.trim(),

    notes:
      document.getElementById("notes")
        .value.trim()
  };
}


function validateOrder(data) {

  if (
    !data.name ||
    !data.phone ||
    !data.restaurant ||
    !data.food ||
    !data.hotel ||
    !data.location
  ) {

    alert(
      arabic
        ? "يرجى تعبئة الاسم ورقم الواتساب والمطعم وطلب الطعام والفندق والموقع."
        : "Please fill in your Name, WhatsApp Number, Restaurant, Food Order, Hotel and Location."
    );

    return false;
  }


  const quantity =
    Number(data.quantity);


  if (
    !Number.isInteger(quantity) ||
    quantity < 1
  ) {

    alert(
      arabic
        ? "يرجى إدخال كمية صحيحة."
        : "Please enter a valid quantity."
    );

    document
      .getElementById("quantity")
      .focus();

    return false;
  }


  const digits =
    data.phone.replace(/[^\d]/g, "");


  if (
    digits.length < 9 ||
    digits.length > 15
  ) {

    alert(
      arabic
        ? "يرجى إدخال رقم واتساب صحيح."
        : "Please enter a valid WhatsApp number."
    );

    document
      .getElementById("customerPhone")
      .focus();

    return false;
  }


  return true;
}


function showOrderSummary() {

  const data =
    getOrderData();


  if (!validateOrder(data)) {
    return;
  }


  const labels = arabic
    ? {
        customer: "العميل",
        phone: "الواتساب",
        restaurant: "المطعم",
        food: "الطلب",
        quantity: "الكمية",
        hotel: "الفندق",
        room: "الغرفة",
        location: "الموقع",
        delivery: "وقت التوصيل",
        instructions: "الملاحظات",
        fee: "رسوم الخدمة"
      }
    : {
        customer: "Customer",
        phone: "WhatsApp",
        restaurant: "Restaurant",
        food: "Food",
        quantity: "Quantity",
        hotel: "Hotel",
        room: "Room",
        location: "Location",
        delivery: "Delivery",
        instructions: "Instructions",
        fee: "Service Fee"
      };


  const summary = `

    <p>
      <strong>👤 ${labels.customer}:</strong>
      ${escapeHTML(data.name)}
    </p>

    <p>
      <strong>📱 ${labels.phone}:</strong>
      ${escapeHTML(data.phone)}
    </p>

    <p>
      <strong>🍽️ ${labels.restaurant}:</strong>
      ${escapeHTML(data.restaurant)}
    </p>

    <p>
      <strong>📝 ${labels.food}:</strong>
      ${escapeHTML(data.food)}
    </p>

    <p>
      <strong>🔢 ${labels.quantity}:</strong>
      ${escapeHTML(data.quantity)}
    </p>

    <p>
      <strong>🏨 ${labels.hotel}:</strong>
      ${escapeHTML(data.hotel)}
    </p>

    <p>
      <strong>🚪 ${labels.room}:</strong>
      ${escapeHTML(
        data.room ||
        (arabic ? "غير محدد" : "Not provided")
      )}
    </p>

    <p>
      <strong>📍 ${labels.location}:</strong>
      ${escapeHTML(data.location)}
    </p>

    <p>
      <strong>🕐 ${labels.delivery}:</strong>
      ${escapeHTML(
        data.deliveryTime ||
        (arabic ? "في أقرب وقت" : "As soon as possible")
      )}
    </p>

    <p>
      <strong>📌 ${labels.instructions}:</strong>
      ${escapeHTML(
        data.notes ||
        (arabic ? "لا توجد" : "None")
      )}
    </p>

    <p>
      <strong>💰 ${labels.fee}:</strong>
      ${
        arabic
          ? "تبدأ من 30 ريال"
          : "Starting from 30 SAR"
      }
    </p>

  `;


  document
    .getElementById("summaryContent")
    .innerHTML = summary;


  document
    .getElementById("orderSummary")
    .style.display = "block";


  document
    .getElementById("orderSummary")
    .scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
}


function sendOrder() {

  const data =
    getOrderData();


  if (!validateOrder(data)) {
    return;
  }


  const message = arabic

    ? `🍔 طلب توصيل طعام جديد

━━━━━━━━━━━━━━━━━━━━

👤 العميل

الاسم: ${data.name}

الواتساب: ${data.phone}

🍽️ المطعم

${data.restaurant}

📝 طلب الطعام

${data.food}

🔢 الكمية

${data.quantity}

🏨 موقع التوصيل

الفندق: ${data.hotel}

الغرفة: ${data.room || "غير محدد"}

📍 Google Maps / العنوان

${data.location}

🕐 وقت التوصيل المفضل

${data.deliveryTime || "في أقرب وقت"}

📌 ملاحظات إضافية

${data.notes || "لا توجد"}

━━━━━━━━━━━━━━━━━━━━

💰 رسوم الخدمة

تبدأ من 30 ريال

سعر الطعام: منفصل

━━━━━━━━━━━━━━━━━━━━

Makkah Delivery Hub`

    : `🍔 NEW FOOD DELIVERY ORDER

━━━━━━━━━━━━━━━━━━━━

👤 CUSTOMER

Name: ${data.name}

WhatsApp: ${data.phone}

🍽️ RESTAURANT

${data.restaurant}

📝 FOOD ORDER

${data.food}

🔢 QUANTITY

${data.quantity}

🏨 DELIVERY LOCATION

Hotel: ${data.hotel}

Room: ${data.room || "Not provided"}

📍 GOOGLE MAPS / ADDRESS

${data.location}

🕐 PREFERRED DELIVERY TIME

${data.deliveryTime || "As soon as possible"}

📌 SPECIAL INSTRUCTIONS

${data.notes || "None"}

━━━━━━━━━━━━━━━━━━━━

💰 SERVICE FEE

Starting from 30 SAR

Food price: Separate

━━━━━━━━━━━━━━━━━━━━

Makkah Delivery Hub`;


  const whatsappURL =
    "https://wa.me/966550865064?text=" +
    encodeURIComponent(message);


  window.open(
    whatsappURL,
    "_blank",
    "noopener,noreferrer"
  );
}


document.addEventListener(
  "DOMContentLoaded",
  () => {
    applyLanguage();
  }
);
