const initialState = [
    {
        id: 0,
        name: "Sanjeev Dubey",
        number: 7002708908,
        email: "sanjeev.dubey930@gmail.com"
    },
    {
        id: 1,
        name: "test name",
        number: 123456789,
        email: "xyz@gmail.com"
    },
];

const contactReducer = (state=initialState, action) => {
    switch(action.type){
        case "ADD_CONTACT":
            state = [...state, action.payload];
            return state;
        case "UPDATE_CONTACT":
            const updateState = state.map(contact => contact.id === action.payload.id ? action.payload: contact);
            state = updateState;
            return state;
        case "DELETE_CONTACT":
            const filterContacts = state.filter(
                (contact) => contact.id !== action.payload.id && contact);
            state= filterContacts;
            return state;
        default: 
        return state;
    }
}
export default contactReducer;