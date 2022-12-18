setInterval(tranlateScrollBox, 20000);
var scrollBox = document.getElementsByClassName("scroll-box")[0];
var scrollBox1 = document.getElementsByClassName("scroll-box")[1];
var scrollBox2 = document.getElementsByClassName("scroll-box")[2];  
var checarTranslado = false;
var checarTranslado1 = false;
var checarTranslado2 = false;
var quantasVezes = Math.round(scrollBox.scrollWidth / scrollBox.clientWidth);
var quantasVezes1 = Math.round(scrollBox1.scrollWidth / scrollBox1.clientWidth);
var quantasVezes2 = Math.round(scrollBox2.scrollWidth / scrollBox2.clientWidth);
var contador = 0;
var contador2 = 0;
var contador3 = 0;
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
        console.log("1 é overflow")
        var translate = scrollBox1.style.translate;
        if(checarTranslado1 == false)
        {
            scrollBox1.style.transform = "translate(-100%)";
            checarTranslado1 = true;
        }
        else
        {
            scrollBox1.style.transform = "translate(0)";
            checarTranslado1 = false;
        }        
    }
    if (scrollBox2.scrollWidth > scrollBox2.clientWidth)
    {
        console.log("1 é overflow")
        var translate = scrollBox2.style.translate;
        if(checarTranslado2 == false)
        {
            scrollBox2.style.transform = "translate(-100%)";
            checarTranslado2 = true;
        }
        else
        {
            scrollBox2.style.transform = "translate(0)";
            checarTranslado2 = false;
        }        
    }
}