function makeGrid() {
	console.log("everything is okay!")
	
	// Select size input
	
	var design, col, shapeHeight, shapeWidth, rows;
	
	design = $('#pixel_design');
	shapeHeight = $('#input_height').val();
	shapeWidth = $('#input_width').val();
	
	design.children().remove()
	
	for (x = 0; x < shapeHeight; x++) {
	design.append('<tr></tr>');
	}
	
	rows = $('tr');
	
	for (y = 0; y < shapeWidth; y++) {
	rows.append('<td></td>');
	} 
	
	col = design.find('td');
	
	// When td is clicked by the user, change color of td
	col.click(function() {
		// Select color input
		console.log("changeColor is running!");
		var color;
		color = $("#colorPicker").val();
		$(this).attr('bgcolor', color);
	});
	
}

// When size is submitted by the user, call makeGrid()
var submitQuery;

submitQuery = $('input[type="submit"]')

submitQuery.click(function(event) {
  event.preventDefault();
  makeGrid();
});

