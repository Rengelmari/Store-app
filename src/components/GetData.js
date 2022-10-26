import { stock } from "../data/stock"


export const GetData = () => {
    return new Promise( (resolve, reject) => {
        
            setTimeout(() => {
                resolve(stock)
            }, 1000)
        } )
}