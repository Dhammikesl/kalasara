
### Create a App
- npx create-react-app my-react-app

### Run the App
- npm start

### imp
- Index.html in public is the file hook entire react application
- In src - create react component


### Steps
 - delete the src folder and create a new one
 - create index.js inside the src

#### in index.js 
 - import React from "react";
 - import ReactDOM from "react-dom"; This is the only place call reactDOM
 - write,  ReactDOM.render(<App />, document.getElementById('root'));

### create a App.js in src - -- rafce -- install ES7Snippet extension

### install these dependencies  
- npm install react-icons
- npm install sass ( call scss file in to app.js)

### create basic folders and file structures in src

### the component not going to import directly in to the app. (in this project) they imports inside the containers 
 - containers contain bigger components ( in here they are page sections)
 - create folder inside the containers as 'containers'
 - create index.js files on both components and containers
 - export the component in to that JS files ( this will reduce the long code import on App)
    - - Example for containers
    - export { default as Blog } from './blog/Blog';
    - export { default as Features } from './features/Features';
    - export { default as Footer } from './footer/Footer';
    - export { default as Header } from './header/Header';
    - export { default as Possibility } from './possibility/Possibility';
    - export { default as Past } from './past/Past';

### And then in App you can import them much easier like below 
    - import { Footer, Blog, Possibility, Features, Past, Header } from './containers';
    - do this components too

### setup css
 - added mobile navbar with scale-up animation - https://animista.net/
 - Media Query for this 1050, 650, 550, 490

### setup Navbar
- Navbar container > navbar links > navbar logo > navbar content. check the navbar to see structure

### setup mobile menu
 - import { useState } from 'react';
 - const [toggleMenu, SetToggleMenu] = useState(false);

### create import.js on brand for import all images

