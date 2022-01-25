
import React, {useState} from 'react'
import './HomePage.css'

export default function HomePage(props) {


    const [name,setName] = useState ('');

    const insertName = (element)=>{
        setName(element.target.value);
    }



    return (
        <div>
            <h1 className='title'>redy for war?</h1>
            <input onChange= {insertName} placeholder='Enter your name' /><br />
            <button onClick={()=>{props.validName(name)}}>Start</button>
        </div>
    )
}
