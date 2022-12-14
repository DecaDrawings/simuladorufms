criarTabela();
function criarTabela()
{
    var tabela = document.getElementsByClassName("tabela")[0];
    var dados;       
    for(let i = 0; i<basedeDados.length; i++)
    {
        dados += "<tr><td>" + basedeDados[i][0] + "<td><tr>"
                 "<tr><td>" + basedeDados[i][1] + "<td><tr>"
                 "<tr><td>" + basedeDados[i][2] + "<td><tr>"
                 "<tr><td>" + basedeDados[i][3] + "<td><tr>"
                 "<tr><td>" + basedeDados[i][4] + "<td><tr>"
                 "<tr><td>" + basedeDados[i][5] + "<td><tr>"
                 "<tr><td>" + basedeDados[i][6] + "<td><tr>";
    }
    tabela.innerHTML = dados;    
}