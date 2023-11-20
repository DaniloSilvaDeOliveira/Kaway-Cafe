const { verify, decode } = require('jsonwebtoken');
const UsuarioService = require('../services/usuarioService');
const dotenv = require('dotenv');
dotenv.config();


const jsonSecret = process.env.ACCESS_TOKEN_SECRET;
const usuarioService = new UsuarioService();

class authenticated{

    static async getAtributeFromToken(req, res) {

        const token = req.body.token;
        const reqType = req.body.type;
        if (!token) {
            return res.status(401).json({ error: "Token não encontrado" });
        }
        switch (reqType) {
            case "nome": {
                try {
                    verify(token, jsonSecret);
                    const { nome } = decode(token);
                    return res.status(200).json({ nome });
                } catch (err) {
                    return res.status(401).json({ error: err.message });
                }
            }
            case "cpf": {
                try {
                    verify(token, jsonSecret);
                    const { cpf } = decode(token);
                    return res.status(200).json({ cpf });
                } catch (err) {
                    return res.status(401).json({ error: err.message });
                }
            }
            case "telefone": {
                try {
                    verify(token, jsonSecret);
                    const { telefone } = decode(token);
                    return res.status(200).json({ telefone });
                } catch (err) {
                    return res.status(401).json({ error: err.message });
                }
            }
            case "all": {
                try {
                    verify(token, jsonSecret);
                    const { nome, cpf, telefone, id } = decode(token);
                    return res.status(200).json({ nome, cpf, telefone, id });
                } catch (err) {
                    return res.status(401).json({ error: err.message });
                }
            }
            default: {
                return res.status(401).json({ error: "Tipo de requisição não encontrado" });
            }
        }
    }

    static pagUsuario(req, res){
        res.sendFile('/views/usuario.html', { root: './'});
    }
    
    static async updateAtribute(req, res){
        const token = req.body.token;
        if (!token) {
            return res.status(401).json({ error: "Token não encontrado" });
        }
        //verifica se o token é válido e troca o nome e o telefone do usuário
        try{
            verify(token, jsonSecret);
            const { cpf } = decode(token);
            const dto = {
                cpf: cpf,
                nome: req.body.nome,
                telefone: req.body.telefone
            }
            const accessToken = await usuarioService.updateUsuario(dto);
            return res.status(200).json({ accessToken });
        }
        catch(err){
            return res.status(401).json({ error: err.message });
        }
        
    }
}

module.exports = authenticated;