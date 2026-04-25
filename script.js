// Sayt pastga tushganda elementlarni sekin paydo qilish (Scroll Reveal Animatsiyasi)
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100; // Element ekranda qanchalik ko'ringanda paydo bo'lishi

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

// Skroll bo'lganda funksiyani chaqirish
window.addEventListener("scroll", reveal);

// Sayt yuklanganda birdaniga ko'rinadigan elementlar uchun
reveal();

// Navbar uchun effekt (ozgina pastga tushganda background to'qroq bo'lishi)
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(5, 8, 20, 0.95)';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.background = 'rgba(5, 8, 20, 0.8)';
        navbar.style.boxShadow = 'none';
    }
});
// Sayt pastga tushganda elementlarni sekin paydo qilish (Scroll Reveal Animatsiyasi)
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);
reveal();

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(5, 8, 20, 0.95)';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.background = 'rgba(5, 8, 20, 0.8)';
        navbar.style.boxShadow = 'none';
    }
});

// TELEGRAMGA XABAR YUBORISH FUNKSIYASI
// TELEGRAMGA XABAR YUBORISH FUNKSIYASI
async function sendToTelegram(event) {
    event.preventDefault(); // Sahifa yangilanib ketishini to'xtatadi

    // DIQQAT: O'zingizning bot tokeningiz va chat ID raqamingizni shu yerga yozing
    const token = "8355674438:AAHeX0scFb1aaLplYxUE3cUSeCTh8VB_PUc"; 
    const chatId = "8030496668"; 
    
    const name = document.getElementById('userName').value;
    const phone = document.getElementById('userPhone').value; // Telefon raqamni olish
    const message = document.getElementById('userMessage').value;
    const submitBtn = document.querySelector('#tgForm button');

    if(!name || !phone || !message) {
        alert("Iltimos, barcha maydonlarni to'ldiring!");
        return;
    }

    // Tugma holatini o'zgartirish (Kutish effekti)
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = "Yuborilmoqda... <i class='fas fa-spinner fa-spin'></i>";
    submitBtn.disabled = true;

    // Xabarga telefon raqamni qo'shish
    const fullMessage = `📩 Saytdan Yangi Xabar!\n\n👤 Kimdan: ${name}\n📞 Tel raqam: ${phone}\n📝 Xabar: ${message}`;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: fullMessage
            })
        });

        if(response.ok) {
            alert("Xabar muvaffaqiyatli yuborildi! Tez orada javob beraman.");
            // Formani tozalash
            document.getElementById('userName').value = "";
            document.getElementById('userPhone').value = "";
            document.getElementById('userMessage').value = "";
        } else {
            alert("Xatolik! Token yoki Chat ID xato bo'lishi mumkin.");
        }
    } catch (e) {
        alert("Tarmoq xatosi! Internet ulanishingizni tekshiring.");
    } finally {
        // Xabar ketgandan so'ng tugmani asl holatiga qaytarish
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
    }
}
 const i18n = {
        ru: {
        nav_home: "Главная", nav_about: "Обо мне", nav_services: "Услуги", nav_projects: "Мои проекты", nav_contact: "Контакты",
        hero_hi: "Привет, я <span>Шахриёр Аллаберганов</span>",
        hero_role: "Разработчик Web и Telegram ботов",
        hero_btn_projects: "Смотреть проекты",
        hero_btn_contact: "Сделать заказ",
        about_title: "Обо <span>мне</span>",
        about_text: "Меня зовут Шахриёр. Я в сфере IT уже 1 год. За это время я научился создавать веб-сайты, Telegram-ботов и размещать их на хостинге. Я получил эти знания под руководством моего наставника Аброра Бектемирова и сейчас продолжаю обучение в учебном центре «Kemapro Education».",
        services_title: "Мои <span>Услуги</span>",
        srv_web_title: "Web Разработка",
        srv_web_desc: "С помощью HTML, CSS и JS создаю интерактивные и красивые веб-сайты любой сложности.",
        srv_bot_title: "Telegram боты",
        srv_bot_desc: "Боты с отличной админ-панелью, системами работы с клиентами и корзиной.",
        srv_design_title: "Модерн Дизайн",
        srv_design_desc: "Современные UI/UX решения, такие как «Luxury Dark», которые привлекают пользователей.",
        projects_title: "Мои <span>Проекты</span>",
        proj1_title: "«Web-сайт для клиентов»",
        proj1_desc: "Полностью адаптивный сайт ресторана с современным интерфейсом и анимациями.",
        proj2_title: "Telegram-бот для магазина",
        proj2_desc: "Бот с системой корзины, приемом заказов и идеальным меню администратора.",
        proj3_title: "Специальный Веб Проект",
        proj3_desc: "Личное портфолио и блог со сложным функционалом, написанным на JavaScript.",
        btn_visit: "Перейти на сайт",
        btn_visit_bot: "Перейти в бот",
        contact_title: "Свяжитесь <span>со мной</span>",
        contact_desc: "Реализуем ваш проект вместе! Оставьте мне сообщение.",
        ph_name: "Ваше имя",
        ph_phone: "Ваш телефон (например: +99890...)",
        ph_msg: "Напишите ваше сообщение...",
        btn_send: "Отправить",
        f_brand_desc: "Создание качественных сайтов и сложных Telegram-ботов — моя главная цель.",
        f_col1: "УСЛУГИ", f_col2: "ТЕХНОЛОГИИ", f_col3: "ИНФОРМАЦИЯ",
        s1: "Веб-разработка", s2: "Telegram боты", s3: "UI/UX Дизайн", s4: "SMM Панели",
        i1: "Портфолио", i2: "Профиль Kwork", i3: "Опыт", i4: "Контакты"
    },
    uz: {
        nav_home: "Asosiy", nav_about: "Men Haqimda", nav_services: "Xizmatlar", nav_projects: "Loyihalarim", nav_contact: "Aloqa",
        hero_hi: "Salom, men <span>Shahriyor Allaberganov</span>",
        hero_role: "Web va Telegram Bot Dasturchisi",
        hero_btn_projects: "Loyihalarni Ko'rish",
        hero_btn_contact: "Buyurtma Berish",
        about_title: "Men <span>Haqimda</span>",
        about_text: "Mening ismim Shahriyor. IT sohasiga kirib kelganimga 1 yil bo'ldi. Shu vaqt ichida veb-saytlar yaratish, Telegram botlar tuzish va ularni internetga joylashni (hosting) o'rgandim. Men bu bilimlarni ustozim Abror Bektemirov qo'l ostida o'rgandim va hozirda ham \"Kemapro Education\" o'quv markazida ularning rahbarligida ta'lim olmoqdaman.",
        services_title: "Mening <span>Xizmatlarim</span>",
        srv_web_title: "Web Dasturlash",
        srv_web_desc: "HTML, CSS va JS yordamida har qanday murakkablikdagi, interaktiv va chiroyli veb-saytlarni yarataman.",
        srv_bot_title: "Telegram Botlar",
        srv_bot_desc: "Mukammal admin paneliga ega, mijozlar bilan ishlash va savdo-sotiq (korzinka) tizimlariga ega botlar.",
        srv_design_title: "Modern Dizayn",
        srv_design_desc: "Foydalanuvchilarni o'ziga tortadigan \"Luxury Dark\" va boshqa zamonaviy UI/UX yechimlar.",
        projects_title: "Mening <span>Loyihalarim</span>",
        proj1_title: "Mijozlar uchun Veb-sayt",
        proj1_desc: "Zamonaviy interfeys va animatsiyalarga ega, to'liq moslashuvchan (responsive) restauran sayti.",
        proj2_title: "Do'kon Telegram Boti",
        proj2_desc: "Korzinka tizimi, buyurtmalarni qabul qilish va mukammal admin menyusiga ega bot.",
        proj3_title: "Maxsus Veb Loyiha",
        proj3_desc: "JavaScript yordamida yozilgan murakkab funksionallikka ega shaxsiy portfolio va blog.",
        btn_visit: "Saytga o'tish",
        btn_visit_bot: "Botga o'tish",
        contact_title: "Men bilan <span>Aloqa</span>",
        contact_desc: "Loyihangizni birgalikda amalga oshiramiz! Menga xabar qoldiring.",
        ph_name: "Ismingiz",
        ph_phone: "Telefon raqamingiz (masalan: +99890...)",
        ph_msg: "Xabaringizni yozing...",
        btn_send: "Yuborish",
        f_brand_desc: "Yuqori sifatli veb-saytlar va murakkab Telegram botlar yaratish — mening asosiy maqsadim.",
        f_col1: "XIZMATLAR", f_col2: "TEXNOLOGIYALAR", f_col3: "MA'LUMOT",
        s1: "Web Dasturlash", s2: "Telegram Botlar", s3: "UI/UX Dizayn", s4: "SMM Panel",
        i1: "Portfolio", i2: "Kwork Profil", i3: "Tajriba", i4: "Bog'lanish"
    },

};

function changeLang(lang) {
    // Matnlarni o'zgartirish
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.innerHTML = i18n[lang][key];
    });

    // Placeholderlarni o'zgartirish
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = i18n[lang][key];
    });

    // Tugma aktivligini yangilash
    document.getElementById('btn-uz').classList.toggle('active', lang === 'uz');
    document.getElementById('btn-ru').classList.toggle('active', lang === 'ru');
    
    // HTML tilini o'zgartirish
    document.documentElement.lang = lang;
    
    localStorage.setItem('lang', lang);
}

// Sahifa yuklanganda oxirgi tilni o'qish
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('lang') || 'uz';
    changeLang(savedLang);
});


const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Ikonkani o'zgartirish
        const icon = menuBtn.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });
}

// Link bosilganda menyu yopilishi
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = menuBtn.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    });
});
