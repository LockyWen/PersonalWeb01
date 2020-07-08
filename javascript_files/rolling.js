window.onload = function () {
    let rollingButton = document.getElementById("rollingButton");

    rollingButton.onclick = function () {
        if(confirm("一旦轮盘开启，你将由半个小时被占用。确认开启吗？")){
            alert("Ganbade")
        }
    }
}