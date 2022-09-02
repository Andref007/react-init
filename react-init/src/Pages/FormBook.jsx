import React from 'react'
import { useRef } from 'react'

export default function FormBook() {


    let refForm = useRef() 
    let refAutor = useRef()

        const submit = e => {
        e.preventDefault()

        const form = e.target

        const data = new FormData(form)
        const json = Object.fromEntries(data.entries())
        console.log(json)
    //     console.log('form', refForm.current)
    //     console.log('autor',refAutor.current.value)
    }



  return (
    <div>
     <form ref={refForm} onSubmit={submit}>
        <label>Autor:</label>
        <input ref={refAutor} type="text" name="autor" id="autor" />

        <label htmlFor="">Título:</label>
        <input type="text" name="titulo" id="titulo" />

        <label htmlFor="">Ano:</label>
        <input type="text" name="ano" id="ano" />

        <button type="submit">Enviar</button>
        <button type="reset">Limpar</button>
     </form>
    </div>
  )
}
