// Armazenando a nota do aluno
var nota1 = 13; 
var nota2 = 9; 
var nota3 = 7; 

// Verificando se as notas estão dentro do intervalo válido
while (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
    console.log('Valor incompatível. Por favor, insira notas válidas entre 0 e 10.');
    break;
}

// Calculando a média do aluno
var media = (nota1 + nota2 + nota3) / 3; 

// Definindo a média mínima para aprovação
var mediaMinima = 7; 

// Verificando se o aluno foi aprovado
if (media >= mediaMinima && media <= 10) {
    // Exibindo o resultado
    console.log ('Parabéns!! Você foi aprovado! Sua média foi:' + media.toFixed(2));
} else {
    // Exibindo o resultado
    console.log ('Não foi dessa vez :(. Você foi reprovado! Sua média foi:' + media.toFixed(2));
}