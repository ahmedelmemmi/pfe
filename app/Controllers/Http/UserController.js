"use strict";
const User = use("App/Models/User");
class UserController {
  async register({ request, response }) {
    const {
      username,
      email,
      password,
      birthday,
      adress,
      phone,
    } = request.only([
      "username",
      "email",
      "password",
      "birthday",
      "adress",
      "phone",
    ]);
    await User.create({
      username,
      email,
      password,
      birthday,
      adress,
      phone,
    });
    return response.send({ message: "User has been created" });
    // mta3 tojrab wbara
  }
  async login({ request, response, auth }) {
    const { email, password } = request.only(["email", "password"]);
    const token = await auth.attempt(email, password);
    return response.json(token);
  }
  async show({ params, response }) {
    const user = await User.find(params.id);
    const res = {
      username: user.username,
      email: user.email,
      birthday: user.birthday,
      adress: user.adress,
      phone: user.phone,
    };
    return response.json(res);
  }
}

module.exports = UserController;
