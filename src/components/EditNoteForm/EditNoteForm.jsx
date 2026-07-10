import styles from "../todoApp.module.css";
import { useState } from "react";

const EditNoteForm = ({ nota, onEditarNota, onCancelar }) => {
    const [tituloEditado, setTituloEditado] = useState(nota.titulo || "");
    const [textoEditado, setTextoEditado] = useState(nota.text || "");

    const handleSubmit = (e) => {
        e.preventDefault();

        const notaActualizada = {
            ...nota,
            titulo: tituloEditado,
            text: textoEditado
        };

        onEditarNota(notaActualizada);
        onCancelar();
    };

    return (
        <form onSubmit={handleSubmit} className={styles.editForm}>
            <input
                type="text"
                placeholder="Título"
                value={tituloEditado}
                onChange={(e) => setTituloEditado(e.target.value)}
                className={styles.editInput}
            />
            <input
                type="text"
                placeholder="Cuerpo de la nota"
                value={textoEditado}
                onChange={(e) => setTextoEditado(e.target.value)}
                className={styles.editInput}
            />

            <button type="submit" className={styles.saveButton}>
                Guardar
            </button>
            <button
                type="button"
                onClick={onCancelar}
                className={styles.cancelButton}
            >
                Cancelar
            </button>
        </form>
    );
};

export default EditNoteForm;