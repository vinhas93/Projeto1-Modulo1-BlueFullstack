const prompt = require("prompt-sync")();

let time,
  A = "",
  a = true,
  path = 0,
  name;

console.log(`\tO Caminho do Guerreiro Pacífico\n\n`);

let time = prompt(`Aperte Enter para continuar...`);

console.log(
  `\n\nEssa aventura não é exatamente o que se espera de um filme de Ação de Hollywood `
);
console.log(`mas ocorre na fonte de toda Ação...\n\n `);

time = prompt(`(Aperte enter toda vez que aparecer as reticências)...`);

console.log(`\n\nVocê acorda bem cedo pela manhã um pouco desnorteado. Ainda não se sabe se é de sono ou se é por causa do que ocorreu na noite passada.`);
console.log(`Você tenta se lembrar...`);

time = prompt(`...`);

console.log(`\nPara a sua surpresa por mais que você se esforce, nada se constroi na sua mente. Com uma mistura de adrenalina, silêncio e desespero,`);
console.log(`seus olhos rodam a sua volta a procura de alguma pista que preencha esse vazio, apenas quando você se depara com o espelho, uma onda de`);
name = prompt(`choque percorre o seu corpo e você se dá conta... \nSeu nome é: `);

console.log(`\nVocê continua fixado em sua imagem na esperança de ter outro clarão, mas nada acontece. Tudo que você consegue lembrar é ${name}.`);

time = prompt(`...`);

console.log(`Depois de algum tempo, você percebe que continuar seria inútil e resolve fazer alguma coisa.`);

do {
  console.log("\t1)Sim\t2)Não");
  A = +prompt("");
  if (A == 1 || A == "Sim" || A == "sim" || A == "s") {
    path++;
    a = true;
} else if (A == 2 || A == "Nao" || A == "nao" || A == "n" || A == "Não" || A == "não") {
    a = true;
  } else {
    console.log("Pensa, pensa... Sim(1) ou Não(2)\n");
    a = false;
  }
} while (a == false);
