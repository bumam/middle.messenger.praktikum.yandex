export default `if visualType === 'short'
    div.mobile-form__input-wrap.input-field-js
        p.mobile-form__input-name(class="mobile-form__input-name--active") #{label}
        input.mobile-form__input.input-js(type=type name=name id=id readonly=readonly)
        span.mobile-form__err.input-error-js #{errorText}
else
    .profile__data-row.input-field-js 
        span.profile__data-name #{label}
        input.profile__data.input-js(type=type name=name id=id readonly=readonly)
        span.mobile-form__err.mobile-form__err--long-form.input-error-js #{errorText}`
