function displayAllCharacters() {
    fetch("https://rickandmortyapi.com/api/character", {
        method: "GET",
    })
    
    .then((response) => response.json())
    .then(data => {
        var characters = data.results;
        var displayCharactersBox = document.getElementById('display-character');

        characters.forEach(character => {
            var characterBox = document.createElement('div');
            characterBox.className = 'character-box';

            var characterImage = document.createElement('img');
            characterImage.className = 'character-image';
            characterImage.src = character.image;
            characterImage.alt = character.name;

            var characterName = document.createElement('p');
            characterName.textContent = character.name;

            characterBox.appendChild(characterImage);
            characterBox.appendChild(characterName);

            displayCharactersBox.appendChild(characterBox);
          });
    })
};

displayAllCharacters();

function displayAllLocations() {
    fetch("https://rickandmortyapi.com/api/location", {
        method: "GET",
    })
    
    .then((response) => response.json())
    .then(data => {
        var locations = data.results;
        var displayLocationsBox = document.getElementById('display-location');

        locations.forEach(location => {
            var locationBox = document.createElement('div');
            locationBox.className = 'location-box';

            var locationName = document.createElement('p');
            locationName.textContent = location.name;
            var locationType = document.createElement('p');
            locationType.textContent = location.type;
            var locationDimension = document.createElement('p');
            locationDimension.textContent = location.dimension;

            locationBox.appendChild(locationName);
            locationBox.appendChild(locationType);
            locationBox.appendChild(locationDimension);

            displayLocationsBox.appendChild(locationBox);
          });
    })
};

displayAllLocations();

function displayAllEpisodes() {
    fetch("https://rickandmortyapi.com/api/episode", {
        method: "GET",
    })
    
    .then((response) => response.json())
    .then(data => {
        var episodes = data.results;
        var displayEpisodesBox = document.getElementById('display-episode');

        episodes.forEach(episode => {
            var episodeBox = document.createElement('div');
            episodeBox.className = 'episode-box';

            var episodeName = document.createElement('p');
            episodeName.textContent = episode.name;
            var episodeEpisode = document.createElement('p');
            episodeEpisode.textContent = episode.episode;
            var episodeAirDate = document.createElement('p');
            episodeAirDate.textContent = episode.air_date;

            episodeBox.appendChild(episodeName);
            episodeBox.appendChild(episodeEpisode);
            episodeBox.appendChild(episodeAirDate);

            displayEpisodesBox.appendChild(episodeBox);
          });
    })
};

displayAllEpisodes();

function displayRick() {
    fetch("https://rickandmortyapi.com/api/character/1", {
        method: "GET",
    })
    
    .then((response) => response.json())
    .then((jsonResp) => {
        var displayRickBox = document.getElementById('display-rick');
        var rickBox = document.createElement('div');
        rickBox.className = 'rick-box';

        var name = document.createElement('p');
        name.textContent = "Name:" + " " + jsonResp.name;
        var status = document.createElement('p');
        status.textContent = "Status:" + " " + jsonResp.status;
        var species = document.createElement('p');
        species.textContent = "Species:" + " " + jsonResp.species;
        var gender = document.createElement('p');
        gender.textContent = "Gender:" + " " + jsonResp.gender;
        var image = document.createElement('img');
        image.className = 'rick-image';
        image.src = jsonResp.image;
        image.alt = jsonResp.name;

        rickBox.appendChild(image);
        rickBox.appendChild(name);
        rickBox.appendChild(status);
        rickBox.appendChild(species);
        rickBox.appendChild(gender);
        displayRickBox.appendChild(rickBox);
    })
};

displayRick();

function displayMorty() {
    fetch("https://rickandmortyapi.com/api/character/2", {
        method: "GET",
    })
    
    .then((response) => response.json())
    .then((jsonResp) => {
        var displayMortykBox = document.getElementById('display-morty');
        var mortyBox = document.createElement('div');
        mortyBox.className = 'morty-box';

        var name = document.createElement('p');
        name.textContent = "Name:" + " " + jsonResp.name;
        var status = document.createElement('p');
        status.textContent = "Status:" + " " + jsonResp.status;
        var species = document.createElement('p');
        species.textContent = "Species:" + " " + jsonResp.species;
        var gender = document.createElement('p');
        gender.textContent = "Gender:" + " " + jsonResp.gender;
        var image = document.createElement('img');
        image.className = 'morty-image';
        image.src = jsonResp.image;
        image.alt = jsonResp.name;

        mortyBox.appendChild(image);
        mortyBox.appendChild(name);
        mortyBox.appendChild(status);
        mortyBox.appendChild(species);
        mortyBox.appendChild(gender);
        displayMortykBox.appendChild(mortyBox);
    })
};

displayMorty();