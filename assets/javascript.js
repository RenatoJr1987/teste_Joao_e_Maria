function preencherPlanilha() {
    var table = document.getElementById("Planilha");

    deletarLinhas(table);

    var macaTotal = 0;
    var peraTotal = 0;

    for (var i = 1; i <= 30; i++) {
        var peraDia = numeroAleatorio(0, 5);
        var macaDia = numeroAleatorio(0, 5);
        var alunoMelhor = numeroAleatorio(1, 2);

        var row = table.insertRow(i);

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);

        cell1.innerHTML = "<b>" + i + "</b>";
        cell2.innerHTML = peraDia;
        cell3.innerHTML = macaDia;
        cell4.innerHTML = alunoMelhor == 1 ? "João" : "Maria";
        var frutaLevada = [];

        while (frutaLevada.length < 3) {
            qualFrutaLevar(alunoMelhor, macaDia);
        }

        cell5.innerHTML = frutaLevada[0];
        cell6.innerHTML = frutaLevada[1];
        cell7.innerHTML = frutaLevada[2];
    }

    document.getElementById("pTotal").innerHTML =
        "Este mês, a professora levou <b>" +
        macaTotal +
        " maçãs</b> e <b>" +
        peraTotal +
        " peras</b>.";

    function qualFrutaLevar(alunoMelhor, macaDia) {
        switch (alunoMelhor) {
            case 1:
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
}

function deletarLinhas(table) {
    for (var i = table.rows.length - 1; i > 0; i--) {
        table.deleteRow(i);
    }
}

//nº  aleatório.
function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * max) + min;
}