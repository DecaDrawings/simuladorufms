setInterval(tranlateScrollBox(), 2000);
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
        var translate = scrollBox1.style.translate;
        if(scrollBox1.translate = "-100%")
        {
            scrollBox1.style.transform = "translate(100%);"
        }
        else{
            scrollBox1.style.transform = "translate(-100%);"
        }        
    }
    if (scrollBox2.scrollWidth > scrollBox2.clientWidth)
    {
        console.log("1 é overflow")
        var translate = scrollBox2.style.translate;
        if(scrollBox2.translate = "-100%")
        {
            scrollBox2.style.transform = "translate(100%);"
        }
        else{
            scrollBox2.style.transform = "translate(-100%);"
        }        
    }
}