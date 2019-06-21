"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class OrderItem extends Model {
  type() {
    return this.belongsTo("App/Models/ProductType");
  }
  size() {
    return this.belongsTo("App/Models/ProductSize");
  }
  products() {
    return this.belongsTo("App/Models/Product");
  }
  order() {
    return this.belongsTo("App/Models/Order");
  }
}

module.exports = OrderItem;
