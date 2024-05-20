import React from 'react'
import { HookFormaPower } from '../Hooks/HookFormaPower';

export const FormPower = () => {

    const {dataForm, resultado, changeHandler, submitHandler} = HookFormaPower();


  return (
    <>
        <h1> Add a Power</h1>
        <form onSubmit={submitHandler}>
            <input type='text' name='power_name' onChange={changeHandler} placeholder='Power Name'/>
            <br></br>
            <button type='submit'> Add </button>
        </form>
        <p>{resultado}</p>
    </>
  )
}