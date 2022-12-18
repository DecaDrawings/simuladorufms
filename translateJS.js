setInterval(tranlateScrollBox, 20000);
var scrollBox = document.getElementsByClassName("scroll-box")[0];
var scrollBox1 = document.getElementsByClassName("scroll-box")[1];
var scrollBox2 = document.getElementsByClassName("scroll-box")[2];  
var checarTranslado = false;
var checarTranslado1 = false;
var checarTranslado2 = false;
function tranlateScrollBox()
{     
    if (scrollBox.scrollWidth > scrollBox.clientWidth)
    {
        console.log("1 é overflow")
        var translate = scrollBox.style.translate;
        if(checarTranslado == false)
        {
            scrollBox.style.transform = "translate(-100%)";
            checarTranslado = true;
        }
        else
        {
            scrollBox.style.transform = "translate(0)";
            checarTranslado = false;
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