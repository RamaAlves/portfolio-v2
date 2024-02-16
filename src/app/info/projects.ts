import { ProjectSchema } from "../interfaces/interfaces";

export const projects: ProjectSchema[] = [
  {
    id: 'e-comerce-info',
    nameES: 'E-comerce',
    nameEN: 'E-comerce',
    resumeES:
      'E-comerce hecho con React y TypeScript. Este fue el último projecto propuesto durante la especialización en React del Informatorio. Es una tienda online que cuenta con varios tipos de usuarios. Se puede obtener productos desde la Fake API de platzi, crear nuevos, actualizar los existentes o eliminarlos (siempre y cuando estemos logueados con un usuario admin). Podemos navegar libremente por la tienda online y simular compras. Para esto ultimo debemos crear un usuario que nos permite tener un carrito y manipular los objetos en él. Los datos del carrito y algunos datos de usuario tienen persistencia local. Para realizar las consultas a la API utilicé "React-Query" de TanStack. El manejo de rutas internas se hizo utilizando "React Router" de Remix Software, Inc. ',
    resumeEN:
      "E-comerce made with React. This was the last project proposed during the Informatorio's React specialization. It is an e-comerce that has several types of users. You can obtain products from the platzi Fake API, create new ones, update existing ones or delete them (as long as we are logged in with an admin user). We can freely browse the e-comerce and simulate purchases. For the latter we must create a user that allows us to have a cart and manipulate the objects in it. Cart data and some user data have local persistence. To make the queries to the API I used 'React-Query' from TanStack. Internal routes management were done using 'React Router' from Remix Software, Inc.",
    image: '/images/projects/e-comerce-tp-e-3-info.png',
    link: 'https://e-comerce-react-nu.vercel.app/',
  },
  {
    id: 'Rick-&-Morty-searcher',
    nameES: 'Rick & Morty Wiki',
    nameEN: 'Rick & Morty Wiki',
    resumeES:
      'Wiki sencilla de Rick & Morty realizanda con React y TypeScript. Este fue el tercer projecto propuesto en la especialización en React del informatorio. Esta Wiki permite buscar personajes, conocer informacion de los mundos de la serie y ver informacion de los capítulos. Todos los datos se obtienen desde la API de Rick&Morty y para realizar las consultas a la misma utilicé "React-Query" de TanStack. El manejo de rutas internas se hizo utilizando "React Router" de Remix Software, Inc.',
    resumeEN:
      "Simple Rick and Morty wiki made with React and TypeScript. This was the third project proposed in the Informatorio's React specialization. This Wiki allows you to search for characters, learn information about the worlds of the series and see information about the chapters. All the data is obtained from the Rick&Morty's API and to query it I used 'React-Query' from TanStack. Internal routes management were done using 'React Router' from Remix Software, Inc.",
    image: '/images/projects/rick&morty-wiki-tp-e-3-info.png',
    link: 'https://rick-and-morty-searcher-fhda.vercel.app/',
  },
  {
    id: 'carrito-app',
    nameES: 'Carrito de compras',
    nameEN: 'Cart App',
    resumeES:
      'Carrito de compras hecho con React y TypeScript. Este projecto fue propuesto durante las primeras semanas de la especialización en React del Informatorio. Permite agregar elementos al carrito y gestionarlos mostrando a la vez el total de la compra.',
    resumeEN:
      "Shopping cart made with React and TypeScript. This project was proposed during the first weeks of the Informatorio's React specialization. Allows you to add items to the cart and manage them while showing the purchase total.",
    image: '/images/projects/carrito-app-tp-e-3-info.png',
    link: 'https://carrito-app.vercel.app/',
  },
  {
    id: 'advice-generator',
    nameES: 'Generador de consejos',
    nameEN: 'Advice Generator',
    resumeES:
      'Generador de consejos hecho con React. Este projecto es uno de los propuestos en la página Frontend Mentor.',
    resumeEN:
      'Advice Generator made with React. This project is one of those proposed on the Frontend Mentor page.',
    image: '/images/projects/advice-generator.png',
    link: 'https://advice-generator-app-roan-kappa.vercel.app/',
  },
  {
    id: 'interactive-credit-card-form',
    nameES: 'Formulario de tarjeta de crédito',
    nameEN: 'Credit card form',
    resumeES:
      'Formulario interactivo de tarjetas de credito hecho con React. Este projecto es uno de los propuestos en la página Frontend Mentor.',
    resumeEN:
      'Interactive credit card form made with React. This project is one of those proposed on the Frontend Mentor page.',
    image: '/images/projects/interactive-card-details.png',
    link: 'https://interactive-card-details-form-zeta-three.vercel.app/',
  },
  {
    id: 'to-do-app',
    nameES: 'App de Tareas',
    nameEN: 'To do App',
    resumeES:
      'Es mi primer projecto hecho con React. Es una simple aplicación para gestionar tareas y llevar un registro de las mismas.',
    resumeEN:
      "It's my first project made with React. It's a simple application to manage tasks and keep track of them.",
    image: '/images/projects/to-do-app.png',
    link: 'https://react-todo-pi-gold.vercel.app/',
  },
  {
    id: 'calculadora-tp-info-etapa-3',
    nameES: 'Calculadora',
    nameEN: 'Calculator',
    resumeES:
      'Calculadora realizada solamente usando JS como projecto introductorio en la etapa 3 del informatorio. El objetivo fue crear todos los elementos html desde JavaScript.',
    resumeEN:
      'Calculator made only using JS as an introductory project in stage 3 of the Informatorio. The goal was to create all the html elements from JavaScript.',
    image: '/images/projects/calculadora-tp-e-3-info.png',
    link: 'https://tp-calculadora.vercel.app/',
  },
  {
    id: 'pokedex-tp-Launch-X',
    nameES: 'Pokedex',
    nameEN: 'Pokedex',
    resumeES:
      'Pokedex realizada con Vanilla JS. Con esta app aprendí y practiqué como consumir APIs.',
    resumeEN:
      'Pokedex made with Vanilla JS. With this app I learned and practiced how to consume APIs.',
    image: '/images/projects/pokedex-tp-Launch-X.png',
    link: 'https://pokedex-launch-x-jet.vercel.app/',
  },
  {
    id: 'calculadora-tp-Launch-X',
    nameES: 'Calculadora-Launch X',
    nameEN: 'Calculator-Launch X',
    resumeES:
      'Calculadora realizada solamente usando JS como projecto introductorio a Launch X.',
    resumeEN:
      'Calculator made only using JS as an introductory project to Launch X.',
    image: '/images/projects/calculadora-tp-Launch-X.png',
    link: 'https://calculadora-launch-x.vercel.app/',
  },
];