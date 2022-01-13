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
	let rides = $("ul.rides").children();
  $("form#height-submission").submit(function(event) {
    event.preventDefault();
    riderHeight = $("#rider-height").val();

		for (i = 0; i < rides.length; i++) {
			console.log(canRiderRide(riderHeight, minimumRideHeights[rides[i].id]))
		}
  });
});