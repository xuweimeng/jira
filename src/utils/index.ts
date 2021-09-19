export const isFalsy = (value: unknown) => value === 0? false: !value;

export const cleanObject = (obj: object) => {
    const result = {...obj};
    Object.keys(result).forEach(item => {
        //@ts-ignore
        if(isFalsy(result[item])) {
            //@ts-ignore
            delete result[item]
        }
    })

    return result;
}