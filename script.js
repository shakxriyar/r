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