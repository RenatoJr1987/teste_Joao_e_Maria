function preencherPlanilha() {
    // Seleciona a tabela com id "Planilha"
    var table = document.getElementById("Planilha");

    //  deleta  as linhas da tabela após o cabeçalho.
    deletarLinhas(table);

    //Total de maçãs e peras 
    var macaTotal = 0;
    var peraTotal = 0;

    // Laço ---> repetição para preencher as linhas
    for (var i = 1; i <= 30; i++) {
        var peraDia = numeroAleatorio(0, 5); //N aleatório de Maçãs levadas no dia
        var macaDia = numeroAleatorio(0, 5); //N aleatório de Peras levadas no dia
        var alunoMelhor = numeroAleatorio(1, 2); //N aleatório para ver quem foi o melhor aluno no dia 

        // Cria uma nova linha na tabela
        var row = table.insertRow(i);

        // Cria 7 variaveis referentes as 7 celulas que serão adicionadas
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);

        cell1.innerHTML = "<b>" + i + "</b>"; //Insere na celula o dia
        cell2.innerHTML = peraDia;
        cell3.innerHTML = macaDia; //Insere na celula o número de peras levada no dia
        cell4.innerHTML = alunoMelhor == 1 ? "João" : "Maria"; // Insere na celula o melhor aluno do dia

        // Vetor 3 frutas que serão levadas pela professora
        var frutaLevada = [];

        //  repetir 3 vezes o processo de inserir valores no vetor
        while (frutaLevada.length < 3) {

            // Switch p/  decidir qual fruta priorizar com o melhor aluno 
            switch (alunoMelhor) {
                case 1: //João
                    if (macaDia > 0) {
                        frutaLevada.push("Maçã");
                        macaDia--;
                        macaTotal++;
                    } else if (peraDia > 0) {
                        frutaLevada.push("Pêra");
                        peraDia--;
                        peraTotal++;
                    } else {
                        frutaLevada.push("Nenhuma");
                    }
                    break;
                case 2:
                    if (peraDia > 0) {
                        frutaLevada.push("Pêra");
                        peraDia--;
                        peraTotal++;
                    } else if (macaDia > 0) {
                        frutaLevada.push("Maçã");
                        macaDia--;
                        macaTotal++;
                    } else {
                        frutaLevada.push("Nenhuma");
                    }
                    break;
            }

        }

        // Inserindo  Frutas levadas
        cell5.innerHTML = frutaLevada[0];
        cell6.innerHTML = frutaLevada[1];
        cell7.innerHTML = frutaLevada[2];

    }
    // tag p para mostrar o resultado final
    document.getElementById("pTotal").innerHTML = "Este mês, a professora levou <b>" + macaTotal + " maçãs</b> e <b>" + peraTotal + " peras</b>.";
}

//  deleta do ultimo para o primeiro, parando no cabeçalho.
function deletarLinhas(table) {
    for (var i = table.rows.length - 1; i > 0; i--) {
        table.deleteRow(i);
    }
}

//nº  aleatório.
function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * max) + min;
}