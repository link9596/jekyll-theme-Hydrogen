//@@@代码块复制
var codeblocks = document.getElementsByTagName("pre");
//循环每个pre代码块，并添加 复制代码

for (var i = 0; i < codeblocks.length; i++) {
//显示 复制代码 按钮
currentCode = codeblocks[i];
currentCode.style = "position: relative;";
var copy = document.createElement("div");
copy.className = "ripple";
copy.style = "width:46px;float:left;position: sticky;left: 0px;\
top: 4px;background-color: white;padding:2px 8px 1px 8px;\
margin-top: 5px;border-radius: 4px;cursor: pointer;\
z-index: 1;\
box-shadow: 0 2px 4px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.05);-webkit-transition: all .4s, -webkit-transform .4s ease;transition: all .4s, transform .4s ease;";
copy.innerHTML = "复制";
currentCode.appendChild(copy);
//让所有 "复制"按钮 全部隐藏
copy.style.opacity = "0";
}

for (var i = 0; i < codeblocks.length; i++) {

!function (i) {
    //鼠标移到代码块，就显示按钮
    codeblocks[i].onmouseover = function () {
        codeblocks[i].childNodes[1].style.opacity='1'
    }

    //执行 复制代码 功能
    function copyArticle(event) {
        const range = document.createRange();

        //范围是 code，不包括刚才创建的div
        range.selectNode(codeblocks[i].childNodes[0]);

        const selection = window.getSelection();
        if (selection.rangeCount > 0) selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand('copy');
        codeblocks[i].childNodes[1].style.color = "transparent";
        setTimeout(function () { codeblocks[i].childNodes[1].style.color = ""; }, 300);
        codeblocks[i].childNodes[1].style.width = "72px";
        setTimeout(function () { codeblocks[i].childNodes[1].innerHTML = "复制成功"; }, 300);
        setTimeout(function () {
            codeblocks[i].childNodes[1].style.color = "transparent";
            setTimeout(function () { codeblocks[i].childNodes[1].style.color = ""; }, 300);
            codeblocks[i].childNodes[1].innerHTML = "复制";
            codeblocks[i].childNodes[1].style.width = "46px";
        }, 1000);
        //清除选择区
        if (selection.rangeCount > 0) selection.removeAllRanges(); 0
    }
    codeblocks[i].childNodes[1].addEventListener('click', copyArticle, false);

}(i);

!function (i) {
    //鼠标从代码块移开 则不显示复制代码按钮
    codeblocks[i].onmouseout = function () {
        codeblocks[i].childNodes[1].style.opacity='0'
    }
}(i);
}

//@@@清除菜单栏遮罩
window.onload=function(){
document.getElementById('fold').style.height='0px';//初始化
}
function clean(){  document.getElementById('fold').style.height='0px';
}

function checkit(isChecked){
 if(isChecked)
document.getElementById('fold').style.height='auto';
 else
  window.setTimeout(clean, 500);
}
