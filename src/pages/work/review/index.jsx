import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';

const ReviewPage = () => {
	const review = [
		{
			name: 'review-1',
			url: ['https://www.youtube.com/embed/Tx8vsMuOalI'],
		},
		{
			name: 'review-2',
			url: [
				'https://www.youtube.com/embed/e9UrF6JpLJs',
				'https://www.youtube.com/embed/okpNKjQMBiM',
			],
		},
		{
			name: 'review-3',
			url: ['https://www.youtube.com/embed/NTUfidIJk6s'],
		},
		{
			name: 'review-4',
			url: [
				'https://www.youtube.com/embed/h2-OMlWJL1E',
				'https://www.youtube.com/embed/sDn0TE9FVP4',
			],
		},
	];

	return (
		<div className={styles.container}>
			<main className={styles.pageShow}>
				{review.map((row) => (
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

export default ReviewPage;
