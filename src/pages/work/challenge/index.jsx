import WorksList from '@/components/WorksList';
import classes from '@/styles/Page.module.css';
import styles from '@/styles/Home.module.css';

const DUMMY_WORKS = [
	{
		id: 'challenge-1',
		media: [
			{
				id: 'challenge-1-1',
				url: 'https://www.youtube.com/embed/Xz350Oug7S8',
				type: 'iframe',
			},
		],
	},
	{
		id: 'challenge-2',
		media: [
			{
				id: 'challenge-2-1',
				url: 'https://www.youtube.com/embed/kXJCaSb8Jd0',
				type: 'iframe',
			},
			{
				id: 'challenge-2-2',
				url: 'https://www.youtube.com/embed/EWJDpvKQmoU',
				type: 'iframe',
			},
		],
	},
	{
		id: 'challenge-3',
		media: [
			{
				id: 'challenge-3-1',
				url: 'https://www.youtube.com/embed/0H8MS-2BryU',
				type: 'iframe',
			},
			{
				id: 'challenge-3-2',
				url: 'https://www.youtube.com/embed/GNv3EIyBYG4',
				type: 'iframe',
			},
		],
	},
	{
		id: 'challenge-4',
		media: [
			{
				id: 'challenge-4-1',
				url: 'https://www.youtube.com/embed/8sHVYeezavA',
				type: 'iframe',
			},
		],
	},
	{
		id: 'challenge-5',
		media: [
			{
				id: 'challenge-5-1',
				url: 'https://www.youtube.com/embed/DSsAb0Njdwg',
				type: 'iframe',
			},
			{
				id: 'challenge-5-2',
				url: 'https://www.youtube.com/embed/Srw9SVSqAAQ',
				type: 'iframe',
			},
		],
	},
];

const ChallengePage = () => {
	return (
		<div className={classes.container}>
			{DUMMY_WORKS.map((work) => (
				<WorksList key={`challenge-page-works-list-${work.id}`} work={work} />
			))}
			{/* TODO: back to top button */}
			<div className={styles.btt}>
				<nav>
					<ul>
						<li>
							<span className="material-icons">arrow_upward</span>
						</li>
						<li>BACK TO TOP</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default ChallengePage;
