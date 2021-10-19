let form = document.getElementById("form");
let tbody = document.getElementById("tbody");

form.addEventListener("submit" , (e)=>{
    e.preventDefault();
    
    let nameValue = document.getElementById("name").value;
    let familyValue = document.getElementById("family").value;
    let emailValue = document.getElementById("email").value;
    let phoneValue = document.getElementById("phone").value;

    const nameFamilyPattern = /[پچجحخهعغفقثصضشسیبلاتنمکگوئدذرزطظژؤإأءًٌٍَُِّ\s]+$/;
    const emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phonePattern = /^(\+98|0)?9\d{9}$/;

    if (nameValue.match(nameFamilyPattern) && familyValue.match(nameFamilyPattern)  && emailValue.match(emailPattern) && phoneValue.match(phonePattern))
    {
        let newUser = `
        <tr>
            <th scope="col" class="text-center"><i class="fa fa-close" onclick="remove(event)"></i></th>
            <th scope="col" class="text-center"><i class="fa fa-edit" onclick="edit(event)"></i></th>
            <th scope="col" class="text-center name">${nameValue}</th>
            <th scope="col" class="text-center family">${familyValue}</th>
            <th scope="col" class="text-center email">${emailValue}</th>
            <th scope="col" class="text-center phone">${phoneValue}</th>
        </tr>
        `

        tbody.insertAdjacentHTML("beforeend" , newUser);
    
        Swal.fire(
            'تبریک!',
            'حساب کابری شما ایجاد شد.',
            'success'
          )
    }
    else{
        Swal.fire(
            'خطا!',
            'اطلاعات وارد شده معتبر نیستند.',
            'error'
          )
    }
});

function remove (event) {
    let tabelRow = event.target.parentElement.parentElement;

    tabelRow.remove();
};

function edit (event) {
    let tabelRow = event.target.parentElement.parentElement;

    let newName = prompt("Edit your name:" , tabelRow.querySelector(".name").innerHTML);
    let newFamily = prompt("Edit your family:" , tabelRow.querySelector(".family").innerHTML);
    let newEmail = prompt("Edit your email:" , tabelRow.querySelector(".email").innerHTML);
    let newPhone = prompt("Edit your phone:" , tabelRow.querySelector(".phone").innerHTML);

    tabelRow.querySelector(".name").innerHTML = newName;
    tabelRow.querySelector(".family").innerHTML = newFamily;
    tabelRow.querySelector(".email").innerHTML = newEmail;
    tabelRow.querySelector(".phone").innerHTML = newPhone;

};