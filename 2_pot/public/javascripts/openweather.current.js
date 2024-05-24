var baseURL = "api.openweathermap.org/data/2.5/weather?";
var cityID  = "1835848";		// Seoul
var appKey  = "a00d613576b6c61eefab71eabe576d63";
var url = "http://" + baseURL + "id=" + cityID + "&appid=" + appKey;
var temp;
var num;
var icon;
		
function get_weather(){	

	$.getJSON(url, function(data) {
	
		var date = new Date();
		var hours = parseInt(date.getHours());
		var isNight = false;
	
		if ( hours >= 6 && hours < 19 )		isNight = false;
		else								isNight = true;
	
		temp = (parseFloat(data.main.temp)-273.0).toFixed(1);
		num  = parseInt(data.weather[0].id);
			
		if     ( num >= 200 && num < 300 )	icon = "images/icons/2xx.png";
		else if( num >= 300 && num < 400 )	icon = "images/icons/3xx.png";
		else if( num >= 500 && num < 510 ){
			if( isNight )					icon = "images/icons/50xn.png";
			else							icon = "images/icons/50x.png";
		}
		else if( num == 511              )	icon = "images/icons/511.png";
		else if( num >= 520 && num < 600 )	icon = "images/icons/52x.png";
		else if( num >= 600 && num < 700 )	icon = "images/icons/6xx.png";
		else if( num >= 700 && num < 800 )	icon = "images/icons/7xx.png";
		else if( num == 800              ){
			if( isNight )					icon = "images/icons/800n.png";
			else							icon = "images/icons/800.png";
		}
		else if( num == 801              ){
			if( isNight )					icon = "images/icons/801n.png";
			else							icon = "images/icons/801.png";
		}
		else if( num == 802              )	icon = "images/icons/802.png";
		else if( num == 803              )	icon = "images/icons/803.png";
		else if( num == 804              )	icon = "images/icons/804.png";
		else								icon = "images/icons/000.png";	
	});
	
	var temper = temp + " °C";
	
	$('#temper').text(temper);	
	$('#icon').attr('src',icon);
}

get_weather();
window.setInterval(get_weather, 1100);

