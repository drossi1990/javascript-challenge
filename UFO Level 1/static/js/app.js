// from data.js
const tableData = data;
const tbody = d3.select("tbody");

// YOUR CODE HERE!

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