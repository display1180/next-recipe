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

function Text({ children, url, style, className, type, tag = 'p', isOn }) {
	// 컴포넌트 이름, 디폴트 태그명
	return React.createElement(
		tag,
		{
			className: clsx(
				styles.txt,
				className,
				nanum.variable,
				Open.variable,
				styles[`txt_${type}`],
				isOn && styles.on // 전달되는 boolean 값에 따라 고유 클래스 on 추가, module.sass가 자체적으로 고유 클래스명으로 변환하기 때문에, 부모의 클래스명을 내부 전용 css에 연결하는 게 불가
			), // 추가 클래스명
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
