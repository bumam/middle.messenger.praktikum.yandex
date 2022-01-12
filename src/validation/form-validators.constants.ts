import { VALIDATION_DATA as data } from "./form-validators.index";
import UserController from "../controllers/user/user";
type submitData = { [key: string]: string | null };

export default class FormValidator {
  submitData: submitData = {};

  onInputFocus(target: EventTarget | null): void {
    const input = target as HTMLInputElement;
    const field = input.closest(".input-field-js") as HTMLDivElement;
    const error = field.querySelector(".input-error-js") as HTMLSpanElement;

    if (field.classList.contains("invalid")) {
      field.classList.remove("invalid");
      error.innerHTML = "";
    }
  }

  onInputBlur(target: EventTarget | null): void {
    const input = target as HTMLInputElement;

    this.inputValidityCheck(input);
  }

  inputValidityCheck(input: HTMLInputElement): void {
    if (input.classList.contains("input-js")) {
      const field = input.closest(".input-field-js") as HTMLDivElement;
      const error = field.querySelector(".input-error-js") as HTMLSpanElement;

      if (data[input.name]) {
        const regExp = data[input.name].regExp;

        if (regExp.test(input.value)) {
          field.classList.remove("invalid");
          error.innerHTML = "";

          this.submitData[input.name] = input.value;
        } else {
          field.classList.add("invalid");
          error.innerHTML = data[input.name].error;

          this.submitData[input.name] = null;
        }
      }
    } else if (input.classList.contains("message-form__input")) {
      if (data[input.name]) {
        const regExp = data[input.name].regExp;

        if (regExp.test(input.value)) {
          this.submitData[input.name] = input.value;
        } else {
          this.submitData[input.name] = null;
        }
      }
    }
  }

  onSubmit(evt: MouseEvent, target: EventTarget | null, success?: any): void {
    evt.preventDefault();

    const button = target as HTMLButtonElement;
    const form = button.closest("form") as HTMLFormElement;
    const inputs = form.querySelectorAll("input");

    inputs.forEach((input: HTMLInputElement) => {
      this.inputValidityCheck(input);
    });

    if (Object.values(this.submitData).includes(null)) {
      throw new Error("Заполните форму");
    } else {
      new UserController().logout();

      setTimeout(() => {
        return success
          ? success.call(success, this.submitData)
          : console.log(this.submitData);
      }, 1000);
    }
  }
}
