import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe('pruebas en el hook useFetchGifs', () => {

    test('Debe retornar el estado inicial', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs("Marvel") );
        const { data, loading} = result.current;

        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);

    });


    test('Debe retornar un arreglo de imagenes y el loading debe estar en false', async() => {
       
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs("Marvel"));
        await waitForNextUpdate();

        const { data, loading } = result.current;

        
        expect(data.length).toBe(10);
        expect(loading).toBe(false);

    });
    
    
    
})
