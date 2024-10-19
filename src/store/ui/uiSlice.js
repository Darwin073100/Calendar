import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isDateModalOpen: false
    },
    reducers:{
        onOpenDateModal: (state)=>{
            state.isDateModalOpen = true;
        },
        onCloseDateModal: (state)=>{
            state.isDateModalOpen = false;
        }

    }
});

// Creador de acciones, Action creators
export const { onCloseDateModal, onOpenDateModal } = uiSlice.actions;