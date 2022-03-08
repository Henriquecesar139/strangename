function generate() {
    text1 = document.getElementById("white").value
    text2 = document.getElementById("red").value
    document.getElementById('top').innerText = text1
    document.getElementById('bottom').innerText = text2
    photo()
}

function photo() {
    html2canvas(document.querySelector("#text")).then(canvas => {
    document.body.appendChild(canvas)

    document.getElementById('text').style.display = "none"

    });
}