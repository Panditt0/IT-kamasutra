import { text } from "@fortawesome/fontawesome-svg-core"
import { type } from "@testing-library/user-event/dist/type"


let store = {
    _state: {
        newPostText: '',
        profilePage: {
            posts: [
                { text: 'Привет, как дела?', likesCount: 23, },
                { text: 'Первый пост?', likesCount: 37 },
                { text: 'Привет, как дела?', likesCount: 6 },
            ],
            dialogs: [
                { isOnline: true, id: 1, name: 'Alex', avatar: 'https://avatars.mds.yandex.net/i?id=47dd6d7a28e4b866389be14392ea7e8a40736b64-10576924-images-thumbs&n=13' },
                { isOnline: true, id: 2, name: 'Olga', avatar: 'https://main-cdn.sbermegamarket.ru/big2/hlr-system/-13/409/780/682/123/50/600001134467b0.jphttps://main-cdn.sbermegamarket.ru/big2/hlr-system/-13/409/780/682/123/50/600001134467b0.jpg' },
                { isOnline: false, id: 3, name: 'Ivan', avatar: 'https://avatars.mds.yandex.net/i?id=47dd6d7a28e4b866389be14392ea7e8a40736b64-10576924-images-thumbs&n=13' },
                { isOnline: false, id: 4, name: 'Nikita', avatar: 'https://avatars.mds.yandex.net/i?id=47dd6d7a28e4b866389be14392ea7e8a40736b64-10576924-images-thumbs&n=13' },
                { isOnline: true, id: 5, name: 'Pavel', avatar: 'https://i.pinimg.com/originals/72/40/e2/7240e256cf9cb92c3390fe1e2bfd9ba2.jpg' },
            ],

        },
        messagePage: {
            messageTextInputValue: '',
            messages: [
                { id: 1, message: 'Привет, как дела?', type: 'incoming' },
                { id: 2, message: 'Уехал в отпуск', type: 'outgoing' },
                { id: 2, message: 'Сейчас уже дома', type: 'outgoing' },],

        }
    },
    getState(){
        return this._state
    },

    renderEntireDom() { },
    preRender(render) {
        this.renderEntireDom = render
    },
    updateMessageWindow(text) {
        let messageElement = {
            id: 1,
            message: text,
            type: 'outgoing'
        }
        this._state.messagePage.messages.push(messageElement);
        this._state.messagePage.messageTextInputValue = '';
        this.renderEntireDom()
    },

    updateMessageInputWindow(text) {
        this._state.messagePage.messageTextInputValue = text;
        this.renderEntireDom();
        },


    addPost(message){
            let newPost = {
                text: message,
                likesCount: 0,
            }
            this._state.profilePage.posts.push(newPost)
            this.renderEntireDom()
        
        },
        updateNewPostText(text){
            this._state.newPostText = text;
            this.renderEntireDom()
        
        }

}

export default store


