const BASE_URL_SKILL = 'https://melon-potent-period.glitch.me/skills';

async function sendData(url, data){
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(data),
        });
        if (response.ok) {
            const responsedata = await response.json();
            console.log(responsedata);
            alert("Duomenys issaugoti!")
        }
    } catch (error) {
        console.error(error);
        alert("Klaida! Bandykite dar karta")
    }
}

document.getElementById("add-a-skill").addEventListener("click", (event) => {
    // event.preventDefault();
    const skillInput = document.getElementById("skillInput").value;

    const data = {
        skill: skillInput,
    };

    sendData(BASE_URL_SKILL, data)
});