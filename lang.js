const texts = {
  ar: {
    title: "طلب شهادة مدرسية",
    subtitle: "خاص بالتلاميذ القدامى",
    name: "الاسم",
    lastname: "اللقب",
    year: "سنة الخروج من الثانوية",
    send: "إرسال الطلب",
    success: "تم إرسال طلبكم بنجاح، يرجى التقرب من الثانوية بعد 48 ساعة."
  },
  fr: {
    title: "Demande de certificat scolaire",
    subtitle: "Pour les anciens élèves",
    name: "Nom",
    lastname: "Prénom",
    year: "Année de sortie",
    send: "Envoyer la demande",
    success: "Votre demande a été envoyée avec succès. Veuillez vous rapprocher du lycée dans les 48 heures."
  },
  en: {
    title: "School Certificate Request",
    subtitle: "For former students",
    name: "First name",
    lastname: "Last name",
    year: "Year of graduation",
    send: "Submit request",
    success: "Your request has been submitted successfully. Please visit the school within 48 hours."
  }
};

// اللغة الافتراضية
let currentLang = 'ar';

// تغيير اللغة
function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  if (lang === "ar") {
    document.documentElement.dir = "rtl";
  } else {
    document.documentElement.dir = "ltr";
  }

  document.getElementById("title").innerText = texts[lang].title;
  document.getElementById("subtitle").innerText = texts[lang].subtitle;
  document.getElementById("name").placeholder = texts[lang].name;
  document.getElementById("lastname").placeholder = texts[lang].lastname;
  document.getElementById("year").placeholder = texts[lang].year;
  document.getElementById("send").innerText = texts[lang].send;
}

// التأكد أن كل العناصر جاهزة قبل الإستخدام
document.addEventListener("DOMContentLoaded", function() {
  // التعامل مع إرسال الفورم
  document.getElementById("requestForm").addEventListener("submit", function(e) {
    e.preventDefault(); // يمنع إعادة تحميل الصفحة
    document.getElementById("popupText").innerText = texts[currentLang].success;
    document.getElementById("popupMsg").style.display = "flex";
  });

  // زر الإغلاق للنافذة
  document.getElementById("closePopup").addEventListener("click", function() {
    document.getElementById("popupMsg").style.display = "none";
  });
});