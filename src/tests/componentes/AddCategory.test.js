import { shallow } from "enzyme";
import AddCategory from "../../componentes/AddCategory";
import "@testing-library/jest-dom";

describe('Pruebas correspondientes al AddCategory', () => {
    
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });


    test('El componente se debe renderizar correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find("input");
        const value = "Hola Mundo!";
        input.simulate("change", { 
            target: { 
                value: value
            } 
        });

    });

    test('No debe postear la info con submit', () => {
        wrapper.find("form").simulate("submit", { preventDefault: () => {} })
        expect(setCategories).not.toHaveBeenCalled();
    });


    test("Debe de llamar al setCategories y limpiar la caja de texto", () => {

        const input = wrapper.find("input");
        const value = "Captain America";
        input.simulate("change", {
            target: {
                value: value
            }
        });

        const form = wrapper.find("form");
        form.simulate("submit", {
            preventDefault: () => {}
        });

        expect(setCategories).toHaveBeenCalled();
        expect(input.prop("value")).toBe("");

    });
    
    
    

});
