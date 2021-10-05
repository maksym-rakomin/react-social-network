import {rerenderEntireTree} from "../render";

const state = {
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
}

export default state

export const addPost = () => {
    const newPost = {
        id: Date.now(),
        message: state.profilePage.newPostText,
        likesCount: 0,
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export const addMessage = () => {
    const data = {
        id: Date.now(),
        message: state.messagesPage.currentMessage,
    }
    state.messagesPage.messages.push(data)
    state.messagesPage.currentMessage = ''
    rerenderEntireTree(state)
}

export const updateNewPostText = newText => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state);
}

export const updateNewMessage = newText => {
    state.messagesPage.currentMessage = newText
    rerenderEntireTree(state);
}
