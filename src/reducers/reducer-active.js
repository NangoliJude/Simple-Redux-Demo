export default function(state=null,action){
    switch(action.type){
        case "SELECTED USER":
        return action.payload;
        break;
    }
    return state;

}