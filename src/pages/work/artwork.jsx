import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';

function Home() {
	const artwork = [
		{
			name: 'artwork-1',
			media: [
				{
					url: '/images/artwork/artwork_141.gif',
					type: 'image',
					width: '1020',
					height: '580',
				},
			],
		},
		{
			name: 'artwork-2',
			media: [
				{
					url: '/images/artwork/artwork_4.gif',
					type: 'image',
					width: '1020',
					height: '580',
				},
				{
					url: '/images/artwork/artwork_95.gif',
					type: 'image',
					width: '1020',
					height: '580',
				},
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
			<main className={styles.pageArtwork}>
				{artwork.map((row) => (
					<div key={`container-${row.name}`} className={styles.videoContainer}>
						{row.media.map((media) => (
							<div
								key={`items-${media.url}`}
								className={media.type === 'iframe' ? styles.videoColumn : ''}
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
									<Image
										className={styles.gifImage}
										width={media.width}
										height={media.height}
										src={media.url}
										alt="artwork"
									/>
								)}
							</div>
						))}
					</div>
				))}
			</main>
		</div>
	);
}

export default Home;
