import React from 'react';
import Link from 'next/link';
import styles from './Text.module.scss';
import clsx from 'clsx';
import { Nanum_Myeongjo, Open_Sans } from 'next/font/google';

const nanum = Nanum_Myeongjo({
	subsets: ['latin'],
	weight: ['400', '700'],
	preload: true,
	variable: '--font-nanum', // 직접 사용할 변수명 등록, 해당 변수명을 활용하면 클래스 등록 X
});
const Open = Open_Sans({
	subsets: ['latin'],
	weight: ['400', '700'],
	preload: true,
	variable: '--font-open', // 직접 사용할 변수명 등록, 해당 변수명을 활용하면 클래스 등록 X
});

function Text({ children, url, style, className, type, tag = 'p' }) {
	// 컴포넌트 이름, 디폴트 태그명
	return React.createElement(
		tag,
		{
			className: clsx(styles.txt, className, nanum.variable, Open.variable, styles[`tit_${type}`]), // 추가 클래스명
			style: url ? style : { ...style, transitionDuration: '0.5s' },
			onMouseEnter: (e) => (e.target.style.color = style?.hoverColor),
			onMouseLeave: (e) => (e.target.style.color = style?.color),
		},
		url
			? React.createElement(Link, { href: url, style: { transitionDuration: '0.5s' } }, children)
			: children
	);
}
export default Text; // 컴포넌트명
