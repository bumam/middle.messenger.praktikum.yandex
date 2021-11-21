export default `div.mobile-form
    div.mobile-form__frame 
        h1.mobile-form__header #{title}
        div.mobile-form__fields
        each val, index in input
            div.mobile-form__input-wrap
                p.mobile-form__input-name.mobile-form__input-name--active #{val.label}
                input.mobile-form__input( type=val.type name=val.name value=val.value)
                span.mobile-form__err #{val.validationError}
        div.mobile-form__btn-wrap
            button.mobile-form__btn(type=buttonType) #{buttonText}
            a.mobile-form__link(href=linkHref) #{linkText}
            `