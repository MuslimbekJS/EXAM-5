const studentList = document.getElementById('student-list');
const darkModeToggle = document.getElementById('dark-mode-toggle');
const search = document.getElementById('search');


darkModeToggle.addEventListener('click', function () {
    const body = document.body;
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

async function getCountries() {
    try {
        const res = await fetch('https://countries-restapi.vercel.app/all?page=1&limit=8');
        const data = await res.json();
        displayCountries(data.data);
        console.log(data);

        


    } catch (error) {
        console.log("Error: ", error);
    };





}
getCountries();



