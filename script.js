
const APIKey = '0eee8175d5eda1d78eee24d6db88d7d6';
let ville = document.getElementById("ville");

async function AppelerMeteo(input) {
    document.getElementById("afficher-meteo").innerHTML = ""
    document.getElementById("humidite").innerHTML = ""
    document.getElementById("vent").innerHTML = ""

    const reponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${APIKey}&lang=fr&units=metric`)
    const meteo = await reponse.json()
    console.log(meteo)

    //endroit ou je stocke l'infos
    const meteoElement = document.getElementById("afficher-meteo")

    //créer un texte/titre nom de ville
    let nomVille = document.createElement("h2")
    nomVille.innerText = meteo.name;
    meteoElement.appendChild(nomVille);

    //créer temps
    let temperature = document.createElement("h3")
    temperature.innerText = `${meteo.main.temp} °C`;
    meteoElement.appendChild(temperature);

    //image de la météo
    let imageMeteo = document.createElement("img")
    meteoElement.appendChild(imageMeteo);

    switch (meteo.weather[0].main) {
        case "Clouds": 
            imageMeteo.src = 'images/nuageux.png';
            break;

        case "Rain":
            imageMeteo.src = 'images/pluie.png';
            break;
        
        case "Snow":
            imageMeteo.src = 'images/neige.png';
            break;
        
        case "Thunderstorm":
            imageMeteo.src = 'images/orage.png';
            break;
        
        case "Clear":
            imageMeteo.src = 'images/soleil.png';
            break;
        
        case "Drizzle":
            imageMeteo.src = 'images/brouillard.png';
            break;
        case "Mist":
            imageMeteo.src = 'images/brouillard.png';
            break;
        case "Smoke":
            imageMeteo.src = 'images/brouillard.png';
            break;
        case "Haze":
            imageMeteo.src = 'images/brouillard.png';
            break;
        case "Dust":
            imageMeteo.src = 'images/brouillard.png';
            break;
        case "Fog":
            imageMeteo.src = 'images/brouillard.png';
            break;
        case "Sand":
            imageMeteo.src = 'images/brouillard.png';
            break;
        case "Ash":
            imageMeteo.src = 'images/brouillard.png';
            break;
        case "Squall":
            imageMeteo.src = 'images/brouillard.png';
            break;
        case "Tornado":
            imageMeteo.src = 'images/brouillard.png';
            break;
    }

    //description de la météo
    let informationMeteo = document.createElement("p")
    informationMeteo.innerText = meteo.weather[0].description;
    meteoElement.appendChild(informationMeteo);

    //endroit ou je stocke l'infos
    const meteoHumidite= document.getElementById("humidite")
    
    //humidite
    let humiditeImage = document.createElement("img")
    humiditeImage.src = 'images/humidite.png';
    meteoHumidite.appendChild(humiditeImage);

    let humidite = document.createElement("p")
    humidite.innerText = `${meteo.main.humidity} %`;
    meteoHumidite.appendChild(humidite);

    //endroit ou je stocke l'infos
    const meteoVent= document.getElementById("vent")

    let ventImg = document.createElement("img")
    ventImg.src = 'images/vent.png';
    meteoVent.appendChild(ventImg);
    //vent
    let vent = document.createElement("p")
    vent.innerText = `${meteo.wind.speed} km/h`;
    meteoVent.appendChild(vent);

};




