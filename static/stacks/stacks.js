function add_back_button() {
    const button = document.createElement("div")
    button.style.position = "absolute"
    button.style.margin = "40px"
    button.style.padding = "10px"
    button.style.border = "2px black solid"
    button.style.borderRadius = "5px"
    button.style.backgroundColor = "#9f4d4d"
    button.innerText = "Back"

    button.onmouseover = () => {
        button.style.cursor = "pointer"
        button.animate([
                {backgroundColor: "#963030"}
            ], {
                duration: 250
            }
        ).onfinish = () => {
            button.style.backgroundColor = "#963030"
        }
    }
    button.onmouseleave = () => {
        button.style.cursor = "auto"
        button.animate([
                {backgroundColor: "#9f4d4d"}
            ], {
                duration: 250
            }
        ).onfinish = () => {
            button.style.backgroundColor = "#9f4d4d"
        }
    }

    button.onclick = () => {
        document.location = "../main.html"
    }
    document.body.appendChild(button)
}

window.onload = () => {
    //add_back_button()
    function get_color() {
        return Math.random() * (200 - 55) + 55
    }
    document.body.style.backgroundColor = `rgb(${get_color()}, ${get_color()}, ${get_color()})`
}