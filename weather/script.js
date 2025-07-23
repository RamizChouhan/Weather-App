
const BASE_URL="https://goweather.herokuapp.com/weather/";
const Input = document.querySelector(".inputweather input");
const btn = document.querySelector("form button");
const msg = document.querySelector(".msg");
const locationmsg = document.querySelector(".Location");


btn.addEventListener("click", async (evt)=>{
  evt.preventDefault();
 const  URL = `${BASE_URL}${Input.value.toLowerCase()}`;
  const response = await fetch(URL);
  console.log("unreadable")
  console.log(response);
  const data = await response.json();
  console.log("readable")
  console.log(data);
 const location = Input.value;
  const temperature = data.temperature;
  const description = data.description;
  msg.innerText = `Temperature :${temperature},Description :${description}`;
  locationmsg.innerText=location+":";
});
