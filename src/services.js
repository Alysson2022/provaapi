


export default function (req, resp) {
    let numero = Number(req.params.numero);
    let dobro = numero*2;

    resp.send (String(dobro));
}

export default function (req, resp) {
    let a = Number(req.query.a);
    let b = Number(req.query.b);

    let soma = (a + b);
    resp.send({
        soma: soma
    })
}

export default function (req, resp)