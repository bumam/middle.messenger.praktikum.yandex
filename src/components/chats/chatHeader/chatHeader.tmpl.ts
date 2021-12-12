export default `.current-chat__header
    .current-chat__user 
        img
        p #{activeChatCompanion}
    .current-chat__menu-wrap.menu 
        | !{menuBtn}
        if showMenu
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
                        p Выйти`
