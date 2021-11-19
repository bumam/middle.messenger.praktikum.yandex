import pug from "pug";
import modalTemplate from "./modalAvatar.tmpl";

const modalAvatar = pug.compile(modalTemplate);
const data = {
  title: "Файл загружен",
  buttonText: "Поменять",
  buttontype: "submit",
  error: "",
};

export default modalAvatar(data);
