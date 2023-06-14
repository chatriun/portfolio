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
			type: 'image',
		},
		{
			name: 'artwork-2',
			media: [
				{
					url: '/images/artwork/artwork_4.gif',
					type: 'image',
					width: '1824',
					height: '1026',
				},
				{
					url: '/images/artwork/artwork_95.gif',
					type: 'image',
					width: '1344',
					height: '756',
				},
			],
			type: 'image',
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
				{/* {artwork.map((row) => (
					<div key={`container-${row.name}`} className={styles.videoContainer}>
						{row.media.map((media) => (
							<div
								key={`items-${media.url}`}
								className={
									media.type === 'iframe'
										? styles.videoColumn
										: styles.gifColumn
								}
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
				))} */}

				{/* type in Lv.1 */}
				{/* {artwork.map((row) => (
					<div
						key={`testContainer-${row.name}`}
						className={
							row.type === 'iframe'
								? styles.videoContainer
								: styles.gifContainer
						}
					>
						{row.media.map((media) => (
							<div
								key={`testColumn-${media.url}`}
								className={
									row.type === 'iframe' ? styles.videoColumn : styles.gifColumn
								}
							>
								{row.type === 'iframe' ? (
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
				))} */}

				{/* example */}
				<div className={styles.flexbox}>
					<div className={styles.item3}>AAA</div>
					<div className={styles.item4}>BBB</div>
				</div>
				{/* iframe */}
				<div className={styles.videoContainer}>
					<div className={styles.videoColumn}>
						<div className={styles.videoItem}>
							<iframe
								src="https://www.youtube.com/embed/5M9IERFJo3k"
								title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowFullScreen
							></iframe>
						</div>
					</div>
					<div className={styles.videoColumn}>
						<div className={styles.videoItem}>
							<iframe
								src="https://www.youtube.com/embed/5M9IERFJo3k"
								title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowFullScreen
							></iframe>
						</div>
					</div>
				</div>

				{/* gif */}
				<div className={styles.videoContainer}>
					<div className={styles.gifContainer}>
						<div className={styles.gifItemAA}>
							<Image
								className={styles.gifImage}
								width={1020}
								height={580}
								src="/images/artwork/artwork_141.gif"
								alt="artwork"
							/>
						</div>
					</div>
				</div>
				<div className={styles.videoContainer}>
					<div className={styles.gifContainer}>
						<div className={styles.gifItemAA}>
							<Image
								className={styles.gifImage}
								width={1824}
								height={1026}
								src="/images/artwork/artwork_4.gif"
								alt="artwork"
							/>
						</div>
						<div className={styles.gifItemAA}>
							<Image
								className={styles.gifImage}
								width={1824}
								height={1026}
								src="/images/artwork/artwork_95.gif"
								alt="artwork"
							/>
						</div>
					</div>
				</div>
				<div className={styles.gifContainer}>
					<div className={styles.gifItemAA}>
						<Image
							className={styles.gifImage}
							width={960}
							height={540}
							src="/images/artwork/artwork_5.gif"
							alt="artwork"
						/>
					</div>
					<div className={styles.gifItemAA}>
						<Image
							className={styles.gifImage}
							width={650}
							height={650}
							src="/images/artwork/artwork_137.gif"
							alt="artwork"
						/>
					</div>
				</div>
				<div className={styles.gifContainer}>
					<div className={styles.gifItemAA}>
						<Image
							className={styles.gifImage}
							width={1536}
							height={864}
							src="/images/artwork/artwork_5-2.gif"
							alt="artwork"
						/>
					</div>
					<div className={styles.gifItemAA}>
						<Image
							className={styles.gifImage}
							width={960}
							height={540}
							src="/images/artwork/artwork_5-3.gif"
							alt="artwork"
						/>
					</div>
				</div>
				<div className={styles.gifContainer}>
					<div className={styles.gifItem}>
						<Image
							className={styles.gifImage}
							width={1176}
							height={1080}
							src="/images/artwork/artwork_sara.gif"
							alt="artwork"
						/>
					</div>
					<div className={styles.gifItem}>
						<Image
							className={styles.gifImage}
							width={864}
							height={486}
							src="/images/artwork/artwork_135.gif"
							alt="artwork"
						/>
					</div>
				</div>
			</main>
		</div>
	);
}

export default Home;
