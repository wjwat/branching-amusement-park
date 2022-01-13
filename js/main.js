let riderHeight = 0;

const minimumRideHeights = {
	"fun-car": (12*4) + 6,
	"terror-coaster": (12*2) + 3,
	"banana-boat": (12*7) + 99,
	"saucer-of-death": (12*5),
	"terror-bear-hugs": 1
}

function canRiderRide(height, heightLimit) {
	if(height >= heightLimit) {
		return(true);
	} else {
		return(false);
	}
}

$(document).ready(function() {
  $("form#height-submission").submit(function(event) {
    event.preventDefault();
    riderHeight = $("#rider-height").val();

		
  });
});