import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';

function Home() {
	const shopping = [
		{
			name: 'shopping-1',
			url: ['https://www.youtube.com/embed/OIhFqS9ruBo'],
		},
		{
			name: 'shopping-2',
			url: [
				'https://www.youtube.com/embed/dh52sofjS74',
				'https://www.youtube.com/embed/N0EShmZBnnY',
			],
		},
		{
			name: 'shopping-3',
			url: ['https://www.youtube.com/embed/GS0zWQHumhY'],
		},
		{
			name: 'shopping-4',
			url: [
				'https://www.youtube.com/embed/5M9IERFJo3k',
				'https://www.youtube.com/embed/alsnrkcIl4Y',
			],
		},
		{
			name: 'shopping-5',
			url: [
				'https://www.youtube.com/embed/kWyM6TFEVk4',
				'https://www.youtube.com/embed/FR9C8HuDP2g',
			],
		},
	];

	return (
		<div className={styles.container}>
			<Head>
				<title>ANYAWEE SR</title>
				<meta name="description" content="Portfolio of Anyawee Sr." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="images\icon\FavItem-2.png" />
			</Head>
			<header className={styles.header}>
				<div className={styles.left}>
					<Link href="/">
						<h1>ANYAWEE SR.</h1>
					</Link>
				</div>
				<div className={styles.right}>
					<nav>
						<ul>
							<li>
								<Link href="/work">WORK</Link>
							</li>
							<li>
								<Link href="/me">ABOUT ME</Link>
							</li>
						</ul>
					</nav>
				</div>
			</header>
			<main className={styles.pageShow}>
				{shopping.map((row) => (
					<div key={`container-${row.name}`} className={styles.videoContainer}>
						{row.url.map((url) => (
							<div
								key={`items-${row.name}-${url}`}
								className={styles.videoColumn}
							>
								<div className={styles.videoItem}>
									<iframe
										src={url}
										title="YouTube video player"
										frameBorder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
										allowFullScreen
									></iframe>
								</div>
							</div>
						))}
					</div>
				))}
			</main>
		</div>
	);
}

export default Home;
