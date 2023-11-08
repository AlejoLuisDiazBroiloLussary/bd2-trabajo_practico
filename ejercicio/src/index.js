import { getBeer } from "./beer.js"


const main = async () =>{
    const beer = getBeer()
    console.log("ID "+ beer.id + ", Name "+ beer.name + ", Brand " + beer.brand);
}
main().then();


