import Title from '../../atoms/text/Title';
import Navbar from '../../molecules/Navbar/Navbar';
import styles from './Header.module.scss';
import clsx from 'clsx';

function Header() {
	return (
		<header className={clsx(styles.header)}>
			<Title url={'/'} type={'logo'}>
				NARRATIVE
			</Title>
			<Navbar names={['Find Recipe', 'Favorites']} gap={20} />
		</header>
	);
}

export default Header;
