const express = require('express')
const app = express()
 
app.get('/', (req, res) => {
  res.send('Primer respuesta desde la pagina principal');
  
}),

app.get("/paginados",(req, res) => {
    res.send('Segunda respuesta desde la paginados');
    
  }),

  app.get("/paginatres",(req, res) => {
    res.send('Tercer respuesta desde la paginatres');
  })

  var alumnos = [
                   {n1:"1", nombre:"panfilo", edad:"25"},
                   {n1:"2", nombre:"chencho", edad:"22"},
                ]

  app.get("/paginadatos",(req, res)=>{
     res.json(alumnos);
  })

app.listen(7000, () =>
{
   console.log('Servidor Express corriendo en el puerto: 7000')
})