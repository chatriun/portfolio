import classes from './WorksList.module.css';

const LinkYoutube = ({ workItem, onLoadImage, ...restProps }) => {
	return (
		<div className={classes.videoItem} {...restProps}>
			<iframe
				onLoad={onLoadImage}
				src={workItem}
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
			/>
		</div>
	);
};

export default LinkYoutube;
