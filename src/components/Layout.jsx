import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';

const Layout = ({ children }) => {
	return (
		<main className={classes.main}>
			<MainNavigation />
			{children}
		</main>
	);
};

export default Layout;
