const Word = require('../../models/word');
const seedWords = require('../../seedData/word_bank_sight_words.json');

module.exports = {
  seed
};

const seed = async (req, res)=> {
  console.log("seeded");
 try {
   await Word.remove({});
   await Word.create(seedWords)
   const words = await Word.find({});
   res.json(words)
 } catch(error) {
   res.status(400).json(error);
 }
}

// Seed Route for Seeding Database
router.get("/seed", async (req, res) => {
  // try block for catching errors
  try {
    // remove all places from database
    await Place.remove({});
    // add the seed data to the database
    await Place.create(placeSeed);
    // get full list of places to confirm seeding worked
    const places = await Place.find({});
    // return full list of places as JSON
    res.json(places);
  } catch (error) {
    // return error as JSON with an error status
    res.status(400).json(error);
  }
});