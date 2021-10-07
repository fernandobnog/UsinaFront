const URL = "http://localhost:8082/usinas";


function incluirUsina() {
    let obj = {};
    obj.id = usinaId.value;
    obj.nome = usinaNome.value;
    obj.capacidadeEnergetica = usinaCapacidade.value;
    obj.tipo = usinaTipo.value;
    
    if( usinaStatus.value==1){
    obj.status = true
    }else{
        obj.status=false;
    }

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

function listarUsina(){
    let conteudo ='';
    let headers = {
        "Content-type": "application/json; charset=UTF-8"
    }
    fetch(URL, {
        mode: "cors",
        headers: headers,
        method: "GET",
    })
    .then(res => res.json() )
    .then(usina=>{
        console.log(usina);
        
        usina.object.forEach(usina => {
            console.log(usina);
            
                 conteudo +=

            `<tr>
                <td>${usina.id}</td> `+
                `<td>${usina.nome}</td>`+
                `<td>${usina.capacidadeEnergetica}</td>`+
                `<td>${usina.tipo}</td>`+
                `<td>${usina.status}</td>
            </tr>`;
              });
              let tabela = `<table align="center">
              <tr>
                  <th>USINA ID</th>
                  <th>NOME</th>
                  <th>CAPACIDADE (MW)</th>
                  <th>TIPO</th>
                  <th>STATUS</th>
              </tr>
              ${conteudo}
          </table>`;
          tabelaUsinas.innerHTML = tabela;
    })
}

function funcaoMenu() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
  }