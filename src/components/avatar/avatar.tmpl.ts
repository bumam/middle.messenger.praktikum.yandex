export default `.profile__avatar-block 
    img.profile__avatar(src=currentImgSrc id=avatar tabindex="0")
    
    
    if showModal === true
        .overlay
            .modal
                h1.modal__header #{title}
                form.modal__form
                    .modal__actions
                        if file
                            input.modal__input(type="file" name="avatar" value="Выбрать файл на компьюторе")
                            label.modal__label(for="name") Выбрать файл на компьюторе
                        else
                            span.modal__file-name ivan.jpeg
                    button.modal__button(type=submit) Поменять
                    if error
                        span.modal__error Нужно выбрать файл`
