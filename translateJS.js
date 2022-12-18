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
var contador1 = 0;
var contador2 = 0;

function tranlateScrollBox()
{     
    scrollBox = document.getElementsByClassName("scroll-box")[0];
    scrollBox1 = document.getElementsByClassName("scroll-box")[1];
    scrollBox2 = document.getElementsByClassName("scroll-box")[2];  
    if (scrollBox.scrollWidth > scrollBox.clientWidth)
    {                
        if(contador<quantasVezes)
        {
            scrollBox.style.transform = "translate(-" + (contador * 100) + "%)";
            if(contador == 0){
                document.querySelector(".coluna1 .span:nth-of-type(" + (contador+1) + ")").style.transform = "scale(2)";
                document.querySelector(".coluna1 .span:last-of-type").style.transform = "scale(1)";                
            }
            else if(contador == 1){
                document.querySelector(".coluna1 .span:nth-of-type(1)").style.transform = "scale(1)";
                document.querySelector(".coluna1 .span:nth-of-type(2)").style.transform = "scale(2)";                
            }
            else
            {
                document.querySelector(".coluna1 .span:nth-of-type(" + (contador + 1) + ")").style.transform = "scale(2)";
                document.querySelector(".coluna1 .span:nth-of-type(" + (contador - 1) + ")").style.transform = "scale(1)";
            }
            contador += 1;
            if(contador == quantasVezes)
            {                
                contador = 0;
            }
            console.log(contador);            
        }          
    }
    if (scrollBox1.scrollWidth > scrollBox1.clientWidth)
    {
        if(contador1<quantasVezes1)
        {
            scrollBox1.style.transform = "translate(-" + (contador1 * 100) + "%)";
            if(contador1 == 0){
                document.querySelector(".coluna2 .span:nth-of-type(" + (contador1+1) + ")").style.transform = "scale(2)";
                document.querySelector(".coluna2 .span:last-of-type").style.transform = "scale(1)";                
            }
            else if(contador1 == 1){
                document.querySelector(".coluna2 .span:nth-of-type(1)").style.transform = "scale(1)";
                document.querySelector(".coluna2 .span:nth-of-type(2)").style.transform = "scale(2)";                
            }
            else
            {
                document.querySelector(".coluna2 .span:nth-of-type(" + (contador1 + 1) + ")").style.transform = "scale(2)";
                document.querySelector(".coluna2 .span:nth-of-type(" + (contador1 - 1) + ")").style.transform = "scale(1)";
            }
            contador1 += 1;
            if(contador1 == quantasVezes1)
            {                
                contador1 = 0;
            }
            console.log(contador1);    
        }         
    }
    if (scrollBox2.scrollWidth > scrollBox2.clientWidth)
    {
        if(contador2<quantasVezes2)
        {
            scrollBox2.style.transform = "translate(-" + (contador2 * 100) + "%)";
            if(contador2 == 0){
                document.querySelector(".coluna3 .span:nth-of-type(" + (contador2+1) + ")").style.transform = "scale(2)";
                document.querySelector(".coluna3 .span:last-of-type").style.transform = "scale(1)";                
            }
            else if(contador2 == 1){
                document.querySelector(".coluna3 .span:nth-of-type(1)").style.transform = "scale(1)";
                document.querySelector(".coluna3 .span:nth-of-type(2)").style.transform = "scale(2)";                
            }
            else
            {
                document.querySelector(".coluna3 .span:nth-of-type(" + (contador2 + 1) + ")").style.transform = "scale(2)";
                document.querySelector(".coluna3 .span:nth-of-type(" + (contador2 - 1) + ")").style.transform = "scale(1)";
            }
            contador2 += 1;
            if(contador2 == quantasVezes2)
            {                
                contador2 = 0;
            }
            console.log(contador2);    
        }     
    }
}