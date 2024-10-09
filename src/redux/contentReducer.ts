import { UnknownAction } from "@reduxjs/toolkit"

export type contentReducerType = {
    content:string
}

const initialState:contentReducerType = {
    content: "no State"
}

const contentReducer = (state = initialState, action: UnknownAction):contentReducerType => {
    switch (action.type) {  
        case "INIT":  
            return {  
                content: "state Init"
            }  
        case "RUN":  
        return {  
            content: "state Run"
        }
        default:  
            return state  
    }
}

export default contentReducer; 