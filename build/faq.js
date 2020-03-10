var li = document.querySelectorAll("li > p");
var img = document.querySelectorAll("span > img");
var i;
function openList(x) {

    for (i = 0; i < li.length; i++) {
        li[i].classList = "closelist";
        img[i].src = "icon/arrow1.svg";
    }
    li[x].classList = "openlist";
    img[x].src = "icon/arrow2.svg";
}
