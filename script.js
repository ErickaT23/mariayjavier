document.addEventListener("DOMContentLoaded", function () {
    // 🎵 Música
    const audio = document.getElementById("audioPlayer");
    const playPauseButton = document.getElementById("playPauseButton");
    const iconoPlayPause = document.getElementById("iconoPlayPause");
    const progressBar = document.getElementById("progress-bar");
    const currentTimeDisplay = document.getElementById("current-time");
    const durationTimeDisplay = document.getElementById("duration-time");

    function updateProgress() {
        audio.addEventListener("timeupdate", function () {
            const progress = (audio.currentTime / audio.duration) * 100;
            progressBar.value = progress;

            const currentMinutes = Math.floor(audio.currentTime / 60);
            const currentSeconds = Math.floor(audio.currentTime % 60);
            currentTimeDisplay.textContent = `${currentMinutes}:${currentSeconds < 10 ? '0' + currentSeconds : currentSeconds}`;

            if (!isNaN(audio.duration)) {
                const durationMinutes = Math.floor(audio.duration / 60);
                const durationSeconds = Math.floor(audio.duration % 60);
                durationTimeDisplay.textContent = `${durationMinutes}:${durationSeconds < 10 ? '0' + durationSeconds : durationSeconds}`;
            }
        });
    }

    function togglePlayPause() {
        requestAnimationFrame(() => {
            iconoPlayPause.classList.toggle("fa-play");
            iconoPlayPause.classList.toggle("fa-pause");
        });

        setTimeout(() => {
            if (audio.paused) {
                audio.play().catch(console.error);
            } else {
                audio.pause();
            }
        }, 50);
    }

    playPauseButton.addEventListener("click", togglePlayPause);

    progressBar.addEventListener("input", function () {
        const newTime = (progressBar.value / 100) * audio.duration;
        audio.currentTime = newTime;
    });

    // 🎁 Sobre y música al abrir
    document.getElementById("seal").addEventListener("click", function (event) {
        event.stopPropagation();
        const envelopeTop = document.getElementById("envelope-top");
        const envelopeBottom = document.getElementById("envelope-bottom");
        const envelope = document.getElementById("envelope");
        const invitation = document.getElementById("invitation");

        envelopeTop.style.transform = 'translateY(-100vh)';
        envelopeBottom.style.transform = 'translateY(100vh)';

        setTimeout(() => {
            envelope.classList.add('hidden');
            invitation.classList.remove('hidden');
        }, 1000);

        audio.play().then(() => {
            iconoPlayPause.classList.remove("fa-play");
            iconoPlayPause.classList.add("fa-pause");
            updateProgress();
        }).catch(error => console.log('Playback failed:', error));
    });

    // ⏰ Countdown
    const targetDate = new Date('2025-07-19T00:00:00').getTime();
    const countdown = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days < 10 ? '0' + days : days;
        document.getElementById('hours').textContent = hours < 10 ? '0' + hours : hours;
        document.getElementById('minutes').textContent = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById('seconds').textContent = seconds < 10 ? '0' + seconds : seconds;

        if (distance < 0) {
            clearInterval(countdown);
            document.querySelector('.countdown').textContent = "Gracias por habernos acompañado en este día tan especial.";
        }
    }, 1000);

    // 🌟 Animaciones fade-in
    const elementsToFade = document.querySelectorAll('.fade-in-element');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    elementsToFade.forEach(element => observer.observe(element));
});

// 🖼️ Galería
function changePhoto(element) {
    const mainPhoto = document.getElementById('main-photo');
    const modalPhoto = document.getElementById('main-photo-modal');
    mainPhoto.src = element.src;
    modalPhoto.src = element.src;
}

// Modal galería
function openModal() {
    document.getElementById('photo-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('photo-modal').style.display = 'none';
}

document.querySelector('.close').addEventListener('click', closeModal);
document.getElementById('photo-modal').addEventListener('click', function (event) {
    if (event.target === this) {
        closeModal();
    }
});

// 🌸 Buenos deseos (Firebase)
function toggleWishes() {
    const wishesDiv = document.getElementById('wishes');
    wishesDiv.classList.toggle('hidden');
    if (!wishesDiv.classList.contains('hidden')) {
        loadWishes();
    }
}

function loadWishes() {
    const wishesDiv = document.getElementById('wishes');
    wishesDiv.innerHTML = '';

    db.ref("wishes").once("value").then(snapshot => {
        snapshot.forEach(childSnapshot => {
            const wish = childSnapshot.val();
            wishesDiv.innerHTML += `<p><strong>${wish.name}:</strong> ${wish.message}</p>`;
        });
    }).catch((error) => {
        console.error("Error cargando deseos:", error);
    });
}

function toggleWishForm() {
    document.getElementById('wish-form').classList.toggle('hidden');
}

function submitWish() {
    const name = document.getElementById('wish-name').value.trim();
    const message = document.getElementById('wish-message').value.trim();

    if (name && message) {
        db.ref("wishes").push({
            name: name,
            message: message,
            timestamp: Date.now()
        }).then(() => {
            alert("¡Gracias por tus buenos deseos!");
            document.getElementById('wish-name').value = '';
            document.getElementById('wish-message').value = '';
            toggleWishForm();
            loadWishes();
        }).catch((error) => {
            console.error("Error al enviar el deseo:", error);
            alert("Hubo un error. Intenta de nuevo.");
        });
    } else {
        alert("Por favor completa ambos campos.");
    }
}
