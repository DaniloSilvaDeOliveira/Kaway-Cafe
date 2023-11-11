const UsuarioService = require('../services/usuarioService');

const usuarioService = new UsuarioService();

class usuarioController{
    static async pagLogin(req, res){
        res.sendFile('/views/login.html', { root: './'});
    }

    static async pagCadastro(req, res){
        res.sendFile('/views/cadastro.html', { root: './'});
    }

    static async reqCadastrarUsuario(req, res){
        const {nome, cpf, telefone, senha} = req.body;
        try{
            const user = await usuarioService.cadastrarUsuario({nome, cpf, telefone, senha});
            res.status(200).json({ user: user });
        }catch(err){
            res.status(401).send({message: err.message});
        }

    }

    static async login(req, res){
        const {cpf, senha} = req.body;
        try{
            const login = await usuarioService.login({cpf, senha});
            res.status(200).send(login);
        }catch(err){
            res.status(401).send({message: err.message});
        }
    }
}

module.exports = usuarioController;