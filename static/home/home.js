function option_button(text, redirect_url, index) {
    const button = document.createElement("div")
    button.innerText = text

    button.style.width = "auto"
    button.style.height = "auto"

    button.style.paddingTop = "20px"
    button.style.paddingBottom = "20px"

    button.style.paddingLeft = "50px"
    button.style.paddingRight = "50px"

    button.style.fontSize = "30px"

    button.style.position = "absolute"
    button.style.left = "50%"
    button.style.top = (100 * index) + 25 + "px"
    button.style.transform = "translate(-50%)"
    button.style.border = "5px black solid"
    button.style.borderRadius = "5px"

    button.style.backgroundColor = "#889bc9"

    button.onmouseover = () => {
        button.style.cursor = "pointer"
        button.animate([
                {backgroundColor: "#4161b0"}
            ], {
                duration: 250
            }
        ).onfinish = () => {
            button.style.backgroundColor = "#4161b0"
        }
    }
    button.onmouseleave = () => {
        button.style.cursor = "auto"
        button.animate([
                {backgroundColor: "#889bc9"}
            ], {
                duration: 250
            }
        ).onfinish = () => {
            button.style.backgroundColor = "#889bc9"
        }
    }

    button.onclick = () => {
        document.location = redirect_url
    }

    return button
}
window.onload = () => {
    document.body.appendChild(option_button("Queues", "../queues/queues.html", 0))
    document.body.appendChild(option_button("Lists", "../lists/lists.html", 1))
    document.body.appendChild(option_button("Stacks", "../stacks/stacks.html", 2))
    document.body.appendChild(option_button("Hash-tables and Dictionaries", "../htad/htad.html", 3))
    document.body.appendChild(option_button("Graphs", "../graphs/graphs.html", 4))
    document.body.appendChild(option_button("Trees", "../trees/trees.html", 5))
    document.body.appendChild(option_button("Vectors", "../vectors/vectors.html", 6))
}