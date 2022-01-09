export type AvatarType = {
  currentImgSrc?: string;
  title: "Файл загружен" | "Загрузите файл" | "Ошибка, попробуйте еще раз";
  error?: "Нужно выбрать файл";
  showModal: boolean;
  events?: any;
};
