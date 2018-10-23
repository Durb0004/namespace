var DURB0004 = {

    init: function () {
        let myDiv = document.createElement("div");
        myDiv.className = "box", myDiv.textContent = "Durb0004";
        document.getElementById("boxes").appendChild(myDiv),
            myDiv.addEventListener("click", function () {
                myDiv.style.backgroundColor = "rebeccapurple",
                myDiv.style.borderColor = "purple"
            }),
            myDiv.addEventListener("mouseover", function () {
                myDiv.classList.toggle("highlight")
            }),
            myDiv.addEventListener("mouseout", function () {
                myDiv.classList.toggle("highlight"),
                myDiv.removeAttribute("style")
            })

    }
};


