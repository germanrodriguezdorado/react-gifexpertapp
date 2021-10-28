import { getGifs } from "../../helpers/getGifs";

describe("Pruebas con getGifs Fetch", () => {

    test('debe de traer a 10 elementos', async() => {
        const gifs = await getGifs("One punch");
        expect(gifs.length).toBe(10);
    });


    test('si no se manda categoria, debe traer 0 elementos', async () => {
        const gifs = await getGifs("");
        expect(gifs.length).toBe(0);
    });
    

});