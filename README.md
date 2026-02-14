# DMC Fan API

Este proyecto consiste en una aplicación web desarrollada con Node.js y Express que expone una API propia sobre la saga Devil May Cry y una interfaz web que consume dicha API.

La aplicación combina backend y frontend en un mismo proyecto. El servidor gestiona rutas API que devuelven datos en formato JSON, mientras que la interfaz construida con HTML, CSS y Bootstrap consume esos datos dinámicamente mediante fetch.

El objetivo principal fue aplicar Node.js como tecnología base, estructurar rutas correctamente y desarrollar una aplicación funcional con una idea original.

---

## Funcionalidades

### Backend (Node.js + Express)

- API REST bajo la ruta `/api`
- Endpoint para obtener todos los personajes:
  - `GET /api/characters`
- Búsqueda de personajes por nombre:
  - `GET /api/characters?q=vergil`
- Endpoint para obtener un personaje por ID:
  - `GET /api/characters/:id`
- Endpoint para obtener todos los juegos:
  - `GET /api/games`
- Endpoint para obtener frases:
  - `GET /api/quotes`
- Endpoint para obtener una frase aleatoria:
  - `GET /api/quotes/random`
- Servido de archivos estáticos desde la carpeta `public`

---

### Frontend

- Interfaz web responsiva con Bootstrap 5
- Render dinámico de personajes desde la API
- Render dinámico de juegos con imágenes
- Frase aleatoria con actualización en tiempo real
- Buscador de personajes
- Diseño visual organizado por secciones

---

## Tecnologías utilizadas

- Node.js
- Express
- HTML5
- CSS3
- Bootstrap 5
- JavaScript (Fetch API)

---

## Estructura del proyecto

dmc-fan-api/
├── package.json
├── src/
│ ├── server.js
│ ├── routes/
│ └── data/
├── public/
│ ├── index.html
│ ├── style.css
│ ├── app.js
│ └── images/


---

## Instalación y ejecución

1. Clonar el repositorio:
git clone <URL_DEL_REPOSITORIO>

2. Instalar dependencias:


3. Ejecutar en modo desarrollo:


o en modo normal:


4. Abrir en el navegador:
http://localhost:3000

---

## Ejemplos de uso de la API

Obtener todos los personajes:
http://localhost:3000/api/characters

Buscar un personaje:
http://localhost:3000/api/characters?q=dante

Obtener juegos:
http://localhost:3000/api/games

Obtener frase aleatoria:
http://localhost:3000/api/quotes/random


---

## Objetivo académico

Este proyecto cumple con los siguientes criterios de la actividad:

- Uso fundamental de Node.js como servidor.
- Implementación de rutas API organizadas.
- Separación clara entre backend y frontend.
- Aplicación original basada en una temática específica.
- Código estructurado y comentado.
- Documentación clara con instrucciones de ejecución.

---

## Nota

Este proyecto fue realizado con fines educativos.  
Devil May Cry y sus personajes son propiedad de Capcom.
Link del sitio web en render: https://dmcapi.onrender.com

---

## Autor
Jonathan Alexis Lozano Figueroa
Proyecto desarrollado como práctica de desarrollo backend con Node.js y Express.
