import classes from './WorksList.module.css';

const LinkYoutube = ({ workItem }) => {
	return (
		<div className={classes.videoItem}>
			<iframe
				src={workItem}
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
			></iframe>
		</div>
	);
};

export default LinkYoutube;
