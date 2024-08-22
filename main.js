
// Mini Linter 

let story =
  'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ["really", "very", "basically"];

let unnecessaryWords = ["extremely", "literally", "actually"];

// split the string into individual words and save them in a new array
const storyWords = story.split(" ");
// console.log(storyWords.length);

// filter out the unnecessary words from the storyWords array
// 1. using the .filter() method
// const betterWords = storyWords.filter(function (word) {
//  return !unnecessaryWords.includes(word); 
// });

// 2. using the .reduce() method
const betterWords = storyWords.reduce(function (acc, word) {
  if (!unnecessaryWords.includes(word)) {
    acc.push(word);
  }
  return acc;
}, [])

// console.log(betterWords);

// counting overused words
// 1. using .reduce()
const overUsedWordsCount = storyWords.reduce(function (acc, word) {
  if (overusedWords.includes(word)) {
    acc.push(word);
  }
  return acc;
}, []);

console.log(overUsedWordsCount);


// 2. using .filter()
// const overUsedWordsCount = storyWords.filter(function (word) {
//   return overusedWords.includes(word);
// });
// console.log(overUsedWordsCount.length);


// counting the number of sentences
const numOfSentences = storyWords.reduce(function (acc, sentence){
  if (sentence.includes('!') || sentence.includes('.')) {
    acc += 1;
  }
  return acc;
  
}, 0);

// console.log(numOfSentences);

// logging word, sentence count to the console
console.log(`There are ${storyWords.length} words, ${numOfSentences} 
sentences and the overused words appear ${overUsedWordsCount.length} times.`);

// log the betterWords array as a string
console.log(betterWords.join(''));

