import { useState } from "react";
import AddCategory from "./componentes/AddCategory";
import GifGrid from "./componentes/GifGrid";

const GifExpertApp = () => {

    const [categories, setCategories] = useState(["Marvel"]);

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