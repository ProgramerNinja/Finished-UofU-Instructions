// Use Day.js to format the date and assign to the declared variable.

// TODO: 1. What is your graduation date in the following format: Jan 1, 1999?
var today = dayjs();
$('#1a').text(dayjs('2021-05-26').format('MMM D,YYYY'));
// TODO: 2. What day of the week will 1/1/2027 be? (e.g. Is it "Monday"?)
var whatDay = dayjs('1/1/2027');
$('#2a').text(whatDay.format('dddd'));
// TODO: 3. What is the current time in the format: hours:minutes:seconds
$('#3a').text(today.format('h:mm:ss A'))
// TODO: 4. What is the current Unix timestamp?
unixTime = dayjs().unix();
$('#4a').text(unixTime);
// TODO: 5. Parse the following Unix timestamp, 1318781876, and convert into any time/date format.
unixTimeStamp = dayjs.unix(1318781876).format('h:mm:ss A, MMM D, YYYY')
$('#5a').text(unixTimeStamp);
// TODO: 6. What is the difference in days between May 4, 2027 and today? Hint:
// You can display the difference between two dayjs objects by using the dayjs
// diff method.)

var target = dayjs('2027-04-5');
var timeTo = target.diff(today, 'days');
$('#6a').text(timeTo);
