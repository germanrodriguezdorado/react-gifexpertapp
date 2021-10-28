import { useState } from "react";
import AddCategory from "./componentes/AddCategory";
import GifGrid from "./componentes/GifGrid";

const GifExpertApp = ({ defaultCategories = []}) => {

    const [categories, setCategories] = useState( defaultCategories );

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }></AddCategory>
            <hr/>
            <ol>
                {
                    categories.map( category => (
                            <GifGrid 
                                key={ category }
                                category={ category }
                            />
                    ))
                }
            </ol>
            
        </>
    )
}



export default GifExpertApp;