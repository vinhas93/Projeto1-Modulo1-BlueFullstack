const prompt = require("prompt-sync")();

let time,
  A = "",
  a = true,
  path = 0,
  name;

console.log(`\tO Caminho do Guerreiro Pacífico\n\n`);
console.log(`\tAperte Enter toda vez que aparecerem as reticências (...)\n\n`);

time = prompt(`...`);

console.log(
  `\n\nEssa aventura não é exatamente o que se espera de um filme de Ação de Hollywood `
);
console.log(`mas ocorre na fonte de toda Ação...\n\n `);

time = prompt(`...`);

console.log(
  `\n\nVocê acorda bem cedo pela manhã um pouco desnorteado. Definitivamente não é só sono mas você não lembra o que ocorreu na noite passada.`
);
console.log(`Você tenta recordar...\n`);

time = prompt(`...`);

console.log(
  `\nPara a sua surpresa por mais que você se esforce, nada se constroi na sua mente. Com uma mistura de adrenalina, silêncio e desespero,`
);
console.log(
  `seus olhos rodam a sua volta a procura de alguma pista que preencha esse vazio, apenas quando você se depara com o espelho, uma onda de`
);
name = prompt(
  `choque percorre o seu corpo e você se dá conta... \nSeu nome é: `
);

console.log(
  `\nVocê continua fixado em sua imagem na esperança de ter outro clarão, mas nada acontece. Tudo que você consegue lembrar é ${name}.\n`
);

time = prompt(`...`);

console.log(
  `Depois de algum tempo, você percebe que continuar olhando seria inútil e resolve fazer alguma coisa.`
);
console.log(
  `Você resolve procurar a saída e logo percebe uma porta trancada. Você procura outra forma de sair daquele quarto, infelizmente a janela`
);
console.log(
  `tem grade e parece que não vai ceder não importa o que se tente. A única alternativa quee grita na sua cabeça é tentar arrombar a porta.\n`
);

console.log(`Você tenta arrombar a porta?`);

do {
  console.log("\t1)Sim\t2)Não");
  A = +prompt("");
  if (A == 1 || A == "Sim" || A == "sim" || A == "s") {
    console.log(`Você se lança contra a porta com toda a sua força!`);
    console.log(`Mas nada acontece.\n`);
    path++;
    a = true;
  } else if (
    A == 2 ||
    A == "Nao" ||
    A == "nao" ||
    A == "n" ||
    A == "Não" ||
    A == "não"
  ) {
    console.log(
      `Ela parece muito robusta, e talvez, você não queira chamar tanta atenção pra si nesse momento.`
    );
    console.log(
      `Você recua e sem querer esbarra num jarro de vidro que cai no chão estrondosamente.\n`
    );
    a = true;
  } else {
    console.log("Pensa, pensa... Sim(1) ou Não(2)\n");
    a = false;
  }
} while (a == false);

time = prompt(`...`);

console.log(
  `Infelizmente o barulho foi muito mais alto do que esperava e a porta continuava trancada.`
);
console.log(
  `Ainda meio atordoado de dúvidas, você escuta uma voz muito fraca\n\n`
);
console.log(`- ${name}...\n\n`);
console.log(
  `Ao mesmo tempo que você fica feliz em saber que não está exatamente sozinho, você reluta com a possibilidade de que, quem quer que seja`
);
console.log(
  `o dono daquela voz, pode ser o responsável pelas sua falta de memória.\n\nVocê responde?`
);

do {
  console.log("\t1)Sim\t2)Não");
  A = +prompt("");
  if (A == 1 || A == "Sim" || A == "sim" || A == "s") {
    console.log(
      `Você tomou coragem e se agarrou na esperança e na infeliz falta de opção, respondendo com tudo o que tinha na esperança de conseguir ajuda.\n`
    );
    path++;
    a = true;
  } else if (
    A == 2 ||
    A == "Nao" ||
    A == "nao" ||
    A == "n" ||
    A == "Não" ||
    A == "não"
  ) {
    console.log(
      `Você achou que seria mais seguro chamar menos atenção, afinal, você ainda não entende o que está acontecendo.\n`
    );
    a = true;
  } else {
    console.log("Pensa, pensa... Sim(1) ou Não(2)\n");
    a = false;
  }
} while (a == false);

console.log(`Alguns segundos se passaram...`);

time = prompt(`...`);

console.log(
  `Infelizmente da voz que você havia escutado só restou a lembrança. Já se passaram alguns minutos e nada aconteceu.`
);
console.log(`Você começa a sentir sede e logo também sentirá fome`);
