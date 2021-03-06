

export const required = value => {
    if (value) return undefined;
    return "field is required";
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value && value.length > maxLength) return `Max length is ${maxLength} symbols`
    return undefined;
}

export const maxLength10 = maxLengthCreator(10);
export const maxLength30 = maxLengthCreator(30);
export const maxLength50 = maxLengthCreator(50);