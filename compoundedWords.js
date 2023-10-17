// im install the readline and fs to read the file line by line
const fs = require( 'fs'); 

// in this step im use the readline to read the file line by line
const readline = require('readline'); 

// in this step im use the recursion to check if the word is compound or not

function Compounded(word, wordCombinations) {
  for (let i = 1; i < word.length; i++) {
    const prefix = word.slice(0, i); 
    const suffix = word.slice(i); 

    if (wordCombinations.has(prefix) && (wordCombinations.has(suffix) || Compounded(suffix, wordCombinations))) {
      return true;
    }
  }
  return false;
}

// in this step im use the async function to read the file and use the readline to read the file line by line

async function LongestComp(anyFile) {
  const wordCombinations = new Set(); 
  const compoundWords = []; 

  // Create a readline interface to read the file line by line
  const rl = readline.createInterface({
    input: fs.createReadStream(anyFile), 
    crlfDelay: Infinity, 
  });

  // Read the file line by line and add each word to the set

  for await (const line of rl) {
    const word = line.trim(); 
    wordCombinations.add(word); 
  }

  // Check if the word is compound or not

  for (const word of wordCombinations) {
    if (Compounded(word, wordCombinations)) {
      compoundWords.push(word);
    }
  }

  // Sort the compound words by length

  compoundWords.sort((a, b) => b.length - a.length); 

  return {
    longest: compoundWords[0], 
    secondLongest: compoundWords[1], 
  };
}

// in this step im use the async function to read the file and use the readline to read the file line by line

const start = Date.now(); 
LongestComp('Input_02.txt').then((result) => { 
  const end = Date.now(); 

  console.log(`Longest Compound Word: ${result.longest}`); 
  console.log(`Second Longest Compound Word: ${result.secondLongest}`); 
  console.log(`Time taken to process file: ${end - start} milliseconds`); 
});

/// so finally the output is ....
