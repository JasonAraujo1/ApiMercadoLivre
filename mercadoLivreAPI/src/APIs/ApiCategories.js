import React from "react";

function ApiCategories() {
	const [categories, setCategories] = useState(null);

	const fetchApi = async () => {
		try {
			const response = await fetch(
				"https://api.mercadolibre.com/sites/MLB/categories",
			);
			const data = await response.json();
			console.log(data);

			setCategories(data);
		} catch (error) {
			console.log("Erro fetching data", error);
		}
	};

	useEffect(() => {
		fetchApi();
	}, []);

	return {categories}
}

export default ApiCategories;
