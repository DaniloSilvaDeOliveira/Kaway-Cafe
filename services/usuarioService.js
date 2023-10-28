const db = require('../models');

class UsuarioService{
    async cadastrarUsuario(usuario){
        const dbUsuario = await db.usuario.FindOne({where: {cpf: usuario.cpf}});
        if(dbUsuario){
            throw new Error('CPF já cadastrado');
        }
    }
}

module.exports = UsuarioService;