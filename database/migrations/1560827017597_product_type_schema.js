"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProductTypeSchema extends Schema {
  up() {
    this.create("product_types", table => {
      table.increments();
      table
        .string("type")
        .unique()
        .notNullable();
      table.time("time_delivery");
      table.float("price").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("product_types");
  }
}

module.exports = ProductTypeSchema;
