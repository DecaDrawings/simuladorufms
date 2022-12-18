tranlateScrollBox();
function tranlateScrollBox()
{
    var scrollBox = document.getElementsByClassName("scroll-box")[0];
    var scrollBox1 = document.getElementsByClassName("scroll-box")[0];
    var scrollBox2 = document.getElementsByClassName("scroll-box")[0];
    var scrollBoxW = scrollBox.width;
    var scrollBox1W = scrollBox1.width;
    var scrollBox2W = scrollBox2.width;    
    const parentWidth = scrollBox.parentElement.getBoundingClientRect().width;
    const parentWidth1 = scrollBox1.parentElement.getBoundingClientRect().width;
    const parentWidth2 = scrollBox2.parentElement.getBoundingClientRect().width;
    if (scrollBoxW > parentWidth)
    {
        console.log("1 é overflow")
    }
    if (scrollBox1W > parentWidth1)
    {
        console.log("0 é overflow")
    }
    if (scrollBox2W > parentWidth2)
    {
        console.log("2 é overflow")
    }
}