const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('prueba_tecnica', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging:true
  });
  


  //funciones
  async function getelementos(){
    const [data]= await sequelize.query("select * from elementos");
    return data;
  }

  async function getelemento(id){
    const [data]= await sequelize.query(`select status from elementos where id='${id}';`);
    return data;
  }

  async function actualizarElemento(id,status){
     await sequelize.query(`call actualizar_elemento ('${id}','${status}');`);
    return 'ok';
  }

  async function obtenerGrafica(id){

    const rta=await sequelize.query(`call obtener_grafica ('${id}');`);
   return rta;
 }

 async function obtenerGraficaFechas(body){
    const {elemento,inicio,fin}=body;
    const rta=await sequelize.query(`call grafica_fechas('${elemento}','${inicio}','${fin}');`);
   return rta;
 }

 module.exports={getelementos,getelemento,actualizarElemento,obtenerGrafica,obtenerGraficaFechas}