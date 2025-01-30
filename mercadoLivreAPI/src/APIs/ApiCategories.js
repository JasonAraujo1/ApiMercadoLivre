import React, { useState, useEffect } from "react";

function ApiCategories() {
	const [categories, setCategories] = useState(null); // detalhes da categoria
	const [categoriesList, setCategoriesList] = useState(null); // lista de categorias
	const [selectedCategoryId, setSelectedCategoryId] = useState(null); // ID da categoria 

	//detalhes da categoria selecionada
	const fetchCategoryDetails = async () => {
		if (!selectedCategoryId) return; // confirma ID antes de buscar

		try {
			const response = await fetch(`https://api.mercadolibre.com/categories/${selectedCategoryId}`);
			const data = await response.json();
			console.log("Detalhes da Categoria:", data);
			setCategories(data);
		} catch (error) {
			console.log("Erro ao buscar detalhes da categoria:", error);
		}
	};

	// Busca a lista de categorias disponíveis
	const fetchCategoriesList = async () => {
		try {
			const response = await fetch("https://api.mercadolibre.com/sites/MLB/categories");
			const data = await response.json();
			console.log("Lista de Categorias:", data);
			setCategoriesList(data);
			if (data.length > 0) {
				setSelectedCategoryId(data.map(category => category.id));
			  } 
		} catch (error) {
			console.log("Erro ao buscar lista de categorias:", error);
		}
	};

	
	useEffect(() => {
		fetchCategoriesList();
	}, []);

	
	useEffect(() => {
		fetchCategoryDetails();
	}, [selectedCategoryId]);

	return { categories, categoriesList, setSelectedCategoryId };
}

export default ApiCategories;
