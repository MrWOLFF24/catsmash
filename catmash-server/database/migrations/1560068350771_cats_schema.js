'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CatsSchema extends Schema {
  up () {
    this.create('cats', (table) => {
      table.increments().primary().unsigned()
      table.string('image', 255).notNullable()
      table.integer('ranking').defaultTo(1000)
      table.integer('wins').defaultTo(0)
      table.integer('losses').defaultTo(0)
    })
  }

  down () {
    this.drop('cats')
  }
}

module.exports = CatsSchema
