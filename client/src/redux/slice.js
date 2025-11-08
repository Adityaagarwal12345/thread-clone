import { createSlice } from '@reduxjs/toolkit'
//add  post model
//ye openAddPostModal: false,openEditProfileModal:false }, function agar true hoga to modal open ho jayega or false hoga to modal close ho jayega
export const serviceSlice = createSlice({
  name: 'service',
  initialState: { 
    openAddPostModal: false,
    openEditProfileModal:false,
    anchorE1:null,
    anchorE2:null
   },
  reducers: {
    addPostModal :(state,action)=>{
      state.openAddPostModal=action.payload;
    },
     editProfileModal :(state,action)=>{
      state.openEditProfileModal=action.payload;
    },
    toggleMainMenu:(state,action)=>{
      state.anchorE1=action.payload;
   },
   toggleMyMenu:(state,action)=>{
      state.anchorE2=action.payload;
   }
}
});

export const { addPostModal,editProfileModal, toggleMainMenu,toggleMyMenu } =   serviceSlice.actions

export default serviceSlice.reducer;