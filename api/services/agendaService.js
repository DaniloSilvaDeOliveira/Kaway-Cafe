const db = require('../models');
const bcrypt = require('bcryptjs');
const { sign, decode } = require('jsonwebtoken');



class AgendaService{
    
    async getAgenda(token){
        if(!token){
            throw new Error('Token não informado ou inválido');
        }else{
            try{
                const { id } = decode(token);
                const response = await db.Agenda.findAll({
                    where:{
                        usuario_id: id
                    }
                });
                return response;
            }catch(error){
                return error.message;
            }
        }
    }

    async agendaLivre(data){
        const response = await db.Agenda.findAll({
            attributes: ['horarioEntrada', 'horarioSaida', 'data', 'nQuarto'],
            where:{
                data: data
            }
        });
        return response;
    }

    async agendar(token, horarioEntrada, horarioSaida, data, nQuarto, precoFinal){
        if(!token){
            throw new Error('Token não informado ou inválido');
        }else{
            try{
                const { id } = decode(token);
                const response = await db.Agenda.create({
                    horarioEntrada: horarioEntrada,
                    horarioSaida: horarioSaida,
                    statusPagamento: "pendente",
                    data: data,
                    nQuarto: nQuarto,
                    precoFinal: precoFinal,
                    usuario_id: id
                });
                return response;
            }catch(error){
                return error.message;
            }
        }
    }
}

module.exports = AgendaService;