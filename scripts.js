var btn = window.document.getElementById("submit-btn");
var cursoValue = document.getElementById('lista_cursos');
const cursoText = cursoValue.options[cursoValue.selectedIndex].text;
const anoValue = document.getElementById("ano_de_referencia");
const anoText = anoValue.options[anoValue.selectedIndex].text;

const MEDIALIN  = 13.6985;
const MEDIAMAT  =  10.8931;
const MEDIANAT  = 10.8409;
const MEDIAHUM  = 13.3243;
const desvioLIN = 4.6822;
const desvioMAT = 4.5375;
const desvioNAT =  5.3482;
const desvioHUM =  5.3534;

var EPMAT;
var EPNAT;
var EPHUM;
var EPLIN;
var mediaFinal;

var resultadoBox = document.getElementsByClassName("formulario_box")[0];
var menu = document.getElementById("box-lista");
function verificarMenu()
{			
	var menu = document.getElementById("box-lista");
	if(menu.style.width == "")
	{
		menu.style.width = "300px";
	}
	else
	{
		menu.style.width = "";
	}
}

function somenteNumeros(e) 
{
    var charCode = e.charCode ? e.charCode : e.keyCode;
    // charCode 8 = backspace   
    // charCode 9 = tab
    if (charCode != 8 && charCode != 9) 
    {
        // charCode 48 equivale a 0   
        // charCode 57 equivale a 9
        if (charCode < 48 || charCode > 57) 
        {
            return false;
        }
 	}
}
function imprimirResultado(mediaFinal)
{	
    if(document.getElementById("labelResult"))
    {
        document.getElementById("labelResult").textContent = "Sua média seria: " + mediaFinal.toFixed(2);
    }
    else
    {
        resultadoBox.innerHTML += "<label id='labelResult' style='font-size: 1rem; font-weight: bold;'>Sua média seria: " + mediaFinal.toFixed(2) + "</label></br>";
    }
    
   
}

