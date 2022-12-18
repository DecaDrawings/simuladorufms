tranlateScrollBox();
function tranlateScrollBox()
{
    var scrollBox = document.getElementsByClassName("scroll-box")[0].width;
    var scrollBox1 = document.getElementsByClassName("scroll-box")[1].width;
    var scrollBox2 = document.getElementsByClassName("scroll-box")[2].width;    
    const parentWidth = scrollBox.parentElement.getBoundingClientRect().width;
    const parentWidth1 = scrollBox1.parentElement.getBoundingClientRect().width;
    const parentWidth2 = scrollBox2.parentElement.getBoundingClientRect().width;
    if (scrollBox > parentWidth)
    {
        console.log("1 é overflow")
    }
    if (scrollBox1 > parentWidth1)
    {
        console.log("0 é overflow")
    }
    if (scrollBox2 > parentWidth2)
    {
        console.log("2 é overflow")
    }
}