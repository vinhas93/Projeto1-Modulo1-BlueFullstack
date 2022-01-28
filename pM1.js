const prompt = require("prompt-sync")();

let endGame = false;

while (endGame == false) {
  let A = "",
    path = 0,
    name;

  console.log(`
  \tO Caminho do Guerreiro Pacífico
  
  \tAperte Enter toda vez que aparecerem as reticências (...)
  `);

  prompt(`...`);

  console.log(
    `
    \tEssa aventura não é exatamente o que se espera de um filme de Ação de Hollywood
    mas ocorre na fonte de toda Ação...
    `
  );

  prompt(`...`);

  console.log(
    `
    \tVocê acorda bem cedo pela manhã um pouco desnorteado. Definitivamente não é só sono 
    mas você não lembra o que ocorreu na noite passada.
    
    \tVocê tenta recordar...
    `
  );

  prompt(`...`);

  console.log(
    `
    \tPara a sua surpresa por mais que você se esforce, nada se constroi na sua mente. Com uma mistura
    de adrenalina, silêncio e desespero, seus olhos rodam a sua volta a procura de alguma pista que preencha 
    esse vazio, apenas quando você se depara com o espelho, uma onda de choque percorre o seu corpo e você
    se dá conta...
  
    ----------------------------------------------------------------------------------------------------------
    `
  );

  name = prompt(`Seu nome é: `);

  console.log(
    `
    \tVocê continua fixado em sua imagem na esperança de ter outro clarão, mas nada acontece. Tudo que você 
    consegue lembrar é: ${name}.
    `
  );

  prompt(`...`);

  console.log(
    `
    \tDepois de algum tempo, você percebe que continuar olhando seria inútil e resolve fazer alguma coisa. Você 
    resolve procurar a saída e logo percebe uma porta trancada. Você procura outra forma de sair daquele quarto,
    infelizmente a janela tem grade e parece que não vai ceder não importa o que se tente. 
    
    \tA única alternativa que grita na sua cabeça é tentar arrombar a porta.
  
    ----------------------------------------------------------------------------------------------------------
  
    Você tenta arrombar a porta?

    ----------------------------------------------------------------------------------------------------------
    `
  );

  while (true) {
    console.log("\t1)Sim\t2)Não");
    A = prompt("Responda: ");
    if (A == 1 || A == "Sim" || A == "sim" || A == "s") {
      console.log(
        `
            \tVocê joga seu corpo contra a porta na tentativa de abri-la, infelizmente ela nem se mexeu, mas fez algum barulho.`
      );
      path++;
      break;
    } else if (A == 2 || A == "Nao" || A == "nao" || A == "n") {
      console.log(
        `
            \tEla parece muito robusta, e talvez, você não queira chamar tanta atenção pra si nesse momento.
            \tVocê recua e sem querer esbarra num jarro de vidro que cai no chão estrondosamente.
            `
      );
      break;
    } else {
      console.log("Pensa, pensa... Sim(1) ou Não(2)\n");
    }
  }

  prompt(`...`);

  console.log(
    `
    \tInfelizmente o barulho foi muito mais alto do que esperava e a porta continuava trancada. Ainda meio 
    atordoado em dúvidas, você escuta uma voz muito fraca.

    \tVoz: ${name}...

    \tAo mesmo tempo que você fica feliz em saber que não está exatamente sozinho, você reluta com a possibilidade 
    de que, quem quer que seja o dono daquela voz, pode ser o responsável pelas sua falta de memória.

    ----------------------------------------------------------------------------------------------------------

    Você responde?

    ----------------------------------------------------------------------------------------------------------
    `
  );

  while (true) {
    console.log("\t1)Sim\t2)Não");
    A = prompt("Responda: ");
    if (A == 1 || A == "Sim" || A == "sim" || A == "s") {
      console.log(
        `
            \tVocê tomou coragem e se agarrou na esperança e na infeliz falta de opção, respondendo com tudo o que tinha na 
            esperança de conseguir ajuda.
            `
      );
      path++;
      break;
    } else if (A == 2 || A == "Nao" || A == "nao" || A == "n") {
      console.log(
        `
            \tVocê achou que seria mais seguro chamar menos atenção, afinal, você ainda não entende o que está acontecendo.
            `
      );
      break;
    } else {
      console.log("Pensa, pensa... Sim(1) ou Não(2)\n");
    }
  }

  console.log(
    `\tAlguns segundos se passaram...
  `
  );

  prompt(`...`);

  console.log(
    `
    \tInfelizmente da voz que você havia escutado só restou a lembrança. Já se passaram alguns minutos e nada aconteceu.
    Você começa a sentir sede e logo também sentirá fome, então decide procurar por provisões no quarto e encontra um 
    copo com água turva e um pão cheio de larvas no canto.
    
    \tComo você não está com tanta sede e fome, você decide não tocar na "comida", ainda.
    `
  );

  prompt(`...`);

  console.log(
    `\tVocê perde a noção do tempo enquanto fica horas e horas rodando no quarto atrás de uma saída ou lembrança.

    \tA fome e o cansaço aumentam na mesma proporção que a esperança se esvai.
    
    \tJunto com a esperança, sua mente começa a vagar com tantas coisas absurdas acontecendo.
    `
  );

  prompt(`...`);

  console.log(
    `\tVocê volta a si quando percebe um movimento atrás do armário. Você escuta barulhos desordenados repetidamente,
    o eco deles pelo quarto cria a impressão de que os móveis estão tremendo, ou será sua cabeça?
    
    ----------------------------------------------------------------------------------------------------------

    Você vai checar o armário?

    ----------------------------------------------------------------------------------------------------------
    `
  );

  while (true) {
    console.log("\t1)Sim\t2)Não");
    A = prompt("Responda: ");
    if (A == 1 || A == "Sim" || A == "sim" || A == "s") {
      console.log(
        `
            \tVocê sabia que essa era a única escolha viável, você se aproxima do armário e ao abrir a porta...

            \tVocê descobre um pequeno roedor comendo a madeira.
            `
      );
      path++;
      break;
    } else if (A == 2 || A == "Nao" || A == "nao" || A == "n") {
      console.log(
        `
            \tVocê espera o barulho passar...
            
            \tInfelizmente ele continua zunindo na sua cabeça por algum tempo, até que ele simplesmente para.
            `
      );
      break;
    } else {
      console.log("Pensa, pensa... Sim(1) ou Não(2)\n");
    }
  }

  prompt(`...`);

  console.log(
    `\tO rato sai do armário se esgueirando pela parede, ele aparenta estar com fome assim como você. Enquanto 
    ele fareja por algo, você percebe que esssa pode ser a melhor chance de matar a sua fome.
    
    ----------------------------------------------------------------------------------------------------------
    
    Você mata o rato?

    ----------------------------------------------------------------------------------------------------------
    `
  );

  while (true) {
    console.log("\t1)Sim\t2)Não");
    A = prompt("Responda: ");
    if (A == 1 || A == "Sim" || A == "sim" || A == "s") {
      console.log(
        `
            \tVocê tenta, mas ele é muito rápido...
            `
      );
      path++;
      break;
    } else if (A == 2 || A == "Nao" || A == "nao" || A == "n") {
      console.log(
        `
            \tVocê decide poupar o pequeno que vai direto no pão com larvas...
            `
      );
      break;
    } else {
      console.log("Pensa, pensa... Sim(1) ou Não(2)\n");
    }
  }

  prompt(`...`);

  console.log(
    `\tVocê começa a se perguntar porque uma ideia como matar o rato para comer sequer passou pela sua cabeça.
    A fome está tão grande que te fez pensar nessa atitude desesperada, você comeria ele cru? Será que seria 
    melhor do que comer o pão?

    \tComo um choque, sua mente clareia e num impulso rápido, você da um pulo.
    `
  );

  prompt(`...`);

  console.log(
    `\tVocê percebe que talvez pudesse fazer fogo para assar o rato e esse mesmo fogo, talvez pudesse ser usado
    para queimar a porta.

    \tSem pensar muito a respeito, você começa a procurar coisas que pudessem gerar fogo e coisas que poderiam 
    alimenta-lo. Depois de depenar alguns livros velhos, algumas roupas e parte dos móveis para montar uma fogueira, 
    você começa a procurar alguma coisa para acender o fogo.

    \tTudo que você encontrou foi uma lupa. Você olha pra janela e pela primeira vez, a sorte está a seu favor, o sol 
    está entrando radiantemente pra dentro do quarto, você pode fazer fogo.

    \tQuando você ateia fogo na folha e está prestes a jogar na fogueira, você trava.

    ----------------------------------------------------------------------------------------------------------

    Será que colocar fogo em um quarto trancado é realmente uma boa ideia?

    ----------------------------------------------------------------------------------------------------------
    `
  );

  while (true) {
    console.log("\t1)Sim\t2)Não");
    A = prompt("Responda: ");
    if (A == 1 || A == "Sim" || A == "sim" || A == "s") {
      console.log(
        `
        \tVocê acende o fogo...
        `
      );
      path++;
      break;
    } else if (A == 2 || A == "Nao" || A == "nao" || A == "n") {
      console.log(
        `
        \tVocê apaga o papel aceso na sua mão com medo das consequências e se depara novamente com a situação a sua volta...
        `
      );
      break;
    } else {
      console.log("Pensa, pensa... Sim(1) ou Não(2)\n");
    }
  }

  prompt(`...`);

  console.log(
    `\tPoucos segundos depois de tomar essa decisão, você começa a reviver todas as experiências que teve nesse 
    quarto. Você lembra como acordou, o que sentiu em cada momento e, para sua surpresa, essas lembranças começam 
    a ser consumidas por um clarão que ao mesmo tempo que retorna suas memórias completas, vai consumindo o cenário atual.
  
    \tVocê começa a lembrar de muito mais do que seu nome, ao mesmo tempo, você percebe sua cabeça formigar e o clarão 
    começa a ganhar uma forma cada vez mais nítida.`
  );

  prompt(`...`);

  console.log(
    `\tVoz: Então, como está se sentindo ${name}?

    \tVocê escuta as palavras e a voz começa a se tornar cada vez mais familiar.

    \tClaro! Essa é a voz do Dr. Frederick di Polacci, você aceitou fazer parte do grupo de pesquisa dele!

    \tVocê percebe que está deitado numa espécie de sofá com uma luminária pendurada no teto focada em você. Ao se 
    levantar, você percebe que está em algum tipo de escritório amplo, muitas estantes de livro, uma escrivaninha, 
    o sofá onde você está e uma poltrona de frente, onde se sentava o Dr. FdP. 
    Você se senta enquanto sua cabeça começa a voltar ao normal.

    \tDr FdP: Fique calmo(a) ${name}, o que está sentindo é normal, você acaba de retornar de um transe profundo...

    \tEle falava enquanto se dirigia ao fundo da sala. Você percebia que ele estava mexendo em algo, mas ele estava 
    de costas e você não conseguiu identificar o que era.`
  );

  prompt(`...`);

  console.log(
    `\tDr. FdP: Aceita uma água?

    \tDisse ele estendendo um copo descartável com água fresca. Você se sente impelido a aceitar, toma um gole, e fica 
    com o copo na mão.

    \tDr.FdP: Vamos lá, vamos falar sobre o trabalho que fizemos hoje.

    \tVocê me descreveu que estava dentro de um quarto trancado, tudo que você viu e viveu lá foi moldado pelo seu inconsciente.

    \tNosso trabalho era analisar os bloqueios que surgiriam e sua reação a cada um deles. Fiz minhas anotações levando 
    em consideração que nosso trabalho visa fortalecer a independencia e proatividade e retirar você da zona de conforto.
  `
  );

  prompt(`...`);

  if (path < 1) {
    console.log(
      `\tDr. FdP: Infelizmente não houve progresso nenhum, tudo que vôce fez foi esperar que algo acontecesse.
      
      \tVocê Falhou Miseravelmente.
      `
    );
  } else if (path > 0 && path < 3) {
    console.log(
      `\tDr. FdP: Você até tomou uma atitude uma vez ou outra, mas ainda foi engulido pelo medo.

      \tVocê Falhou, mas progrediu um pouco.
      `
    );
  } else if (path == 3) {
    console.log(
      `\tDr. FdP: Percebi algum progresso, mas a zona de conforto ainda persiste.

      \tVocê não Concluiu, mas chegou bem perto.
      `
    );
  } else if (path == 4) {
    console.log(
      `\tDr. FdP: Fiquei feliz com o progresso! Ainda podemos melhorar, mas estou satisfeito.

      \tVocê Concluiu.
      `
    );
  } else {
    console.log(
      `\tDr. FdP: Você, inquestinavelmente, teve um progresso excepcional. Parabéns!!

      \tVocê Concluiu de maneira Épica!
      `
    );
  }
  prompt(`...`);

  console.log(
    `\tDr. FdP: Nós sabemos o quanto é dificil reconstruir suas atitudes, o que fizemos foi apenas plantar uma semente que 
    vai crescer com o passar dos dias.

    
    \tApesar de toda loucura que tenha acontecido naquela experiência, você percebe uma mudança positiva no seu dia a dia. 
    O Dr. FdP comentou que seria mais eficiente se repetissimos o processo, então acabou marcando uma nova consulta.

    ----------------------------------------------------------------------------------------------------------
    
    É chegado o dia da consulta, você vai?`
  );

  while (true) {
    console.log("\t1)Sim\t2)Não");
    A = prompt("Responda: ");
    if (A == 1 || A == "Sim" || A == "sim" || A == "s") {
      console.clear();
      break;
    } else if (A == 2 || A == "Nao" || A == "nao" || A == "n") {
      endGame = true;
      break;
    } else {
      console.log("Não sei se Vou ou se Furo... Sim(1) ou Não(2)\n");
    }
  }
}

console.log(
  `\tVocê decide que já foi o suficiente.
  `
);
