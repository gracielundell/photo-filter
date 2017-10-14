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
// slider ==== output === value essentially; two ways to display same info
output.innerHTML = slider.value; // Display the default slider value



// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
};


// value from the slider then gets put into the applySaturation function //
// have to store what the value was before it gets changed

function onChangeTest(textbox) {
	var newValue = textbox.value;
	var oldValue = textbox.oldvalue;
	console.log("Value is " + newValue);
	console.log("Old Value is " + oldValue);

	if (newValue < oldValue) {
		oldValue -= newValue;
		console.log("new value is less than than old value");
	} else if (newValue > oldValue) {
		console.log("new value is greater than old value");
	} else {
		console.log("new value is the same as old value");
	}


	function applySaturation(newValue) {
		Caman('#my-image', function() {
			this.saturation(newValue).render();
		});
	}

}



// next: get saturation determined by slider to go up and down (math, if-statements) //
