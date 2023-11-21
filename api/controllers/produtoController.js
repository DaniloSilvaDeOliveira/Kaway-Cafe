const database = require('../models');

class ProdutoController{
    static async getProdutos(req, res){
        try{
            const produtosjson = await database.Produtos.findAll(
                { attributes: 
                    [
                        'id',
                        'nome', 
                        'preco', 
                        'descricao', 
                        'categoria', 
                        'descricao', 
                        'imagem'
                    ]
                });
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

    static async createProduto(req, res){
        const novoProduto = req.body;
        const listaProdutos = await database.Produtos.findAll();
        try{
            if(novoProduto.nome == null || novoProduto.preco == null || novoProduto.descricao == null || novoProduto.categoria == null){
                return res.status(400).json({erro: "O produto deve ter nome, preço, descrição e categoria."});
            }else if(novoProduto.updateAt != null || novoProduto.createAt != null){
                return res.status(400).json({erro: "O produto não pode ter data de criação ou atualização."});
            }
                const novoProdutoCriado = await database.Produtos.create(novoProduto);
                return res.status(200).json(novoProdutoCriado);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }
}

    

module.exports = ProdutoController;