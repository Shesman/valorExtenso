function vExtenso(vlr) {
    var valorExtenso = "";
    var Num = parseFloat(vlr);
    if (vlr == 0) {
        valorExtenso = "zero";
    } else {

        var inteiro = parseInt(vlr); // parte inteira do valor
        if (inteiro < 1000000000000000) {

            var resto = Num.toFixed(2) - inteiro.toFixed(2);       // parte fracionária do valor
            resto = resto.toFixed(2)

            var vlrS = inteiro.toString();

            var cont = vlrS.length;
            var extenso = "";
            var auxnumero;
            var auxnumero2;
            var auxnumero3;
            var aux;

            var unidade = ["", "um", "dois", "três", "quatro", "cinco",
                "seis", "sete", "oito", "nove", "dez", "onze",
                "doze", "treze", "quatorze", "quinze", "dezesseis",
                "dezessete", "dezoito", "dezenove"];

            var centena = ["", "cento", "duzentos", "trezentos",
                "quatrocentos", "quinhentos", "seiscentos",
                "setecentos", "oitocentos", "novecentos"];

            var dezena = ["", "", "vinte", "trinta", "quarenta", "cinquenta",
                "sessenta", "setenta", "oitenta", "noventa"];

            var qualificaS = ["reais", "mil", " milhão", "bilhão", "trilhão"];
            var qualificaP = ["reais", "mil", "milhões", "bilhões", "trilhões"];

            for (var i = cont; i > 0; i--) {
                var verifica1 = "";
                var verifica2 = 0;
                var verifica3 = 0;
                auxnumero2 = "";
                auxnumero3 = "";
                auxnumero = 0;
                auxnumero2 = vlrS.substr(cont - i, 1);
                auxnumero = parseInt(auxnumero2);

                aux = vlrS.substr(cont - i + 1, 2);


                if ((i == 14) || (i == 11) || (i == 8) || (i == 5) || (i == 2)) {
                    auxnumero2 = vlrS.substr(cont - i, 2);
                    auxnumero = parseInt(auxnumero2);
                }

                if ((i == 15) || (i == 12) || (i == 9) || (i == 6) || (i == 3)) {
                   
                    if ((auxnumero == 1) && (aux == "00")) {

                        extenso = extenso + "Cem";
                        auxnumero2 = vlrS.substr(cont - i + 1, 1)
                        auxnumero3 = vlrS.substr(cont - i + 2, 1)

                        if ((auxnumero2 != "0") || (auxnumero3 != "0"))
                            extenso += " e ";

                    } else {
                        extenso = extenso + centena[auxnumero];
                        auxnumero2 = vlrS.substr(cont - i + 1, 1)
                        auxnumero3 = vlrS.substr(cont - i + 2, 1)

                        if ((auxnumero2 != "0") || (auxnumero3 != "0"))
                            extenso += " e ";
                    }


                } else

                    if (auxnumero > 19) {
                        auxnumero2 = vlrS.substr(cont - i, 1);
                        auxnumero = parseInt(auxnumero2);
                        extenso = extenso + dezena[auxnumero];
                        auxnumero3 = vlrS.substr(cont - i + 1, 1)

                        if ((auxnumero3 != "0") && (auxnumero2 != "1"))
                            extenso += " e ";
                    }
                    else if ((auxnumero <= 19) && (auxnumero > 9) && ((i == 14) || (i == 11) || (i == 8) || (i == 5) || (i == 2))) {
                        extenso = extenso + unidade[auxnumero];
                    } else if ((auxnumero < 10) && ((i == 13) || (i == 10) || (i == 7) || (i == 4) || (i == 1))) {
                        auxnumero3 = vlrS.substr(cont - i, 1);
                        // console.log(auxnumero3);
                        if ((auxnumero3 != "1") && (auxnumero3 != "")) {
                            // console.log(auxnumero);
                            ; extenso = extenso + unidade[auxnumero];
                            // console.log("teste");
                        }
                        else if (auxnumero3 == "1") {
                            if (cont == 1) {
                                extenso = extenso + "um real"
                            } else {
                                //console.log(auxnumero);
                                extenso = extenso + unidade[auxnumero];
                            }

                        }

                    }

                if (i % 3 == 1) {
                    verifica3 = cont - i;
                    if (verifica3 == 0)
                        verifica1 = vlrS.substr(cont - i, 1);

                    if (verifica3 == 1)
                        verifica1 = vlrS.substr(cont - i - 1, 2);

                    if (verifica3 > 1)
                        verifica1 = vlrS.substr(cont - i - 2, 3);

                    verifica2 = parseInt(verifica1);

                    if (i == 13) {
                        if (verifica2 == 1) {
                            extenso = extenso + " " + qualificaS[4] + " ";
                        } else if (verifica2 != 0) { extenso = extenso + " " + qualificaP[4] + " "; }
                    }
                    if (i == 10) {
                        if (verifica2 == 1) {
                            extenso = extenso + " " + qualificaS[3] + " ";
                        } else if (verifica2 != 0) { extenso = extenso + " " + qualificaP[3] + " "; }
                    }
                    if (i == 7) {
                        if (verifica2 == 1) {
                            extenso = extenso + " " + qualificaS[2] + " ";
                        } else if (verifica2 != 0) { extenso = extenso + " " + qualificaP[2] + " "; }
                    }
                    if (i == 4) {
                        if (verifica2 == 1) {
                            extenso = extenso + " " + qualificaS[1] + " ";
                            //console.log("valor do if:" + extenso);
                        } else if (verifica2 != 0) {
                            extenso = extenso + " " + qualificaP[1] + " ";
                            //console.log("valor do else:" + extenso);
                        }
                    }
                    if (i == 1) {
                        if ((cont == 1) && (extenso == "um real")) {
                            extenso = extenso
                        } else {
                            if (verifica2 == 1) {
                                extenso = extenso + " " + qualificaS[0] + " ";
                            } else { extenso = extenso + " " + qualificaP[0] + " "; }
                        }
                    }
                }
            }
            resto = resto * 100;
            var aexCent = 0;
            if (resto == 1) {
                extenso += " e " + unidade[resto] + " centavo"
            }
            if (resto <= 19 && resto > 1)
                extenso += " e " + unidade[resto] + " Centavos";
            if (resto > 19) {
                aexCent = parseInt(resto / 10);

                extenso += " e " + dezena[aexCent]
                resto = resto - (aexCent * 10);

                if (resto != 0)
                    extenso += " e " + unidade[resto] + " Centavos";
                else extenso += " Centavos";
            }

            valorExtenso = extenso;
        }
        else { valorExtenso = "Numero maior que 999 trilhões"; }
    }
    return valorExtenso;
}

console.log(vExtenso("101"))