const city = document.querySelector(".weather_city")
const day = document.querySelector(".weather_day")
const temp = document.querySelector(".weather_temp")
const wind = document.querySelector(".weather_wind")
const search = document.querySelector("#add")
const input = document.querySelector(".search_input")
const text = document.querySelector(".weather_text")
const humidity = document.querySelector(".weather_humidity")
const set = document.querySelector(".weather_sunset")
const rise = document.querySelector(".weather_sunrise")
const photo = document.querySelector(".weather_img")
const days1 = document.querySelector(".days1")
const days2 = document.querySelector(".days2")
const days3 = document.querySelector(".days3")
const photo1 = document.querySelector(".img1")
const photo2 = document.querySelector(".img2")
const photo3 = document.querySelector(".img3")

search.addEventListener("click", () => {
     fetch(
          'http://api.weatherapi.com/v1/forecast.json?key=8b8e47688bf94e8096b31027230802&q=' + input.value + '&days=10&aqi=yes&alerts=yes'
     )
          .then(res => res.json())
          .then((res) => {
               if (input.value == "") {
                    alert("Please enter your city")
               }
               else {
                    showDisplay(res)
                    showDays1(res)
               }
          })
          .catch((err) => console.log(err))
})
function showDisplay(res) {
     let outPut = ""
     let outPut1 = ""
     let outPut2 = ""
     let outPut3 = ""
     let outPut4 = ""
     let outPut5 = ""
     let outPut6 = ""
     let outPut7 = ""
     let outPut8 = ""
     outPut += `${res.location.name}`
     outPut1 += `${res.location.localtime}`
     outPut2 += `${res.current.temp_c}°C`
     outPut3 += `Wind: ${res.current.wind_mph}`
     outPut4 += `${res.current.condition.text}`
     outPut5 += `Humidity: ${res.current.humidity}%`
     outPut6 += `Sunset: ${res.forecast.forecastday[0].astro.sunset}`
     outPut7 += `Sunrise: ${res.forecast.forecastday[0].astro.sunrise}`
     outPut8 += `${res.current.condition.icon}`
     city.innerHTML = outPut
     day.innerHTML = outPut1
     temp.innerHTML = outPut2
     wind.innerHTML = outPut3
     text.innerHTML = outPut4
     humidity.innerHTML = outPut5
     set.innerHTML = outPut6
     rise.innerHTML = outPut7
     photo.setAttribute("src", outPut8)
}
function showDays1(res) {
     const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
     const d = new Date(res.location.localtime);
     let month = months[d.getMonth()];
     let result = ""
     let result1 = ""
     let result2 = ""
     let result3 = ""
     let result4 = ""
     let result5 = ""
     result = `${res.forecast.forecastday[0].date}`
     result1 = `${res.forecast.forecastday[1].date}`
     result2 = `${res.forecast.forecastday[2].date}`
     result3 = `${res.forecast.forecastday[0].hour[0].condition.icon}`
     result4 = `${res.forecast.forecastday[1].hour[0].condition.icon}`
     result5 = `${res.forecast.forecastday[2].hour[0].condition.icon}`
     let date = new Date()
     let current_day = date.getDate()
     days1.innerHTML = month + result.slice(7,10)
     days2.innerHTML = month + result1.slice(7,10)
     days3.innerHTML = month + result2.slice(7,10)
     photo1.setAttribute("src", result3)
     photo2.setAttribute("src", result4)
     photo3.setAttribute("src", result5)
}