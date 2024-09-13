import styles from '@/styles/Home.module.css';
import classes from '../../../styles/Page.module.css';
import Image from 'next/image';
import WorksList from '@/components/WorksList';

const DUMMY_WORKS = [
	{
		id: 'travel-1',
		media: [
			{
				id: 'travel-1-1',
				url: 'https://www.youtube.com/embed/SRyTMjDr5_s',
				type: 'iframe',
			},
		],
	},
	{
		id: 'travel-2',
		media: [
			{
				id: 'travel-2-1',
				url: 'https://www.youtube.com/embed/XX49AQBcLRk',
				type: 'iframe',
			},
		],
	},
	{
		id: 'travel-3',
		media: [
			{
				id: 'travel-3-1',
				url: 'https://www.youtube.com/embed/H7blTyZTAYI',
				type: 'iframe',
			},
			{
				id: 'travel-3-2',
				url: 'https://www.youtube.com/embed/gsFAtetESFo',
				type: 'iframe',
			},
		],
	},
	{
		id: 'travel-4',
		media: [
			{
				id: 'travel-4-1',
				url: '/images/travel/travel_38.gif',
				type: 'image',
				width: '428',
				height: '315',
			},
			{
				id: 'travel-4-2',
				url: 'https://www.youtube.com/embed/Sa8YpBhugBo',
				type: 'iframe',
			},
		],
	},
	{
		id: 'travel-5',
		media: [
			{
				id: 'travel-5-1',
				url: '/images/travel/travel_31.gif',
				type: 'image',
				width: '1020',
				height: '580',
			},
		],
	},
	{
		id: 'travel-6',
		media: [
			{
				id: 'travel-6-1',
				url: 'https://www.youtube.com/embed/2odWpfeAw88',
				type: 'iframe',
			},
			{
				id: 'travel-6-2',
				url: 'https://www.youtube.com/embed/JGY50FyXgg0',
				type: 'iframe',
			},
		],
	},
	{
		id: 'travel-7',
		media: [
			{
				id: 'travel-7-1',
				url: 'https://www.youtube.com/embed/BuT_l6mqtKw',
				type: 'iframe',
			},
		],
	},
];

const TravelPage = () => {
	const travel = [
		{
			name: 'travel-1',
			media: [
				{
					url: 'https://www.youtube.com/embed/SRyTMjDr5_s',
					type: 'iframe',
				},
			],
		},
		{
			name: 'travel-2',
			media: [
				{
					url: 'https://www.youtube.com/embed/XX49AQBcLRk',
					type: 'iframe',
				},
				{
					url: 'https://www.youtube.com/embed/86voUpRDQt8',
					type: 'iframe',
				},
			],
		},
		{
			name: 'travel-3',
			media: [
				{
					url: 'https://www.youtube.com/embed/H7blTyZTAYI',
					type: 'iframe',
				},
				{
					url: 'https://www.youtube.com/embed/gsFAtetESFo',
					type: 'iframe',
				},
			],
		},
		{
			name: 'travel-4',
			media: [
				{
					url: '/images/travel/travel_38.gif',
					type: 'image',
					width: '428',
					height: '315',
				},
				{
					url: 'https://www.youtube.com/embed/Sa8YpBhugBo',
					type: 'iframe',
				},
			],
		},
		{
			name: 'travel-5',
			media: [
				{
					url: '/images/travel/travel_31.gif',
					type: 'image',
					width: '1020',
					height: '580',
				},
			],
		},
		{
			name: 'travel-6',
			media: [
				{
					url: 'https://www.youtube.com/embed/2odWpfeAw88',
					type: 'iframe',
				},
				{
					url: 'https://www.youtube.com/embed/JGY50FyXgg0',
					type: 'iframe',
				},
			],
		},
		{
			name: 'travel-7',
			media: [
				{
					url: 'https://www.youtube.com/embed/BuT_l6mqtKw',
					type: 'iframe',
				},
			],
		},
	];

	return (
		<main className={classes.container}>
			{/* {DUMMY_WORKS.map((row) => (
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
									alt="travel"
								/>
							)}
						</div>
					))}
				</div>
			))} */}
			{/* TODO: component พัง... */}
			{DUMMY_WORKS.map((work) => (
				<WorksList key={`works-list-${work.id}`} work={work} />
			))}
		</main>
	);
};

export default TravelPage;
