//an example token generate -- designed by daniel web dev
import { token } from "./token.js";

export class validateUser {
  "user strict";

  static userCredentials(obj) {
    let userAuth;

    if (localStorage.getItem("user_list")) {
      let users = localStorage.getItem("user_list");
      users = JSON.parse(users);
      userAuth = users;
    } else {
      localStorage.setItem(
        "user_list",
        JSON.stringify([
          {
            username: "default_user",
            password: "pass_example*",
            email: "root@longport.com",
            fullName: "principal user",
            nationality: "colombiana",
            phone: "3100000000",
          },
        ])
      );

      let users = localStorage.getItem("user_list");
      users = JSON.parse(users);
      userAuth = users;
    }

    const { password, username } = obj;

    const validateAuth = userAuth.filter((e) => e.username === username)[0];

    if (validateAuth !== undefined) {
      return validateAuth.password === password &&
        validateAuth.username === username
        ? {
            acces: true,
            token: token.generate(String(password + username).length),
          }
        : {
            acces: false,
            token: false,
          };
    } else {
      return {
        acces: false,
        token: "",
      };
    }
  }
}
