import { useState, useEffect } from 'react';

function ApiComputerCategory() {
  
    const [products, setProducts] = useState([]);

	const fetchApi = async () => {
		try {
			const response = await fetch(
				"https://api.mercadolibre.com/sites/MLB/search?q=computador",
			);
			const data = await response.json();
			// console.log(data);
			setProducts(data);
		} catch (error) {
			console.log("Erro fetching data", error);
		}
	};

	

	useEffect(() => {
		fetchApi();
	}, []);
	
    return {products }
  
}

export default ApiComputerCategory