"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class ProductSize extends Model {
  type() {
    return this.hasMany("App/Models/ProductType");
  }
}

module.exports = ProductSize;
