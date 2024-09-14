import WorksList from '@/components/WorksList';
import classes from '@/styles/Page.module.css';

const DUMMY_WORKS = [
	{
		id: 'shopping-1',
		media: [
			{
				id: 'shopping-1-1',
				url: 'https://www.youtube.com/embed/OIhFqS9ruBo',
				type: 'iframe',
			},
		],
	},
	{
		id: 'shopping-2',
		media: [
			{
				id: 'shopping-2-1',
				url: 'https://www.youtube.com/embed/dh52sofjS74',
				type: 'iframe',
			},
			{
				id: 'shopping-2-2',
				url: 'https://www.youtube.com/embed/N0EShmZBnnY',
				type: 'iframe',
			},
		],
	},
	{
		id: 'shopping-3',
		media: [
			{
				id: 'shopping-3-1',
				url: 'https://www.youtube.com/embed/GS0zWQHumhY',
				type: 'iframe',
			},
		],
	},
	{
		id: 'shopping-4',
		media: [
			{
				id: 'shopping-4-1',
				url: 'https://www.youtube.com/embed/5M9IERFJo3k',
				type: 'iframe',
			},
			{
				id: 'shopping-4-2',
				url: 'https://www.youtube.com/embed/alsnrkcIl4Y',
				type: 'iframe',
			},
		],
	},
	{
		id: 'shopping-5',
		media: [
			{
				id: 'shopping-5-1',
				url: 'https://www.youtube.com/embed/kWyM6TFEVk4',
				type: 'iframe',
			},
			{
				id: 'shopping-5-2',
				url: 'https://www.youtube.com/embed/FR9C8HuDP2g',
				type: 'iframe',
			},
		],
	},
];

const ShoppingPage = () => {
	return (
		<div className={classes.container}>
			{DUMMY_WORKS.map((work) => (
				<WorksList key={`shopping-page-works-list-${work.id}`} work={work} />
			))}
		</div>
	);
};

export default ShoppingPage;
