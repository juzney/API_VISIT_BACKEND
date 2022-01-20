const visitanteController = require('../controllers/visitanteController')
const express = require('express');
const router = express.Router();



router.post('/visitante/register', visitanteController.Store)
router.get('/visitante/list', visitanteController.Index)
router.get('/visitante/:id', visitanteController.IndexOne)
router.get('/visitante/list/adiada', visitanteController.IndexAdiadas)
router.get('/visitante/list/cancelada', visitanteController.IndexCanceladas)
router.get('/visitante/list/marcada', visitanteController.IndexMarcadas)
router.put('/visitante/update/:id', visitanteController.UpdateOne)
router.delete('/visitante/delete/:id', visitanteController.DeleteOne)


module.exports = router;