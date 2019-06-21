"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class ProductType extends Model {
  size() {
    return this.belongsTo("App/Models/ProductSize");
  }
  product() {
    return this.belongsTo("App/Models/Product");
  }
  order_item() {
    return this.hasMany("App/Models/OrderItem");
  }
}

module.exports = ProductType;
