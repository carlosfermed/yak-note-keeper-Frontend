import { useState, useEffect } from 'react'
import './App.css'
import { Formulario } from './Formulario'

const App = () => {

  const [notesArray, setNotesArray] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    fetch("http://localhost:3001/notes")
      .then(response => response.json())
      .then(data => setNotesArray(data))
      .catch(err => console.log(err))    
  }

  return (
    <>
      <fieldset>
        <legend>Manipulación de notas</legend>
        <Formulario notesArray={notesArray} />
        <br/>
        <button onClick={fetchData} title="Solo en caso de borrar datos manualmente del fichero db.json">Actualizar notas (Fetch)</button>
      </fieldset>
      <ul>
        {notesArray.map(note => <li key={note.id}>{note.content}</li>)}
      </ul>
    </>
  )
}

export default App
