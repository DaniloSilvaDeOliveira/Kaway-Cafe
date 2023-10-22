const database = require('../models');

class ProdutoController{
    static async getProdutos(req, res){
        try{
            const produtosjson = await database.Produtos.findAll();
            return res.status(200).json(produtosjson);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }
    static async getProduto(req, res){
        const { id } = req.params;
        try{
            const Produto = await database.Produtos.findOne({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(Produto);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }
}

module.exports = ProdutoController;