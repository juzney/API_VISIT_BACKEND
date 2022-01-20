const mongoose = require('../database/db')

const empresaVisitanteSchema = new mongoose.Schema({


	nomeEmpresa:{
		type: String,
		required: true
	},

	numDoc:{
		type:String,
		required: true
	},

	proveniencia:{
		type:String,
		required: true
	},

	descricaoVisita:{
		type:String,
		required: false
	}, 

	numVisitantes:{
		type:String,
		required: true
	},

	dataVisita:{
		type:String,
		required: false
	},
	horaVisita:{
		type:String,
		required: false
	},
	outrosVistitantes:{
		type:String,
		required: false
	},
	dadosVeiculo:{
		type:String,
		required: false
	},
	status:{
		type: String,
		required: false,
		default: "Marcada"
	},
}, {timestamps: true})


const EmpresaVisitante = mongoose.model('empresaVisitante', empresaVisitanteSchema)

module.exports = EmpresaVisitante;