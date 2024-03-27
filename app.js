const fetch = require('node-fetch');

const apiKey = "";

async function fetchWeather(city) {
    try {
        // Fazendo uma requisição GET para a API da OpenWeatherMap
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        
        // Verifica se a requisição foi bem-sucedida (código de status 200)
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error('Erro ao buscar dados meteorológicos:', response.statusText);
        }
    } catch (error) {
        console.error('Erro ao buscar dados meteorológicos:', error.message);
    }
}

// Função para exibir os dados meteorológicos
function displayWeather(data) {
    console.log('Dados meteorológicos para', data.name);
    console.log('Temperatura:', data.main.temp + '°C');
    console.log('Condição:', data.weather[0].description);
    console.log('Umidade:', data.main.humidity + '%');
}

// Cidade para buscar dados meteorológicos (insira o nome da cidade desejada)
const city = 'Florianópolis';

// Chamada da função para buscar dados meteorológicos e exibi-los
fetchWeather(city)
    .then(data => {
        displayWeather(data);
    })
    .catch(error => {
        console.error('Erro ao buscar dados meteorológicos:', error.message);
    });