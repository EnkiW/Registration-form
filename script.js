function displayTable() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let birthdate = document.getElementById("birthdate").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let city = document.getElementById("city").value;
    let address = document.getElementById("address").value;
    let languages = document.querySelectorAll('input[name="languages"]:checked');
    let selectedLanguages = [];
        for (let i = 0; i < languages.length; i++) {
        selectedLanguages.push(languages[i].value);
    }
    let tableHTML = "<table border='1'>";
    tableHTML += "<tr>" +
        "<th>Ім'я</th>" +
        "<th>Прізвище</th>" +
        "<th>Дата народження</th>" +
        "<th>Стать</th>" +
        "<th>Місто</th>" +
        "<th>Адреса</th>" +
        "<th>Мови</th>" +
        "</tr>";

    tableHTML += "<tr>" +
        "<td>" + firstName + "</td>" +
        "<td>" + lastName + "</td>" +
        "<td>" + birthdate + "</td>" +
        "<td>" + gender + "</td>" +
        "<td>" + city + "</td>" +
        "<td>" + address + "</td>" +
        "<td>" + selectedLanguages.join(', ') + "</td>" +
        "</tr>";

    tableHTML += "</table>";
    document.getElementById("tableContainer").innerHTML = tableHTML;
}