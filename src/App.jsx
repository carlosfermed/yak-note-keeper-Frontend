import { useState, useEffect } from 'react'
import './App.css'
import { Formulario } from './components/Formulario'

const App = () => {

  const [notesArray, setNotesArray] = useState([])
  const [showAll, setShowAll] = useState(true);  

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
        <button onClick={() => setShowAll(!showAll)} title="Alterna la muestra de notas importantes">Mostrar Todo/Importantes</button>
        <br/>
        <button onClick={fetchData} title="Solo en caso de borrar datos manualmente del fichero db.json">Actualizar notas (Fetch)</button>
      </fieldset>
      <ul>
        {showAll 
          ? 
          notesArray.map(note => <li key={note.id}>{note.content}</li>)
          :
          notesArray.map(note => note.important === "true" ? <li key={note.id}>{note.content}</li> : <li key={note.id}></li>)
        }
      </ul>
    </>
  )
}

export default App
