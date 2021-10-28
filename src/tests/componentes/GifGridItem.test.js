import { shallow } from "enzyme";
import GifGridItem from "../../componentes/GifGridItem";

describe("Pruebas del componente GifGridItem.test.js", () => {

    const titulo = "Algo";
    const url = "http://localhost:4000/img.jpg"

    let wrapper = shallow(<GifGridItem title={titulo} url={url}/>);
    beforeEach(() => {
        wrapper = shallow(<GifGridItem title={titulo} url={url}/>);
    });

    test('Debe desplegar <GifGridItem> correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe tener un párrafo con el title', () => {
        const p = wrapper.find("p");
        expect(p.text().trim()).toBe(titulo);
    });

    test('debe de tener la imagen igual a la url y al src', () => {
        const img = wrapper.find("img");
        expect(img.prop("src")).toBe(url);
        expect(img.prop("alt")).toBe(titulo);
    });

    test('debe de tener la clase "animate__fadeIn"', () => {
        const div = wrapper.find("div");
        expect(div.prop("className")).toContain("animate__fadeIn");
    });
    
    
    
});

