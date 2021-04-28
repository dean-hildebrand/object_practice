const address = {
  street: "1211 Hadley Circle",
  city: "Myrtle Beach",
  zipCode: "29577",
};

function showAddress(address) {
  for (let keys in address) {
    console.log(keys, ":", address[keys]);
  }
}

showAddress(address);
