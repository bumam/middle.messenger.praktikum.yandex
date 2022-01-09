export default `.dialog__block(tabindex="0")
    .dialog__avatar
        img 
    .dialog__text
        p #{from} 
        if content
            span #{content}
        else
            span <b>Вы:</b> #{answer}
    .dialog__etc
        span #{time}
        if unreadCount   
            div #{unreadCount}`
