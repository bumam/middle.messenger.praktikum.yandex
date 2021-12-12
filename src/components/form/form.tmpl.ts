export default `.mobile-form
   form.mobile-form__frame(name=formName)
        h1.mobile-form__header #{title}
        .mobile-form__fields
         | !{content}
        .mobile-form__btn-wrap
            | !{button}
            a.mobile-form__link(href=linkHref) #{linkText}
            `
