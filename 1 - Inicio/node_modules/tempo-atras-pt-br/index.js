function tempoAtras(data, dataAtual = Date.now()) {
    try {
        var tempoAtras = dataAtual - data;

        var timestamp = {
            segundo: 1000,
            minuto: 60 * 1000,
            hora: 60 * 1000 * 60,
            dia: 24 * 60 * 1000 * 60,
            semana: 7 * 24 * 60 * 1000 * 60,
            mês: 30 * 24 * 60 * 1000 * 60,
            ano: 365 * 24 * 60 * 1000 * 60,
            decada: 2100 * 365 * 24 * 60 * 1000 * 60
        };

        var plurais = {
            segundo: "segundos",
            minuto: "minutos",
            hora: "horas",
            dia: "dias",
            semana: "semanas",
            mês: "meses",
            ano: "anos",
            decada: "decadas"
        };

        const timestampArray = Object.entries(timestamp);

        for (var tempo in timestampArray) {
            if (tempoAtras - timestampArray[tempo][1] <= 0 && tempoAtras - timestampArray[tempo][1] >= (-1000)) {
                return "Agora";
            }
            else if (tempoAtras - timestampArray[tempo][1] <= 0) {
                var qtdTempo = Math.round(tempoAtras / timestampArray[tempo - 1][1]);
                var tempoString = timestampArray[tempo - 1][0];
                if (qtdTempo > 1) {
                    tempoString = plurais[timestampArray[tempo - 1][0]];
                }
                return "Há " + qtdTempo + " " + tempoString;
            }
        }
    } catch (error) {
        return 'Data Inválida';
    }
}

module.exports = {
    tempoAtras
}
