import React from 'react'
import html2canvas from 'html2canvas'
import { useState } from 'react'

export default function Imagesmemes() {

    const [imgmeme, setImgmeme]=useState();
    const [textmeme, setTextmeme]=useState(0)

    const textomeme = (e)=>{
        setTextmeme(e.target.value)
        console.log(e.target.value)
    }
  return (
    <div className='text-center'>
        <h1 className='mt-3 mb-3 text-center'>Memes</h1>

        <h3>Ingresa el texto del meme</h3>
        <input onChange={textomeme} className='form-control w-50 m-50 m-auto d-block' type="text" name="" id="" placeholder='Pone tu frase' />
    </div>
  )
}
