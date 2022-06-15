const person = {
  firstName: 'Adrian',
  lastName: 'Guzman',
  hobby: 'running',
  job: 'canvasser',
  previousJob: 'delivery driver'
};
console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName);
console.log("The person's current job:", person.job);
console.log("The person's previous job is:", person.previousJob);
console.log('The complete person object:', person);
