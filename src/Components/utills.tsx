export function Color_RGBA_Rand_toString(){
    const green = getRandomInt(255);
    const red = getRandomInt(255);
    const blue = getRandomInt(255);
    const opacity = Math.random().toFixed(1);

    return "rgba(" + red + "," + green + "," + blue + "," + opacity + ")";
}
export function Color_RGB_Rand_toString(){
    const green = getRandomInt(255);
    const red = getRandomInt(255);
    const blue = getRandomInt(255);

    return "rgba(" + red + "," + green + "," + blue + ")";
}


export function getRandomInt(max: number): number{
    return Math.floor(Math.random() * max);
}

export const DefaultImageOBJ = {image: "", author: "",description: "",date: "",id: ""} 