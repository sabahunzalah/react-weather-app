const apiKey = "0c7725f32a475675de3ba93ab0cc88a7"

const getWeather = async (city)=>{
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    .then((res)=>res.json())
    .then((json)=>{
        return json
    })
}
export default getWeather;