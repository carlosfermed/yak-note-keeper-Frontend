import { useState, useEffect } from 'react'
import { Formulario } from '../components/Formulario'
import axios from 'axios'


const Notes = ({ onLogout, userName }) => {

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

    const handleLogout = async () => {
        try {
            const response = await axios.post('http://localhost:3000/logout', {}, { withCredentials: true });
    
            if (response.status === 200) {
                console.log(response.data.message);
                onLogout();
            } else {
                console.error('Logout failed');
            }
        } catch (error) {
            console.error('Logout failed', error);
        }
    };
    

    return (
        <>
            <h1>React Note Application</h1>
            <h3>Bienvenido/a <i>{userName}</i> </h3>
            <fieldset>
                <legend>Manipulación de notas</legend>
                <Formulario notesArray={notesArray} onUpdate={fetchData} />
                <button onClick={() => setShowAll(!showAll)} title="Alterna la muestra de notas importantes">Mostrar Todo/Importantes</button>
                <br />
                <button onClick={fetchData} title="Solo en caso de borrar datos manualmente del fichero db.json">Actualizar notas (Fetch)</button>
                <br />
                <button onClick={handleLogout} title="Finaliza la sesión">Cerrar sesión</button>
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

export default Notes