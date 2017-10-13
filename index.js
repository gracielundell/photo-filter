// function revertFilter() {
// 	Caman('#my-image', function () {
// 	    this.revert()
// 	  });
// }

// function applyFilter() {
// 	Caman('#my-image', function () {
// 		var ten = 10;
// 	    this.brightness(ten);
// 	    // this.contrast(300);
// 	    // this.sepia(600);
// 	    // this.saturation(-300);
// 	    this.render();
// 	  });
// }

// function applyFilter() {
// 	Caman('#my-image', function () {
// 	    this.saturation(-300);
// 			this.render();
// 	  });
// }

// function applyFilter() {
// 	Caman('#my-image', function () {
// 	    this['vintage']();
// 	    this.render();
// 	  });
// }


var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
console.log("slider: " + slider);
output.innerHTML = slider.value; // Display the default slider value



// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
};


// value from the slider then gets put into the applySaturation function //


function applySaturation(value) {
	Caman('#my-image', function() {
		console.log(value);
		this.saturation(value).render();
	});
}
