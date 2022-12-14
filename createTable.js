criarTabela();
var input = document.getElementById("search-text");
input.addEventListener("keydown", function(){
    console.log(this.value);
    criarTabela(this.value);
});

function criarTabela(numInsc)
{
    if(!numInsc)
    {
        var tabela = document.getElementsByClassName("tabela")[0];
        var dados = "<tr><th>Inscrição</th>" + "<th>Modalidade</th>" + "<th>PR</th><th>PM</th><th>PL</th><th>PH</th><th>PN</th></tr>";       
        for(let i = 0; i<basedeDados.length; i++)
        {
            dados += "<tr><td>" + basedeDados[i][0] + "</td>" +
                     "<td>" + basedeDados[i][1] + "</td>" + 
                     "<td>" + basedeDados[i][2] + "</td>" +
                     "<td>" + basedeDados[i][3] + "</td>" +
                     "<td>" + basedeDados[i][4] + "</td>" +
                     "<td>" + basedeDados[i][5] + "</td>" +
                     "<td>" + basedeDados[i][6] + "</td></tr>";        
        }
    }
    else
    {
        var tabela = document.getElementsByClassName("tabela")[0];
        var dados = "<tr><th>Inscrição</th>" + "<th>Modalidade</th>" + "<th>PR</th><th>PM</th><th>PL</th><th>PH</th><th>PN</th></tr>";       
        for(let i = 0; i<basedeDados.length; i++)
        {
            if(basedeDados[i][0] == numInsc)
            {
                dados += "<tr><td>" + basedeDados[i][0] + "</td>" +
                     "<td>" + basedeDados[i][1] + "</td>" + 
                     "<td>" + basedeDados[i][2] + "</td>" +
                     "<td>" + basedeDados[i][3] + "</td>" +
                     "<td>" + basedeDados[i][4] + "</td>" +
                     "<td>" + basedeDados[i][5] + "</td>" +
                     "<td>" + basedeDados[i][6] + "</td></tr>"; 
            }
            i = basedeDados.length;                  
        }
    }
    tabela.innerHTML = dados;    
}