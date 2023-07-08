import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import ImageRow from '@/components/ImageRow';

function Home() {
	const artwork = [
		[
			{
				type: 'image',
				url: '/images/artwork/artwork_141.gif',
			},
		],
		[
			{
				type: 'image',
				url: '/images/artwork/artwork_4.gif',
			},
			{
				type: 'image',
				url: '/images/artwork/artwork_95.gif',
			},
		],
		[
			{
				type: 'image',
				url: '/images/artwork/artwork_5.gif',
			},
			{
				type: 'image',
				url: '/images/artwork/artwork_137.gif',
			},
		],
		[
			{
				type: 'image',
				url: '/images/artwork/artwork_5-2.gif',
			},
			{
				type: 'image',
				url: '/images/artwork/artwork_5-3.gif',
			},
		],
		[
			{
				type: 'iframe',
				url: 'https://www.youtube.com/embed/Bc89HufDol4',
			},
		],
		[
			{
				type: 'image',
				url: '/images/artwork/artwork_28.gif',
			},
			{
				type: 'image',
				url: '/images/artwork/artwork_4-2.gif',
			},
		],
		[
			// ระเบิด
			{
				type: 'iframe',
				url: 'https://www.instagram.com/p/CP-n7rKqBIf/embed',
				width: '605',
				height: '1000',
			},
			{
				type: 'image',
				url: '/images/artwork/artwork_45.gif',
			},
		],
		[
			{
				type: 'image',
				url: '/images/artwork/artwork_128.gif',
			},
			{
				type: 'image',
				url: '/images/artwork/artwork_111.gif',
			},
		],
		[
			{
				type: 'image',
				url: '/images/artwork/artwork_102.gif',
			},
		],
		[
			{
				type: 'image',
				url: '/images/artwork/artwork_26.gif',
			},
			{
				type: 'image',
				url: '/images/artwork/artwork_42.gif',
			},
		],
		[
			{
				type: 'image',
				url: '/images/artwork/artwork_sara.gif',
			},
			{
				type: 'image',
				url: '/images/artwork/artwork_135.gif',
			},
		],
		[
			{
				type: 'image',
				url: '/images/artwork/artwork_121.gif',
			},
		],
		[
			{
				type: 'image',
				url: '/images/artwork/artwork_16.gif',
			},
			{
				type: 'image',
				url: '/images/artwork/artwork_19.gif',
			},
		],
		[
			{
				type: 'image',
				url: '/images/artwork/artwork_41.gif',
			},
		],
		[
			{
				type: 'image',
				url: '/images/artwork/artwork_69.gif',
			},
			{
				type: 'image',
				url: '/images/artwork/artwork_96.gif',
			},
		],
		[
			{
				type: 'image',
				url: '/images/artwork/artwork_157.gif',
			},
			{
				type: 'image',
				url: '/images/artwork/artwork_43.gif',
			},
		],
		[
			{
				type: 'image',
				url: '/images/artwork/artwork_31.gif',
			},
		],
		[
			{
				type: 'image',
				url: '/images/artwork/artwork_97.gif',
			},
			{
				type: 'image',
				url: '/images/artwork/artwork_133.gif',
			},
		],
		[
			{
				type: 'image',
				url: '/images/artwork/artwork_101.gif',
			},
			{
				type: 'image',
				url: '/images/artwork/artwork_gnd.gif',
			},
		],
		[
			{
				type: 'image',
				url: '/images/artwork/artwork_20.gif',
			},
		],
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
				{artwork.map((row, index) => (
					<ImageRow key={index} mediaArtworks={row} />
				))}
			</main>
		</div>
	);
}

export default Home;
