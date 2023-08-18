import Head from 'next/head';
import styles from './style.module.scss';

export default function favorites() {
	return (
		<>
			<Head>
				<title>Favorites Page</title>
			</Head>

			<div className={styles.box}>My favorites</div>
		</>
	);
}
