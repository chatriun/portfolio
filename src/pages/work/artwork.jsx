import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useMemo } from 'react';

const ImageRow = ({ mediaArtworks }) => {
	const [imageData, setImageData] = useState([]);
	const onLoadImage = (e, index) => {
		const newWidth = (e.target.width * 500) / e.target.height;
		const newImageData = [...imageData];
		newImageData[index] = newWidth;
		setImageData(newImageData);
	};
	const calculatedWidthPercent = useMemo(() => {
		// (partialSum, a) => partialSum + a, 0 อันนี้เขียนแบบ short return
		const sum = imageData.reduce((partialSum, a) => partialSum + a, 0);
		// สามาดเขียน return imageData.map((data) => (data * 100) / sum) ก็ได้เพราะไม่จำเป็นต้องสร้างตัวแปรเพื่อ return
		const newCalculated = imageData.map((data) => {
			return (data * 100) / sum;
		});
		return newCalculated;
	}, [imageData]);

	return (
		<div className={styles.gifContainer}>
			{mediaArtworks.map((media, index) => (
				<Image
					key={media.url}
					width={0}
					height={0}
					style={{
						// width: calculatedWidthPercent?.[index]
						// 	? `${calculatedWidthPercent?.[index]}%`
						// 	: '100%',
						height: 'auto',
						flex: `${
							calculatedWidthPercent?.[index]
								? `${calculatedWidthPercent[index]}%`
								: '100%'
						} 1 1`,
					}}
					src={media.url}
					alt="artwork"
					// สร้าง fn มาครอบเพื่อรับ parameter จาก callback แล้วส่งไป fn ข้างบนอีกที
					onLoad={(event) => onLoadImage(event, index)}
				/>
			))}
		</div>
	);
};

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
