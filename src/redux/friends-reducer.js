let initialState = {
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

const dialogsReducer = (state = initialState, action) => {
    return state;
}

export default dialogsReducer;
