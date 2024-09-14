import WorksList from '@/components/WorksList';
import classes from '@/styles/Page.module.css';

const DUMMY_WORKS = [
	{
		id: 'knowledge-1',
		media: [
			{
				id: 'knowledge-1-1',
				url: 'https://www.youtube.com/embed/aPC4_q_oJiY',
				type: 'iframe',
			},
		],
	},
	{
		id: 'knowledge-2',
		media: [
			{
				id: 'knowledge-2-1',
				url: 'https://www.youtube.com/embed/1rnOxt_e3hg',
				type: 'iframe',
			},
			{
				id: 'knowledge-2-2',
				url: 'https://www.youtube.com/embed/zoplF_qfTsk',
				type: 'iframe',
			},
		],
	},
	{
		id: 'knowledge-3',
		media: [
			{
				id: 'knowledge-3-1',
				url: 'https://www.youtube.com/embed/ueMj_a8yZV4',
				type: 'iframe',
			},
		],
	},
	{
		id: 'knowledge-4',
		media: [
			{
				id: 'knowledge-4-1',
				url: 'https://www.youtube.com/embed/G5AHUAW6YB8',
				type: 'iframe',
			},
			{
				id: 'knowledge-4-2',
				url: 'https://www.youtube.com/embed/Ck2CpM0qAWk',
				type: 'iframe',
			},
		],
	},
];

const KnowledgePage = () => {
	return (
		<div className={classes.container}>
			{DUMMY_WORKS.map((work) => (
				<WorksList key={`knowledge-page-works-list-${work.id}`} work={work} />
			))}
		</div>
	);
};

export default KnowledgePage;
