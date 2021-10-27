const regioes = ["sul", "sudeste", "norte", "nordeste", "centro-oeste"];

const rotas = [
    {
        "saida": regioes[2],
        "entrada": regioes[3]
    },
    {
        "saida": regioes[1],
        "entrada": regioes[4]
    },
    {
        "saida": regioes[1],
        "entrada": regioes[0]
    }
];

// regioes definidas pela equipe:
const novasRotas = [
    {
        "saida": regioes[0],
        "entrada": regioes[4]
    },
    {
        "saida": regioes[4],
        "entrada": regioes[2]
    },
    {
        "saida": regioes[2],
        "entrada": regioes[1]
    }
];

let contador = 0;

for (const rota of novasRotas) {
    if (rota.saida === rota.entrada) {
        console.log("nao é possível criar a rota")
    }

    rotas.push(rota);
    contador = contador + 1;
}

console.log("Novas rotas:", novasRotas);
console.log(`Foi necessário a criação de ${contador} novas rotas.`)