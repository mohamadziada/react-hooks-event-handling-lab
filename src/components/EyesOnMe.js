// Code EyesOnMe Component Here
import React from "react"

function EyesOnMe(){
    function focusHandler(event){
        console.log('Good!')
    }
    function blurHandler(event){
        console.log('Hey! Eyes on me!')
    }
    

    return(
        <div>
            <button onFocus={focusHandler} onBlur={blurHandler}>Eyes on me</button>
        </div>
    )
}

export default EyesOnMe