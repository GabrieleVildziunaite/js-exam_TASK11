const BASE_URL_SKILL = 'https://melon-potent-period.glitch.me/skills';
const BASE_URL_ID = 'https://melon-potent-period.glitch.me/skill';

async function getData(url) {
	try {
		const response = await fetch(url);
		const responseData = await response.json();
		return responseData;
	} catch (error) {
		console.log(error);
		return null;
	}
}

async function getDataFromUrl(url) {
	const data = await getData(url);
	populateSkills(data);
	console.log(data);
}

function populateSkills(data) {
    const wrapper = document.getElementById("wrapper");

	data.forEach((dataItem) => {
        const skillRow = document.createElement("tr");
        const skillID = document.createElement("td");
        skillID.textContent = dataItem.id;
        const skillName = document.createElement("td");
        skillName.textContent = dataItem.skill;
        const skillDelete = document.createElement("td");
        const skillDeleteButton = document.createElement("button");
        skillDeleteButton.classList.add("deleteButton");
        skillDeleteButton.addEventListener("click", () => {
			deleteItem(BASE_URL_ID + "/" + dataItem.id);
		});
        skillDeleteButton.innerText = "detele";


        skillDelete.append(skillDeleteButton);
        skillRow.append(skillID, skillName, skillDelete);
        wrapper.append(skillRow);

	});
}

async function deleteItem(url) {
	try {
		const response = await fetch(url, {
			method: "DELETE",
			headers: {
				"Content-type": "application/json",
			},
		});
		alert(response.ok ? "Success" : "Not deleted");
		window.location.reload();
	} catch (error) {
        alert("error");
		console.log(error);
	}
}


getDataFromUrl(BASE_URL_SKILL);

