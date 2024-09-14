import WorksList from '@/components/WorksList';
import classes from '@/styles/Page.module.css';

const DUMMY_WORKS = [
	{
		id: 'kkk-1',
		media: [
			{
				id: 'kkk-1-1',
				url: 'https://www.youtube.com/embed/Zjc2c1zDjgs',
				type: 'iframe',
			},
		],
	},
	{
		id: 'kkk-2',
		media: [
			{
				id: 'kkk-2-1',
				url: 'https://www.youtube.com/embed/0H8MS-2BryU',
				type: 'iframe',
			},
			{
				id: 'kkk-2-2',
				url: 'https://www.youtube.com/embed/lLVjeEy1XMc',
				type: 'iframe',
			},
		],
	},
	{
		id: 'kkk-3',
		media: [
			{
				id: 'kkk-3-1',
				url: 'https://www.youtube.com/embed/CG7GzRA3N3g',
				type: 'iframe',
			},
			{
				id: 'kkk-3-2',
				url: 'https://www.youtube.com/embed/GP5mQz4bIns',
				type: 'iframe',
			},
		],
	},
	{
		id: 'kkk-4',
		media: [
			{
				id: 'kkk-4-1',
				url: 'https://www.youtube.com/embed/VKrvEo0Vjig',
				type: 'iframe',
			},
		],
	},
	{
		id: 'kkk-5',
		media: [
			{
				id: 'kkk-5-1',
				url: 'https://www.youtube.com/embed/YYzqI9lo-2Q',
				type: 'iframe',
			},
			{
				id: 'kkk-5-2',
				url: 'https://www.youtube.com/embed/WE9D6__mGcA',
				type: 'iframe',
			},
		],
	},
	{
		id: 'kkk-6',
		media: [
			{
				id: 'kkk-6-1',
				url: 'https://www.youtube.com/embed/9JoA_xSOYxs',
				type: 'iframe',
			},
			{
				id: 'kkk-6-2',
				url: 'https://www.youtube.com/embed/HMZXNu0I8eQ',
				type: 'iframe',
			},
		],
	},
];

const KKKPage = () => {
	return (
		<div className={classes.container}>
			{DUMMY_WORKS.map((work) => (
				<WorksList key={`kak-kak-page-works-list-${work.id}`} work={work} />
			))}
		</div>
	);
};

export default KKKPage;
