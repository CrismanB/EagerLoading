"use strict";

const ProductType = use("App/Models/ProductType");
const Database = use("Database");
class ProductTypeController {
  async index({ request, response, view }) {
    const productype = await ProductType.all();

    return productype;
  }

  async store({ request, response }) {
    const data = request.only(["type", "time_delivery", "price"]);

    const productype = await ProductType.create(data);

    return productype;
  }

  async show({ params, request, response, view }) {}

  async edit({ params, request, response, view }) {}

  async update({ params, request, response }) {}

  async destroy({ params, request, response }) {}
}

module.exports = ProductTypeController;
