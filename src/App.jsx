import Formulaire from "./components/formulaire"

function App() {
 
  const handleChange = () => {
    
  }

  return (
    <main className="bg-black">
     <Formulaire onChangeCity={handleChange}/>
    </main>
  )
}

export default App
