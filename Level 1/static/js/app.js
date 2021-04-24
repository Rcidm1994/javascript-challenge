// from data.js
var tableData = data;
// YOUR CODE HERE!
let filter = d3.select('#filter-btn');
let form = d3.select('#form');
filter.on('click', runEnter);
form.on('submit',runEnter);
function runEnter() {
    d3.event.preventDefault();
    let inputElement = d3.select('#datetime');
    let inputValue = inputElement.node().value;
    console.log(inputValue);
    console.log(tableData);
    let filteredData = tableData.filter(day => day.datetime === inputValue);
    console.log(filteredData);
    let tbody = d3.select('tbody');
    filteredData.forEach((alienData) => {
        let row = tbody.append('tr');
        Object.entries(alienData).forEach(([key,value]) => {
            let cell = row.append('td');
            cell.text(value);
        })
    })
}