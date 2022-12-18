tranlateScrollBox();
function tranlateScrollBox()
{
    var scrollBox = document.getElementsByClassName("scroll-box")[0];
    var scrollBox1 = document.getElementsByClassName("scroll-box")[1];
    var scrollBox2 = document.getElementsByClassName("scroll-box")[2];   
    
    if (scrollBox.scrollWidth > scrollBox.clientWidth)
    {
        console.log("1 é overflow")
    }
    if (scrollBox1.scrollWidth > scrollBox1.clientWidth)
    {
        console.log("0 é overflow")
    }
    if (scrollBox2.scrollWidth > scrollBox2.clientWidth)
    {
        console.log("2 é overflow")
    }
}