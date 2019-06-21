"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class OrderSchema extends Schema {
  up() {
    this.create("orders", table => {
      table.increments();
      table
        .integer("user_id")
        .notNullable()
        .unsigned();
      table.text("observation").notNullable();
      table.string("cep").notNullable();
      table.string("rua").notNullable();
      table.string("bairro").notNullable();
      table.string("number").notNullable();
      table.integer("rating");
      table.timestamps();
    });
  }

  down() {
    this.drop("orders");
  }
}

module.exports = OrderSchema;
