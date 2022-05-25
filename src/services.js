

export function Media(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}

export function CorPrimaria(cor) {
    cor = cor.toLowerCase();
    return cor == 'azul' || cor == 'vermelho' || cor == 'amarelo';
}

export function Dobro(numero) {
    return numero * 2;
}

export function Adicao(a, b) {
    return a + b;
}

export function IngressoCinema(qtdinteiras, qtdmeias, diasemana, nacionalidade) {
    if(nacionalidade.toLowerCase() == 'brasileira') {
        return (qtdinteiras + qtdmeias) * 5;
    }
    else if(diasemana.toLowerCase() == 'quarta') {
        return (qtdinteiras + qtdmeias) * 14.25;
    }
    else {
        return (qtdinteiras * 28.50) + (qtdmeias * 14.25);
    }
}

export function FrequenciaCaracter(palavra, caracter) {
    let qtd = 0;
    for(let letra of palavra) {
        if(letra == caracter) {
            qtd++;
        }
    }
    return qtd;
}

export function MaiorNumero(numero) {
    let maior = Number.MIN_VALUE;
    for(let item of numeros) {
        if(item > maior) {
            maior = item;
        }
    }
    return maior;
}