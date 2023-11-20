const AgendaService = require('../services/agendaService');
const authenticated = require('../middleware/authenticated');

const agendaService = new AgendaService();


class agendaController{
    static async agendaLivre(req, res){
        const { data } = req.params;
        try{
            const response = await agendaService.agendaLivre(data);
            return res.status(200).json({response});
        }catch(error){
            return res.status(500).json(error.message);
        }
    }
    static async pagAgenda(req, res){
        res.sendFile('/views/agenda.html', { root: './'});
    }

    static async showAgenda(req, res){
        const token = req.body.token;
        try{
            
            const response = await agendaService.getAgenda(token);
            return res.status(200).json({response});
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async agendar(req, res){
        const token = req.body.token;
        const { horarioEntrada, horarioSaida, data, nQuarto, precoFinal } = req.body;
        try{
            const response = await agendaService.agendar(token, horarioEntrada, horarioSaida, data, nQuarto, precoFinal);
            return res.status(200).json({response});
        }catch(error){
            return res.status(500).json(error.message);
        }
    }
}
    

module.exports = agendaController;