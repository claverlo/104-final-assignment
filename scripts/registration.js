let pet1 = {
  name: "Ferrari",
  age: 3,
  breed: "Turtle",
  gender: "Female",
  service: "Shell cleaning"
};

let pet2 = {
  name: "Lambo",
  age: 5,
  breed: "Turtle",
  gender: "Male",
  service: "Vaccination"
};

let pet3 = {
  name: "Bugatti",
  age: 2,
  breed: "Turtle",
  gender: "Male",
  service: "Health check"
};


let petsList = [pet1, pet2, pet3];


function Pet(name, age, breed, gender, service) {
  this.name = name;
  this.age = age;
  this.breed = breed;
  this.gender = gender;
  this.service = service;
}


const petForm = document.querySelector("form");
const petTable = document.getElementById("registrationTable");


function displayPets() {
  petTable.innerHTML = "";

  for (let i = 0; i < petsList.length; i++) {
    addRow(petsList[i]);
  }
}

function addRow(pet) {
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${pet.name}</td>
    <td>${pet.age}</td>
    <td>${pet.gender}</td>
    <td>${pet.service}</td>
    <td>${pet.breed}</td>
    <td>
      <button class="delete-btn">DELETE</button>

    </td>
  `;


  row.querySelector("button").addEventListener("click", function () {
    row.remove();
  });

  petTable.appendChild(row);
}

function registerPet(event) {
  event.preventDefault(); 

  const name = petForm.elements["petName"].value;
  const age = petForm.elements["petAge"].value;
  const breed = petForm.elements["petBreed"].value;
  const gender = petForm.elements["petGender"].value;
  const service = petForm.elements["petService"].value;

  let newPet = new Pet(name, age, breed, gender, service);

  petsList.push(newPet);
  addRow(newPet);

  petForm.reset();
}


displayPets();
