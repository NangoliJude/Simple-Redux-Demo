export const selectUser=(user)=>{
    console.log("user selected", user.first)
    return {
        type: "SELECTED USER",
        payload: user
    }
};