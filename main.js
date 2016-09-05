window.onload=function(){
    var b = document.querySelector('#button');
    b.onclick = function(){
        var d = document.createElement('div');
        d.innerHTML= '<svg xmlns="http://www.w3.org/2000/svg" onclick="alert(document.domain)"></svg>';
        document.body.appendChild(d);
    }
}