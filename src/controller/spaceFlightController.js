const { getArticleById } = require('../axios/axios.js');
const spaceModel = require('../models/spaceModel.js');
module.exports = {
    async getAllArticlePagination(req, res) {
        try {
            const { limit } = req.params
            let page = req.params.page;
            const allArticle = await spaceModel.paginate({}, { limit, page })
            console.log(allArticle.docs.length)
            if (allArticle.totalDocs > 0) {
                return res.status(200).json({ allArticle })
            }
            return res.status(404).json({ msg: 'Não foi encontrado nenhum artigo' })

        } catch (err) {
            return res.status(404).json({ msg: 'Erro no sistema!' })
        }
    },
    async getArticleById(req, res) {
        console.log(req.params)
        try {
            if (req.params.id !== undefined && req.params.id !== '' && req.params.id > 0) {
                const id = req.params.id;
                const articleById = await getArticleById(id)


                if (articleById !== undefined) {
                    return res.status(200).json({ ...articleById })
                }
                return res.status(404).json({ msg: 'Não foi encontrado esse artigo' })

            }
        } catch (err) {
            return res.status(404).json({ msg: 'Erro no sistema!' })
        }
    },
    async insertArticle(req, res) {
        try {
            const article = req.body;
            if (article !== undefined && article.id !== '' && article.featured !== '' && article.title !== '' && article.description !== ''
                && article.imageUrl !== '' && article.newsSite !== '' && article.summary !== '' && article.publishedAt !== '') {
                const newArticle = await spaceModel.create(article)
                return newArticle._id !== '' ? res.status(200).json({ msg: 'artigo adicionado com sucesso' }) : res.status(404).json({ msg: 'Erro ao inserir esse artigo!' })
            }
        } catch (error) {
            //console.log(error)
            return res.status(404).json({ msg: 'Erro ao conectar com banco de dados' })
        }
    },
    async updateArticle(req, res) {
        try {
            const { id } = req.params
            if (id !== undefined && id > 0) {
                const dados = req.body
                const update = await spaceModel.findOneAndUpdate({ id: id }, dados, {
                    new: false,

                })

                if (update._id !== undefined) {
                    return res.status(200).json({ msg: 'artigo atualizado com sucesso' })
                } else res.status(404).json({ msg: 'informe um id para atualizar um produto' })
            } else return res.status(404).json({ msg: 'informe um id para atualizar um produto' })
            //await spaceModel.findByIdAndUpdate(id,{update})
        } catch (error) {
            return res.status(404).json({ msg: 'Não foi encontrado nenhum artigo' })
        }
    },
    async deleteArticle(req, res) {
        try {
            const { id } = req.params
            if (id !== undefined && id > 0) {
                const deleteArticle = await spaceModel.deleteOne({ id })
                if (deleteArticle.deletedCount === 1) {
                    return res.status(200).json({ msg: 'artigo deletado com sucesso!' })
                }
            } else return res.status(404).json({ msg: 'Não foi encontrado esse artigo para deletar' })
        } catch (error) {
            return res.status(404).json({ msg: 'Erro para deletar Item' })
        }
    }
}