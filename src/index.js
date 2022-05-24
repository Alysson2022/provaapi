import 'dotenv/config'
import services from "./services"
import {} from services
import express from 'express'
import cors from 'cors'

const server = express();
server.use(cors());
server.use(express.json());

server.get('/ping', (req, resp) =>{
    resp.send('pong');
})

server.get('/dobro/:numero', (req, resp) => {
    let numero = Number(req.params.numero);
    let dobro = numero*2;

    resp.send (String(dobro));
})

server.get('/somar', (req, resp) => {
    let a = Number(req.query.a);
    let b = Number(req.query.b);

    let soma = (a + b);
    resp.send({
        soma: soma
    })
})

server.post('/somar', (req,resp) => {
    let { k, h } = req.body;
    

    let x = k + h;

    resp.send({
        soma: x
    })
})

server.post('/media', (req,resp) => {
    let k = req.body.k;
    let h = req.body.h;
    let i = req.body.i;

    let x = (k + h + i)/3;

    resp.send({
        somaM: x
    })
})



server.get('/dia2/corprimaria/:cor' , (req, resp) => {
    let cor = String(req.params.cor);
    let primaria = true;

    if (cor == "azul" || cor == "amarelo" || cor == "vermelho") {
        primaria = true;
    }
    else 
    {
        primaria = false;
    }

    resp.send (Boolean(primaria));
})

server.post('/dia2/ingressocinema', (req,resp) =>{
    let qtdinteiras = req.body.qtdinteiras;
    let qtdmeias = req.body.qtdmeias;
    let diasemana = req.body.diasemana;
    let nacionalidade = req.body.nacionalidade;

    let valorinteira = 28.50;
    let valormeia = 14.25;
    let resultado = 0;

    if (diasemana == "quarta" || nacionalidade == "brasileira")
    {
        valorinteira = 5;
        valormeia = 5;
        resultado = (qtdinteiras * valorinteira) + (qtdmeias * valormeia);
    }
    else
    {
        resultado = (valorinteira * qtdinteiras) + (valormeia * qtdmeias);
    }

    resp.send({
        resultado: resultado
    })

}) 

server.get('/dia2/freqcaracter/:texto/:caracter' , (req, resp) => {
    let texto = req.body.texto;
    let caracter = req.body.caracter;


})

server.post('/dia2/maiornumero', (req, resp) => {
    let primeironum = req.body.primeironum;

    for (int i = primeironum; i >= 0; i++)
    {
        if (i >= 0)
        {
        posicao = 0;
        array[posicao] = i;
        posicao++;
        }
    }

    resp.send({
        array: array
    })
})

server.listen(process.env.PORT, 
                () => console.log(`API online na porta ${process.env.PORT}`));
