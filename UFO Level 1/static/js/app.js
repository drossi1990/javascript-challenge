// Starter Code
var tableData = data;

// establishing references to index
var tbody = d3.select("tbody");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

// loop to move data.js table into index.html
var Table_construct = (dataInput) => {
    dataInput.forEach(UFOreport => {
        var row = tbody.append("tr");
        columns.forEach(column => row.append("td").text(UFOreport[column]))
    });
}

Table_construct(tableData);

//event listener for date filter button functionality 
var UFO_filter = d3.select("#filter-btn");
var UFO_date = d3.select("#datetime");
UFO_filter.on("click", () => {
    var date_input = UFO_date.property("value").trim();
    var filter_selection = tableData.filter(tableData => tableData.datetime === date_input);

    tbody.html("");

    let response = {
        filter_selection
    }

    if(response.filter_selection.length !==0){
        Table_construct(filter_selection);
    }     
})

//// code to execute a search when enter key is pressed in the search field
// var UFO_input = index.getElementById('input-id');
// UFO_input.addEventListener("keyup", function onEvent(event) {
//     if (event.keyCode === 13) {
//         var date_input = UFO_date.property("value").trim();
//         var filter_selection = tableData.filter(tableData => tableData.datetime === date_input);
    
//         tbody.html("");
    
//         let response = {
//             filter_selection
//         }
    
//         if(response.filter_selection.length !==0){
//             Table_construct(filter_selection);
//         }
//     }
// })