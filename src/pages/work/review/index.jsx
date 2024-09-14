import WorksList from '@/components/WorksList';
import classes from '@/styles/Page.module.css';

const DUMMY_WORKS = [
	{
		id: 'review-1',
		media: [
			{
				id: 'review-1-1',
				url: 'https://www.youtube.com/embed/Tx8vsMuOalI',
				type: 'iframe',
			},
		],
	},
	{
		id: 'review-2',
		media: [
			{
				id: 'review-2-1',
				url: 'https://www.youtube.com/embed/e9UrF6JpLJs',
				type: 'iframe',
			},
			{
				id: 'review-2-2',
				url: 'https://www.youtube.com/embed/okpNKjQMBiM',
				type: 'iframe',
			},
		],
	},
	{
		id: 'review-3',
		media: [
			{
				id: 'review-3-1',
				url: 'https://www.youtube.com/embed/NTUfidIJk6s',
				type: 'iframe',
			},
		],
	},
	{
		id: 'review-4',
		media: [
			{
				id: 'review-4-1',
				url: 'https://www.youtube.com/embed/h2-OMlWJL1E',
				type: 'iframe',
			},
			{
				id: 'review-4-2',
				url: 'https://www.youtube.com/embed/sDn0TE9FVP4',
				type: 'iframe',
			},
		],
	},
];

const ReviewPage = () => {
	return (
		<div className={classes.container}>
			{DUMMY_WORKS.map((work) => (
				<WorksList key={`review-page-works-list-${work.id}`} work={work} />
			))}
		</div>
	);
};

export default ReviewPage;
