const addBtn = document.querySelector("#button");
const inputText = document.querySelector("#input");
const ul = document.querySelector(".list-ul")
const ul2 = document.querySelector(".list-ul2")


const addListElement = () => {
    const val = inputText.value

    if (val.trim() !== "") {


        const listEl = document.createElement("li")
            // listEl.innerText = input.value
        const newInputText = document.createElement("span")

        newInputText.setAttribute("class", "list-element")
        newInputText.textContent = val



        const checkBtn = document.createElement("i")
        checkBtn.setAttribute("class", "check-btn btn btn-outline-primary fas fa-check-square ")
        const delBtn = document.createElement("i")
        delBtn.setAttribute("class", "delete-btn btn btn-outline-danger fas fa-trash-alt ")
        delBtn.setAttribute("style", "font-size:18px")


        listEl.appendChild(newInputText)
        listEl.appendChild(checkBtn)
        listEl.appendChild(delBtn)

        ul.appendChild(listEl)

        console.log(listEl);

        const deleteBtn = document.querySelectorAll(".delete-btn")
        Array.from(deleteBtn).forEach(function(delBtn) {
            delBtn.addEventListener("click", function(e) {
                // console.log(e)
                const li = e.target.parentElement
                    // console.log(li);
                li.remove()
            })
        })

        const checkedBtn = document.querySelectorAll(".check-btn")
        Array.from(checkedBtn).forEach(function(chkBtn) {
            chkBtn.addEventListener("click", function(e) {

                ul2.appendChild(listEl) +=
                    // inputText.value = ""

                    console.log(ul2);

                const li = e.target.parentElement
                console.log(li);

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