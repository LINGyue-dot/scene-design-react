/*
 * @Author: qianlong github:https://github.com/LINGyue-dot
 * @Date: 2022-04-14 20:01:57
 * @LastEditors: qianlong github:https://github.com/LINGyue-dot
 * @LastEditTime: 2022-04-14 21:12:12
 * @Description:
 */

import { ChangeEvent, useEffect, useState } from "react";
import { useDebounce } from "./utils";

/**
 * 监听 input 的 value ，将 value 传入节流函数，节流函数再返回一个新 state
 * 监听这个新 state ，这个新 state 就是请求数据的 state
 * @returns
 */

const SearchInput = () => {
	const [params, setParams] = useState("");

	const [mockMessage, setMockMessage] = useState<number | undefined>();

	// 将 params 节流后的值
	const debouncedValue = useDebounce(params, 3000);
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setParams(event.target.value);
	};

	useEffect(() => {
		// 节流后的值变化
		// 发起真正的 api 请求
		console.log("发起后端请求");
		setMockMessage(Date.now());
	}, [debouncedValue]);

	return (
		<>
			<div style={{ padding: "10px" }}>
				<input type="text" value={params} onChange={handleChange} />
			</div>
			<div>最后一次发起请求的时间戳为：{mockMessage}</div>
		</>
	);
};

export default SearchInput;
