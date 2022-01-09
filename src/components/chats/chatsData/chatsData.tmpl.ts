export default `.chats
    article.chats__messages
        .chats__header 
            .chats__top-header 
                if displayUser
                    .chats__user 
                        img
                        p #{user}
                a.chats__control.chats__control--right(href='/profile') Профиль
            .chats__search-wrap 
                input.chats__search(type='text')
        .chats__dialogs-wrap.dialog 
            | !{dialogs}
    .chats__current-chat.current-chat
        if activeChat
            | !{activeChatContent}
        else 
            .current-chat__empty-chat
                p Выберите чат чтобы отправить сообщение`;
