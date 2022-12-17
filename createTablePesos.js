criarTabela("");
var input = document.getElementById("search-text-peso");
input.addEventListener("onchange", function(){
    console.log(input.value);
    criarTabela(input.value);
});

function criarTabela(numInsc)
{    
    var tabela = document.getElementsByClassName("tabela")[0];
    var dados = "<tr><th>Nome do Curso</th>" + "<th>PRED</th>" + "<th>PMAT</th><th>PLIN</th><th>PHUM</th><th>PNAT</th>";   
    if (numInsc != "")
    {            
        for(let i = 0; i<basedeDados.length; i++)
        {
            if(pesos[i][0] == numInsc)
            {
                dados += "<tr><td>" + pesos[i][0] + "</td>" +
                     "<td>" + pesos[i][1] + "</td>" + 
                     "<td>" + pesos[i][2] + "</td>" +
                     "<td>" + pesos[i][3] + "</td>" +
                     "<td>" + pesos[i][4] + "</td>" +
                     "<td>" + pesos[i][5] + "</td>"; 
                     i = pesos.length;    
            }                          
        }
    }
    else
    {
        for(let i = 0; i<pesos.length; i++)
        {            
            dados += "<tr><td>" + pesos[i][0] + "</td>" +
            "<td>" + pesos[i][1] + "</td>" + 
            "<td>" + pesos[i][2] + "</td>" +
            "<td>" + pesos[i][3] + "</td>" +
            "<td>" + pesos[i][4] + "</td>" +
            "<td>" + pesos[i][5] + "</td>";                                    
        }     
        
    }
    tabela.innerHTML = dados;    
}