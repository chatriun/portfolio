import styles from '@/styles/Home.module.css';

const KnowledgePage = () => {
	const knowledge = [
		{
			name: 'knowledge-1',
			url: ['https://www.youtube.com/embed/aPC4_q_oJiY'],
		},
		{
			name: 'knowledge-2',
			url: [
				'https://www.youtube.com/embed/1rnOxt_e3hg',
				'https://www.youtube.com/embed/zoplF_qfTsk',
			],
		},
		{
			name: 'knowledge-3',
			url: ['https://www.youtube.com/embed/ueMj_a8yZV4'],
		},
		{
			name: 'knowledge-4',
			url: [
				'https://www.youtube.com/embed/G5AHUAW6YB8',
				'https://www.youtube.com/embed/Ck2CpM0qAWk',
			],
		},
	];

	return (
		<div className={styles.container}>
			<main className={styles.pageShow}>
				{knowledge.map((row) => (
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

export default KnowledgePage;
