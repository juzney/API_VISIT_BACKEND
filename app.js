const express = require('express');
const app = express();
require('./src/database/db')
const cors = require('cors');
const cookieParser = require('cookie-parser')

app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(require('./src/routers/empresaVisitanteRouter'))
app.use(require('./src/routers/visitanteRouter'))
app.use(require('./src/routers/usuarioRouter'))


const PORT = process.env.PORT || 3001;

app.listen(PORT, ()=> console.log('server running on port', PORT))




