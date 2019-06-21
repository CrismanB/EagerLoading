"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class OrderItemsSchema extends Schema {
  up() {
    this.create("order_items", table => {
      table.increments();
      table
        .integer("order_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("orders")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("product_types_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("product_types")
        .onUpdate("CASCADE")
        .onDelete("SET NULL");
      table
        .integer("product_sizes_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("product_sizes")
        .onUpdate("CASCADE")
        .onDelete("SET NULL");
      table
        .integer("quantity")
        .notNullable()
        .unsigned();
      table
        .float("price")
        .notNullable()
        .unsigned();
      table.timestamps();
    });
  }

  down() {
    this.drop("order_items");
  }
}

module.exports = OrderItemsSchema;
