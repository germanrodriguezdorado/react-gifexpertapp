import { shallow } from "enzyme";
import GifGrid from "../../componentes/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe('Funciones de test que prueban el componente GifGrid', () => {
    
    const category = "Spiderman";
    //const wrapper = shallow(<GifGrid category={ category } />);

    test('El componente debe haber sido renderizado correctamente.', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    });


    test('Debe de mostrar items cuando se cargan imagenes con useFetchGifs', () => {
        
        const gifs = [{
            id: "1",
            url: "http://localhost/cualquier/cosa.jpg",
            title: "Cualquier cosa"
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("p").exists()).toBe(false);
        expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
    });
    
    
});
