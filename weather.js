// grabbing button from html:
const weatherButton = document.getElementById("weather_button");
// what happens when button is clicked (i.e adding a "listener" for click event):
weatherButton.addEventListener("click", myFunction);

function myFunction(){
    // making a 'get' request for weather in Austin via api.weatherapi.com
    var request = new XMLHttpRequest();
    request.open('GET', 'http://api.weatherapi.com/v1/current.json?key=07bc875e1736413aae935136220405&q=Austin&aqi=no')
    request.send();
    request.onload = ()=>{
    // setting res to the parsed response of our request (res is an obeject)
       var res = JSON.parse(request.response);
    //   retrieving one piece of the res and setting it as temp
        var temp = res.current.temp_f;
        console.log(temp);
    // grabbing p element from html
        const weather_now = document.getElementById("weather_now");
    // updating inner HTML to display data
       weather_now.innerHTML = `The weather is${temp} in Austin.`;
    }
}


//http://api.weatherapi.com/v1/current.json?key=07bc875e1736413aae935136220405&q=Austin&aqi=no