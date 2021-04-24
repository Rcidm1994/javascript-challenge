// from data.js
var tableData = data;
// YOUR CODE HERE!
let filter = d3.select('#filter-btn');
let form = d3.select('#form');
filter.on('click', runEnter);
form.on('submit', runEnter);
function runEnter() {
    d3.event.preventDefault();
    let dateElement = d3.select('#datetime');
    let dateValue = dateElement.node().value;
    console.log(dateValue);
    let cityElement = d3.select('#city');
    let cityValue = cityElement.node().value;
    console.log(cityValue);
    let stateElement = d3.select('#state');
    let stateValue = stateElement.node().value;
    console.log(stateValue);
    let countryElement = d3.select('#country');
    let countryValue = countryElement.node().value;
    console.log(countryValue);
    let shapeElement = d3.select('#shape');
    let shapeValue = shapeElement.node().value;
    console.log(shapeValue);
    let filteredData = tableData.filter((data) => {
        return (data.datetime === dateValue && data.city === cityValue && data.state === stateValue
            && data.country === countryValue && data.shape === shapeValue);
    })
    console.log(filteredData);
    let tbody = d3.select('tbody');
    filteredData.forEach((alienData) => {
        let row = tbody.append('tr');
        Object.entries(alienData).forEach(([key,value]) => {
            let cell = row.append('td');
            cell.text(value);
        })
    });
}