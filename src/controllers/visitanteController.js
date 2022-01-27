const Visitante = require('../models/cadastrovisitante')


module.exports = {

	async Store(req, res){
	
		try{

			const visitante = await Visitante.create(req.body)
			return res.send(visitante)

		}
		catch(erro){

			return res.status(400).send({"erro":"falha ao registrar Visitante"})
		}

		
	},


	async Index(req, res){

		try{
			const visitante = await Visitante.find(req.body)
			return res.send(visitante)
		}

		catch(erro){
			console.log(erro)
		}


	},

	async IndexOne(req, res){

		try{
			const visitante = await Visitante.findOne({_id:req.params.id})
			return res.send(visitante)
		}

		catch(erro){
			return res.status(400).send({"erro":"falha ao detalhar Visitante"})
		}


	},

	async IndexMarcadas(req, res){

		try{
			const visitante = await Visitante.find({status:"Marcada"})
			return res.send(visitante)
		}

		catch(erro){
			return res.status(400).send({"erro":"falha ao detalhar Visitante"})
		}


	},

	async IndexAdiadas(req, res){

		try{
			const visitante = await Visitante.find({status:"Adiada"})
			return res.send(visitante)
		}

		catch(erro){
			return res.status(400).send({"erro":"falha ao detalhar Visitante"})
		}


	},

	async IndexCanceladas(req, res){

		try{
			const visitante = await Visitante.find({status:"Cancelada"})
			return res.send(visitante)
		}

		catch(erro){
			return res.status(400).send({"erro":"falha ao detalhar Visitante"})
		}


	},

	async UpdateOne(req, res){

		try{

			const visitante = await Visitante.updateOne({_id:req.params.id}, req.body);
			res.send({"message": "Visitante Actualizado com sucesso"})
		}
		catch(erro){
			return res.status(400).send({"erro":"falha ao actualizar sensors"})
		}
	},


	async DeleteOne(req, res){

		try{

			const visitante = await Visitante.deleteOne({_id:req.params.id})
			return res.send({"message": "Sensor deletado com Visitante"})
		}
		catch(erro){
			return res.status(400).send({"erro":"falha ao deletar sensors"})
		}
	}


}