// TODO: search set default "select indentation" for p'Ake
import styles from '@/styles/Home.module.css';
import WorkCategoriesCard from '@/components/WorkCategoriesCard';

const DUMMY_PAGES = [
	{
		id: 'category-show',
		title: '/work/show',
		imageCard: '/images/coverPage/Cover_1-Show.png',
		imageCardOverlay: '/images/coverPage/hover/HCover_1-Show.png',
	},
	{
		id: 'category-travel',
		title: '/work/travel',
		imageCard: '/images/coverPage/Cover_2-Travel.png',
		imageCardOverlay: '/images/coverPage/hover/HCover_2-Travel.png',
	},
	{
		id: 'category-challenge',
		title: '/work/challenge',
		imageCard: '/images/coverPage/Cover_3-Challenge.png',
		imageCardOverlay: '/images/coverPage/hover/HCover_3-Challenge.png',
	},
	{
		id: 'category-shopping',
		title: '/work/shopping',
		imageCard: '/images/coverPage/Cover_4-Shopping.png',
		imageCardOverlay: '/images/coverPage/hover/HCover_4-Shopping.png',
	},
	{
		id: 'category-kak-kak-kitchen',
		title: '/work/kak-kak-kitchen',
		imageCard: '/images/coverPage/Cover_5-KKK.png',
		imageCardOverlay: '/images/coverPage/hover/HCover_5-KKK.png',
	},
	{
		id: 'category-review',
		title: '/work/review',
		imageCard: '/images/coverPage/Cover_6-Review.png',
		imageCardOverlay: '/images/coverPage/hover/HCover_6-Review.png',
	},
	{
		id: 'category-vlog',
		title: '/work/vlog',
		imageCard: '/images/coverPage/Cover_7-Vlog.png',
		imageCardOverlay: '/images/coverPage/hover/HCover_7-Vlog.png',
	},
	{
		id: 'category-knowledge',
		title: '/work/knowledge',
		imageCard: '/images/coverPage/Cover_8-Knowledge.png',
		imageCardOverlay: '/images/coverPage/hover/HCover_8-Knowledge.png',
	},
	{
		id: 'category-artwork',
		title: '/work/artwork',
		imageCard: '/images/coverPage/Cover_9-Artwork.png',
		imageCardOverlay: '/images/coverPage/hover/HCover_9-Artwork.png',
	},
];

const HomePage = () => {
	return (
		<main className={styles.gallery}>
			{DUMMY_PAGES.map((category) => (
				<WorkCategoriesCard
					key={category.id}
					title={category.title}
					imageCard={category.imageCard}
					imageCardOverlay={category.imageCardOverlay}
				/>
			))}
		</main>
	);
};

export default HomePage;
