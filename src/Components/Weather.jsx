import  { useState } from 'react'
import {FaSearch, FaWind} from "react-icons/fa"
import {MdLocationOn} from 'react-icons/md'
import { WiHumidity } from 'react-icons/wi';



function Weather() {

    const [city , setCity] = useState('');
    const [weather , setWeather] = useState('');
    const [error , setError] = useState('');

    const API_KEY = import.meta.env.VITE_API_KEY_REACT;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    function handleOnChange(event){
        setCity(event.target.value);
        console.log(event.target.value);
    }
     async function fetchData(){
        try {
            let response = await fetch(url);
            let output = await response.json();
            if(response.ok){
                setWeather(output);
                console.log(output);
                setError('');
            }else{
                setError('No Data Found , Enter a Valid City Name')
            }

        } catch (error) {
            console.log(error)
        }
     }
  return (
    <div className='container w-[450px] shadow-2xl h-[550px] bg-zinc-900 rounded-lg'>
        <div className='city flex justify-center gap-[15px] items-center pt-[25px]'>
            <input type='text' className=' shadow-xl w-[270px] h-[35px] flex border-zinc-600 border-solid border transition-all hover:border-indigo-400 outline-none focus:border-indigo-400 outline-none  rounded-md font-medium pl-[10px] bg-transparent text-zinc-300 ' value={city} onChange={handleOnChange} placeholder='Enter a city name'></input>
            <button className='flex justify-center shadow-xl items-center w-[40px] transition-all delay-75 hover:bg-indigo-400 h-[40px] text-zinc-300 bg-zinc-600 rounded-[50%]' onClick={() => fetchData()}>
                <FaSearch></FaSearch>
            </button>

        </div>
      
        {
            error && <p className='error-message flex justify-center items-center text-zinc-300 font-semibold text-[18px] mt-[25px]'>{error}</p>
        }


        {
            weather && weather.weather &&
            <div className='content flex justify-center items-center flex-col'>

                <div className='weather-image capitalize text-zinc-300'>
                    <img className=' h-full w-full m-[10px auto 0 auto]' src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt=''/>
                    <h3 className='desc flex text-zinc-300 font-bold text-[25px] items-center mt-0 mb-[5px]'>{weather.weather[0].description}</h3>
                </div>

                <div className='weather-temp text-center text-indigo-400 text-[50px] font-semibold m-[25px auto 15px auto ]'>
                    <h2 className='flex'>{weather.main.temp}<span>&deg;C</span></h2>
                </div>

                <div className='weather-city flex justify-center items-center flex-row font-medium text-[35px] mb-[35px]'>
                    <div className='location text-indigo-400 mt-[8px] text-[35px] pr-[5px]'>
                            <MdLocationOn></MdLocationOn>
                    </div>
                        <p className='text-zinc-300 font-normal text-[18px]'>{weather.name}, <span>{weather.sys.country}</span></p>
                </div>


                <div className='weather-stats flex flex-row justify-between gap-[60px] mt-[30px]'>
                    <div className='wind bg-indigo-500 w-[180px] h-[150px] font-medium shadow-2xl rounded-[15px] flex flex-col justify-center items-center'> 
                            <div className='wind-icon text-zinc-200 text-[30px]'>
                                <FaWind></FaWind>
                            </div>
                            <h3 className='wind-speed text-zinc-200 mt-0 font-bold'>{weather.wind.speed}<span>km/m</span></h3>
                            <h3 className='wind-heading text-zinc-200 uppercase text-[15px]'>Wind Speed</h3>
                    </div>
                        <div className='humidity  bg-indigo-500 w-[180px] h-[150px] font-medium shadow-2xl rounded-[15px] flex flex-col justify-center items-center'>
                            <div className='humididty-icon text-zinc-200 text-[40px] mt-[-10px]'>
                                <WiHumidity></WiHumidity>
                            </div>
                            <h3 className='humididty-percent text-zinc-200 font-bold'>{weather.main.humidity}<span>%</span></h3>
                            <h3 className='humididty-heading text-zinc-200 uppercase text-[15px]'>Humididty</h3>
                        </div>
                </div>

            </div>
        }
    </div>
  )
}

export default Weather
