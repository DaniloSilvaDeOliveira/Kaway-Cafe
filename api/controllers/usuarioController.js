const UsuarioService = require('../services/usuarioService');

const usuarioService = new UsuarioService();

class usuarioController{
    async cadastrarUsuario(req, res){
        const usuario = req.body;

        try{
            const result = await usuarioService.cadastrarUsuario(usuario);
            res.status(201).send(usuario);
        }catch{
            res.status(400).send(error.message);
        }
    }
}

module.exports = usuarioController;