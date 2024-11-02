import styles from './header.module.css'

const Header = () => {
	return (
		<>
			<div className={styles.header}>
				<h1>Музей Івано-Франківськ</h1>
				<button>про музей</button>
				<button>контакти</button>
				<button></button>
			</div>
		</>
	)
}

export default Header
