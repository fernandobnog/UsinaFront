const URL = "http://localhost:8082/usinas";


function incluirUsina() {
    let obj = {};
    obj.id = usinaId.value;
    obj.nome = usinaNome.value;
    obj.capacidade = usinaCapacidade.value;
    obj.tipo = usinaTipo.value;
    
    if( usinaStatus.value==1){
    obj.status = true
    }else{
        obj.status=false;
    }
    console.log("antes do envio: "+obj);
    let headers = {
        "Content-type": "application/json; charset=UTF-8"
    };

    fetch(URL, {
        mode: "cors",
        headers: headers,
        method: "POST",
        body: JSON.stringify(obj)
    })

    .then(res => {

        if(res.status == 200 ) {
            alert("Usina Incluida com sucesso.");
            return;
        } else {
            alert(res.mensagemErro);
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