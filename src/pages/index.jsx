import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';

const HomePage = () => {
	return (
		<>
			<main>
				<div className={styles.videoItem}>
					<iframe
						src="https://www.youtube.com/embed/wQ65XGhoM78"
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen
					></iframe>
				</div>
				<div className={styles.buttonContainer}>
					<Link href="/work" className={styles.redBtn}>
						KNOW ME MORE
					</Link>
				</div>
			</main>
		</>
	);
};

export default HomePage;
