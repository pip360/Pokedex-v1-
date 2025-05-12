# POKEDEX-LOGIN-ANDRES

Antes de analizar el proyecto por favor tener en cuenta lo siguiente;

1. El proyecto esta integrado con login y register, validado desde base de datos. Pero lamentablemente al ejecutar el proyecto me lleva a la pagina principal, pero claro,
en la barra de navegacion damos la opcion de los ya mencionados (login, register). La intencion es implementar mejoras al proyecto y claramente que primero me lleve al login, que
a "home" o la pagina principal.

2. El proyecto fue creado con lenguajes; HTML, JS (comunicacion de paginas, consumir API, generar cards de pokemon, links dinamicos,BD{firebase}, traer de la API
datos como nombre, tipo,etc..., y CSS (estilos para la interfaz de home, de las cards de los pokemon, la fuente, color de cada card dependiendo de su tipo, interfaz de 
register e inicio de sesion. 

Ademas se utilizaron FRAMEWORKS como; node.js, next.js, nextauth.js, nextui.js, react. Los cuales ayudaron en una mejor creacion del proyecto.

Para la autenticacion se utilizo la BASE DE DATOS de google Farebase, la cual me falicito este proceoso que parecia complicado.

3. A la hora de ejecutar el proyecto tener en cuenta;

tener instalado "node.js" y sus "extension" de npm. Verificar en consola con (node -v y npm -v)

para ejecutar el "debugger" (disculpen si me equivoco al llamarlo asi) y visualizar el proyecto se utiliza el comando en consola: npm run dev

ante cualquier problema para ejecutar el debugger utilizar los comandos 

(next) npm install next
(nextauth) npm install next-auth
(firebase) npm install firebase
(nextui) npm i @nextui-org/react
(react) npx babel --watch src --out-dir . --presets react-app/prod



