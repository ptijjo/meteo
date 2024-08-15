import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Formulaire = ({ onChangeCity }) => {
    
    const [city,setCity]= useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        onChangeCity(city)
    }

    const onChange=(e)=>{
        const value = e.target.value;
        if (value !== "") {
            setCity(value)
        }
    }

    return (
        <form className="flex w-screen h-dvh justify-center items-center gap-x-2">
            <input type="text" className=" border-solid border border-black h-10" onChange={onChange}/>
            <button type="submit" onClick={handleSubmit} className="bg-red-600 text-white p-2 rounded-sm h-10">Rechercher</button>
        </form>
    )
}

export default Formulaire;
