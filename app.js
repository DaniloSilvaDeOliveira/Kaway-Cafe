const Express = require('express');
const dotenv = require('dotenv');
dotenv.config();



const app = Express();
const port = process.env.PORT || 3000;
//Permite que o express leia o body da requisição no formato JSON
app.use(Express.json());
//define a pasta public como a pasta de arquivos estáticos
app.use(Express.static('public'));

//Importando as rotas
const home = require('./routes/home.js');
const login = require('./routes/login.js');
const cadastro = require('./routes/cadastro.js');
const cardapio = require('./routes/cardapio.js');
const usuario = require('./routes/usuario.js');

//Definindo as rotas
app.use('/', home);
app.use('/login', login);
app.use('/cadastro', cadastro);
app.use('/cardapio', cardapio);
app.use('/usuario',usuario)


//rota que disponibiliza a pasta public para acesso
app.use('/public', Express.static('public'));



app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});