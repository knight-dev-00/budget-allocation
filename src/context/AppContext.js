import React, { createContext, useReducer } from 'react';

// 5. The reducer - this is used to update the state, based on the action
export const AppReducer = (state, action) => {
    let new_departments = [];
    switch (action.type) {
        case 'ADD_ALLOCATION':
            let updatedAll = false;
            state.departments.map((department)=>{
                if(department.name === action.payload.name) {
                    department.allocation = department.allocation + action.payload.allocation;
                    updatedAll = true;
                }
                
                new_departments.push(department);
                return true;
            })
            state.departments = new_departments;
            action.type = "DONE";
            return {
                ...state,
            };

        case 'RED_ALLOCATION':
            state.departments.map((department)=>{
                if(department.name === action.payload.name) {
                    department.allocation = department.allocation - action.payload.allocation;
                }
                department.allocation = department.allocation < 0 ? 0: department.allocation;
                new_departments.push(department);
                return true;
            })
            state.departments = new_departments;
            action.type = "DONE";
            return {
                ...state,
            };
        case 'DELETE_ALLOCATION':
            state.departments.map((department)=>{
                if(department.name === action.payload.name) {
                    department.allocation = 0;
                }
                new_departments.push(department);
                return true;
            })
            state.departments = new_departments;
            action.type = "DONE";
            return {
                ...state,
            };
        case 'CHG_LOCATION':
            action.type = "DONE";
            state.Location = action.payload;
            return {
                ...state
            }

        default:
            return state;
    }
};

// 1. Sets the initial state when the app loads
const initialState = {
    departments: [
        { id: "Marketing", name: 'Marketing', allocation: 0 },
        { id: "Finance", name: 'Finance', allocation: 0 },
        { id: "Sales", name: 'Sales', allocation: 0 },
        { id: "Human Resource", name: 'Human Resource', allocation: 0 },
        { id: "IT", name: 'IT', allocation: 0 },
    ],
    Location: '£',
    Budget: 0
};

// 2. Creates the context this is the thing our components import and use to get the state
export const AppContext = createContext();

// 3. Provider component - wraps the components we want to give access to the state
// Accepts the children, which are the nested(wrapped) components
export const AppProvider = (props) => {
    // 4. Sets up the app state. takes a reducer, and an initial state
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const budget = state.departments.reduce((Department) => {
        let total = 0;
        state.departments.map((department) => {
            total = total + department.allocation;
            return total;
        })
        return (total);
    }, 0);
    state.Budget = budget;

    return (
        <AppContext.Provider
            value={{
                departments: state.departments,
                Budget: state.Budget,
                dispatch,
                Location: state.Location
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};