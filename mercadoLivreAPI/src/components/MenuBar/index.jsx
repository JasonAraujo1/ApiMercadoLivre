import React from "react";
import Categories from "../Categories";
import { useState } from "react";



export default function MenuBar({categories}) {
	function handleSearch() {
		fetchApiSearchInput(inputSearchvalue);
	}
	return (
		<div className=" bg-amber-200 ">
			<div className="p-14 flex justify-between max-w-[1280px]  mx-auto gap-3">
				<Categories categories = {categories} />
				<div className="flex items-center">
					<input
						type="search"
						className="border-neutral-950 border-2 bg-white p-1 outline-0 w-full sm:w-10 md:w-50 "
					/>
					<button className=" flex border-neutral-950 border-2 bg-white p-1">
						<span className="material-symbols-outlined cursor-pointer">
							search
						</span>
					</button>
				</div>
			</div>
		</div>
	);
}