function calcularMetodo()
{
	var input_MAT = document.getElementById("input_MAT").value;
	var input_LIN = document.getElementById("input_LIN").value;
	var input_HUM = document.getElementById("input_HUM").value;
	var input_NAT = document.getElementById("input_NAT").value;
	var input_RED = document.getElementById("input_RED").value;

	EPMAT = 500 + (100 * ((input_MAT * 2) - MEDIAMAT))/desvioMAT;
	EPNAT = 500 + (100 * ((input_NAT * 2) - MEDIANAT))/desvioNAT;
	EPHUM = 500 + (100 * ((input_HUM * 2) - MEDIAHUM))/desvioHUM;
	EPLIN = 500 + (100 * ((input_LIN * 2) - MEDIALIN))/desvioLIN;

	

	if (cursoText == "MEDICINA - BACHARELADO") 
	{
		var pesoMAT = 1;
		var pesoNAT = 3;
		var pesoHUM = 2;
		var pesoLIN = 2;
		var pesoRED = 2;
		var somaPeso = pesoNAT + pesoMAT + pesoHUM + pesoLIN + pesoRED;
		mediaFinal = (EPMAT * pesoMAT + EPNAT * pesoNAT + EPLIN * pesoLIN + EPHUM * pesoHUM + input_RED * pesoRED) / somaPeso;
		console.log(mediaFinal);
		console.log(EPMAT);
		console.log(EPNAT);
		console.log(EPHUM);
		console.log(EPLIN);
		imprimirResultado(mediaFinal);
	}
	if (cursoText == "ADMINISTRAÇÃO - BACHARELADO") 
	{
		var pesoRED = 2;
		var pesoMAT = 1;
		var pesoLIN = 1;
		var pesoHUM = 1;
		var pesoNAT = 1;
		var somaPeso = pesoNAT + pesoMAT + pesoHUM + pesoLIN + pesoRED;
		mediaFinal = (EPMAT * pesoMAT + EPNAT * pesoNAT + EPLIN * pesoLIN + EPHUM * pesoHUM + input_RED * pesoRED) / somaPeso;
		console.log(mediaFinal);
		console.log(EPMAT);
		console.log(EPNAT);
		console.log(EPHUM);
		console.log(EPLIN);
		imprimirResultado(mediaFinal)
	}
	if (cursoText == "AGRONOMIA - BACHARELADO") 
	{
		var pesoRED = 2;
		var pesoMAT = 2;
		var pesoLIN = 1;
		var pesoHUM = 1;
		var pesoNAT = 2;
		var somaPeso = pesoNAT + pesoMAT + pesoHUM + pesoLIN + pesoRED;
		mediaFinal = (EPMAT * pesoMAT + EPNAT * pesoNAT + EPLIN * pesoLIN + EPHUM * pesoHUM + input_RED * pesoRED) / somaPeso;
		console.log(mediaFinal);
		console.log(EPMAT);
		console.log(EPNAT);
		console.log(EPHUM);
		console.log(EPLIN);
		imprimirResultado(mediaFinal)
	}
	if (cursoText == "ARQUITETURA E URBANISMO - BACHARELADO") 
	{
		imprimirResultado(mediaFinal)
		var pesoRED = 2;
		var pesoMAT = 1;
		var pesoLIN = 1;
		var pesoHUM = 1;
		var pesoNAT = 1;
		var somaPeso = pesoNAT + pesoMAT + pesoHUM + pesoLIN + pesoRED;
		mediaFinal = (EPMAT * pesoMAT + EPNAT * pesoNAT + EPLIN * pesoLIN + EPHUM * pesoHUM + input_RED * pesoRED) / somaPeso;
		console.log(mediaFinal);
		console.log(EPMAT);
		console.log(EPNAT);
		console.log(EPHUM);
		console.log(EPLIN);
	}	
	if (cursoText == "ARTES VISUAIS - BACHARELADO") 
	{
		imprimirResultado(mediaFinal)
		var pesoRED = 2;
		var pesoMAT = 1;
		var pesoLIN = 2;
		var pesoHUM = 2;
		var pesoNAT = 1;
		var somaPeso = pesoNAT + pesoMAT + pesoHUM + pesoLIN + pesoRED;
		mediaFinal = (EPMAT * pesoMAT + EPNAT * pesoNAT + EPLIN * pesoLIN + EPHUM * pesoHUM + input_RED * pesoRED) / somaPeso;
		console.log(mediaFinal);
		console.log(EPMAT);
		console.log(EPNAT);
		console.log(EPHUM);
		console.log(EPLIN);
	}	
	if (cursoText == "ARTES VISUAIS - LICENCIATURA") 
	{
		imprimirResultado(mediaFinal)
		var pesoRED = 2;
		var pesoMAT = 1;
		var pesoLIN = 2;
		var pesoHUM = 2;
		var pesoNAT = 1;
		var somaPeso = pesoNAT + pesoMAT + pesoHUM + pesoLIN + pesoRED;
		mediaFinal = (EPMAT * pesoMAT + EPNAT * pesoNAT + EPLIN * pesoLIN + EPHUM * pesoHUM + input_RED * pesoRED) / somaPeso;
		console.log(mediaFinal);
		console.log(EPMAT);
		console.log(EPNAT);
		console.log(EPHUM);
		console.log(EPLIN);
	}
	if (cursoText == "AUDIOVISUAL - BACHARELADO") 
	{
		imprimirResultado(mediaFinal)
		var pesoRED = 2;
		var pesoMAT = 1;
		var pesoLIN = 1;
		var pesoHUM = 1;
		var pesoNAT = 1;
		var somaPeso = pesoNAT + pesoMAT + pesoHUM + pesoLIN + pesoRED;
		mediaFinal = (EPMAT * pesoMAT + EPNAT * pesoNAT + EPLIN * pesoLIN + EPHUM * pesoHUM + input_RED * pesoRED) / somaPeso;
		console.log(mediaFinal);
		console.log(EPMAT);
		console.log(EPNAT);
		console.log(EPHUM);
		console.log(EPLIN);
	}		
	if (cursoText == "CIÊNCIA DA COMPUTAÇÃO - BACHARELADO") 
	{
		imprimirResultado(mediaFinal)
		var pesoRED = 2;
		var pesoMAT = 3;
		var pesoLIN = 2;
		var pesoHUM = 1;
		var pesoNAT = 2;
		var somaPeso = pesoNAT + pesoMAT + pesoHUM + pesoLIN + pesoRED;
		mediaFinal = (EPMAT * pesoMAT + EPNAT * pesoNAT + EPLIN * pesoLIN + EPHUM * pesoHUM + input_RED * pesoRED) / somaPeso;
		console.log(mediaFinal);
		console.log(EPMAT);
		console.log(EPNAT);
		console.log(EPHUM);
		console.log(EPLIN);
	}		
	if (cursoText == "CIÊNCIAS BIOLÓGICAS - BACHARELADO") 
	{
		imprimirResultado(mediaFinal)
		var pesoRED = 2;
		var pesoMAT = 1;
		var pesoLIN = 1;
		var pesoHUM = 1;
		var pesoNAT = 2;
		var somaPeso = pesoNAT + pesoMAT + pesoHUM + pesoLIN + pesoRED;
		mediaFinal = (EPMAT * pesoMAT + EPNAT * pesoNAT + EPLIN * pesoLIN + EPHUM * pesoHUM + input_RED * pesoRED) / somaPeso;
		console.log(mediaFinal);
		console.log(EPMAT);
		console.log(EPNAT);
		console.log(EPHUM);
		console.log(EPLIN);
	}		
	if (cursoText == "CIÊNCIAS BIOLÓGICAS - LICENCIATURA") 
	{
		imprimirResultado(mediaFinal)
		var pesoRED = 2;
		var pesoMAT = 1;
		var pesoLIN = 1;
		var pesoHUM = 1;
		var pesoNAT = 2;
		var somaPeso = pesoNAT + pesoMAT + pesoHUM + pesoLIN + pesoRED;
		mediaFinal = (EPMAT * pesoMAT + EPNAT * pesoNAT + EPLIN * pesoLIN + EPHUM * pesoHUM + input_RED * pesoRED) / somaPeso;
		console.log(mediaFinal);
		console.log(EPMAT);
		console.log(EPNAT);
		console.log(EPHUM);
		console.log(EPLIN);
	}		
	if (cursoText == "CIÊNCIAS CONTÁBEIS - BACHARELADO") 
	{
		imprimirResultado(mediaFinal)
		var pesoRED = 2;
		var pesoMAT = 3;
		var pesoLIN = 1;
		var pesoHUM = 2;
		var pesoNAT = 1;
		var somaPeso = pesoNAT + pesoMAT + pesoHUM + pesoLIN + pesoRED;
		mediaFinal = (EPMAT * pesoMAT + EPNAT * pesoNAT + EPLIN * pesoLIN + EPHUM * pesoHUM + input_RED * pesoRED) / somaPeso;
		console.log(mediaFinal);
		console.log(EPMAT);
		console.log(EPNAT);
		console.log(EPHUM);
		console.log(EPLIN);
	}		
	if (cursoText == "DIREITO - BACHARELADO") 
	{
		imprimirResultado(mediaFinal)
		var pesoRED = 2;
		var pesoMAT = 2;
		var pesoLIN = 2;
		var pesoHUM = 2;
		var pesoNAT = 1;
		var somaPeso = pesoNAT + pesoMAT + pesoHUM + pesoLIN + pesoRED;
		mediaFinal = (EPMAT * pesoMAT + EPNAT * pesoNAT + EPLIN * pesoLIN + EPHUM * pesoHUM + input_RED * pesoRED) / somaPeso;
		console.log(mediaFinal);
		console.log(EPMAT);
		console.log(EPNAT);
		console.log(EPHUM);
		console.log(EPLIN);
	}		
	if (cursoText == "EDUCAÇÃO FÍSICA - BACHARELADO") 
	{
		imprimirResultado(mediaFinal)
		var pesoRED = 2;
		var pesoMAT = 1;
		var pesoLIN = 2;
		var pesoHUM = 2;
		var pesoNAT = 1;
		var somaPeso = pesoNAT + pesoMAT + pesoHUM + pesoLIN + pesoRED;
		mediaFinal = (EPMAT * pesoMAT + EPNAT * pesoNAT + EPLIN * pesoLIN + EPHUM * pesoHUM + input_RED * pesoRED) / somaPeso;
		console.log(mediaFinal);
		console.log(EPMAT);
		console.log(EPNAT);
		console.log(EPHUM);
		console.log(EPLIN);
	}	
	if (cursoText == "EDUCAÇÃO FÍSICA - LICENCIATURA") 
	{
		imprimirResultado(mediaFinal)
		var pesoRED = 2;
		var pesoMAT = 1;
		var pesoLIN = 2;
		var pesoHUM = 2;
		var pesoNAT = 1;
		var somaPeso = pesoNAT + pesoMAT + pesoHUM + pesoLIN + pesoRED;
		mediaFinal = (EPMAT * pesoMAT + EPNAT * pesoNAT + EPLIN * pesoLIN + EPHUM * pesoHUM + input_RED * pesoRED) / somaPeso;
		console.log(mediaFinal);
		console.log(EPMAT);
		console.log(EPNAT);
		console.log(EPHUM);
		console.log(EPLIN);
	}			
	if (cursoText == "ENFERMAGEM - BACHARELADO") 
	{
		imprimirResultado(mediaFinal)
		var pesoRED = 2;
		var pesoMAT = 1;
		var pesoLIN = 1;
		var pesoHUM = 1;
		var pesoNAT = 2;
		var somaPeso = pesoNAT + pesoMAT + pesoHUM + pesoLIN + pesoRED;
		mediaFinal = (EPMAT * pesoMAT + EPNAT * pesoNAT + EPLIN * pesoLIN + EPHUM * pesoHUM + input_RED * pesoRED) / somaPeso;
		console.log(mediaFinal);
		console.log(EPMAT);
		console.log(EPNAT);
		console.log(EPHUM);
		console.log(EPLIN);
	}		
	if (cursoText == "ENGENHARIA CIVIL - BACHARELADO") 
	{
		imprimirResultado(mediaFinal)
		var pesoRED = 2;
		var pesoMAT = 3;
		var pesoLIN = 1;
		var pesoHUM = 1;
		var pesoNAT = 2;
		var somaPeso = pesoNAT + pesoMAT + pesoHUM + pesoLIN + pesoRED;
		mediaFinal = (EPMAT * pesoMAT + EPNAT * pesoNAT + EPLIN * pesoLIN + EPHUM * pesoHUM + input_RED * pesoRED) / somaPeso;
		console.log(mediaFinal);
		console.log(EPMAT);
		console.log(EPNAT);
		console.log(EPHUM);
		console.log(EPLIN);
	}		
	if (cursoText == "ENGENHARIA DE COMPUTAÇÃO - BACHARELADO") 
	{
		imprimirResultado(mediaFinal);
		var pesoRED = 2;
		var pesoMAT = 3;
		var pesoLIN = 1;
		var pesoHUM = 1;
		var pesoNAT = 2;
		var somaPeso = pesoNAT + pesoMAT + pesoHUM + pesoLIN + pesoRED;
		mediaFinal = (EPMAT * pesoMAT + EPNAT * pesoNAT + EPLIN * pesoLIN + EPHUM * pesoHUM + input_RED * pesoRED) / somaPeso;
		console.log(mediaFinal);
		console.log(EPMAT);
		console.log(EPNAT);
		console.log(EPHUM);
		console.log(EPLIN);
	}		
	if (cursoText == "ENGENHARIA DE PRODUÇÃO - BACHARELADO") 
	{
		imprimirResultado(mediaFinal);
		var pesoRED = 2;
		var pesoMAT = 3;
		var pesoLIN = 1;
		var pesoHUM = 1;
		var pesoNAT = 2;
		var somaPeso = pesoNAT + pesoMAT + pesoHUM + pesoLIN + pesoRED;
		mediaFinal = (EPMAT * pesoMAT + EPNAT * pesoNAT + EPLIN * pesoLIN + EPHUM * pesoHUM + input_RED * pesoRED) / somaPeso;
		console.log(mediaFinal);
		console.log(EPMAT);
		console.log(EPNAT);
		console.log(EPHUM);
		console.log(EPLIN);
	}		
	if (cursoText == "ENGENHARIA DE SOFTWARE - BACHARELADO") 
	{
		
		imprimirResultado(mediaFinal);
		var pesoRED = 2;
		var pesoMAT = 3;
		var pesoLIN = 2;
		var pesoHUM = 1;
		var pesoNAT = 2;
		var somaPeso = pesoNAT + pesoMAT + pesoHUM + pesoLIN + pesoRED;
		mediaFinal = (EPMAT * pesoMAT + EPNAT * pesoNAT + EPLIN * pesoLIN + EPHUM * pesoHUM + input_RED * pesoRED) / somaPeso;
		console.log(mediaFinal);
		console.log(EPMAT);
		console.log(EPNAT);
		console.log(EPHUM);
		console.log(EPLIN);
	}		
	if (cursoText == "ENGENHARIA ELÉTRICA - BACHARELADO") 
	{
		imprimirResultado(mediaFinal)
		var pesoRED = 2;
		var pesoMAT = 4;
		var pesoLIN = 2;
		var pesoHUM = 1;
		var pesoNAT = 2;
		var somaPeso = pesoNAT + pesoMAT + pesoHUM + pesoLIN + pesoRED;
		mediaFinal = (EPMAT * pesoMAT + EPNAT * pesoNAT + EPLIN * pesoLIN + EPHUM * pesoHUM + input_RED * pesoRED) / somaPeso;
		console.log(mediaFinal);
		console.log(EPMAT);
		console.log(EPNAT);
		console.log(EPHUM);
		console.log(EPLIN);
	}		
	if (cursoText == "ENGENHARIA QUÍMICA - BACHARELADO") 
	{
		imprimirResultado(mediaFinal)
		var pesoRED = 2;
		var pesoMAT = 2;
		var pesoLIN = 1;
		var pesoHUM = 1;
		var pesoNAT = 2;
		var somaPeso = pesoNAT + pesoMAT + pesoHUM + pesoLIN + pesoRED;
		mediaFinal = (EPMAT * pesoMAT + EPNAT * pesoNAT + EPLIN * pesoLIN + EPHUM * pesoHUM + input_RED * pesoRED) / somaPeso;
		console.log(mediaFinal);
		console.log(EPMAT);
		console.log(EPNAT);
		console.log(EPHUM);
		console.log(EPLIN);
	}		
	if (cursoText == "FARMÁCIA -  BACHARELADO") 
	{
		imprimirResultado(mediaFinal)
		var pesoRED = 2;
		var pesoMAT = 2;
		var pesoLIN = 1;
		var pesoHUM = 1;
		var pesoNAT = 2;
		var somaPeso = pesoNAT + pesoMAT + pesoHUM + pesoLIN + pesoRED;
		mediaFinal = (EPMAT * pesoMAT + EPNAT * pesoNAT + EPLIN * pesoLIN + EPHUM * pesoHUM + input_RED * pesoRED) / somaPeso;
		console.log(mediaFinal);
		console.log(EPMAT);
		console.log(EPNAT);
		console.log(EPHUM);
		console.log(EPLIN);
	}		
	if (cursoText == "FISIOTERAPIA - BACHARELADO") 
	{
		imprimirResultado(mediaFinal)
		var pesoRED = 2;
		var pesoMAT = 1;
		var pesoLIN = 1;
		var pesoHUM = 2;
		var pesoNAT = 2;
		var somaPeso = pesoNAT + pesoMAT + pesoHUM + pesoLIN + pesoRED;
		mediaFinal = (EPMAT * pesoMAT + EPNAT * pesoNAT + EPLIN * pesoLIN + EPHUM * pesoHUM + input_RED * pesoRED) / somaPeso;
		console.log(mediaFinal);
		console.log(EPMAT);
		console.log(EPNAT);
		console.log(EPHUM);
		console.log(EPLIN);
	}		
	if (cursoText == "HISTÓRIA - LICENCIATURA") 
	{
		imprimirResultado(mediaFinal)
		var pesoRED = 2;
		var pesoMAT = 1;
		var pesoLIN = 2;
		var pesoHUM = 2;
		var pesoNAT = 1;
		var somaPeso = pesoNAT + pesoMAT + pesoHUM + pesoLIN + pesoRED;
		mediaFinal = (EPMAT * pesoMAT + EPNAT * pesoNAT + EPLIN * pesoLIN + EPHUM * pesoHUM + input_RED * pesoRED) / somaPeso;
		console.log(mediaFinal);
		console.log(EPMAT);
		console.log(EPNAT);
		console.log(EPHUM);
		console.log(EPLIN);
	}		
	if (cursoText == "INTERCULTURAL INDÍGENA - LICENCIATURA") 
	{
		imprimirResultado(mediaFinal)
		var pesoRED = 2;
		var pesoMAT = 1;
		var pesoLIN = 1;
		var pesoHUM = 1;
		var pesoNAT = 1;
		var somaPeso = pesoNAT + pesoMAT + pesoHUM + pesoLIN + pesoRED;
		mediaFinal = (EPMAT * pesoMAT + EPNAT * pesoNAT + EPLIN * pesoLIN + EPHUM * pesoHUM + input_RED * pesoRED) / somaPeso;
		console.log(mediaFinal);
		console.log(EPMAT);
		console.log(EPNAT);
		console.log(EPHUM);
		console.log(EPLIN);
	}		
	if (cursoText == "JORNALISMO - BACHARELADO") 
	{
		imprimirResultado(mediaFinal)
		var pesoRED = 2;
		var pesoMAT = 1;
		var pesoLIN = 2;
		var pesoHUM = 2;
		var pesoNAT = 1;
		var somaPeso = pesoNAT + pesoMAT + pesoHUM + pesoLIN + pesoRED;
		mediaFinal = (EPMAT * pesoMAT + EPNAT * pesoNAT + EPLIN * pesoLIN + EPHUM * pesoHUM + input_RED * pesoRED) / somaPeso;
		console.log(mediaFinal);
		console.log(EPMAT);
		console.log(EPNAT);
		console.log(EPHUM);
		console.log(EPLIN);
	}		
	if (cursoText == "LETRAS - PORTUGUÊS/INGLÊS - LICENCIATURA") 
	{
		imprimirResultado(mediaFinal)
		var pesoRED = 2;
		var pesoMAT = 1;
		var pesoLIN = 2;
		var pesoHUM = 1;
		var pesoNAT = 1;
		var somaPeso = pesoNAT + pesoMAT + pesoHUM + pesoLIN + pesoRED;
		mediaFinal = (EPMAT * pesoMAT + EPNAT * pesoNAT + EPLIN * pesoLIN + EPHUM * pesoHUM + input_RED * pesoRED) / somaPeso;
		console.log(mediaFinal);
		console.log(EPMAT);
		console.log(EPNAT);
		console.log(EPHUM);
		console.log(EPLIN);
	}		
	if (cursoText == "MEDICINA VETERINÁRIA - BACHARELADO") 
	{
		imprimirResultado(mediaFinal)
		var pesoRED = 2;
		var pesoMAT = 1;
		var pesoLIN = 1;
		var pesoHUM = 1;
		var pesoNAT = 3;
		var somaPeso = pesoNAT + pesoMAT + pesoHUM + pesoLIN + pesoRED;
		mediaFinal = (EPMAT * pesoMAT + EPNAT * pesoNAT + EPLIN * pesoLIN + EPHUM * pesoHUM + input_RED * pesoRED) / somaPeso;
		console.log(mediaFinal);
		console.log(EPMAT);
		console.log(EPNAT);
		console.log(EPHUM);
		console.log(EPLIN);
	}
	if (cursoText == "MÚSICA - LICENCIATURA") 
	{
		imprimirResultado(mediaFinal)
		var pesoRED = 2;
		var pesoMAT = 1;
		var pesoLIN = 1;
		var pesoHUM = 1;
		var pesoNAT = 1;
		var somaPeso = pesoNAT + pesoMAT + pesoHUM + pesoLIN + pesoRED;
		mediaFinal = (EPMAT * pesoMAT + EPNAT * pesoNAT + EPLIN * pesoLIN + EPHUM * pesoHUM + input_RED * pesoRED) / somaPeso;
		console.log(mediaFinal);
		console.log(EPMAT);
		console.log(EPNAT);
		console.log(EPHUM);
		console.log(EPLIN);
	}		
	if (cursoText == "NUTRIÇÃO - BACHARELADO") 
	{
		imprimirResultado(mediaFinal)
		var pesoRED = 2;
		var pesoMAT = 1;
		var pesoLIN = 1;
		var pesoHUM = 2;
		var pesoNAT = 3;
		var somaPeso = pesoNAT + pesoMAT + pesoHUM + pesoLIN + pesoRED;
		mediaFinal = (EPMAT * pesoMAT + EPNAT * pesoNAT + EPLIN * pesoLIN + EPHUM * pesoHUM + input_RED * pesoRED) / somaPeso;
		console.log(mediaFinal);
		console.log(EPMAT);
		console.log(EPNAT);
		console.log(EPHUM);
		console.log(EPLIN);
	}		
	if (cursoText == "ODONTOLOGIA - BACHARELADO") 
	{
		imprimirResultado(mediaFinal)
		var pesoRED = 2;
		var pesoMAT = 1;
		var pesoLIN = 2;
		var pesoHUM = 2;
		var pesoNAT = 3;
		var somaPeso = pesoNAT + pesoMAT + pesoHUM + pesoLIN + pesoRED;
		mediaFinal = (EPMAT * pesoMAT + EPNAT * pesoNAT + EPLIN * pesoLIN + EPHUM * pesoHUM + input_RED * pesoRED) / somaPeso;
		console.log(mediaFinal);
		console.log(EPMAT);
		console.log(EPNAT);
		console.log(EPHUM);
		console.log(EPLIN);
	}		
	if (cursoText == "PEDAGOGIA - LICENCIATURA") 
	{
		imprimirResultado(mediaFinal)
		var pesoRED = 2;
		var pesoMAT = 1;
		var pesoLIN = 2;
		var pesoHUM = 2;
		var pesoNAT = 1;
		var somaPeso = pesoNAT + pesoMAT + pesoHUM + pesoLIN + pesoRED;
		mediaFinal = (EPMAT * pesoMAT + EPNAT * pesoNAT + EPLIN * pesoLIN + EPHUM * pesoHUM + input_RED * pesoRED) / somaPeso;
		console.log(mediaFinal);
		console.log(EPMAT);
		console.log(EPNAT);
		console.log(EPHUM);
		console.log(EPLIN);
	}		
	if (cursoText == "PSICOLOGIA - BACHARELADO") 
	{
		imprimirResultado(mediaFinal)
		var pesoRED = 2;
		var pesoMAT = 1;
		var pesoLIN = 1;
		var pesoHUM = 2;
		var pesoNAT = 1;
		var somaPeso = pesoNAT + pesoMAT + pesoHUM + pesoLIN + pesoRED;
		mediaFinal = (EPMAT * pesoMAT + EPNAT * pesoNAT + EPLIN * pesoLIN + EPHUM * pesoHUM + input_RED * pesoRED) / somaPeso;
		console.log(mediaFinal);
		console.log(EPMAT);
		console.log(EPNAT);
		console.log(EPHUM);
		console.log(EPLIN);
	}		
	if (cursoText == "SISTEMAS DE INFORMAÇÃO - BACHARELADO") 
	{
		imprimirResultado(mediaFinal)
		var pesoRED = 2;
		var pesoMAT = 2;
		var pesoLIN = 2;
		var pesoHUM = 1;
		var pesoNAT = 1;
		var somaPeso = pesoNAT + pesoMAT + pesoHUM + pesoLIN + pesoRED;
		mediaFinal = (EPMAT * pesoMAT + EPNAT * pesoNAT + EPLIN * pesoLIN + EPHUM * pesoHUM + input_RED * pesoRED) / somaPeso;
		console.log(mediaFinal);
		console.log(EPMAT);
		console.log(EPNAT);
		console.log(EPHUM);
		console.log(EPLIN);
	}		
	if (cursoText == "ZOOTECNIA - BACHARELADO") 
	{
		imprimirResultado(mediaFinal)
		var pesoRED = 2;
		var pesoMAT = 1;
		var pesoLIN = 1;
		var pesoHUM = 1;
		var pesoNAT = 3;
		var somaPeso = pesoNAT + pesoMAT + pesoHUM + pesoLIN + pesoRED;
		mediaFinal = (EPMAT * pesoMAT + EPNAT * pesoNAT + EPLIN * pesoLIN + EPHUM * pesoHUM + input_RED * pesoRED) / somaPeso;
		console.log(mediaFinal);
		console.log(EPMAT);
		console.log(EPNAT);
		console.log(EPHUM);
		console.log(EPLIN);
	}	
    
	
};