import React from 'react'
import { HookFormaWeapon } from '../Hooks/HookFormaWeapon';

export const FormWeapon = () => {

    const {dataForm, resultado, changeHandler, submitHandler} = HookFormaWeapon();


  return (
    <>
        <h1> Add a Weapon</h1>
        <form onSubmit={submitHandler}>
            <input type='text' name='weapon_type' onChange={changeHandler} placeholder='Character Weapon'/>
            <br></br>
            <button type='submit'> Add </button>
        </form>
        <p>{resultado}</p>
    </>
  )
}
