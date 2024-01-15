import {createSlice} from "@reduxjs/toolkit";
import userService from '../services/UserService'
import authService from '../services/AuthService'


const userSlice = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        setUsers(state, action) {
            return action.payload;
        },
        appendUser(state, action) {
            state.push(action.payload);
        }
    }
});

export const initializeUsers = () => {
    return async dispatch => {
        const users = await userService.getAll();
        dispatch(setUsers(users));
    }
};

export const login = user => {
    return async dispatch => {
        const connectedUser = await authService.login(user);
        dispatch(setUsers(connectedUser));
    }
}
export const createUser = (user, errorCallBack,toHome) => {
    return async dispatch => {
        const newUser = await userService.createNew(user, errorCallBack,toHome);
        if (newUser) {
            initializeUsers();
        }
    }
}

export const getByRoleAndAuthStatus = rq => {
    return async dispatch => {
        const userByRoleAndStatus = await userService.getByRoleAndAuthStatus(rq);
        dispatch(setUsers(userByRoleAndStatus));
    }
}

export const getByRole = rq => {
    return async dispatch => {
        const userByRole = await userService.getByRole(rq);
        dispatch(setUsers(userByRole));
    }
}

export const getByAuthStatus = authStatus => {
    return async dip => {
        const userByAuthStatus = await userService.getByAuthStatus(authStatus);
        dip(setUsers(userByAuthStatus));
    }
}
export const updateUser = (id, user) => {
    return async dispatch => {
        await userService.update(id, user);
        const users = await userService.getAll();
        dispatch(setUsers(users));
    }
}

export const deleteUser = id => {
    return async dispatch => {
        await userService.deleteUser(id);
        const users = await userService.getAll();
        dispatch(setUsers(users));
    }
}

export const getUserByEmail = email => {
    return async dispatch => {
        const user = await userService.getUserByEmail(email);
        dispatch(setUsers(user));
    }
}
export const {setUsers, appendUser} = userSlice.actions;
export default userSlice.reducer;