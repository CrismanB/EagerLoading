"use strict";
const ProductSize = use("App/Models/ProductSize");

class ProductSizeController {
  async index({ request, response, view }) {
    const size = await ProductSize.all();

    return size;
  }

  async store({ request, response }) {
    const data = request.only(["size", "price_Increase"]);

    const size = await ProductSize.create(data);

    return size;
  }

  async show({ params, request, response, view }) {}

  async edit({ params, request, response, view }) {}

  async update({ params, request, response }) {}

  async destroy({ params, request, response }) {}
}

module.exports = ProductSizeController;
