const store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'test post 1', likesCount: 12},
                {id: 2, message: 'test post 2', likesCount: 2},
                {id: 3, message: 'test post 3', likesCount: 4},
                {id: 4, message: 'test post 4', likesCount: 6},
                {id: 5, message: 'test post 5', likesCount: 1},
            ],
            newPostText: 'social',
        },
        messagesPage: {
            messages: [
                {id: 1, message: 'test message 1'},
                {id: 2, message: 'test message 2'},
                {id: 3, message: 'test message 3'},
                {id: 4, message: 'test message 4'},
                {id: 5, message: 'test message 5'},
            ],
            currentMessage: '',
            users: [
                {id: 1, name: 'test 1'},
                {id: 2, name: 'test 2'},
                {id: 3, name: 'test 3'},
                {id: 4, name: 'test 4'},
                {id: 5, name: 'test 5'},
            ],
        },
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('render entire tree is not defined')
    },
    addPost() {
        const newPost = {
            id: Date.now(),
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this)
    },
    addMessage() {
        const data = {
            id: Date.now(),
            message: this._state.messagesPage.currentMessage,
        }
        this._state.messagesPage.messages.push(data)
        this._state.messagesPage.currentMessage = ''
        this._callSubscriber(this)
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this);
    },
    updateNewMessage(newText) {
        this._state.messagesPage.currentMessage = newText
        this._callSubscriber(this);
    },
    subscribe(observer) {
        this._callSubscriber = observer
    }
}

export default store
