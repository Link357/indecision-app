var nameVar = "David";
var nameVar = "Mike"
console.log('nameVar', nameVar);

let nameLet = "Anna";
nameLet = "Julie";
console.log("nameLet", nameLet)

const nameConst = "Frank";
console.log("nameConst", nameConst);

// Block scoping

const fullName = "David Turner";
let firstName;

if (fullName) {
    firstName = fullName.split(" ")[0];
    console.log(firstName);
}

console.log(firstName);
