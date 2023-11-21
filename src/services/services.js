import axios from "axios";

export async function createUser(formData) {
  return new Promise((resolve, reject) => {
    axios
      .post("http://31.220.82.50:202/api/Auth/Register", formData)
      .then((res) => {
        return resolve(res);
      })
      .catch((err) => {
        console.error(err);
        return reject(err);
      });
  });
}

export async function signinUser(formData) {
  return new Promise((resolve, reject) => {
    axios
      .post("http://31.220.82.50:202/api/Auth/Authentication", formData)
      .then((res) => {
        return resolve(res);
      })
      .catch((err) => {
        console.error(err);
        return reject(err);
      });
  });
}

