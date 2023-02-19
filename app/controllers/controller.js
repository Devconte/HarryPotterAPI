
const controller = {
  /**
     * Affichage de la page principale
     * Pas de paramètre
     */
  homePage(req, res){
    res.render('index');
  },
  spellsPage(req, res){
    res.render('spells');
  },
  renderCharactersView: (req, res, characters) => {
    res.render('characters', { characters: characters });
  }
};


;


module.exports = controller;