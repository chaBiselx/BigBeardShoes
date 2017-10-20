function getLocation(){
	if (navigator.geolocation) {
	          navigator.geolocation.getCurrentPosition(function(position) {

							init(position.coords.latitude , position.coords.longitude);
	          });

  } else {
	  // Browser doesn't support Geolocation
	  alert("Error: Your browser doesn\'t support geolocation.")
	}



}
