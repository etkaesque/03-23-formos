// Sukurti kontaktų formą. Ją pridavus (submit):
// 1. Kontaktų forma turi išsivalyti.
// 2. Žemiau kontaktų formos turi būtų atvaizduoti visi duomenys, pvz. „Amžius: 25m.".

//  

// 3. Kontaktų formoje turi būti šie laukeliai:
//     1. Tekstinis laukelis vardui (privalomas).
//     2. Tekstinis laukelis pavardei (privalomas).
//     3. Skaičiaus laukelis amžiui (privalomas).
//     4. Laukelis įvesti telefono numerį (neprivalomas).
//     5. Laukelis įvesti  . paštą (privalomas).
//     6. Range tipo laukelis, kuris skirtas įvertinti savo IT žinias nuo 1 iki 10. Galimas vertinimas tik sveikiems skaičiams.
//     7. Radio tipo laukeliai, kuriuose pasirenkamas grupės numeris. Turi būti galimybė pasirinkti grupes nuo FEUA 1gr. iki FEUA 10gr.
//     8. Checkbox tipo input, kuriuose pateikta galimybę rinktis iš dominančių programavimo kalbų.

// 4. Šalia kiekvieno įvesties (input) elemento, pridėti label elementą, kuris žymi laukelio pavadinimą.


// 1. Sukurti div elementą, kuris turės id „students-list".


function init() {

    let studentList = document.createElement("div")
    studentList.setAttribute("id", "students-list")
    document.body.append(studentList)

    let studentForm = document.querySelector('#student-form')
    studentForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const form = event.target
        console.log(event)
        console.log(form)

        let personName = form.name.value
        let personSurname = form.surname.value
        let personAge = form.age.value
        let personEmail = form.email.value
        let personKnowledge = form["it-knowledge"].value
        let personGroup = form.group.value


        let programmingLanguagesCheckboxes = form.querySelectorAll('input[name="programinglanguage"]:checked');
        let selectedLanguages = [];

        programmingLanguagesCheckboxes.forEach((checkbox) => {
            selectedLanguages.push(checkbox.value);
        });

        console.log(selectedLanguages);

        let studentItem = document.createElement("div")
        studentItem.setAttribute("class", "student-item")
        studentList.prepend(studentItem)


        studentItem.textContent = `Person name: ${personName}, surname ${personSurname}, age: ${personAge}, Email ${personEmail},
        Knowledge ${personKnowledge}, group: ${personGroup} programing interests: ${selectedLanguages.join(", ")}. `


    })




}
init()
// 2. Kiekvieną kartą pridavus formą (submit), turi būti sukurtas naujas div elementas su klase „student-item" ir pridedamas į „students-list" elemento pradžią.
// 3. Duomenys apie studentą turi būti įdėti į „student-item" elementą.