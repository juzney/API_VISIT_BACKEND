const empresaVisitanterController = require('../controllers/empresaVisitanteController')
const express = require('express');
const router = express.Router();



router.post('/empresaVisitante/register',  empresaVisitanterController.Store)
router.get('/empresaVisitante/list', empresaVisitanterController.Index)
router.get('/empresaVisitante/:id',   empresaVisitanterController.IndexOne)
router.get('/empresaVisitante/list/marcada',  empresaVisitanterController.IndexMarcadas)
router.get('/empresaVisitante/list/adiada',  empresaVisitanterController.IndexAdiadas)
router.get('/empresaVisitante/list/cancelada',  empresaVisitanterController.IndexCanceladas)
router.put('/empresaVisitante/update/:id',  empresaVisitanterController.UpdateOne)
router.delete('/empresaVisitante/delete/:id',  empresaVisitanterController.DeleteOne)


module.exports = router;