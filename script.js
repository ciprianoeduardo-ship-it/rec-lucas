function verificar() {
    let nota = Number(document.getElementById("nota").value);

    for (let i = 0; i < 1; i++) {
        if (nota >= 6) {
            document.getElementById("resultado").innerHTML = "Aprovado!";
        } else {
            document.getElementById("resultado").innerHTML = "Reprovado!";
        }
    }
}
