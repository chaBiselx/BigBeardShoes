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

function zip_code(){
	var lat, lng ;
	//French Zip_code
	var code = prompt("Veuilez entrer le code postal");
	code = removeChar(code);
	code = code.replace(' ','');
	//^\d{5}$
	if (code != null  ) {

			geocodeAddress(code);

	}else{
		alert("not ok");
	}
}

function removeChar(str){
	str.replace(/[^a-zA-Z0-9 ]/g, "");

	return str;
}

function geocodeAddress(code) {
	var geocoder = new google.maps.Geocoder();
	geocoder.geocode({'address': code+" FR"}, function(results, status) {
			if (status === 'OK') {

				init(results[0].geometry.location.lat() , results[0].geometry.location.lng()  )
			} else {
			alert('Geocode was not successful for the following reason: ' + status);
		}
	});
}
