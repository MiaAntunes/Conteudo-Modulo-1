const rankingMaioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];

for(let indice of rankingMaioresPaises){
    for(x=0; x<rankingMaioresPaises.length ; x++){
        console.log(`${[x+1]}° - ${indice}`)
    }
}

/* Resposta:
1° - Rússia
2° - Rússia
3° - Rússia
4° - Rússia
5° - Rússia
1° - Canadá
2° - Canadá
3° - Canadá
4° - Canadá
5° - Canadá
1° - China
2° - China
3° - China
4° - China
5° - China
1° - EUA
2° - EUA
3° - EUA
4° - EUA
5° - EUA
1° - Brasil
2° - Brasil
3° - Brasil
4° - Brasil
5° - Brasil

*/