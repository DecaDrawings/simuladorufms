tranlateScrollBox();
function tranlateScrollBox()
{
    var scrollBox = document.getElementsByClassName("scroll-box")[0];
    var scrollBox1 = document.getElementsByClassName("scroll-box")[1];
    var scrollBox2 = document.getElementsByClassName("scroll-box")[2];
    if (scrollBox1.scrollHeight != Math.max(scrollBox1.offsetHeight, scrollBox1.clientHeight))
    {
        console.log("1 é overflow")
    }
    if (scrollBox.scrollHeight != Math.max(scrollBox.offsetHeight, scrollBox.clientHeight))
    {
        console.log("0 é overflow")
    }
    if (scrollBox2.scrollHeight != Math.max(scrollBox2.offsetHeight, scrollBox2.clientHeight))
    {
        console.log("2 é overflow")
    }
}