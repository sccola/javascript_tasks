const fullName = 'Olu Ola';
const myCourses = ['HTML', 'CSS', 'JavaScript'];

document.write('My name is ' + fullName + '<br><br>');
document.write('My registered courses are: ' + '<br>'); 
for(course of myCourses) {
    document.write(course + '<br>');
};

document.write('<br><br>' + 'Below, I am displaying all odd numbers from 1-200 using JavaScript\'s For Loop:' + '<br><br>');
// The For Loop below finds and displays all odd numbers from 1-200 (inclusive)
for (let i=1; i<=200; i++) {
    if (i % 2 !== 0) {
        document.write(i + '<br>');
    }
};