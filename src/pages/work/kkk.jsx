import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';

function Home() {
	const kkk = [
		{
			name: 'kkk-1',
			url: ['https://www.youtube.com/embed/Zjc2c1zDjgs'],
		},
		{
			name: 'kkk-2',
			url: [
				'https://www.youtube.com/embed/0H8MS-2BryU',
				'https://www.youtube.com/embed/lLVjeEy1XMc',
			],
		},
		{
			name: 'kkk-3',
			url: [
				'https://www.youtube.com/embed/CG7GzRA3N3g',
				'https://www.youtube.com/embed/GP5mQz4bIns',
			],
		},
		{
			name: 'kkk-4',
			url: ['https://www.youtube.com/embed/VKrvEo0Vjig'],
		},
		{
			name: 'kkk-5',
			url: [
				'https://www.youtube.com/embed/YYzqI9lo-2Q',
				'https://www.youtube.com/embed/WE9D6__mGcA',
			],
		},
		{
			name: 'kkk-6',
			url: [
				'https://www.youtube.com/embed/9JoA_xSOYxs',
				'https://www.youtube.com/embed/HMZXNu0I8eQ',
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
				{kkk.map((row) => (
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
				<div className={styles.btt}>
					<nav>
						<ul>
							<li>
								<span className="material-icons">arrow_upward</span>
							</li>
							<li>BACK TO TOP</li>
						</ul>
					</nav>
				</div>
			</main>
		</div>
	);
}

export default Home;
