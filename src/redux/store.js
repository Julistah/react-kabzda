import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, post: 'Hi, how are you', likesCount: 12},
                {id: 2, post: 'Hi, First post', likesCount: 11},
            ],
            newPostText: 'newPostText',
        },
        dialogsPage: {
            dialogs: [ //id should be in quotes, otherwise routing won't work
                {
                    id: '1',
                    name: 'ivan',
                    image: 'http://user-life.com/uploads/posts/2018-08/1535608847_kak-udalit-avatarku-ubrat-postavit-sdelat-zagruzit-dobavit-foto-vkontakte-dlya-telegramma-skaypa-vayber-diskorda.jpg'
                },
                {
                    id: '2',
                    name: 'Alla',
                    image: 'https://www.meme-arsenal.com/memes/f829154b6247042d8821a19015eb2f7c.jpg'
                },
                {
                    id: '3',
                    name: 'Petro',
                    image: 'https://smmis.ru/wp-content/uploads/2015/01/ava.jpg'
                },
                {
                    id: '4',
                    name: 'Anyone',
                    image: 'https://socialvk.ru/wp-content/uploads/avatarka-pustaya-vk_0.jpg'
                }
            ],
            messages: [ //sernder: 1 -other guy, 0 -you
                {id: 1, message: 'Hello', sender: 1},
                {id: 2, message: 'How are you', sender: 1},
                {id: 3, message: 'Hello world)))', sender: 0},
            ],
            newMessageBody: ""
        },
        friendsPage: {
            friends: [
                {
                    id: '1',
                    name: 'ivan',
                    image: 'http://user-life.com/uploads/posts/2018-08/1535608847_kak-udalit-avatarku-ubrat-postavit-sdelat-zagruzit-dobavit-foto-vkontakte-dlya-telegramma-skaypa-vayber-diskorda.jpg'
                },
                {
                    id: '2',
                    name: 'Alla',
                    image: 'https://www.meme-arsenal.com/memes/f829154b6247042d8821a19015eb2f7c.jpg'
                },
                {
                    id: '3',
                    name: 'Petro',
                    image: 'https://smmis.ru/wp-content/uploads/2015/01/ava.jpg'
                },
            ],
        }
    },

    _callSubscriber() {
        console.log('state changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage= profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
}




export default store;
// window.store = store;
