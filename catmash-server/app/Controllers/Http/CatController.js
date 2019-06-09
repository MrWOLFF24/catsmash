'use strict'

const Database = use('Database')
const Cats = use('App/Models/Cat')

class CatController {
  // get all cats
  async getAllCats() {
    return await Cats.all()
  }

  // get top 2 cats
  async getTopCute() {
    const top2Cats = await Database.from('cats').orderBy('ranking', 'desc').limit(2)
    const othersCats = await Database.from('cats').whereNotIn('id', [top2Cats[0].id, top2Cats[1].id])
    return await {
      topTwoCats: top2Cats,
      othersCats: othersCats
    }
  }

  // update cat informations after battle
  async updateBattleResult({ request }) {
    const { winner, loser } = request.all()
    const cats = await Database.from('cats').whereIn('id', [winner.id, loser.id])
    const ranking = this._getRating(winner, loser)
    const affectedRowWinner = await Database.table('cats').where('id', cats[0].id).update({ ranking: ranking.winner, wins: cats[0].wins += 1 })
    const affectedRowLoser = await Database.table('cats').where('id', cats[1].id).update({ ranking: ranking.loser, losses: cats[0].losses += 1 })
    return await {
      message: 'Thanks for your vote, cats will get more power!!!'
    }
  }

  _getRating(winner, loser) {
    let k = 30, winnerExpected, loserExpected;

    winnerExpected = 1 / (1 + (Math.pow(10,(loser.ranking - winner.ranking) / 400)))
    loserExpected = 1 / (1 + (Math.pow(10,(winner.ranking - loser.ranking) / 400)))

    return {
      winner: Math.round(winner.ranking + (k * (1 - winnerExpected))),
      loser: Math.round(loser.ranking + (k * (0 - loserExpected)))
    }
  }
}

module.exports = CatController
