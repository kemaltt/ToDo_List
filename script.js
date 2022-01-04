const addBtn = document.querySelector("#button");
const input = document.querySelector("#input");
const ul = document.querySelector("ul")

const addListElement = () => {
    const val = input.value

    if (val.trim() !== "") {
        const listEl = document.createElement("li")
            // listEl.innerText = input.value
        const content = document.createElement("span")

        content.setAttribute("class", "list-element")
        content.textContent = val


        const delBtn = document.createElement("span")
        delBtn.setAttribute("class", "delete-btn")
        delBtn.innerText = "\u00D7"

        listEl.appendChild(content)
        listEl.appendChild(delBtn)
        ul.appendChild(listEl)

        const deleteBtn = document.querySelectorAll(".delete-btn")
        Array.from(deleteBtn).forEach(function(btn) {
            btn.addEventListener("click", function(e) {
                console.log(e)
                const li = e.target.parentElement
                li.remove()
            })
        })

    } else {

        alert("Please enter a value")
    }

    input.value = ""
}

addBtn.addEventListener("click", addListElement)
input.addEventListener("keyup", function(e) {
    if (e.keyCode === 13) {
        addListElement()
        input.value = ""
    }
})