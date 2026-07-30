import express from "express"
import "dotenv/config"

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (_, res) => {
    res.send("Hola , estamos aprendiendo express con la ficha 3407184");
});

app.listen(port, () => {
    console.log(`Servidor en funcionamiento en el puerto ${port}`);
}); 

app.get("/saludo/:nombre", (req,res) => {
            const minombre = req.params. nombre
            res.send ("mostrar sms")
    });

//1. productos /: categoria
//2. productos /: categoria /: Id
//3. libros /: isbn

app.get("/producto/:categoria", (req,res) => {
            const minombre = req.params. categoria
            res.send ("mostrar sms")
        });

app.get("/producto/:categoria", (req,res) => {
            const minombre = req.params. id
            res.send ("mostrar sms")
        });

app.get("/libro/:isbn", (req,res) => {
            const minombre = req.params. isbn
            res.send ("mostrar sms")
        });