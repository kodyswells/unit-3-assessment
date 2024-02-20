let color = document.getElementById('color');

const favoriteColor = evt => {
    evt.preventDefault();
    alert("My Favorite Color Is Orange!");
};
color.addEventListener(`click`,favoriteColor);

let place = document.getElementById('place');

const favoritePlace = evt => {
    evt.preventDefault();
    alert("My Favorite Place is the Mountains!");
};
place.addEventListener(`click`,favoritePlace);

let ritual = document.getElementById('ritual');

const favoriteRitual = evt => {
    evt.preventDefault();
    alert("My Favorite Ritual is Watching Some Anime Before Bed!");
};
ritual.addEventListener(`click`,favoriteRitual);