const initialState = {
    nutritionData: [], // Array of nutrition entries
  };
  
  const nutritionReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_NUTRITION':
        return {
          ...state,
          nutritionData: [...state.nutritionData, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default nutritionReducer;