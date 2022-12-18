setInterval(tranlateScrollBox(), 20000);
function tranlateScrollBox()
{
    var scrollBox = document.getElementsByClassName("scroll-box")[0];
    var scrollBox1 = document.getElementsByClassName("scroll-box")[1];
    var scrollBox2 = document.getElementsByClassName("scroll-box")[2];   
    
    if (scrollBox.scrollWidth > scrollBox.clientWidth)
    {
        console.log("1 é overflow")
        var translate = scrollBox.style.translate;
        if(scrollBox.translate = "-100%")
        {
            scrollBox.style.transform = "translate(100%);"
        }
        else{
            scrollBox.style.transform = "translate(-100%);"
        }        
    }
    if (scrollBox1.scrollWidth > scrollBox1.clientWidth)
    {
        console.log("1 é overflow")
        var translate = scrollBox.style.translate;
        if(scrollBox.translate = "-100%")
        {
            scrollBox.style.transform = "translate(100%);"
        }
        else{
            scrollBox.style.transform = "translate(-100%);"
        }        
    }
    if (scrollBox2.scrollWidth > scrollBox2.clientWidth)
    {
        console.log("1 é overflow")
        var translate = scrollBox.style.translate;
        if(scrollBox.translate = "-100%")
        {
            scrollBox.style.transform = "translate(100%);"
        }
        else{
            scrollBox.style.transform = "translate(-100%);"
        }        
    }
}