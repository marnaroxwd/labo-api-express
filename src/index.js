import "dotenv/config"
import express from 'express';
import morgan from 'morgan';

import db from './database/index.js';


/*----------------------------------------------- */
const {APP_PORT} = process.env


await db.sequelize.authenticate();
await db.sequelize.sync({alter: true});
const app = express();

app.use(express.static("public"));

//permet de lire les données des form html 
app.use(express.urlencoded({extended:true}));

//permet de lire les données envoyé au format json (très courant pour les APIs)
app.use(express.json);

//permet d'avoir des logs pour les requêtes
app.use(morgan("tiny"));


app.listen(APP_PORT, ()=>{
    console.log(`Web API available at http://localhost${APP_PORT}`);
    
})