export const incNumber = (num) => {
    return {
        type: "INCREMENT",
        incByFive:num
    }
}

export const decNumber = () => {
    return {
        type: "DECREMENT"
    }
}