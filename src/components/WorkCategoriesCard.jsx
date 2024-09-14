import Link from 'next/link';
import classes from './WorkCategoriesCard.module.css';
import CategoryCard from './CategoryCard';

const WorkCategoriesCard = ({ title, imageCard, imageCardOverlay }) => {
	return (
		<div className={classes.galleryItem}>
			<Link href={title}>
				<CategoryCard url={imageCard} />
				<div className={classes.galleryItemOverlay}>
					<CategoryCard url={imageCardOverlay} />
				</div>
			</Link>
		</div>
	);
};

export default WorkCategoriesCard;
