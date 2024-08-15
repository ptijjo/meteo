import { useState } from "react";
import axios from "axios";


const key=import.meta.env.VITE_API_KEY

const Formulaire = () => {
    
    const [city,setCity]= useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(city)
        loadInfo(city);
        setCity("");   
    }

    const loadInfo = async (info)=>{
        try {
            const result = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${info}&aqi=yes`);
            console.log(result.data)
            return result.data
        } catch (error) {
            console.error(`Oups!! Une erreur s'est produite : ${error}`)
        }
    }

  

    return (
        <form className="flex w-screen h-dvh justify-center items-center gap-x-2">
            <input type="text" className=" border-solid border border-black h-10" value={city} onChange={(e)=>setCity(e.target.value)}/>
            <button type="submit" onClick={handleSubmit} className="bg-red-600 text-white p-2 rounded-sm h-10">Rechercher</button>
        </form>
    )
}

export default Formulaire;
