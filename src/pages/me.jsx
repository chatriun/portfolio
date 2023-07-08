import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
import ImageRow from '@/components/ImageRow';

function Me() {
	const test = [
		[
			{
				type: 'iframe',
				url: 'https://www.youtube.com/embed/Bc89HufDol4',
			},
			{
				type: 'image',
				url: '/images/artwork/artwork_137.gif',
			},
		],
		[
			{
				type: 'iframe',
				url: 'https://www.youtube.com/embed/Bc89HufDol4',
			},
			{
				type: 'iframe',
				url: 'https://www.youtube.com/embed/Bc89HufDol4',
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
				{test.map((row, index) => (
					<ImageRow key={index} mediaArtworks={row} />
				))}
			</main>
		</div>
	);
}

export default Me;
