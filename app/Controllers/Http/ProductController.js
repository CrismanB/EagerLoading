"use strict";

const Product = use("App/Models/Product");

class ProductController {
  async index({ request, response, view }) {
    const product = await Product.all();

    return product;
  }

  async store({ request, response }) {
    const data = request.only(["name", "description"]);

    const product = await Product.create(data);

    return product;
  }

  async show({ params, request, response, view }) {}

  async edit({ params, request, response, view }) {}
  async update({ params, request, response }) {}

  async destroy({ params, request, response }) {}
}

module.exports = ProductController;
