async function Drivers() {
    const response = await fetch("https://api.openf1.org/v1/drivers");
    const drivers = await response.json();

    const search = prompt('Whatcha wanna search?')
    const result = drivers.filter(checkName);

    function checkName(driver) {
        return driver = search;
    }

    checkName()

    const driverContainer = document.querySelector(".data-container");
    for (const value of drivers.slice(0, 10)) {
        driverContainer.innerHTML += `
        <div class="driver" >
            <img src="${value.headshot_url}">
            <p>${value.full_name}</p>
            <p>${value.country_code}</p>
            <p>${value.team_name}</p>
        </div>`;
    }

}

Drivers()