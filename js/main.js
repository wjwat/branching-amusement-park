let riderHeight = 0;

const rideHeightRequirements = {
	"fun-car": {
		'minimum': 1,
		'maximum': 10
	},
	"terror-coaster"  : {
		'minimum': 2,
		'maximum': 9
	},
	"banana-boat"     : {
		'minimum': 3,
		'maximum': 8
	},
	"saucer-of-death" : {
		'minimum': 4,
		'maximum': 7
	},
	"terror-bear-hugs": {
		'minimum': 1,
		'maximum': 10
	}
}

function canRiderRide(height, heightLimit) {
	if(height >= heightLimit['minimum'] && height <= heightLimit['maximum']) {
		return(true);
	} else {
		return(false);
	}
}

$(document).ready(function() {

	let rides = $("ul.rides").children();

	$('#show-all-rides').on('click', function() {
		for (i = 0; i < rides.length; i++) {
			$(rides[i]).removeClass("can-ride cannot-ride")
			$(rides[i]).show()
		}
	})

	//$('button#check-height').on('click', function() {
	$("form").submit(function(event) {
    event.preventDefault();
	
    riderHeight = $("#rider-height").val();

		// Iterate over every ride
		for (i = 0; i < rides.length; i++) {
			let rideHeightReq = rideHeightRequirements[rides[i].id];

			// Hide specific rides unless user can ride them
			// $(rides[i]).hide();

			if (canRiderRide(riderHeight, rideHeightReq)) {
				// Show rides user can ride & add styling
				// $(rides[i]).show()
				$(rides[i]).addClass("can-ride");
			} else {
				$(rides[i]).removeClass("can-ride")
				// $(rides[i]).addClass("cannot-ride");
			}
		}
		$(".rides").show();
  });
});