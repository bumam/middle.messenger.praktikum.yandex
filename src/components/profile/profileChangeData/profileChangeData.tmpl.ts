export default `.profile
    .profile__back 
        a.profile__back-btn(href="/profile")
    .profile__wrap
        form.profile__main
            .profile__header
                | !{avatar}
                p.profile__name #{user}

                .profile__data-block
                    | !{inputCommon}
                .profile__actions-block.profile__actions-block--center
                    | !{button}
                    `;
