import classes from './WorksList.module.css';

const LinkYoutube = ({ workItem, style, onLoadImage }) => {
	const handleOnLoad = (e, id) => {
		onLoadImage(e, id);
	};

	const iframeElement = onLoadImage ? (
		<iframe
			onLoad={(event) => handleOnLoad(event, workItem.id)}
			src={workItem}
			title="YouTube video player"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowFullScreen
		/>
	) : (
		<iframe
			src={workItem}
			title="YouTube video player"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowFullScreen
		/>
	);

	return (
		<div className={classes.videoItem} style={style}>
			{iframeElement}
		</div>
	);
};

export default LinkYoutube;
