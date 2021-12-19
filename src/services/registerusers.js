export class registerUser {
  "use strict";

  static saveUser(login, setVisible, acces) {
    const validate =
      login.email &&
      login.fullName &&
      login.nationality &&
      login.password &&
      login.phone &&
      login.username;

    const verifyEmail =
      [...(login.email || "")].includes("@") && [...login.email].includes(".");

    //   register algorithm --example local storage

    if (localStorage.getItem("user_list")) {
      let users = localStorage.getItem("user_list");
      users = JSON.parse(users);
      const algorithmValidate = users
        .map((u) => {
          return u.username !== login.username && u.email !== login.email
            ? true
            : false;
        })
        .includes(false);

      if (validate) {
        if (!algorithmValidate) {
          if (verifyEmail) {
            const newUser = [...users, login];
            localStorage.setItem("user_list", JSON.stringify(newUser));
            acces({ created: true });
          } else {
            setVisible({
              right: "3rem",
              bottom: "50px",
              message: "Ingrese un correo electronico valido",
              background: "#6400e9",
            });
          }
        } else {
          acces({ created: false });
          setVisible({
            right: "3rem",
            bottom: "50px",
            message: "Usuario ya existe, por favor inicie sesion.",
            background: "#6400e9",
          });
        }
      } else {
        setVisible({
          right: "3rem",
          bottom: "50px",
          message: "Por favor completa todos los campos",
          background: "#fc7f7f",
        });
      }
    } else {
      localStorage.setItem("user_list", JSON.stringify([]));
    }
  }
}
