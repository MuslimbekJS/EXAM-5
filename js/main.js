const studentList = document.getElementById('student-list');
const darkModeToggle = document.getElementById('dark-mode-toggle');
const search = document.getElementById('search');

// Tugmani bosganda dark mode ni toggle qilish
darkModeToggle.addEventListener('click', function () {
    // Body elementini olish
    const body = document.body;

    // Dark mode ni toggle qilish
    body.classList.toggle('dark-mode');
});
function displayCountries(countries) {
    // let str = '';
    if (Array.isArray(countries)) {
        let str = '';
        countries.forEach(country => {
            str += `
            <div class='card' >
            <a>
            <img src='${country.flags.svg}' alt="flag"> 
            <h2>${country.name.common}</h2>
            <p>Population: ${country.population}</p>
            <p>Region: ${country.region}</p>
            <p>Capital: ${country.capital}</p>
            </a>
            </div>

            `
        });
        studentList.innerHTML = str;
        

    }

}

// const search = document.getElementById('search');

let url = fetch("https://countries-restapi.vercel.app/all?page=1&limit=8");
search.addEventListener('input', function (e) {
    let text = e.target.value.toLowerCase();
    let students = JSON.parse(localStorage.getItem('students'));
    let newStudents = students.filter(
        (student) =>
            student.firstName.toLowerCase().includes(text) ||
            student.lastName.toLowerCase().includes(text) ||
            student.group.toLowerCase().includes(text)
    );
    displayStudents(newStudents);
});

// async function details(productId) {
//     try {
//         const res = await fetch("https://countries-restapi.vercel.app/all?page=1&limit=8");
//         const data = await res.json();
//         console.log(data.data);
//         const product = data.data.find((pr) => pr.id === productId);
//         localStorage.setItem('country', JSON.stringify(product));

//     } catch {
//         console.error("Error!", error);
//     }
// }

// API dan ma'lumotlarni olish va localStorage ga saqlash


// function details(name) {
//     if (name[0] == data[0]) {
//         let mydata = JSON.stringify(data.data);
//         let str = JSON.parse(mydata)
//         localStorage.setItem("country", JSON.stringify(str));
//         console.log(localStorage.getItem("country"));
//     }

// }

async function getCountries() {
    try {
        // const res = await fetch("")
        const res = await fetch('https://countries-restapi.vercel.app/all?page=1&limit=8');
        const data = await res.json();
        // let nameObject = data[0].name;
        // console.log(nameObject);
        displayCountries(data.data);
        console.log(data);

        // let mydata = JSON.stringify(data.data);
        // let str = JSON.parse(mydata)
        // localStorage.setItem("country", JSON.stringify(str))


    } catch (error) {
        console.log("Error: ", error);
    };





}
// JSON.stringify(displayCountries(data));
getCountries();




// Mamlakat ma'lumotlaridan card yaratish va sahifaga qo'shish
// function createCountryCard(country, index) {
//     const card = document.createElement('div');
//     card.classList.add('card');
//     card.innerHTML = `
//                 <img src="${country.flags.svg}" alt="salom" width=100 height= 200>
//                 <h2>${country.name.common}</h2>
//                 <p>Population: ${country.population}</p>
//                 <button class="saveBtn" data-country-index="${country}">Save</button>
//             `;

//     // "Save" tugmasini bosganda localStorage ga saqlash
//     const saveBtn = card.querySelector('.saveBtn');
//     saveBtn.addEventListener('click', function () {
//         const countryIndex = saveBtn.getAttribute('data-country-index');
//         const selectedCountry = country[countryIndex];
//         console.log(selectedCountry);
//         // localStorage.setItem(`country_${index + 1}`, JSON.stringify(selectedCountry))
//         localStorage.setItem('selectedCountry', JSON.stringify(selectedCountry));
//         alert('Country saved to localStorage.');
//     });

//     return card;
// }

// // Sahifani yuklash va cardlarni yaratish
// fetchCountriesAndCreateCards();
