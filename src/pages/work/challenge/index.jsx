import styles from '@/styles/Home.module.css';

const ChallengePage = () => {
	const challenge = [
		{
			name: 'challenge-1',
			url: ['https://www.youtube.com/embed/Xz350Oug7S8'],
		},
		{
			name: 'challenge-2',
			url: [
				'https://www.youtube.com/embed/kXJCaSb8Jd0',
				'https://www.youtube.com/embed/EWJDpvKQmoU',
			],
		},
		{
			name: 'challenge-3',
			url: [
				'https://www.youtube.com/embed/0H8MS-2BryU',
				'https://www.youtube.com/embed/GNv3EIyBYG4',
			],
		},
		{
			name: 'challenge-4',
			url: ['https://www.youtube.com/embed/8sHVYeezavA'],
		},
		{
			name: 'challenge-5',
			url: [
				'https://www.youtube.com/embed/DSsAb0Njdwg',
				'https://www.youtube.com/embed/Srw9SVSqAAQ',
			],
		},
	];

	return (
		<div className={styles.container}>
			<main className={styles.pageShow}>
				{challenge.map((row) => (
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
};

export default ChallengePage;
