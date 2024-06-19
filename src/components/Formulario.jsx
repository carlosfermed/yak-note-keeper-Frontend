import { useState } from "react"

const Formulario = ({ onUpdate }) => {

    const [note, setNote] = useState({
        id: "",
        content: "",
        important: "false"
    })

    const sendData = (e) => {
        e.preventDefault();
        fetch("http://localhost:3001/notes", {
            method: "POST",
            body: JSON.stringify(note),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(response => response.json())
            .then(note => { 
                console.log("Nueva nota añadida: ", note);
                onUpdate();    
            })
            .catch(err => console.log(err));
    }

    const addNote = (e) => {
        // console.log('e.target.name :>> ', e.target.name);
        // console.log('e.target.value :>> ', e.target.value);
        setNote({
            ...note,
            id: Date.now().toString(),
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <form onSubmit={sendData}>
                Contenido de la nota: <input type='text' name='content' className="customInput" value={note.content} onChange={addNote} />
                <br />
                <span className='tituloRadio'>Es importante: </span>
                SI <input type='radio' name='important' value='true' onChange={addNote} />
                NO <input type='radio' name='important' value='false' onChange={addNote} />
                <br /><br />
                <button type="submit" className="customButton" title="Escribe la nota en la lista">Enviar datos (POST)</button>
            </form>
        </>
    )
}

export { Formulario }