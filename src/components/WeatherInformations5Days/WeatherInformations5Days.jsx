
import './WeatherInformations5Days.css'

function WeatherInformations5Days ({weather5Days}) {

let dailyForecast = {

}

for(let forecast of weather5Days.list) {
  const date = new Date(forecast.dt * 1000).toLocaleDateString()


  if (!dailyForecast[date]){
    dailyForecast[date] = forecast
  }

}

const next5DaysForecast = Object.values(dailyForecast).slice(0,5)

function convertDate (date){
  const newDate = new Date(date.dt * 1000).toLocaleDateString( 'pt-BR' , { weekday: "long", day: "2-digit" })

  return newDate

}

return (

  <div className='weather-container'>

  <p>Previsão Próximos 5 Dias</p>
    {next5DaysForecast.map(forecast =>(

      <div key ={forecast.dt}>
        <p>{convertDate(forecast)}</p>
        <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}/>
        <p>{forecast.weather[0].descripition}</p>
        <p>{Math.round (forecast.main.temp_min) }C° min / {Math.round (forecast.main.temp_max )}C° máx</p>
      </div>

    ))}
  </div>

)

}

export default WeatherInformations5Days ;