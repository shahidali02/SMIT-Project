let primarycolor = "#d90429";
let secondarycolor = "#008000";

function notification(msg ,clr){
    Toastify({
        text: msg,
        duration: 2000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            background: clr,
        },
        onclick: function(){}
    }).showToast();
}


let cities = ["Faisalabad", "Lahore", "Karachi", "Islamabad", "Burewala", "Sheikhupura", "Kashmir"]

function printAllCities() {


    document.getElementById("output").innerHTML = ""

    for (i = 0; i < cities.length; i++) {
        num = i + 1;
        document.getElementById("output").innerHTML += num + ")" + " " + cities[i] + "<br>"
    }
}


function addCity() {

    let city = document.getElementById("input").value;

    if (city.length < 3) {
        alert("Please type city name")
        return;
    }

    let cityFirstLetter = city.slice(0, 1).toUpperCase();
    let cityAllLetters = city.slice(1).toLowerCase();

    let cityFullName = cityFirstLetter + cityAllLetters;
    console.log(cityFullName)

    let cityFound = false;


    for (i = 0; i < cities.length; i++) {
        if (cities[i] === cityFullName) {

            cityFound = true;
            messege = '<span style="color:red;">"' + cityFullName + '" <span style="color:green;" class="pt-5">Is Already added in list</span>' + '</span>'
            document.getElementById('output').innerHTML = messege;
        }
    }

    if (cityFound === false) {

        cities.push(city);
        document.getElementById("output").innerHTML = "<p class='pt-5' style='color:green;font-size:20px;'>" + "'" + cityFullName + "'" + " " + "Is Successfull Added In List" + "</p>"
        console.log(cities)
    }
}
