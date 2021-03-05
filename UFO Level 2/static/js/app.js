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
var UFO_city = d3.select("#city");
var UFO_state = d3.select("#state");
var UFO_country = d3.select("#country");
var UFO_shape = d3.select("#shape");
UFO_filter.on("click", () => {
    var date_input = UFO_date.property("value").trim();
    var city_input = UFO_city.property("value").toLowerCase().trim();
    var state_input = UFO_state.property("value").toLowerCase().trim();
    var country_input = UFO_country.property("value").toLowerCase().trim();
    var shape_input = UFO_shape.property("value").toLowerCase().trim();
    var filter_date = tableData.filter(tableData => tableData.datetime === date_input);
    var filter_city = tableData.filter(tableData => tableData.city === city_input);
    var filter_state = tableData.filter(tableData => tableData.state === state_input);
    var filter_country = tableData.filter(tableData => tableData.country === country_input);
    var filter_shape = tableData.filter(tableData => tableData.shape === shape_input);
    var Filter_All = tableData.filter(tableData => tableData.datetime === inputDate && tableData.city === city_input
                                        && tableData.state == state_input && tableData.country == country_input 
                                        && tableData.shape == shape_input);
    tbody.html("");

    let response = {
        filter_date, filter_city, filter_state, filter_country, filter_shape, Filter_All
    }

    if(response.Filter_All.length !==0){
        Table_construct(Filter_All);
    }
        else if(response.Filter_All.length === 0 && ((response.filter_date.length !== 0 || response.filter_city.length !== 0))) {
            addData(filter_date) || addData(filter_city);
        }

    
    })     
// })

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