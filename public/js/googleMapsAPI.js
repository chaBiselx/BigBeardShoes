
function init(){
var lat, lon, _zoom;


	//default
	lat = 46.92475 ;
	lon = 2.0517 ;
	_zoom = 6
	var position_latlng = new google.maps.LatLng(lat, lon);

	//options of the map
	var options = {
        center: position_latlng,
        zoom: _zoom ,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: true,
        draggable: true,
        disableDoubleClickZoom: true
    };


		//search the markup for insertion
    var map = new google.maps.Map(document.getElementById("ggmaps_map"), options);



var tMarker = [
	{
		lat : 45.833608,
		lon : 6.865089,
		title : "BigBeardShoes",
		text : "Bienvenue dans le magasin au coeur du Mont-Blanc"
	}
]


		//add marker
		// tMarker = array of
		createMarker( tMarker, map);
}




function createMarker( tab, map){
  var oLatLng, oMarker, data;
  var i, nb = tab.length;
  var contenu = "";
  var infowindow;

  for( i = 0; i < nb; i++){
    data = tab[i];
    oLatLng = new google.maps.LatLng( data.lat, data.lon);

    infowindow = new google.maps.InfoWindow();

    	oMarker = new google.maps.Marker({
      		position : oLatLng,
      		map : map,
      		title : data.title,
      		animation: google.maps.Animation.DROP,
      		icon : "pictures/marker.png"
    	})

		}






  contenu = contenu_texte(data.title, data.text);


	setEventMarker(oMarker,infowindow,contenu);

}


function contenu_texte(title, body){
	var ret;
	ret = '<h1 class= "ggmaps_entete">';
	ret += title;
	ret += '</h1>';

	ret += '<p class= "ggmaps_corps">';
	ret += body ;
	ret += '</p>' ;

	return ret;

}



function setEventMarker( oMarker, infowindow, text){
    google.maps.event.addListener( oMarker, 'click', function() {
    	// affectation du texte
    	infowindow.setContent( text);
    	// affichage InfoWindow
    	infowindow.open( this.getMap(), this);
    });
}