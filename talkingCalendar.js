const talkingCalendar = function(date) {
  let result = ""
  let month 
  let x = date.split("/")
  let mon = x[1]
  let dt = x[2]
  
  switch (dt % 10) {
    case 1 :
      if(dt % 100 != 11) {
        dt += 'st'
      } else {
        dt += 'th'
      } 
      break;

    case 2 :
      if(dt % 100 != 12) {
        dt += 'nd'
      } else {
        dt += 'th'
      }
      break;

    case 3 :
      if(dt % 100 != 13) {
        dt += 'st'
      } else {
        dt += 'rd'
      }
      break;

    default :
      dt += 'th';
  }

  switch (mon) {
    case '01' :
      month = "January";
      break;
    case '02' :
      month = "February";
      break;
    case '03' :
      month = 'March';
      break;
    case '04' :
      month = "April";
      break;
    case '05' :
      month = 'May';
      break;
    case '06' :
      month = 'June';
      break;
    case '07' :
      month = 'july';
      break;
    case '08' :
      month = 'August';
      break;
    case '09' :
      month = 'September';
      break;
    case '10' :
      month = 'October';
      break;
    case '11' :
      month = 'November';
      break;
    case '12' :
      month = 'December';
      break;
  }

  return result = month + ' ' + dt + ', ' + x[0]
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));