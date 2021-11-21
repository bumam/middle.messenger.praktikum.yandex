export default `.chats
    article.chats__messages
        .chats__header 
            .chats__top-header 
                if dsplayUser
                    .chats__user 
                        img
                        p #{user}
                button.chats__control.chats__control--right Профиль
            .chats__search-wrap 
                input.chats__search(type='text')
        .chats__dialogs-wrap.dialog 
            each val, index in dialogs 
                .dialog__block(tabindex="0")
                    .dialog__avatar
                        img 
                    .dialog__text
                        p #{val.from} 
                        if val.content
                            span #{val.content}
                        else
                            span <b>Вы:</b> #{val.answer}
                    .dialog__etc
                        span #{val.time}
                        if val.unreadCount   
                            div #{val.unreadCount}
    .chats__current-chat.current-chat
        if activeChat
            .current-chat__header
                .current-chat__user 
                    img
                    p #{activeChatCompanion}
                .current-chat__menu-wrap.menu 
                    .menu__menu-btn 
                    .menu__list-wrap
                        ul.menu__list 
                            li
                                span.menu__icon.menu__icon--add
                                p Добавить пользователя
                            li
                                span.menu__icon.menu__icon--delete
                                p Удалить пользователя
                            li
                                span.menu__icon.menu__icon--exit
                                p Выйти
            .current-chat__body 
                .current-chat__date #{chatDate}
                each message, index in activeChatContent
                    div(class=message.type).current-chat__message
                        p #{message.text}
                        span #{message.time}
            form.current-chat__footer-form
                .menu 
                    .menu__menu-btn 
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
                input(type=chatInput.type name=chatInput.name placeholder="Сообщение")
                button(type="sunbmit")

        else 
            .current-chat__empty-chat
                p #{emptyChatText}`;
