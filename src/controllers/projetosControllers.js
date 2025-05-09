import prisma from "../config/prisma.js";


export const buscarTodosProjetos = async (req,res)=>{
     try{
        const listaDeProjetos = await prisma.projetos.findMany()

        return res.status(200).json(listaDeProjetos)
     }
     catch(error){
        return res.status(400).json({mensagem:"Erro ao buscar projetos!"})
     }
}

export const criarNovosProjetos = async (req, res)=>{
     try{
       const {nome, imagem, descricao, link} = req.body

       const projetosNovos = await prisma.projetos.create({
            data:{
                nome,
                imagem,
                descricao,
                link
            }
       })

       return res.status(201).json(projetosNovos)
     }
     catch(error){
        return res.status(400).json({mensagem:"Erro ao criar projetos novos!"})
     }
}

export const buscarProjetosId = async (req,res)=>{
     try{
        const {id} =req.params

        const buscarProjetosPeloId = await prisma.projetos.findUnique({
              where:{id: Number(id)}
        })

        return res.status(200).json(buscarProjetosPeloId)
     }
     catch(error){
         return res.status(404).json({mensagem:"Erro ao buscar projeto, tente novamente!"})
     }
}


export const atualizarProjetos = async (req, res)=>{
     try{
        const {id} =req.params
        const {nome, imagem , descricao, link} =req.body

        const editarProjeto = await prisma.projetos.update({
              where:{id: Number(id)},
              data:{ nome, imagem, descricao, link}
        })

        return res.status(200).json(editarProjeto)
     }
     catch(error){

        return res.status(400).json({mensagem:"Erro ao atualizar projeto!"})

     }
}

export const deletarProjetos = async (req,res)=>{
     try{
       const {id} =req.params

       const excluirProjetos = await prisma.projetos.delete({
            where:{id: Number(id)}
       })

       return res.status(204).json(excluirProjetos)
     }
     catch(error){
        return res.status(400).json({mensagem:"Erro ao deletar projeto!"})
     }
}