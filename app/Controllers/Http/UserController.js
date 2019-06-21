"use strict";

const User = use("App/Models/User");

class UserController {
  async store({ request, response }) {
    //Criacao do usuario
    const data = request.only(["username", "email", "password"]);

    const tipo_user = "client";

    const user = await User.create({
      ...data,
      tipo_user
    });

    return response.send({ message: "User created with successuful!", user });
  }
}

module.exports = UserController;
