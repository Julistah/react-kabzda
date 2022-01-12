import profileReducer, {addPost, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, post: 'Hi, how are you', likesCount: 12},
        {id: 2, post: 'Hi, First post', likesCount: 11},
    ]
};

test('length of posts shoud be incremented', () => {
    // 1. test data
    let action = addPost("post text");

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(state.posts.length + 1);
});

test('message of new post shoul be correct', () => {
    // 1. test data
    let action = addPost("post text");

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts[2].post).toBe("post text");
});

test('after deleting length should decrement', () => {
    // 1. test data
    let action = deletePost(1);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(state.posts.length - 1);
});

test('after deleting length should not change on wrong id', () => {
    // 1. test data
    let action = deletePost(100);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(state.posts.length);
});

