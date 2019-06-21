"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProductSizeSchema extends Schema {
  up() {
    this.create("product_sizes", table => {
      table.increments();
      table
        .string("size")
        .unique()
        .notNullable();
      table.float("price_increase");
      table.timestamps();
    });
  }

  down() {
    this.drop("product_sizes");
  }
}

module.exports = ProductSizeSchema;
