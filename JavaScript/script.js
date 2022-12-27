const apiKey = "b82dce1c17c313957804cf6dcac2ffbc";

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

const url = (city) => 
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b82dce1c17c313957804cf6dcac2ffbc`;

//Vamos buscar o clima de acordo com o nome da cidade

async function getWeatherByLocation(city) {

  const res = await fetch(url(city), {
      origin: "cros"
  });

  const resData = await res.json();
  addWeatherToPage(resData);

}

//Esta é a função para mostrar o clima e os ícones de acordo com o clima

function addWeatherToPage(data) {

  const temp = Ktoc(data.main.temp);

  const weather = document.createElement('div')
  weather.classList.add('weather');

  weather.innerHTML = `
    <h2>
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
      ${temp} °C
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
      </h2>
      <small> ${data.weather[0].main} </small>
  `

  //cleanup

  main.innerHTML = "";
  main.appendChild(weather);

}

//Aqui, estamos convertendo a temperatura em celsius e, por último, adicionando o evento submit à entrada de pesquisa

function Ktoc(K) {
  return Math.floor(K - 273.15);
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const city = search.value;

    if(city) {
      getWeatherByLocation(city);
    }

});

function toInstagram() {
  window.open('https://instagram.com/shrieker_?igshid=YmMyMTA2M2Y=', '_blank')
}