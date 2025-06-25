const guests = [
    { id: "1", name: "Fam Gaitán Paredes", passes: 2, adults: 2, gender: "neutral" },
    { id: "2", name: "Hermanos Gaipar", passes: 5, adults: 5, gender: "neutral" },
    { id: "3", name: "Fam Gaitán Barrientos", passes: 4, adults: 4, gender: "neutral" },
    { id: "4", name: "Fam Gaitán Cifuentes", passes: 5, adults: 5, gender: "neutral" },
    { id: "5", name: "Fam Gaitán Asturias", passes: 4, adults: 4, gender: "neutral" },
    { id: "6", name: "Fam Gaitán Ramírez", passes: 2, adults: 2, gender: "neutral" },
    { id: "7", name: "Nayo Y Margo", passes: 2, adults: 2, gender: "neutral" },
    { id: "8", name: "Ricky Y Stefany", passes: 3, adults: 3, gender: "neutral" },
    { id: "9", name: "Mayra Castillo", passes: 1, adults: 1, gender: "femenino" },
    { id: "10", name: "Andres Y Vera", passes: 2, adults: 2, gender: "neutral" },
    { id: "11", name: "Brenda Y Pablo", passes: 2, adults: 2, gender: "neutral" },
    { id: "12", name: "Melany, Sebas Y Faty", passes: 3, adults: 3, gender: "neutral" },
    { id: "13", name: "Mario", passes: 2, adults: 2, gender: "masculino" },
    { id: "14", name: "Julio Castillo", passes: 1, adults: 1, gender: "masculino" },
    { id: "15", name: "Irma Rivas", passes: 1, adults: 1, gender: "femenino" },
    { id: "16", name: "Alex, Brenda, Saul Y Sarai", passes: 4, adults: 4, gender: "neutral" },
    { id: "17", name: "Fam Castillo Castillo", passes: 4, adults: 4, gender: "neutral" },
    { id: "18", name: "Fam Castillo Argueta", passes: 4, adults: 4, gender: "neutral" },
    { id: "19", name: "Zoily Rivas", passes: 1, adults: 1, gender: "femenino" },
    { id: "20", name: "Carlos Y Danny", passes: 2, adults: 2, gender: "neutral" },
    { id: "21", name: "Fam Paredes Perez", passes: 4, adults: 4, gender: "neutral" },
    { id: "22", name: "Fam Hernandez Paredes", passes: 2, adults: 2, gender: "neutral" },
    { id: "23", name: "Majo Y Cristian", passes: 2, adults: 2, gender: "neutral" },
    { id: "24", name: "Nancy Pac", passes: 2, adults: 2, gender: "femenino" },
    { id: "25", name: "Ericka Escobar", passes: 2, adults: 2, gender: "femenino" },
    { id: "26", name: "Victor De La Rosa", passes: 2, adults: 2, gender: "masculino" },
    { id: "27", name: "Javier Juarez", passes: 2, adults: 2, gender: "masculino" },
    { id: "28", name: "Miriam Garcia", passes: 2, adults: 2, gender: "femenino" },
    { id: "29", name: "Jose De Leon", passes: 2, adults: 2, gender: "masculino" },
    { id: "30", name: "Jorge Monterroso", passes: 2, adults: 2, gender: "masculino" },
    { id: "31", name: "Edgar Sampuel", passes: 2, adults: 2, gender: "masculino" },
    { id: "32", name: "Mario Valenzuela", passes: 2, adults: 2, gender: "masculino" },
    { id: "33", name: "Angel Hernandez", passes: 1, adults: 1, gender: "masculino" },
    { id: "34", name: "Jonathan Crispin", passes: 2, adults: 2, gender: "masculino" },
    { id: "35", name: "Nineth Reyes E Hijos", passes: 3, adults: 3, gender: "neutral" },
    { id: "36", name: "Elder Y Yoselin", passes: 2, adults: 2, gender: "neutral" },
    { id: "37", name: "Mildred Reyes", passes: 4, adults: 4, gender: "femenino" },
    { id: "38", name: "Candelaria Gonzalez", passes: 1, adults: 1, gender: "femenino" },
    { id: "39", name: "Manuel Reyes", passes: 2, adults: 2, gender: "masculino" },
    { id: "40", name: "Allan González", passes: 2, adults: 2, gender: "masculino" },
    { id: "41", name: "Tania Y Yadir", passes: 2, adults: 2, gender: "neutral" },
    { id: "42", name: "Marcella Y Rony", passes: 2, adults: 2, gender: "neutral" },
    { id: "43", name: "Graciela Melgar", passes: 2, adults: 2, gender: "femenino" },
    { id: "44", name: "Luis Vargas", passes: 2, adults: 2, gender: "masculino" },
    { id: "45", name: "Renato Sanchez", passes: 2, adults: 2, gender: "masculino" },
    { id: "46", name: "Eduardo Y Jenifer", passes: 2, adults: 2, gender: "neutral" },
    { id: "47", name: "Quique", passes: 1, adults: 1, gender: "masculino" },
    { id: "48", name: "Vivi", passes: 2, adults: 2, gender: "femenino" },
    { id: "49", name: "Meredith Y Ricardo", passes: 2, adults: 2, gender: "neutral" },
    { id: "50", name: "Ruben Herrera", passes: 2, adults: 2, gender: "masculino" },
    { id: "51", name: "Victor Robles", passes: 1, adults: 1, gender: "masculino" },
    { id: "52", name: "Teresa Arango", passes: 1, adults: 1, gender: "femenino" },
    { id: "53", name: "Wesley Davila", passes: 2, adults: 2, gender: "masculino" },
    { id: "54", name: "Francisco Y Ericka", passes: 2, adults: 2, gender: "neutral" },
    { id: "55", name: "Gustavo Medina", passes: 1, adults: 1, gender: "masculino" },
    { id: "56", name: "Evelyn Reyes", passes: 1, adults: 1, gender: "femenino" },
    { id: "57", name: "Dio", passes: 1, adults: 1, gender: "neutral" },
    { id: "58", name: "Carlos Rancho", passes: 1, adults: 1, gender: "masculino" },
    { id: "59", name: "Jose Nolasco", passes: 1, adults: 1, gender: "masculino" },
    { id: "60", name: "Hesler", passes: 2, adults: 2, gender: "masculino" },
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
            genderText = guest.gender === "femenino" ? "está invitada" : "está invitado";
        } else {
            if (guest.gender === "femenino" && guest.adults + guest.kids === guest.passes) {
                genderText = "están invitadas";
            } else if (guest.gender === "masculino" && guest.adults + guest.kids === guest.passes) {
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
