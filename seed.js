require('dotenv').config();
require('./config/database');

const Kid = require('./models/kid');
const Story = require('./models/story');

(async function() {

  // await Kid.deleteMany({});
  // const categories = await Kid.create([
  //   {name: 'TestKid1', coins: 0, level: 0},
  //   {name: 'TestKid2', coins: 0, level: 0},
  //   {name: 'TestKid3', coins: 0, level: 0},
  // ]);

  await Story.deleteMany({});
  const categories = await Story.create([
    {name: 'TestStoryA', grade: 0, words: [
      {word: 'TestWord1', sentence: 'This is a test.', image: 'n/a', progBar: 'n/a'},
      {word: 'TestWord2', sentence: 'This is a test.', image: 'n/a', progBar: 'n/a'},
      {word: 'TestWord3', sentence: 'This is a test.', image: 'n/a', progBar: 'n/a'}
    ]},
    {name: 'TestStoryB', grade: 1, words: [
      {word: 'TestWord4', sentence: 'This is a test.', image: 'n/a', progBar: 'n/a'},
      {word: 'TestWord5', sentence: 'This is a test.', image: 'n/a', progBar: 'n/a'},
      {word: 'TestWord6', sentence: 'This is a test.', image: 'n/a', progBar: 'n/a'}
    ]},
    {name: 'TestStoryC', grade: 2, words: [
      {word: 'TestWord7', sentence: 'This is a test.', image: 'n/a', progBar: 'n/a'},
      {word: 'TestWord8', sentence: 'This is a test.', image: 'n/a', progBar: 'n/a'},
      {word: 'TestWord9', sentence: 'This is a test.', image: 'n/a', progBar: 'n/a'}
    ]},
  ]);

  process.exit();

})();