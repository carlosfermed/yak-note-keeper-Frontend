import { useState, useEffect } from 'react'
import { Formulario } from '../components/Formulario'
import axios from 'axios'


const Notes = ({ onLogout, userName }) => {

    const [notesArray, setNotesArray] = useState([])
    const [showAll, setShowAll] = useState(true);

    useEffect(() => {
        fetchData()
    }, [])
    
    // Promesa clásica.
    const fetchData = () => {
        axios.get('http://localhost:3000/protected', {
            withCredentials: true 
        })
        .then(response => { setNotesArray(response.data) })
        .catch(err => {
            console.log(err);
            if (err.response && err.response.status === 401) {
                console.error('No autorizado.');
            } else {
                console.error('Error en la petición.');
            }
        });
    }
    // Async/await
    const handleLogout = async () => {
        try {
            const response = await axios.post('http://localhost:3000/logout', {}, { withCredentials: true });
    
            if (response.status === 200) {
                console.log(response.data.message);
                onLogout();
            } else {
                console.error('Logout fallido.');
            }
        } catch (error) {
            console.error('Logout fallido.', error);
        }
    };
    

    return (
        <>
            <h1>React Note Application</h1>
            <h3>Bienvenido/a <i>{userName}</i> </h3>
            <fieldset>
                <legend>Manipulación de notas</legend>
                <Formulario notesArray={notesArray} onUpdate={fetchData} />
                <button onClick={() => setShowAll(!showAll)} className="customButton" title="Alterna la muestra de notas importantes">Mostrar Todo/Importantes</button>
                <br />
                <button onClick={fetchData} className="customButton" title="Solo en caso de borrar datos manualmente del fichero db.json">Actualizar notas (Fetch)</button>
                <br />
                <button onClick={handleLogout} className="customButton" title="Finaliza la sesión">Cerrar sesión</button>
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