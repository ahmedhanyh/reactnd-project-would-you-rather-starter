export const SET_AUTHED_USER = 'SET_AUTHED_USER';
export const CLEAR_AUTHED_USER = 'CLEAR_AUTHED_USER';

export function setAuthedUser(authorID) {
    return {
        type: SET_AUTHED_USER,
        authorID,
    }
}

export function clearAuthedUser(authorID) {
    return {
        type: CLEAR_AUTHED_USER,
    }
}