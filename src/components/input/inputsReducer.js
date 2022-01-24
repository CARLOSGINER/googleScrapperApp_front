export  const inputsReducer = (currentState,action) => {
    switch (action.type) {

        case "input1": {
            return {
                ...currentState,
                input1:{
                    text:action.payload.text
                }
            }
        }
        case "input2": {
            return {
                ...currentState,
                input2:{
                    text:action.payload.text
                }
            }
        }
        default: 
            throw new Error(`Unknown input name: ${action.type}`)
        
            
    }
}

export default inputsReducer;