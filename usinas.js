const URL = "http://localhost:8082/usinas";

function incluirUsina() {
    let 
    obj = {
        id: usinaId.value,
        nome: usinaNome.value,
        capacidade: usinaCapacidade.value,
        tipo: usinaTipo.value,
        status: usinaStatus.value
    };
    let headers = {

    }

    fetch(URL, {
        headers: headers,
        method: "POST",
        body: JSON.stringify(obj)
    })
    .then(r => r.json())
    .then(resp => {
        if (resp.status != 'OK') {
            alert(resp.mensagemErro);
            return;
        } else {
            alert("Usina incluída");
        }
    })
}



function listarMinisterio() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var resp = JSON.parse(this.responseText);
          if (resp.status != 'OK') {
            alert(resp.mensagemErro);
            return;
          } else {
              exibirListaMinisterio(resp.object);
          }
        }
    };
    xhttp.open("GET", URL, true);
    xhttp.send();    
}

function exibirListaMinisterio(lista) {
    let conteudo = '';
    for (let i = 0; i < lista.length; i++) {
        let ministerio = lista[i];
        if (ministerio.ministro == null) {
            conteudo = conteudo +
                `<tr><td>${ministerio.nome}</td><td>-</td></tr>`;
        } else {
            conteudo = conteudo +
                `<tr><td>${ministerio.nome}</td><td>${ministerio.ministro.nome}</td></tr>`;
        }

    }
    
    let tabela = `<table>
        <tr>
            <th>Ministerio</th><th>Ministro</th>
        </tr>
        ${conteudo}
    </table>`;
    tabelaMinistrerios.innerHTML = tabela;

}