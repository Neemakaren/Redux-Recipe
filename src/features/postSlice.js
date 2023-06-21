import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";


const initialState = [
    {
        id: '1',
        userName: 'Jane Doe',
        comment: 'luv this recipe',
        date: sub(new Date(), { minutes: 10 }).toISOString(),
    },
    {
        id: '2',
        userName: 'slice Doe',
        comment: 'yummy!',
        date: sub(new Date(), { minutes: 5 }).toISOString(),
    }
]


const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
           reducer(state, action) {
            state.push(action.payload)
           },
           prepare(userName, comment) {
            return {
                payload: {
                    id: nanoid(),
                    userName,
                    date: new Date().toISOString(),
                    comment
                }
            }
           }
    },

}
});


export const selectAllPosts = ((state) => state.post)

export const { postAdded } = postSlice.actions;


export default postSlice.reducer;