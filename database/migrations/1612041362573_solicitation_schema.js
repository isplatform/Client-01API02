'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SolicitationSchema extends Schema {
  up () {
    this.create('solicitations', (table) => {
      table.increments()
      table.string('massas')
      table.string('recheio')
      table.string('nomeItem')
      table.string('nomeCliente')
      table.string('cep')
      table.integer('quantidade')
      table.string('data')
      table.timestamps()
    })
  }

  down () {
    this.drop('solicitations')
  }
}

module.exports = SolicitationSchema
