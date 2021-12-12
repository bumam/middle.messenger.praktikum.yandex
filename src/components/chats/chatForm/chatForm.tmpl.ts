export default `.current-chat__footer-form-wrap
    .menu 
        | !{menuBtn} 
        if showMenu
            .menu__list-wrap.menu__list-wrap--position
                ul.menu__list 
                    li
                        span.menu__icon
                        p Фото или видео
                    li
                        span.menu__icon
                        p Файл
                    li
                        span.menu__icon
                        p Локация
    form.current-chat__footer-form
        input.message-form__input(type=text id="message" name="message" placeholder="Сообщение")
        button(type="submit")`
