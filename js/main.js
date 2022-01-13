let riderHeight = 0;

const rideHeightRequirements = {
	"fun-car": {
		'minimum': (12*4) + 6,
		'maximum': (12*4) + (12*2)
	},
	"terror-coaster"  : {
		'minimum': (12*2) + 3,
		'maximum': (12*2) + 9
	},
	"banana-boat"     : {
		'minimum': (12*7) + 99,
		'maximum': (12*7) +101
	},
	"saucer-of-death" : {
		'minimum': 12*5,
		'maximum': 12*6
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
  $("form#height-submission").submit(function(event) {
    event.preventDefault();
		$(".rides").show();
    riderHeight = $("#rider-height").val();

		for (i = 0; i < rides.length; i++) {
			let rideHeightReq = rideHeightRequirements[rides[i].id];

			if(canRiderRide(riderHeight, rideHeightReq)) {
				$(rides[i]).addClass("can-ride");
			} else {
				$(rides[i]).addClass("cannot-ride");
			}
		}
  });
});