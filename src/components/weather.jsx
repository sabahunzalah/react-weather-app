

import { useState } from "react";
import "./weather.css"
import { Row, Col } from "antd";
import getWeather from "./Api.jsx";
import { Droplet, MapPin, Search, Thermometer, Wind } from "react-feather";


function WeatherApp() {
    const [city, setCity] = useState("")
    const [weather, setWeather] = useState({})


    const getWeatherbyCity = async () => {
        const weathrData = await getWeather(city)
        setWeather(weathrData)
        setCity("");
    }
    return (
        <>
            <Row className="main">
                <Col xl={24} lg={24} md={24} sm={24} xs={24}><h1 style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold', color: 'white' }}> Weather Forcasting Application !!</h1></Col>
                <Col xl={24} lg={24} md={24} sm={24} xs={24} className="main-row">
                    <Col xl={18} lg={18} md={18} sm={18} xs={18} className="parent">
                        <Row className="child">
                            <Col xl={18} lg={18} md={18} sm={18} xs={18} className="navBar">
                                <input value={city} placeholder="Enter City Name...." type="text" className="inputField" onChange={(e) => setCity(e.target.value)} />
                                <button onClick={() => getWeatherbyCity()} className="searchbtn">
                                    <Search></Search>
                                </button>
                                <>
                                    {weather && weather.weather &&
                                        <div className="data-child">
                                            <h1 style={{ fontSize: "50px" }}><MapPin style={{
                                                width: "60px",
                                                height: "50px"
                                            }}></MapPin>{weather.name}</h1>
                                            <h1><Thermometer></Thermometer>{weather.main.temp}°C</h1>
                                            <h1>{weather.weather[0].description}</h1>
                                            <h3><Wind></Wind>{weather.wind.speed}</h3>
                                            <h3>Feels like{weather.main.feels_like}°C</h3>
                                            <h3><Droplet></Droplet>Humidity{weather.main.humidity}%</h3>
                                        </div>}
                                    {!weather.weather && <div className="data-child">  <h1 style={{ textAlign: 'center' }}>No Data Found !</h1></div>
                                    }




                                </>
                            </Col>
                        </Row>
                    </Col>
                </Col>
            </Row>
        </>
    )
}
export default WeatherApp;