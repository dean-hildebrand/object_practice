const address = {
  street: "1211 Hadley Circle",
  city: "Myrtle Beach",
  zipCode: "29577",
};

// iterate with a for in loop and log key and value
function showAddress(address) {
  for (let keys in address) {
    console.log(keys, ":", address[keys]);
  }
}

showAddress(address);

//Factory function ----------------------------------------------

function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

let factoryAddress = createAddress(
  "1211 Hadley Circle",
  "Myrtle Beach",
  "29577"
);

console.log(factoryAddress);

//Constructor function ---------------------------------------------
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

let constructorAddress = new Address(
  "1211 Hadley Circle",
  "Myrtle Beach",
  "29577"
);

console.log(constructorAddress);
