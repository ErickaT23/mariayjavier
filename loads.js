const guests = [
    { id: "1", name: "Abby y Fer", passes: 2, adults: 2, kids: 0, gender: "neutral" },
];


document.addEventListener("DOMContentLoaded", function () {
    function getQueryParams() {
        const params = {};
        const queryString = window.location.search.substring(1);
        const pairs = queryString.split("&");
        for (const pair of pairs) {
            const [key, value] = pair.split("=");
            params[decodeURIComponent(key)] = decodeURIComponent(value.replace(/\+/g, ' '));
        }
        return params;
    }

    const queryParams = getQueryParams();
    const guestId = queryParams.id;

    const guest = guests.find(g => g.id === guestId);

    if (guest) {
        let invitationText;
        let genderText;

        // Determinar frase de invitación según género y cantidad
        if (guest.passes === 1) {
            genderText = guest.gender === "female" ? "está invitada" : "está invitado";
        } else {
            if (guest.gender === "female" && guest.adults + guest.kids === guest.passes) {
                genderText = "están invitadas";
            } else if (guest.gender === "male" && guest.adults + guest.kids === guest.passes) {
                genderText = "están invitados";
            } else {
                genderText = "están invitados";
            }
        }

        invitationText = `¡${guest.name}, ${genderText}!`;
        document.getElementById('guest-name').textContent = invitationText;

        let passesText = `${guest.passes} ${guest.passes === 1 ? 'pase' : 'pases'}`;
        if (guest.kids > 0) {
            passesText += ` (${guest.adults} adulto${guest.adults !== 1 ? 's' : ''} y ${guest.kids} niño${guest.kids !== 1 ? 's' : ''})`;
        }

        document.getElementById('passes').textContent = `Invitación válida por ${passesText}`;
    } else {
        document.getElementById('guest-name').textContent = `¡Invitado no encontrado!`;
        document.querySelector('.invitation-info-section').style.display = 'none';
    }
});
