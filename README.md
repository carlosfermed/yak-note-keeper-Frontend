# Yak Note Keeper
Yak Note Keeper es una aplicación de notas que permite a los usuarios crear, ver y filtrar notas importantes tras autenticarse. La aplicación está dividida en dos partes: el frontend y el backend.

* Características
1. Autenticación de Usuarios -> Los usuarios pueden registrarse y autenticarse utilizando un nombre de usuario y contraseña.
1. Creación y Gestión de Notas ->  Después de autenticarse, los usuarios pueden crear nuevas notas, ver sus notas existentes y filtrar notas según su importancia.
1. Interfaz de Usuario Intuitiva ->  La interfaz de usuario está desarrollada con React, proporcionando una experiencia de usuario fluida y reactiva.
1. Actualización en Tiempo Real ->  La aplicación permite hacer un fetch de las notas actualizadas por si se modifica manualmente la base de datos.
1. Datos Privados ->  Los usuarios pueden acceder a determinados datos privados mediante el uso de JWT (JSON Web Tokens).
1. Cierre de Sesión ->  Los usuarios pueden cerrar sesión de manera segura.

## Instalación
Para instalar y configurar el proyecto, sigue estos pasos:

#### PARTE FRONTEND

Clona el repositorio desde GitHub:

`git clone https://github.com/carlosfermed/yak-note-keeper-Frontend.git`

Instala las dependencias necesarias utilizando npm desde el directorio del proyecto:

`npm install`

Ejecuta la aplicación:

`npm start`

Y guarda la URL indicada en la terminal para visualizar la interfaz una vez el servidor backend esté activo.

#### PARTE BACKEND

Clona el repositorio del backend de la aplicación desde GitHub:

`git clone https://github.com/carlosfermed/yak-note-keeper-Backend.git`

Navega ahora al directorio del proyecto (backend) e instala las dependencias necesarias:

`npm install`

Pon en marcha el servidor json-server para poder consultar las notas:

`npm run server`

Arranca el servidor Node.js para activar la lógica de la aplicación:

`npm start`

Ahora ya puedes dirigirte a la URL proporcionada por el frontend para probar la aplicación.

## Uso:
La aplicación tiene una interfaz intuitiva y sencilla de usar. Cada botón tiene una pequeña descripción acerca de su funcionamiento.

## Estado del proyecto:
El proyecto está activo y en estado de mejora continua en caso de que tengas alguna sugerencia.
