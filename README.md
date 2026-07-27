# Prueba Técnica - React + TypeScript

## Objetivo

Completa la aplicación implementando un gestor de libros utilizando React, TypeScript y el manejo de estado con useState.

La interfaz ya está creada. Tu tarea es hacer que la aplicación funcione correctamente.

## Requisitos

### 1. Crear un libro

El usuario debe poder ingresar:

- Título
- Autor

Al hacer clic en "Crear Libro", la aplicación debe:

- Crear un nuevo libro.
- Generar un id único para el libro.
- Agregar el libro a la lista.
- Limpiar el formulario después de crear el libro.
- No permitir crear libros con campos vacíos.

### 2. Mostrar los libros

Mostrar en pantalla todos los libros creados.

Cada libro debe mostrar:

- Título
- Autor

### 3. Editar un libro

Al hacer clic en "Editar", la aplicación debe:

- Cargar la información del libro en el formulario.
- Permitir modificar el título y/o el autor.
- Guardar los cambios al volver a presionar el botón correspondiente.
- Actualizar el libro existente sin crear uno nuevo.

### 4. Eliminar un libro

Al hacer clic en "Eliminar", el libro debe ser removido de la lista.

## Requisitos técnicos

- Utilizar React Hooks (useState).
- Utilizar TypeScript correctamente.
- No mutar el estado directamente.
- Mantener un código limpio, legible y organizado.
- No utilizar librerías externas para el manejo de estado (Redux, Zustand, etc.).

## Bonus (Opcional)

Si dispones de tiempo, puedes implementar una o varias de las siguientes mejoras:

- Deshabilitar el botón de crear/guardar cuando el formulario sea inválido.
- Mostrar mensajes de validación.
- Evitar libros duplicados (mismo título y autor).
- Ordenar los libros alfabéticamente.
- Persistir la información en localStorage.
- Mejorar la interfaz de usuario.
