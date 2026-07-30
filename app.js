import express from "express"
import "dotenv/config"
import cors from "cors"
//const bodyParser = require('body-parser');//importacion commonjs
import bodyParser from "body-parser";//importacion ES "module"

const app = express();  
const port = process.env.PORT || 3000;
app.use(cors())
//configurar el uso de body-parse para nuestra aplicacion - no lo estmos utilizando
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get("/", function(req, res){
    res.send("Hola, estamos aprendiendo express con la ficha 3407184")
})

//otro endpoint, funcion de flecha
app.get("/productos", (req, res)=>{
    //usando template string ``
    const orden = req.query.orden || "sin orden"
    const pagina = req.query.pagina || 1
    res.send(`<h1>Listado de productos en orden ${orden} en la pagina ${pagina}</h1>
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

app.get("/productos/:categoria/:id", (req, res) => {
    const categoria = req.params.categoria
    const id = req.params.id
    const nombreServidor = "Super Servidor"
    res.json({
        categoria: categoria,
        id: id,
        servidor: nombreServidor
    })
})

// app.get("/usuarios/:id/posts", (req, res) => {
//     const id = req.params.id

app.get("/usuarios/:id/posts", (req, res) => {
    const idUsuario = req.params.id
    const orden = req.query.orden 
    let posts = [
        { id: 3, titulo: "post divertido" },
        { id: 1, titulo: "post simple" },
        { id: 2, titulo: "post feliz" }
    ]

    if (orden === "asc") {
        posts.sort((a, b) => a.id - b.id)
    } else if (orden === "desc") {
        posts.sort((a, b) => b.id - a.id)
    }

    res.json({
        usuario: idUsuario,
        orden: orden,
        posts: posts
    })
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