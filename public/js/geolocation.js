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
	//French Zip_code
	var code = prompt("Veuilez entrer le code postal");
	code = removeChar(code);
	code = code.replace(' ','');
	//^\d{5}$
	if (code != null  ) {
	  alert(code);
	}else{
		alert("not ok");
	}
}

function removeChar(str){
	str.replace(/[^a-zA-Z0-9 ]/g, "");

	return str;
}
