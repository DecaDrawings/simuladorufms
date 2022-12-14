criarTabela();
function criarTabela()
{
    var tabela = document.getElementsByClassName("tabela")[0];
    var dados = "<tr><th>Inscrição</th>" + "<th>Modalidade</th>" + "<th>PR</th><th>PN</th><th>PH</th><th>PM</th><th>PL</th></tr>";       
    for(let i = 0; i<basedeDados.length; i++)
    {
        dados += "<tr><td>" + basedeDados[i][0] + "<td>" +
                 "<td>" + basedeDados[i][1] + "<td>" + 
                 "<td>" + basedeDados[i][2] + "<td>" +
                 "<td>" + basedeDados[i][3] + "<td>" +
                 "<td>" + basedeDados[i][4] + "<td>" +
                 "<td>" + basedeDados[i][5] + "<td>" +
                 "<td>" + basedeDados[i][6] + "<td></tr>";        
    }
    tabela.innerHTML = dados;    
}