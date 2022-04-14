/*
 * @Author: qianlong github:https://github.com/LINGyue-dot
 * @Date: 2022-04-14 19:48:06
 * @LastEditors: qianlong github:https://github.com/LINGyue-dot
 * @LastEditTime: 2022-04-14 20:08:02
 * @Description:
 */
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import SearchInput from "./pages/search-input";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />}>
					<Route path="search-input" element={<SearchInput />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
