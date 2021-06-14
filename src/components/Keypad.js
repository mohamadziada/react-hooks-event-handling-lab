// Code Keypad Component Here
import React from "react"

function Keypad(){
    function changeInput(event){
        console.log(`Entering password...`)
    }

    return(
        <div>
            <input type="password" onChange={changeInput} name="pasword"></input>
        </div>
    )
}



export default Keypad