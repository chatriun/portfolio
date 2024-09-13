import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';

const ShowPage = () => {
	const show = [
		{
			name: 'show-1',
			url: ['https://www.youtube.com/embed/GabZY3yBX68'],
		},
		{
			name: 'show-2',
			url: [
				'https://www.youtube.com/embed/YCquoQMVGsc',
				'https://www.youtube.com/embed/EyzE7ihdcMs',
			],
		},
		{
			name: 'show-3',
			url: ['https://www.youtube.com/embed/hGPcvBIVcZI'],
		},
		{
			name: 'show-4',
			url: [
				'https://www.youtube.com/embed/SxInQ7RXrxY',
				'https://www.youtube.com/embed/ptPLoQ4Z04E',
			],
		},
		{
			name: 'show-5',
			url: [
				'https://www.youtube.com/embed/9isFWG7llZs',
				'https://www.youtube.com/embed/-cHshDX9brI',
			],
		},
		{
			name: 'show-6',
			url: ['https://www.youtube.com/embed/OppPfO6vxmE'],
		},
		{
			name: 'show-7',
			url: [
				'https://www.youtube.com/embed/iL997E-LPzY',
				'https://www.youtube.com/embed/DJMlwMWPPcQ',
			],
		},
	];

	return (
		<div className={styles.container}>
			<main className={styles.pageShow}>
				{show.map((row) => (
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
};

export default ShowPage;
