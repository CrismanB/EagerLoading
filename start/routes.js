"use strict";

const Route = use("Route");

Route.post("user", "UserController.store"); //Criar validacao

Route.post("product", "ProductController.store");
Route.get("product", "ProductController.index");

Route.post("size", "ProductSizeController.store");
Route.get("size", "ProductSizeController.index");

Route.post("type", "ProductTypeController.store");
Route.get("type", "ProductTypeController.index");

Route.post("order", "OrderController.store");
Route.get("order", "OrderController.index");
