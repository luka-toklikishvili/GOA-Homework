import React,{useState} from 'react'

function changetext() {
    const [Text,SetText] = useState("Hello")

  return (
    <div>
        <h1>{Text}</h1>
        <button onClick={() => SetText("how are you Darling")}></button>
      
    </div>
  )
}

export default changetext
