var days1 = [ 'SUN', 'MON', 'TUE', 'WED', 'THI', 'FRI', 'SAT' ];
var days2 = [ '일', '월', '화', '수', '목', '금', '토' ];

function get_time(){
  var date = new Date();
  //var ampm = (date.getHours() < 12)?'오전':'오후';
  //var hours = (date.getHours() == 0)?12:(date.getHours() > 12)?date.getHours() - 12:date.getHours();
  var hours = (date.getHours() < 10)?'0'+date.getHours():date.getHours();
  var minutes = (date.getMinutes() < 10)?'0'+date.getMinutes():date.getMinutes();
  var seconds = (date.getSeconds() < 10)?'0'+date.getSeconds():date.getSeconds();
  var weekDay1 = days1[date.getDay()];
  var weekDay2 = days2[date.getDay()];
  var month = date.getMonth()+1;
  month = (month < 10)?'0'+month:month;
  var day = date.getDate();
  day = (day < 10)?'0'+day:day;
  var year = date.getFullYear();
  
  var calendar = month+'/'+day+' ('+weekDay2+')';
  var topClock = hours+' : '+minutes;
  var mainClock = year+'-'+month+'-'+day+' '+weekDay1 +' '+hours+' : '+minutes+' : '+seconds;

  $('#disp_cal').text(calendar);
  $('#top_clock').text(topClock);
  $('#main_clock').text(mainClock);
}

get_time();
window.setInterval(get_time, 1000);
