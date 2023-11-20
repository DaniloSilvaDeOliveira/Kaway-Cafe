const db = require('../models');
const bcrypt = require('bcryptjs');
const { sign } = require('jsonwebtoken');


class UsuarioService{
    

    async cadastrarUsuario(dto){
        const dbUsuario = await db.Usuario.findOne(
            {
                where: { cpf: dto.cpf }
            });
        if(dbUsuario){
            throw new Error('CPF já cadastrado');
        }else{
            try{
                const senhaHash = await bcrypt.hashSync(dto.senha, 10);
                const novoUsuario = await db.Usuario.create({
                nome: dto.nome,
                cpf: dto.cpf,
                telefone: dto.telefone,
                senha: senhaHash,
                isAdmin: false,
                foto_de_perfil: null
                });
                return {novoUsuario};
            }catch(err){
                throw new Error(err.message);
            }
        }
    }

    async login(dto){
        const usuario = await db.Usuario.findOne({
            attributes: ['id', 'nome', 'cpf', 'telefone', 'senha'],
            where: {
                cpf: dto.cpf
            }
        })
        if(!usuario){
            throw new Error('Usuário não encontrado');
        }
        const senhaCorreta = await bcrypt.compareSync(dto.senha, usuario.senha);

        if(!senhaCorreta){
            throw new Error('Usuario ou senha incorretos');
        }
        const accessToken = sign({
            id: usuario.id,
            nome: usuario.nome,
            cpf: usuario.cpf,
            telefone: usuario.telefone
        },  process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRATION
        })
        return {accessToken};
        
    }

    async updateUsuario(dto){
        const dbUsuario = await db.Usuario.findOne(
            {
                where: { cpf: dto.cpf }
            });
        if(dbUsuario){
            try{
                await db.Usuario.update({
                nome: dto.nome,
                telefone: dto.telefone,
                }, {
                    where: { cpf: dto.cpf }
                });

                const usuario = await db.Usuario.findOne({
                    attributes: ['id', 'nome', 'cpf', 'telefone', 'senha'],
                    where: {
                        cpf: dto.cpf
                    }
                })

                const accessToken = sign({
                    id: usuario.id,
                    nome: usuario.nome,
                    cpf: usuario.cpf,
                    telefone: usuario.telefone
                },  process.env.ACCESS_TOKEN_SECRET, {
                    expiresIn: process.env.ACCESS_TOKEN_EXPIRATION
                })
                return {accessToken};
            }catch(err){
                throw new Error(err.message);
            }
        }else{
            throw new Error('CPF não cadastrado');
        }
    }

}

module.exports = UsuarioService;