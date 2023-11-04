const UsuarioService = require('../services/usuarioService');

const usuarioService = new UsuarioService();

class usuarioController{
   static async reqCadastrarUsuario(req, res){
        const {nome, cpf, telefone, senha} = req.body;
        try{
            await usuarioService.cadastrarUsuario({nome, cpf, telefone, senha});
            res.status(200).json({message: "Usuário cadastrado com sucesso"});
        }catch(err){
            res.status(400).json({message: err.message});
        }

    }

    static async pagCadastro(req, res){
        res.sendFile('/views/cadastro.html', { root: './'});
    }
}

module.exports = usuarioController;