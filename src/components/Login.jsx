import React from 'react'
import { useState } from 'react'

const Login = () => {

    const [inputValue,setInputValue]= useState()

    const onInputChange=({target})=>{
        
    }

  return (
    <section>
        <div>
            <form action="">
                <input type="text" placeholder='usuario' onChange={onInputChange} />

            </form>
        </div>
        
      
    </section>
  )
}

export default Login
