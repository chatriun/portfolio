import styles from '@/styles/Home.module.css';

const VlogPage = () => {
	const vlog = [
		{
			name: 'vlog-1',
			url: ['https://www.youtube.com/embed/8fgVFDo1DAA'],
		},
		{
			name: 'vlog-2',
			url: [
				'https://www.youtube.com/embed/4gWZRsFbmu0',
				'https://www.youtube.com/embed/1ctASxr5tPc',
			],
		},
		{
			name: 'vlog-3',
			url: ['https://www.youtube.com/embed/HDCEUG0Nnj0'],
		},
		{
			name: 'vlog-4',
			url: [
				'https://www.youtube.com/embed/NUo5pnw0-qM',
				'https://www.youtube.com/embed/y3ni66nlscI',
			],
		},
		{
			name: 'vlog-5',
			url: ['https://www.youtube.com/embed/z8HrQwUpV_I'],
		},
		{
			name: 'vlog-6',
			url: [
				'https://www.youtube.com/embed/in9CTrxbhHM',
				'https://www.youtube.com/embed/oCd3DOftj34',
			],
		},
	];

	return (
		<div>
			<main className={styles.pageShow}>
				{vlog.map((row) => (
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

export default VlogPage;
