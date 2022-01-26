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
      `\nEla parece muito robusta, e talvez, você não queira chamar tanta atenção pra si nesse momento.`
    );
    console.log(
      `\nVocê recua e sem querer esbarra num jarro de vidro que cai no chão estrondosamente.\n`
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
      `\nVocê tomou coragem e se agarrou na esperança e na infeliz falta de opção, respondendo com tudo o que tinha na esperança de conseguir ajuda.\n`
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
      `\nVocê achou que seria mais seguro chamar menos atenção, afinal, você ainda não entende o que está acontecendo.\n`
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
console.log(`Então decide procurar por provisões no quarto e encontra um copo com água turva e um pão cheio de larvas no canto.`);
console.log(`Como você não está com tanta sede e fome, você decide não tocar na "comida", ainda.`);

time = prompt(`...`);

console.log(`Você perde a noção do tempo enquanto fica horas e horas rodando no quarto atrás de uma saída ou lembrança.`);
console.log(`A fome, o cansaço aumentam na mesma proporção que a esperança se esvai.`);
console.log(`Junto com a esperança, sua mente começa a vagar com tantas coisas absurdas acontecendo.`);

time = prompt(`...`);

console.log(`Você volta a si quando percebe um movimento atrás do armário. Você escuta barulhos desordenados repetidamente,`);
console.log(`o eco deles pelo quarto cria a impressão de que os móveis estão tremendo, ou será sua cabeça?`);
console.log(`Você vai checar o armário?`);

do {
  console.log("\t1)Sim\t2)Não");
  A = +prompt("");
  if (A == 1 || A == "Sim" || A == "sim" || A == "s") {
    console.log(
      `\nVocê sabia que essa era a única escolha viável, você se aproxima do armário e ao abrir a porta...\nVocê descobre um pequeno roedor comendo a madeira.`
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
      `\nVocê espera o barulho passar...\nInfelizmente ele continua zunindo na sua cabeça por algum tempo, até que ele simplesmente para.`
    );
    a = true;
  } else {
    console.log("Pensa, pensa... Sim(1) ou Não(2)\n");
    a = false;
  }
} while (a == false);

time = prompt(`...`);

console.log(`O rato sai do armário se esgueirando pela parede, ele aparenta estar com fome assim como você.`);
console.log(`Enquanto ele fareja por algo, você percebe que pode ser a melhor chance de matar a sua fome.`);
console.log(`Você mata o rato?`);

do {
  console.log("\t1)Sim\t2)Não");
  A = +prompt("");
  if (A == 1 || A == "Sim" || A == "sim" || A == "s") {
    console.log(
      `\nVocê tenta, mas ele é muito rápido...`
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
      `\nVocê decide poupar o pequeno que vai direto no pão com larvas...`
    );
    a = true;
  } else {
    console.log("Pensa, pensa... Sim(1) ou Não(2)\n");
    a = false;
  }
} while (a == false);

time = prompt(`...`);

console.log(`Você começa a se perguntar porque uma ideia como matar o rato para comer sequer passou pela sua cabeça.`);
console.log(`A fome está tão grande que te fez pensar nessa atitude desesperada, você comeria ele cru? será que seria melhor que o pão?`);
console.log(`Como um choque, sua mente clareia e num impulso rápido, você da um pulo.`);

time = prompt(`...`);

console.log(`Você percebe que talvez pudesse fazer fogo para assar o rato e esse mesmo fogo, talvez pudesse ser usado para queimar a porta.`);
console.log(`Sem pensar muito a respeito, você começa a procurar coisas que pudessem gerar fogo e coisas que poderiam alimenta-lo.`);
console.log(`Depois de depenar alguns livros velhos, algumas roupas e parte dos móveis para montar uma fogueira, você começa a procurar`);
console.log(`alguma coisa para acender o fogo.\n`);
console.log(`Tudo que você encontrou foi uma lupa. Você olha pra janela e pela primeira vez, a sorte está a seu favor, o sol está entrando`);
console.log(`radiantemente pra dentro do quarto, você pode fazer fogo.\n`);
console.log(`Quando você ateia fogo na folha e está prestes a jogar na fogueira, você trava. Será que colocar fogo em um quarto trancado`);
console.log(`é realmente uma boa ideia?`);


do {
  console.log("\t1)Sim\t2)Não");
  A = +prompt("");
  if (A == 1 || A == "Sim" || A == "sim" || A == "s") {
    console.log(
      `\n...`
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
      `\n...`
    );
    a = true;
  } else {
    console.log("Pensa, pensa... Sim(1) ou Não(2)\n");
    a = false;
  }
} while (a == false);



