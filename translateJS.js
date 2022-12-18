tranlateScrollBox();
function tranlateScrollBox()
{
    var scrollBox = document.getElementsByClassName("scroll-box")[0];
    var scrollBox1 = document.getElementsByClassName("scroll-box")[1];
    var scrollBox2 = document.getElementsByClassName("scroll-box")[2];
    var scrollBoxW = scrollBox.getBoundingClientRect().width;
    var scrollBox1W = scrollBox1.getBoundingClientRect().width;
    var scrollBox2W = scrollBox2.getBoundingClientRect().width;    
    const parentWidth = scrollBox.parentElement.getBoundingClientRect().width;
    const parentWidth1 = scrollBox1.parentElement.getBoundingClientRect().width;
    const parentWidth2 = scrollBox2.parentElement.getBoundingClientRect().width;
    
    if (scrollBox.scrollWidth > scrollBox.clientWidth || scrollBox.scrollWidth > scrollBox.scrollWidth)
    {
        console.log("1 é overflow")
    }
    if (scrollBox1.scrollWidth > scrollBox1.clientWidth || scrollBox1.scrollWidth > scrollBox1.scrollWidth)
    {
        console.log("0 é overflow")
    }
    if (scrollBox2.scrollWidth > scrollBox2.clientWidth || scrollBox2.scrollWidth > scrollBox2.scrollWidth)
    {
        console.log("2 é overflow")
    }
}