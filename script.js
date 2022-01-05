const addBtn = document.querySelector("#button");
const inputText = document.querySelector("#input");
const ul = document.querySelector("ul")

const addListElement = () => {
    const val = inputText.value

    if (val.trim() !== "") {

        // const newList = document.createElement("li")
        // const newInputText = document.createElement("span")
        // const checkBtn = document.createElement("i")
        // const delBtn = document.createElement("i")
        // const favBtn = document.createElement("i")


        // checkBtn.setAttribute("class", "far fa-check-circle")
        // newInputText.setAttribute("class", "span")
        // delBtn.setAttribute("class", "fas fa-trash")
        // delBtn.setAttribute("style", "float:right")
        // favBtn.setAttribute("class", "far fa-star")
        // favBtn.setAttribute("style", "float:right")

        // newList.appendChild(newInputText)
        // newList.appendChild(checkBtn)
        // newList.appendChild(delBtn)
        // newList.appendChild(favBtn)
        // ul.appendChild(newList)

        // newInputText.innerText = val

        // console.log(ul);

        const listEl = document.createElement("li")
            // listEl.innerText = input.value
        const newInputText = document.createElement("span")

        newInputText.setAttribute("class", "list-element")
        newInputText.textContent = val


        const delBtn = document.createElement("span")
        delBtn.setAttribute("class", "delete-btn fa fa-trash-o ")
        delBtn.setAttribute("style", "font-size:26px")
            // delBtn.innerHTML = '&#xf014;'


        // console.log(delBtn);

        listEl.appendChild(newInputText)
        listEl.appendChild(delBtn)
        ul.appendChild(listEl)

        const deleteBtn = document.querySelectorAll(".delete-btn")
        Array.from(deleteBtn).forEach(function(btn) {
            btn.addEventListener("click", function(e) {
                // console.log(e)
                const li = e.target.parentElement
                console.log(li);
                li.remove()
            })
        })

    } else {

        alert("Please enter a value")
    }

    inputText.value = ""
}

addBtn.addEventListener("click", addListElement)
input.addEventListener("keyup", function(e) {
    if (e.keyCode === 13) {
        addListElement()
        inputText.value = ""
    }
})
const list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);