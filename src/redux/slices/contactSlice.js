import { createSlice } from "@reduxjs/toolkit"

const initialStateValue = {
    name: "",
    email: "",
    comment: "",
}

export const contactSlice = createSlice({
    name: "comment",
    initialState: { value: initialStateValue },
    reducers: {
        setContact: (state, action) => {
            state.value = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setContact, clearContact } = contactSlice.actions

export default contactSlice.reducer
