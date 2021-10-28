import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";


describe('Pruebas inherentes al componente <GifExpertApp/>', () => {
    
    test('El componente se debe generar correctamente', () => {
        const wrapper = shallow(<GifExpertApp/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar una lista de categorias', () => {
       
        const categories = ["Marvel", "Hulk"];
        const wrapper = shallow(<GifExpertApp defaultCategories={ categories }/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("GifGrid").length).toBe(categories.length);


    });
    
    


});
