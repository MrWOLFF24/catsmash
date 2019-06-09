'use strict'

const Cats = use('App/Models/Cat')

class CatController {
  // get all cats
  async getAllCats() {
    return await Cats.all()
  }

  async updateBattleResult({ request }) {
    return await Cats.findById(request.id)
  }

  async getRating(winner, loser) {
    let k = 30, winnerExpected, loserExpected

    winnerExpected = 1 / (1 + (Math.pow(10,(loser.ranking - winner.ranking) / 400)))
    loserExpected = 1 / (1 + (Math.pow(10,(winner.ranking - loser.ranking) / 400)))

    return await {
      winner: Math.round(winner.ranking + (k * (1 - winnerExpected))),
      loser: Math.round(loser.ranking + (k * (0 - loserExpected)))
    }
  }
}

module.exports = CatController
