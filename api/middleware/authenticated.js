const { verify, decode } = require('jsonwebtoken');
const jsonSecret = process.env.ACCESS_TOKEN_SECRET;


class authenticated{

    static async getName(req, res) {
        const token = req.body.token;

        if (!token) {
            return res.status(401).json({ error: "Token não encontrado" });
        }

        try {
            verify(token, jsonSecret);
            const { nome } = decode(token);
            return res.status(200).json({ nome });
        } catch (err) {
            return res.status(401).json({ error: err.message });
        }
    }

    static async verifyToken(req, res){
        const token = req.headers.authorization;
        if(!token){
            return false;
        }
    
        const [, accessToken] = token.split(' ');
        
        try{
            verify(accessToken, jsonSecret);
            const { id, nome, cpf, telefone } = await decode(accessToken);
            req.usuarioNome = nome;
            req.usuarioCpf = cpf;
            req.usuarioTelefone = telefone;

            return { id, nome, cpf, telefone };
        }catch(err){
            return err;
        }
    }

    
}

module.exports = authenticated;