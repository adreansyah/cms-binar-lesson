import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const requestedGetUsers = () => (dispatch) => {
    dispatch(usersprogress());
    axios.get('https://reqres.in/api/users').then(result => {
        dispatch(usersissuccess({
            data: result?.data?.data
        }))
    }).catch(error => {
        dispatch(usersfailed({
            message: error.message
        }))
    })
}


export const requestedPostUsers = () => (dispatch) => {
    dispatch(usersprogress());
    axios.post('https://reqres.in/api/users').then(result => {
        dispatch(apiStoreiPostsSuccess({
            data: result?.data?.data
        }))
    }).catch(error => {
        dispatch(usersfailed({
            message: error.message
        }))
    })
}


const initialState = {
    data: [],
    loading: 'idle',
    error: '',
    postData: []
};

const users = createSlice({
    name: 'users-controller',
    initialState,
    reducers: {
        usersprogress(state) {
            state.loading = 'in_progress'
        },
        usersissuccess(state, action) {
            state.loading = 'success'
            state.data = action.payload.data
        },
        usersfailed(state, action) {
            state.loading = 'failed'
            state.error = action.payload.message
        },
        apiStoreiPostsSuccess(state, action) {
            state.loading = 'success'
            state.postData = action.payload.data
        }
    }
});

export default users.reducer;

export const { usersprogress, usersissuccess, usersfailed, apiStoreiPostsSuccess } = users.actions;