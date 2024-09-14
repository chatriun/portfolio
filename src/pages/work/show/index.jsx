import WorksList from '@/components/WorksList';
import classes from '@/styles/Page.module.css';

const DUMMY_WORKS = [
	{
		id: 'show-1',
		media: [
			{
				id: 'show-1-1',
				url: 'https://www.youtube.com/embed/GabZY3yBX68',
				type: 'iframe',
			},
		],
	},
	{
		id: 'show-2',
		media: [
			{
				id: 'show-2-1',
				url: 'https://www.youtube.com/embed/YCquoQMVGsc',
				type: 'iframe',
			},
			{
				id: 'show-2-2',
				url: 'https://www.youtube.com/embed/EyzE7ihdcMs',
				type: 'iframe',
			},
		],
	},
	{
		id: 'show-3',
		media: [
			{
				id: 'show-3-1',
				url: 'https://www.youtube.com/embed/hGPcvBIVcZI',
				type: 'iframe',
			},
		],
	},
	{
		id: 'show-4',
		media: [
			{
				id: 'show-4-1',
				url: 'https://www.youtube.com/embed/SxInQ7RXrxY',
				type: 'iframe',
			},
			{
				id: 'show-4-2',
				url: 'https://www.youtube.com/embed/ptPLoQ4Z04E',
				type: 'iframe',
			},
		],
	},
	{
		id: 'show-5',
		media: [
			{
				id: 'show-5-1',
				url: 'https://www.youtube.com/embed/9isFWG7llZs',
				type: 'iframe',
			},
			{
				id: 'show-5-2',
				url: 'https://www.youtube.com/embed/-cHshDX9brI',
				type: 'iframe',
			},
		],
	},
	{
		id: 'show-6',
		media: [
			{
				id: 'show-6-1',
				url: 'https://www.youtube.com/embed/OppPfO6vxmE',
				type: 'iframe',
			},
		],
	},
	{
		id: 'show-7',
		media: [
			{
				id: 'show-7-1',
				url: 'https://www.youtube.com/embed/iL997E-LPzY',
				type: 'iframe',
			},
			{
				id: 'show-7-2',
				url: 'https://www.youtube.com/embed/DJMlwMWPPcQ',
				type: 'iframe',
			},
		],
	},
];

const ShowPage = () => {
	return (
		<div className={classes.container}>
			{DUMMY_WORKS.map((work) => (
				<WorksList key={`show-page-works-list-${work.id}`} work={work} />
			))}
		</div>
	);
};

export default ShowPage;
