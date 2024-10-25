import './App.css'
import Card from './components/Card'

function App() {
  
let UserName = "Jagdish"
let btnText = "Click Me!"

  return (
    <>
    <h1 className='bg-green-400 text-black p-6 rounded-xl mb-4'>Hello Coder</h1>
    <Card username="Harish" btnText= "Vist ME!" />
    <Card username={UserName} btnText= {btnText} />
      
    </>
  )
}

export default App
