const db = require('../models');
const bcrypt = require('bcryptjs');


class UsuarioService{
    async cadastrarUsuario(usuario){

        const dbUsuario = await db.Usuario.findOne(
            {
                where: { cpf: usuario.cpf }
            });
        if(dbUsuario){
            throw new Error('CPF já cadastrado');
        }else{
            try{
                const senhaHash = await bcrypt.hash(usuario.senha, 10);
                const novoUsuario = await db.Usuario.create({
                nome: usuario.nome,
                cpf: usuario.cpf,
                telefone: usuario.telefone,
                senha: senhaHash,
                isAdmin: false,
                foto_de_perfil: null
                });
                return true;
            }catch(err){
                throw new Error(err.message);
            }
        }
}
}

module.exports = UsuarioService;