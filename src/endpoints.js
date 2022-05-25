import { Router } from 'express';
const server = Router();

import { Dobro, Adicao, Media, CorPrimaria, IngressoCinema, FrequenciaCaracter, MaiorNumero } from './services.js';


server.get('/corprimaria/:cor', (req, resp) => {
    try {
        const { cor } = req.params;
        const primaria = CorPrimaria(cor);

        resp.send({
            primaria: primaria
        })
    }
    catch(err) {
        resp.send({
            erro: err.message
        })
    }
})

server.get('/dobro/:numero', (req, resp) => {
    try {
    let numero = Number(req.params.numero);
    let dobro = Dobro(numero);

    resp.send(String(dobro));
    }
    catch(err) {
        resp.send({
            erro: err.message
        })
    }
})


server.get('/somar', (req, resp) => {
    try {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    let soma = Adicao(a, b)
    resp.send({
        soma: soma
    })
    }
    catch(err) {
        resp.status(500).send({
            erro: err.message
        })
    }
})

server.post('/somar', (req,resp) => {
    try {
    const { k, h } = req.body;
    

    const x = Adicao(k, h);

    resp.send({
        soma: x
    })
    }
    catch(err) {
        resp.send({
            erro: err.message
        })
    }
})

server.post('/media', (req,resp) => {
    try {
    const {n1, n2, n3} = req.body;

    const x = Media(n1, n2, n3);

    resp.send({
        somaM: x
    })
    }
    catch(err) {
        resp.send({
            erro: err.message
        })
    }
})


server.post('/dia2/ingressocinema', (req,resp) =>{
    try {
    const {qtdinteiras, qtdmeias, diasemana, nacionalidade} = req.body;
    const resultado = IngressoCinema(qtdinteiras, qtdmeias, diasemana, nacionalidade);

    resp.send({
        resultado: resultado
    })
}
    catch(err) {
        resp.send({
            erro: err.message
        })
    }

}) 

server.get('/dia2/freqcaracter/:texto/:caracter' , (req, resp) => {
    const {texto, caracter} = req.params;

    const quantidade = FrequenciaCaracter(texto, caracter);
    resp.send({
        quantidade: quantidade
    })


})

server.post('/dia2/maiorNumero', (req, resp) => {
    const numero = req.body;
    const maior = MaiorNumero(numero);

    resp.send({
        resultado: maior
    })
})



export default server;