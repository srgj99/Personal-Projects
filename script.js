let weather = {
  "myKey": "756c2170691afe2d62772180e892a77c",

  fetchWeather: function (city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
      + city + "&units=metric&appid=" + this.myKey)
      .then((res) => res.json())
      .then((data) => this.displayWeather(data));
  },

  displayWeather: function(data) {
    const { name } = data;
    const { temp } = data.main;
    const { description, icon } = data.weather[0];
    
    document.querySelector(".city").innerText = name;
    document.querySelector(".temp").innerText = parseInt(temp) + "°C";
    document.querySelector(".desc").innerText = description;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@4x.png";
    document.body.style.backgroundImage = "url('https://source.unsplash.com/random/?" + description + "')";
  },

  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },

};

weather.fetchWeather("Hamburg");

document
.querySelector(".search button")
.addEventListener("click", function () { weather.search(); });

document
.querySelector(".search-bar")
.addEventListener("keyup", function (event) { if (event.key == "Enter") { weather.search(); }});