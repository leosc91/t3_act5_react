import styles from "./todoForm.module.css"
import { useState } from "react"
import { Plus } from "lucide-react"

const TodoForm = ({ onAgregarNota }) => {
    const [titleNote, setTitleNote] = useState("")
    const [textNote, setTextNote] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()

        if(titleNote === "" || textNote === "") {
            console.log("No se pueden agregar notas con campos vacíos")
            return
        }
        
        const newNote = {
            titulo: titleNote,
            text: textNote,
            completed: false
        }

        fetch("http://localhost:3000/notas", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newNote)
        })
        .then(response => response.json())
        .then(data => {
            onAgregarNota(data)
            setTitleNote("")
            setTextNote("")
        })
    }

    return(
        <div className={styles.formContainer}>
            <h2>Todo Form</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Título de la nota"
                    id="titulo" 
                    name="titulo" 
                    value={titleNote} 
                    onChange={(event) => setTitleNote(event.target.value)}
                />
                <input 
                    type="text" 
                    placeholder="Cuerpo de la nota"
                    id="nota" 
                    name="nota" 
                    value={textNote} 
                    onChange={(event) => setTextNote(event.target.value)}
                />
                <button type="submit">
                    <Plus size={16} />
                    Crear nota
                </button>
            </form>
        </div>
    )
}

export default TodoForm