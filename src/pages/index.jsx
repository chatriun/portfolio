import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import LinkYoutube from '@/components/LinkYoutube';

const HomePage = () => {
	return (
		<div>
			<LinkYoutube workItem="https://www.youtube.com/embed/wQ65XGhoM78" />
			{/* TODO: button */}
			<div className={styles.buttonContainer}>
				<Link href="/work" className={styles.redBtn}>
					KNOW ME MORE
				</Link>
			</div>
		</div>
	);
};

export default HomePage;
