/*
 * @Author: qianlong github:https://github.com/LINGyue-dot
 * @Date: 2022-04-14 20:01:22
 * @LastEditors: qianlong github:https://github.com/LINGyue-dot
 * @LastEditTime: 2022-04-14 20:10:38
 * @Description:
 */

import { Link, Outlet } from "react-router-dom";

const Home = () => {
	return (
		<>
			<div style={{ marginBottom: "50px" }}>
				<Link to={"/search-input"}>搜索框设计</Link>
			</div>

			<Outlet />
		</>
	);
};

export default Home;
