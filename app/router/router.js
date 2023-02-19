const express = require('express');
const controller = require('../controllers/controller');
const router = express.Router();



router.get('/', controller.homePage);

router.get('/spells', controller.spellsPage)

// In this example, we fetch the data from the Harry Potter API inside the /characters route handler using async/await. Once the data is fetched, we pass it as a parameter to the renderCharactersView method of our controller.
router.get('/characters', async (req, res, next) => {
    try {
      const characters = await fetch('https://hp-api.onrender.com/api/characters').then(res => res.json());
      controller.renderCharactersView(req, res, characters);
    } catch (err) {
      next(err);
    }
  });


module.exports = router;