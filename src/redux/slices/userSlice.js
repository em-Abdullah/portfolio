import { createSlice } from "@reduxjs/toolkit"

const initialStateValue = {
    email: "",
}

export const userSlice = createSlice({
    name: "user",
    initialState: { value: initialStateValue },
    reducers: {
        setUser: (state, action) => {
            state.value = action.payload
        },
        clearUser: (state) => {
            state.value = initialStateValue
        },
    },
})

// Action creators are generated for each case reducer function
export const { setUser, clearUser } = userSlice.actions

export default userSlice.reducer
