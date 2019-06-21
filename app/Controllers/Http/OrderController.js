"use strict";

const Order = use("App/Models/Order");
const OrderItem = use("App/Models/OrderItem");
const Database = use("Database");
class OrderController {
  async index({ request, response, view }) {
    const order = await OrderItem.query()
      .with("order")
      .with("type")
      .fetch();
    /* const order = await Database.raw(
      `select
       orders.id, orders.user_id, orders.observation, orders.cep,
       orders.rua, orders.bairro, orders.number, orders.created_at,
       t.type, t.price,
       s.size, s.price_increase FROM
       order_items as o
       join orders on o.order_id = orders.id
       join product_types as t on o.product_types_id = t.id
       join product_sizes as s on o.product_sizes_id = s.id
       `
    ); */
    //Database.close();
    return order;
  }

  async store({ request, response }) {
    const data = request.only([
      "user_id",
      "observation",
      "cep",
      "rua",
      "bairro",
      "number"
    ]);
    const items = request.input("items");

    const order = await Order.create(data);

    await order.items().createMany(items);

    return order;
  }

  async show({ params, request, response, view }) {}

  async update({ params, request, response }) {}

  async destroy({ params, request, response }) {}
}

module.exports = OrderController;
