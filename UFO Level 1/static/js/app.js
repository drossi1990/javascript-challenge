// from data.js
const tableData = data;

// YOUR CODE HERE!
// establishing references to tbody, input fields, filter button, and data.js columns
var tbody = d3.select("tbody");
var date_input = d3.select("#datetime")
var city_input = d3.select("#city")
var filter_btn = d3.select("#filter-btn")
var columns = ["datetime", "city","state","country","shape","durationMinutes","comments"]



function createTable()  {
    let table = document.createElement("table");

    table.insertAdjacentHTML('beforeend', '<tr class='firstRow', "<tr class='firstRow'><th>Title</th><th>Author</th><th>Read?</th></tr>'); 

    for (var sightings = 0; sightings < tableData.length; sightings++)  //loops through the array 
   
    {
        //add info from the array into this
        table.insertAdjacentHTML("beforeend","<tr><td>" + tableData[i].datetime + "</td><td>");
    }

    document.body.append(table);
}

function createTable()