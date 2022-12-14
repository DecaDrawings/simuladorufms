criarTabela();
function criarTabela()
{
    var tabela = document.getElementsByClassName("tabela")[0];
    var dados;       
    for(let i = 0; i<basedeDados.length; i++)
    {
        dados += "<tr><td>" + basedeDados[i][0] + "<td><tr>";
    }
    tabela.innerHTML = dados;    
}