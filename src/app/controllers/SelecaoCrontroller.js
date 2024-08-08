import SelecaoRepository from "../repositores/SelecaoRepository.js"

class SelecaoController {
    // Mostra o conteudo da Tabela
    // async vária com o tempo de resposta que o servidor fornecer await faz aguarda a resolução de resposta de Selecao
    async index (req, res) {
        const row = await SelecaoRepository.findAll()
        res.json(row)
    }
    async show(req,res) {
        const id = req.params.id
        const row = await SelecaoRepository.findById(id)
        res.json(row)
    }
    // Cria Novas tabelas, ou selecoes
    async store(req, res) {
        const selecao = req.body
        const row = await SelecaoRepository.create(selecao)
        res.json(row)
    }
    // Update por Id
    async update(req,res) {
        const id = req.params.id
        const selecao = req.body
        const row = await SelecaoRepository.update(selecao, id)
        res.json(row)
    }
    //Delete
    async delete(req,res) {
        const id = req.params.id
        const row = await SelecaoRepository.delete(id)
        res.json(row)
    }
}

// Padrão de Singleton
export default new SelecaoController()