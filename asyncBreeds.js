const fs = require("fs");

const breedDatilsFromFile = function(breed, callback) {
  console.log("breedDetailsFromFile: Calling readFile...");
  fs.readFile(`./data/${breed}.txt`, "utf8", (error, data) => {
    // CHANGE: pass data into callback instead of returning it directly
    console.log("In readFile's Callback: it has the data.");
    // ISSUE: returning from *inner* callback function, not breedDetailsFromFile
    if (!error) callback(data);
  });
  // ISSUE: attempting to return data out here will also not work
  // currently not returning anything from here, so breedDetailsFromFile function returns undefined
}

// CHANGE 1: moved the console.log into a new function to call cats name
const printOutCatBreed = breed => {
  console.log("Return Value: ", breed) // => print out details correctly
};

// CHANGE 2: were now passing two arguments into breedDetailsFromFile, breed string (key) and callback function
breedDatilsFromFile("Bombay", printOutCatBreed);

// we try to get the return value
// const bombay = breedDatilsFromFile("Bombay");
// console.log("Return Value: ", bombay); // => will NOT print out details, instead we will see undefined