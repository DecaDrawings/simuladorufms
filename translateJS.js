setInterval(tranlateScrollBox, 5000);
var scrollBox = document.getElementsByClassName("scroll-box")[0];
var scrollBox1 = document.getElementsByClassName("scroll-box")[1];
var scrollBox2 = document.getElementsByClassName("scroll-box")[2];  
var checarTranslado = false;
var checarTranslado1 = false;
var checarTranslado2 = false;
var quantasVezes = Math.round(scrollBox.scrollWidth / scrollBox.clientWidth);
var quantasVezes1 = Math.round(scrollBox1.scrollWidth / scrollBox1.clientWidth);
var quantasVezes2 = Math.round(scrollBox2.scrollWidth / scrollBox2.clientWidth);
var contador = 1;
var contador1 = 1;
var contador2 = 1;

var elementoPai = scrollBox.parentElement;
var elementoPai1 = scrollBox1.parentElement;
var elementoPai2 = scrollBox2.parentElement;

for(var a = 0; a < quantasVezes; a++)
{
    elementoPai.innerHTML += "<span class='span' style='translate:"+(10*a)+"px;'></span>";
    
}
for(var b = 0; b < quantasVezes1; b++)
{
    elementoPai1.innerHTML += "<span class='span' style='translate:"+(10*b)+"px;'></span>";
}
for(var c = 0; c < quantasVezes2; c++)
{
    elementoPai2.innerHTML += "<span class='span' style='translate:"+(10*c)+"px;'></span>";
}


function tranlateScrollBox()
{     
    if (scrollBox.scrollWidth > scrollBox.clientWidth)
    {                
        if(contador<quantasVezes)
        {
            scrollBox.style.transform = "translate(-" + (contador * 100) + "%)";
            contador += 1;
            if(contador == quantasVezes)
            {
                contador = 0;
            }
        }          
    }
    if (scrollBox1.scrollWidth > scrollBox1.clientWidth)
    {
        if(contador1<quantasVezes1)
        {
            scrollBox1.style.transform = "translate(-" + (contador1 * 100) + "%)";
            contador1 += 1;
            if(contador1 == quantasVezes1)
            {
                contador1 = 0;
            }
        }         
    }
    if (scrollBox2.scrollWidth > scrollBox2.clientWidth)
    {
        if(contador2<quantasVezes2)
        {
            scrollBox2.style.transform = "translate(-" + (contador2 * 100) + "%)";
            contador2 += 1;
            if(contador2 == quantasVezes2)
            {
                contador2 = 0;
            }
        }     
    }
}