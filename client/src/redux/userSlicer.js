import {createSlice, nanoid} from'@reduxjs/toolkit'

let initialState = {
    user:{id:1,
        userId:null,
        mode:''}
}
let userSlicer = createSlice({
    name:'user',
    initialState,
    reducers:{
        addUser:(state,action)=>{
            
            let user1 = {
                id : nanoid(),
                userId:action.payload.userId,
                mode:action.payload.mode
            }
            
           state.user = user1;
        },
        removeUser: (state) => {
            state.user.userId = null // Or set to an empty object depending on your logic
          },
    }
});

export const  {addUser,removeUser} = userSlicer.actions;

export default userSlicer.reducer;