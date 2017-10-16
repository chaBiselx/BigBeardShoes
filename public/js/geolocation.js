function getLocation(){
	var lat,lng ;
	if (navigator.geolocation) {
	          navigator.geolocation.getCurrentPosition(function(position, lat , lng) {

	            lat = position.coords.latitude ;
	            lng = position.coords.longitude;
							init(lat,lng);
	          });

  } else {
	  // Browser doesn't support Geolocation
	  alert("Error: Your browser doesn\'t support geolocation.")
	}



}
