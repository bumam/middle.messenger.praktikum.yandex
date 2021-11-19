import pug from "pug";
import errorTemplate from "./error.tmpl";

const error = pug.compile(errorTemplate);
const data = {
  errorCode: 404,
  errorText: "Не туда попали",
  linkHref: "/#chat",
  linkText: "Назад к чатам",
};

export default error(data);
