# Notas

Esta es una aplicación web realizada con React para gestionar notas y tareas. Permite crear notas con título y cuerpo de texto, marcarlas como completadas, editar y borrarlas.

## Cuestionario
a) ¿Qué diferencia hay entre props y state en React?
Las props son como los parámetros que le mandas a una función, el state es la memoria interna y privada de un componente. Son los datos que sí van a estar cambiando, cuando el estado cambia, React se da cuenta y vuelve a renderizar esa parte de la pantalla para mostrar la información actualizada.

b) ¿Por qué es importante usar una key al renderizar una lista de elementos?
La key sirve como un id para cada elemento de la lista, es importante porque le ayuda a React a identificar el elemento qué se modificó, se agregó o se eliminó. Si no hubiera una key, la página no sabría que hacer y podría suceder algun error.

c) Explica con tus propias palabras qué hace la función useState y da un ejemplo de dónde la usaste en tu mini aplicación.
useState es la instrucción que permite guardar y recordar los datos que cambian en un componente, devuelve cosas como una variable con el valor actual y una función para modificar ese valor.
En el archivo TodoForm.jsx lo usé para atrapar lo que el usuario va escribiendo en el formulario.
```const [textNote, setTextNote] = useState("");```
