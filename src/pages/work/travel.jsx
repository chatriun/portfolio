import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';

function Home() {
	const travel = [
		{
			name: 'travel-1',
			media: [
				{
					url: 'https://www.youtube.com/embed/SRyTMjDr5_s',
					type: 'iframe',
				},
			],
		},
		{
			name: 'travel-2',
			media: [
				{
					url: 'https://www.youtube.com/embed/XX49AQBcLRk',
					type: 'iframe',
				},
				{
					url: 'https://www.youtube.com/embed/86voUpRDQt8',
					type: 'iframe',
				},
			],
		},
		{
			name: 'travel-3',
			media: [
				{
					url: 'https://www.youtube.com/embed/H7blTyZTAYI',
					type: 'iframe',
				},
				{
					url: 'https://www.youtube.com/embed/gsFAtetESFo',
					type: 'iframe',
				},
			],
		},
		// {
		// 	name: 'travel-4',
		// 	media: [
		// 		{
		// 			url: '/images/travel/travel_38.gif',
		// 			type: 'image',
		// 		},
		// 		{
		// 			url: 'https://www.youtube.com/embed/Sa8YpBhugBo',
		// 			type: 'iframe',
		// 		},
		// 	],
		// },
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
			<main className={styles.pageTravel}>
				{travel.map((row) => (
					<div key={`container-${row.name}`} className={styles.videoContainer}>
						{row.media.map((media) => (
							<div
								key={`items-${row.name}-${media}`}
								className={styles.videoColumn}
							>
								{media.type === 'iframe' ? (
									<div className={styles.videoItem}>
										<iframe
											src={media.url}
											title="YouTube video player"
											frameBorder="0"
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
											allowFullScreen
										></iframe>
									</div>
								) : (
									<div className={styles.imageGif}>
										<Image
											width={428}
											height={315}
											src={media.url}
											alt="travel"
										/>
									</div>
								)}
							</div>
						))}
					</div>
				))}

				<div className={styles.videoContainer}>
					<div className={styles.testColumn}>
						<Image
							width={428}
							height={315}
							src="/images/travel/travel_38.gif"
							alt="travel"
						/>
					</div>
					<div className={styles.videoCol}>
						<div className={styles.testVideo}>
							<iframe
								src="https://www.youtube.com/embed/86voUpRDQt8"
								title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowFullScreen
							></iframe>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

export default Home;
