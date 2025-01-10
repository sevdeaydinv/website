let data = [
    {id: 1, name: "Sevde", email: "sevde@gmail.com"},
    {id: 2, name: "Admin", email: "admin@gmail.com"}
];

function readAll() {
    var tbdata = document.querySelector(".table_data");
    var elements = "";
    data.map(d => {
        elements += `<tr>
            <td>${d.name}</td>
            <td>${d.email}</td>
            <td>
                <button onclick="edit(${d.id})">Update</button>
                <button onclick="deleteItem(${d.id})">Delete</button>
            </td>
        </tr>`
    });
    tbdata.innerHTML = elements;
}

function createForm() {
    // Kullanıcı "Add +" butonuna tıkladığında formu göster
    document.querySelector(".create_form").style.display = "block";
    document.querySelector(".addbtn").style.display = "none";
}

function add() {
    var name = document.querySelector(".name").value;
    var email = document.querySelector(".email").value;

    // Verilerin doğruluğunu kontrol et
    if (!name || !email) {
        alert("Name and email are required!");
        return;
    }

    var newId = data.length ? data[data.length - 1].id + 1 : 1;
    var newObj = {id: newId, name: name, email: email};
    data.push(newObj);
    document.querySelector(".create_form").style.display = "none";
    document.querySelector(".addbtn").style.display = "block";
    readAll();
}

function edit(id) {
    document.querySelector(".update_form").style.display = "block";
    document.querySelector(".addbtn").style.display = "none";
    var updateObj = data.find(f => f.id === id);
    document.querySelector(".update_id").value = updateObj.id;
    document.querySelector(".uname").value = updateObj.name;
    document.querySelector(".uemail").value = updateObj.email;
}

function update() {
    var id = parseInt(document.querySelector(".update_id").value);
    var name = document.querySelector(".uname").value;
    var email = document.querySelector(".uemail").value;

    // Verilerin doğruluğunu kontrol et
    if (!name || !email) {
        alert("Name and email are required!");
        return;
    }

    var updateObj = {id: id, name: name, email: email};
    var index = data.findIndex(f => f.id === id);
    data[index] = updateObj;
    document.querySelector(".update_form").style.display = "none";
    document.querySelector(".addbtn").style.display = "block";
    readAll();
}

function deleteItem(id) {
    var newData = data.filter(f => f.id !== id);
    data = newData;
    readAll();
}

window.onload = function() {
    readAll();
};