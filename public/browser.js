console.log("FronEnd JS ishka tushdi");

function itemTemplate(item) {
    return `<li
      class="list-group-item list-group-item d-flex align-items-center justify-content-between">
      <span class="item-text">${item.reja}</span>
      <div>
        <button
         data-id="${item.reja}"
         class="edit-me btn btn-secondary btn-sm mr-1">
            Ozgartirish
        </button>
        <button 
        data-id="${item.reja}" 
        class="delete-me btn btn-danger btn-sm">
        Ochirish
      </button>
  </div>
    </li>`;
}

let createField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", function (e) {
    e.preventDefault();

    axios  // "Modern Post"
    .post("/create-item", { reja: createField.value })
    .then(response => {
        document.getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
      createField.value = "";
      createField.focus();
    })
    .catch(err => {
        console.log("Iltimos qaytatdan harakat qiling!");
    });
}); 

document.addEventListener("click", function(e) {
  // "DELETE operation"
  console.log(e.target);
  if (e.target.classList.contains("delete-me")) {
    if(confirm("Anniq ochirmoqchimisiz?")) {
      
      // alert("Yes deb javob berildi");
    // } else {
    //   alert("No deb javob berildi");                         "Promise" mi THEN va CATCH degan METHOD lari bor
    
    axios.post("/delete-item", {id:e.target.getAttribute("data-id")})
    .then((response) => {
      console.log(response.data);
      e.target.parentElement.parentElement.remove();
    })
    .catch((err) => {
      console.log("Iltimos qaytatdan harakat qiling!");
    });
    }
  }
  // "EDIT operation"
  if (e.target.classList.contains("edit-me")) {
    alert("siz edit tugmasini bosdingiz");
  }
});