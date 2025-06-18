const firebaseConfig = {
    apiKey: "AIzaSyB14ygYNykR40-PEUPuG3nztjf6sZOcSdQ",
    authDomain: "mariayjavier-4ff9a.firebaseapp.com",
    projectId: "mariayjavier-4ff9a",
    storageBucket: "mariayjavier-4ff9a.firebasestorage.app",
    messagingSenderId: "8499851730",
    appId: "1:8499851730:web:5c172840e23397d8e2580b"
  };

  // Inicializa Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Función para enviar buenos deseos
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
        }).catch((error) => {
            console.error("Error al enviar el deseo:", error);
            alert("Hubo un error. Inténtalo nuevamente.");
        });
    } else {
        alert("Por favor completa ambos campos.");
    }
}

function toggleWishForm() {
    document.getElementById('wish-form').classList.toggle('hidden');
}