import Image from 'next/image';
import LinkYoutube from './LinkYoutube';
import classes from './WorksList.module.css';

const WorksList = ({ work }) => {
	return (
		<div className={classes.videoContainer}>
			{work.media.map((workItem) => (
				<div
					key={`works-list-${workItem.id}`}
					className={workItem.type === 'iframe' && classes.videoColumn}
				>
					{workItem.type === 'iframe' ? (
						<LinkYoutube workItem={workItem.url} />
					) : (
						<Image
							className={classes.gifImage}
							width={workItem.width}
							height={workItem.height}
							src={workItem.url}
							alt="travel"
						/>
					)}
				</div>
			))}
		</div>
	);
};

export default WorksList;
