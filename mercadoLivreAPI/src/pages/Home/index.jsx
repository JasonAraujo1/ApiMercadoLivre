import { useState, useEffect } from "react";
import MenuBar from "../../components/MenuBar";
import ProductCards from "../../components/ProductCards";
import { fetchAllCategories, fetchByQuery, fetchCategorySelected } from "../../services/fetchApi";

export default function Home() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
	const [categoryProducts, setCategoryProducts] = useState([])

    useEffect(() => {
        async function onLoad() {
            const data = await fetchByQuery();
            setProducts(data.results);

            const dataCategories = await fetchAllCategories();
            setCategories(dataCategories);

            console.log("Categorias:", dataCategories);

            if (dataCategories) {
                const categoryId = dataCategories[0].id; 
                const categoryProducts = await fetchCategorySelected(categoryId);
                console.log("Produtos da Categoria:", categoryProducts);
				setCategoryProducts(categoryProducts)
            }
        }

        onLoad();
    }, []);

    return (
        <div>
            <MenuBar categories={categories}  />
            <h1 className="text-3xl text-center p-12 font-medium">
                Simulado FrontEnd
            </h1>
            <ProductCards products={products} categoryProducts={categoryProducts} />
        </div>
    );
}
