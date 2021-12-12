export default `.profile
    .profile__back 
        a.profile__back-btn(href="/chats")
    .profile__wrap
        .profile__main
            .profile__header
                | !{avatar}
                p.profile__name #{user}

                .profile__data-block
                    | !{inputCommon}

                .profile__actions-block
                    .profile__data-row 
                        a.profile__action(href="./profile-change-data.html") Изменить данные
                    .profile__data-row 
                        a.profile__action(href="./profile-change-password.html") Изменить пароль
                    .profile__data-row 
                        a.profile__exit(href="/chats.html") Выйти`
