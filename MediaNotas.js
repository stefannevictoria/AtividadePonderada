// Armazenando as notas do aluno
var notas = [4, 8, 9];

// Definindo a média mínima para aprovação
var mediaMinima = 7; 

// Soma das notas
var soma = 0;

// Índice inicial para o loop
var i = 0;

while (i < notas.length) {
    soma += notas[i]; // Adiciona a nota atual à soma
    i++; // Incrementa o índice 
}

// Calculando a média das notas do aluno
var media = soma / notas.length;

// Verificando se o aluno foi aprovado
if (media >= mediaMinima && media <= 10) {
    // Exibindo o resultado
    console.log ('Parabéns!! Você foi aprovado! Sua média foi:' + media.toFixed(2));
} else {
    // Exibindo o resultado
    console.log ('Não foi dessa vez :(. Você foi reprovado! Sua média foi:' + media.toFixed(2));
}


// Verificando se as notas estão dentro do intervalo válido
for (var i = 0; i < 1; i++) {
    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
        console.log('Valor incompatível. Por favor, insira notas válidas entre 0 e 10.');
        return;
    }
}
