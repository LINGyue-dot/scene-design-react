/*
 * @Author: qianlong github:https://github.com/LINGyue-dot
 * @Date: 2022-04-14 20:13:37
 * @LastEditors: qianlong github:https://github.com/LINGyue-dot
 * @LastEditTime: 2022-04-14 21:03:33
 * @Description:
 */

import { useEffect, useState } from "react";

/**
 * 原防抖函数如下
 * 防抖函数，不触发一段时间之后再进行触发
 * @param cb
 * @param delay
 */
const debounce = (cb: (...args: any) => any, delay: number) => {
  let timer: NodeJS.Timeout | null = null;

  return function (this: any, ...args: any[]) {
    timer && clearTimeout(timer);
    const ctx = this;
    timer = setTimeout(() => {
      cb.apply(ctx, args);
    }, delay);
  };
};

/**
 * 防抖 hook
 * @param value 搜索框内的值
 * @param delay
 */
export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timerout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timerout);
  }, [value, delay]);

  return debouncedValue;
};
