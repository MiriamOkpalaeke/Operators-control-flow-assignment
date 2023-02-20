// question 3 Using if…else conditional statement, write a program that will help ,
//Bolatito determine the subjects she will be taking for the session using her class group.
// Also, in the case of an invalid class group, your output should be the General subjects. 
 
let studentClass = 'ARTS';

let scienceSubjects = 'Physics, Chemistry, Biology, Technical Drawing';
let socialScienceSubjects = 'Accounting, Commerce, Marketing, Geography';
let artsSubjects = 'Government, Economics, Literature, History';
let generalSubjects = 'English, Mathematics';

if (studentClass === 'SCIENCE') {
  console.log(scienceSubjects + '' + generalSubjects);
} else if (studentClass === 'socialScience') {
  console.log(socialScienceSubjects + '' + generalSubjects);
} else if (studentClass === 'ARTS') {
  console.log(artsSubjects + '' + generalSubjects );
} else {
   console.log(generalSubjects);
}

// question 5. Write a program that takes a positive number (num) and finds the power of 2 nearest to that number. 

let num = 40;
let pwr
for (let index = 2; index < 20; index = ++2) {
  pwr = index;
}
console.log("The number " + pwr + " is the power of 2 nearest to " + num);
  