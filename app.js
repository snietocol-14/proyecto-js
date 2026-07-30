import express from "express"
import "dotenv/config"
//const bodyParser = require('body-parser');//importacion commonjs
import bodyParser from "body-parser";//importacion ES "module"

const app = express();  
const port = process.env.PORT || 3000;

//configurar el uso de body-parse para nuestra aplicacion - no lo estmos utilizando
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/", function(req, res){
    res.send("Hola, estamos aprendiendo express con la ficha 3407184")
})

//otro endpoint, funcion de flecha
app.get("/productos", (req, res)=>{
    //usando template string ``
    res.send(`<h1>Listado de productos</h1>
        <ol>
        <li>Televisor</li>
        <li>Celular</li>
        <li>Impresora</li>
        </ol>`)
})

app.get("/productos/:nombre", (req, res)=>{
    const producto = req.params.nombre
    // res.send(`Producto: ${producto}`)
    res.json({
        "id":1,
        "producto":producto,
        "cantidad":1,
        "precio":1000,
        "categoria":"Lácteos"
    })
})

app.listen(port, function(){
    console.log(`Servidor funcionando en el puerto ${port}`)
})

app.get("/saludo/:nombre", (req, res)=>{
    const nombre = req.params.nombre
    if (nombre.length < 3) {
        return res.status(400).json({Error: "El nombre debe tener al menos tres letras"})
    }
    res.send(`Hola, ${nombre}. Bienvenid@`)
})

// app.get("/saludo/:nombre", (req,res) => {
//             const minombre = req.params. nombre
//             res.send ("mostrar sms")
//     });

// app.get("/producto/:categoria", (req,res) => {
//             const minombre = req.params. categoria
//             res.send ("mostrar sms")
//         });

// app.get("/producto/:categoria", (req,res) => {
//             const minombre = req.params. id
//             res.send ("mostrar sms")
//         });

// app.get("/libro/:isbn", (req,res) => {
//             const minombre = req.params. isbn
//             res.send ("mostrar sms")
//         });