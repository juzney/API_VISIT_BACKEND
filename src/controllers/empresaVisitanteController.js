const EmpresaVisitante = require('../models/cadastroEmpresaVisitante')


module.exports = {

	async Store(req, res){
	
		try{

			const empresaVisitante = await EmpresaVisitante.create(req.body)
			return res.send(empresaVisitante)

		}
		catch(erro){

			return res.status(400).send({"erro":"falha ao registrar Visitante"})
		}

		
	},


	async Index(req, res){

		try{
			const empresaVisitante = await EmpresaVisitante.find(req.body)
			return res.send(empresaVisitante)
		}

		catch(erro){
			return res.status(400).send({"erro":"falha ao listar visitantes"})
		}


	},

	async IndexOne(req, res){

		try{
			const empresaVisitante = await EmpresaVisitante.findOne({_id:req.params.id})
			return res.send(empresaVisitante)
		}

		catch(erro){
			return res.status(400).send({"erro":"falha ao detalhar Visitante"})
		}


	},


	async IndexCanceladas(req, res){

		try{
			const empresaVisitante = await EmpresaVisitante.find({status:"Cancelada"})
			return res.send(empresaVisitante)
		}

		catch(erro){
			return res.status(400).send({"erro":"falha ao detalhar Visitante"})
		}


	},


	async IndexMarcadas(req, res){

		try{
			const empresaVisitante = await EmpresaVisitante.find({status:"Marcada"})
			return res.send(empresaVisitante)
		}

		catch(erro){
			return res.status(400).send({"erro":"falha ao detalhar Visitante"})
		}


	},


	async IndexAdiadas(req, res){

		try{
			const empresaVisitante = await EmpresaVisitante.find({status:"Adiada"})
			return res.send(empresaVisitante)
		}

		catch(erro){
			return res.status(400).send({"erro":"falha ao detalhar Visitante"})
		}


	},

	async UpdateOne(req, res){

		try{

			const empresaVisitante = await EmpresaVisitante.updateOne({_id:req.params.id}, req.body);
			res.send({"message": "Visitante Actualizado com sucesso"})
		}
		catch(erro){
			return res.status(400).send({"erro":"falha ao actualizar sensors"})
		}
	},


	async DeleteOne(req, res){

		try{

			const empresaVisitante = await EmpresaVisitante.deleteOne({_id:req.params.id})
			return res.send({"message": "Sensor deletado com Visitante"})
		}
		catch(erro){
			return res.status(400).send({"erro":"falha ao deletar sensors"})
		}
	}


}