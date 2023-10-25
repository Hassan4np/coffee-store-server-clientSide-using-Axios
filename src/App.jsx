
import { useState } from 'react';
import Allcoffees from './Allcoffees';
import './App.css'
import { useLoaderData } from "react-router-dom";
function App() {
  const coffe = useLoaderData();
  const  [coffees,setcoffees] = useState(coffe)

  return (
    <>
      <h1>Home page{coffees.length}</h1>
      <div className='grid md:grid-cols-2 gap-5'>
        {
          coffees.map(coffess=><Allcoffees key={coffess._id} coffee={coffess} coff={coffees} setcoff={setcoffees} ></Allcoffees>)
        }
      </div>
    </>
  )
}

export default App
