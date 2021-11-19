export default `.profile
    .profile__back 
        button.profile__back-btn(type="button")
    .profile__wrap
        .profile__main
            .profile__header 
                .profile__avatar-block 
                    img.profile__avatar
                p.profile__name #{user}
            if data==='full' 
                .profile__data-block
                    each val, index in inputCommon
                        .profile__data-row 
                            span.profile__data-name #{val.label}
                            input.profile__data(type=val.type="" name=val.name="" value=val.value) 
            else
                .profile__data-block
                    each val, index in inputPassword
                        .profile__data-row 
                            span.profile__data-name #{val.label}
                            input.profile__data(type=val.type="" name=val.name="" value=val.value) 

            if state==='basic'
                .profile__actions-block
                    .profile__data-row 
                        button.profile__action(type=buttonTypeChangeData) #{buttonTextChangeData}
                    .profile__data-row 
                        button.profile__action(type=buttonTypeChangePassword) #{buttonTextChangePassword}
                    .profile__data-row 
                        a.profile__exit(hreg=linkHref) #{linkText}
            else
                .profile__actions-block 
                    button.profile__action-btn(type=buttonTypeSave) #{buttonTextSave}`;
