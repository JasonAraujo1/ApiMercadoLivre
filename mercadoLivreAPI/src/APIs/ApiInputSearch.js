import { useState, useEffect } from 'react';

function ApiComputerCategory() {
    const [productsSearch, setProductsSearch] = useState([]);

    const fetchApiSearchInput = async (productName) => {
        if (!productName) return;
        try {
            const response = await fetch(
                `https://api.mercadolibre.com/sites/MLB/search?q=${productName}`
            );
            const data = await response.json();
            console.log("PRODUTO PROCURADO:", data);
            setProductsSearch(data);
        } catch (error) {
            console.log("Erro fetching data", error);
        }
    };

    useEffect(() => {
        fetchApiSearchInput(); 
    }, []);

    return { productsSearch, fetchApiSearchInput };
}

export default ApiComputerCategory;
