window.onscroll = function () {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        $(".img-header").css("height", "60px")
        $("header").css("background-color", "#0a0a0a")
    }
    else {
        $(".img-header").css("height", "100px")
        $("header").css("background-color", "transparent")
    }
    // 

    var height = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    var progressElements = document.querySelectorAll(".progressMassaive .progress .progress-bar");
    for (let i = 0; i < progressElements.length; i++) {
        var ele = progressElements[i];
        var width = ele.getAttribute("data-width") + "%";
        var elePos = ele.getBoundingClientRect();
        height += elePos.top;
        ele.style.width = width;
        if (height > offset(ele)) {
            ele.style.width = width;
            // console.log(offset(ele), height)
        }
        console.log(window.innerHeight, height)

    }
}

var height = 0;
var arrayProgress = [];
// $(".progressMassaive .progress .progress-bar").each(function (index) {
//     arrayProgress[index] = $(this).offset().top;
//     var width = $(this).attr("data-width") + "%";
//     $(this).css("width", width);
//     console.log($(this).getBoundingClientRect())
// $(this).getBoundingClientRect()
// })
// 
// var progressElements = document.querySelectorAll(".progressMassaive .progress .progress-bar");
// for (let i = 0; i < progressElements.length; i++) {
//     var ele = progressElements[i];
//     var width = ele.getAttribute("data-width") + "%";
//     var elePos = ele.getBoundingClientRect();
//     ele.style.width = width;
//     console.log(elePos);
// }


function offset(el) {
    var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: window.innerHeight + scrollTop, left: window.innerWidth + scrollLeft }
}
