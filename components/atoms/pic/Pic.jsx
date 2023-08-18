import Image from 'next/image';
import clsx from 'clsx';
import styles from './Pic.module.scss';
import Link from 'next/link';
import { BarLoader } from 'react-spinners';
import { useState } from 'react';

//react-spinners
export function Pic({ imgSrc, style, imgTxt, children, priority = false, className, url }) {
	const [IsLoaded, setIsLoaded] = useState(false);
	// 해당 아톰 컴포넌트가 호출되는 위치에서의 className props를 내부로 전달.
	return (
		<div className={clsx(styles.pic, className)} style={style}>
			<Image
				src={imgSrc}
				alt={imgSrc}
				priority={priority}
				fill
				sizes='(max-width: 768px) 100vw, (max-width:1200px) 50vw, 33vw'
				onLoadingComplete={() => setIsLoaded(true)}
			/>
			{imgTxt && (
				<>
					<aside></aside>
					{url ? (
						<h2>
							<Link href={url}>{imgTxt}</Link>
						</h2>
					) : (
						<h2>{imgTxt}</h2>
					)}
				</>
			)}
			{children && (
				<>
					<aside></aside>
					{url ? <Link href={url}>{children}</Link> : children}
				</>
			)}

			{/* spinner */}
			<BarLoader
				size={100}
				color={'orange'}
				cssOverride={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%)',
				}}
				loading={!IsLoaded}
			/>
		</div>
	);
}
