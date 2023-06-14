// Importar los módulos necesarios
const express = require('express');
const app = express();
const cors=require('cors');
app.use(cors());
app.use(express.json())
const {getelementos,getelemento,actualizarElemento,obtenerGrafica,obtenerGraficaFechas} = require('./service');
// Definir una ruta GET
app.get('/', async (req, res,next) => {
    try {
        const rta=await getelementos();
        res.json(rta);
        
    } catch (error) {
        next(error);
    }
});
app.get('/:id', async (req, res,next) => {
    try {
        const {id}=req.params;
        const rta=await getelemento(id);
        res.json(rta);
        
    } catch (error) {
        next(error);
    }
});

app.get('/grafica/:id', async (req, res,next) => {
    try {
        const {id}=req.params;
        const rta=await obtenerGrafica(id);
        res.json(rta);
        
    } catch (error) {
        next(error);
    }
});

app.post('/grafica-fecha', async (req, res,next) => {
    try {
        const body=req.body;
        const rta=await obtenerGraficaFechas(body);
        res.json(rta);
        
    } catch (error) {
        next(error);
    }
});

app.get('/:id/:status', async (req, res,next) => {
    try {
        const {id}= req.params;
        const {status}= req.params;
        const rta=await actualizarElemento(id,status);
        res.json(rta);
        
    } catch (error) {
        next(error);
    }
});

// Iniciar el servidor
app.listen(5000, () => {
  console.log('Servidor escuchando en el puerto 5000');
});
