//Exercício 1 ----------

//Exercício 2 ----------
function adicionaItem(event) {
    const item1 = document.createElement("article")
    item1.setAttribute("class","item")
    item1.setAttribute("onclick", "removeItem(event)")

    const containerPrincipal = document.querySelector("#container")
    containerPrincipal.insertAdjacentElement("beforeend", item1)   
}

//Exercício 3 ----------
function removeItem(event) {
    event.target.classList.remove("item")
}


// //
// const adicionaItem = () => {
//   const newItem = document.createElement("article");

//   const currentContainer = document.getElementById("container");
//   currentContainer.insertAdjacentElement("beforeend", newItem);

//   newItem.classList.add("item");
//   newItem.setAttribute("onclick", "removeItem(event)");
// };

// const removeItem = (event) => {
//   const item = event.target;
//   item.remove();