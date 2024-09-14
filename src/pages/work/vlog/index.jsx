import WorksList from '@/components/WorksList';
import classes from '@/styles/Page.module.css';

const DUMMY_WORKS = [
	{
		id: 'vlog-1',
		media: [
			{
				id: 'vlog-1-1',
				url: 'https://www.youtube.com/embed/8fgVFDo1DAA',
				type: 'iframe',
			},
		],
	},
	{
		id: 'vlog-2',
		media: [
			{
				id: 'vlog-2-1',
				url: 'https://www.youtube.com/embed/4gWZRsFbmu0',
				type: 'iframe',
			},
			{
				id: 'vlog-2-2',
				url: 'https://www.youtube.com/embed/1ctASxr5tPc',
				type: 'iframe',
			},
		],
	},
	{
		id: 'vlog-3',
		media: [
			{
				id: 'vlog-3-1',
				url: 'https://www.youtube.com/embed/HDCEUG0Nnj0',
				type: 'iframe',
			},
		],
	},
	{
		id: 'vlog-4',
		media: [
			{
				id: 'vlog-4-1',
				url: 'https://www.youtube.com/embed/NUo5pnw0-qM',
				type: 'iframe',
			},
			{
				id: 'vlog-4-2',
				url: 'https://www.youtube.com/embed/y3ni66nlscI',
				type: 'iframe',
			},
		],
	},
	{
		id: 'vlog-5',
		media: [
			{
				id: 'vlog-5-1',
				url: 'https://www.youtube.com/embed/z8HrQwUpV_I',
				type: 'iframe',
			},
		],
	},
	{
		id: 'vlog-6',
		media: [
			{
				id: 'vlog-6-1',
				url: 'https://www.youtube.com/embed/in9CTrxbhHM',
				type: 'iframe',
			},
			{
				id: 'vlog-6-2',
				url: 'https://www.youtube.com/embed/oCd3DOftj34',
				type: 'iframe',
			},
		],
	},
];

const VlogPage = () => {
	return (
		<div className={classes.container}>
			{DUMMY_WORKS.map((work) => (
				<WorksList key={`vlog-page-works-list-${work.id}`} work={work} />
			))}
		</div>
	);
};

export default VlogPage;
