// TODO: iframe not working

import { useMemo, useState } from 'react';
import Image from 'next/image';
import classes from '@/styles/Page.module.css';
import styles from './WorksList.module.css';
import LinkYoutube from './LinkYoutube';

const CustomGrid = ({ work }) => {
	const [imageData, setImageData] = useState([]);

	const onLoadImage = (e, index, id) => {
		const newWidth = (e.target.offsetWidth * 500) / e.target.offsetHeight;
		console.log(id, newWidth);
		const newImageData = [...imageData];
		newImageData[index] = newWidth;
		setImageData(newImageData);
	};

	const calculatedWidthPercent = useMemo(() => {
		const sum = imageData.reduce((partialSum, a) => partialSum + a, 0);
		const newCalculated = imageData.map((data) => (data * 100) / sum);

		return newCalculated;
	}, [imageData]);

	return (
		<div className={classes.artworkContainer}>
			{work.map((workItem, index) =>
				workItem.type === 'image' ? (
					<Image
						key={workItem.url}
						width={0}
						height={0}
						style={{
							height: 'auto',
							flex: `${
								calculatedWidthPercent?.[index]
									? `${calculatedWidthPercent[index]}%`
									: '100%'
							} 1 1`,
						}}
						src={workItem.url}
						alt="artwork"
						// สร้าง fn มาครอบเพื่อรับ parameter จาก callback แล้วส่งไป fn ข้างบนอีกที
						onLoad={(event) => onLoadImage(event, index, workItem.id)}
					/>
				) : (
					<div
						key={workItem.url}
						style={{
							height: 'auto',
							flex: `${
								calculatedWidthPercent?.[index]
									? `${calculatedWidthPercent[index]}%`
									: '100%'
							} 1 1`,
						}}
					>
						{/* <div
							className={styles.videoItem}
							style={
								workItem.width &&
								workItem.height && {
									paddingBottom: `${(workItem.height * 100) / workItem.width}%`,
								}
							}
						>
							<iframe
								onLoad={(event) => onLoadImage(event, index)}
								src={workItem.url}
								title="YouTube video player"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowFullScreen
							/>
						</div> */}
						<LinkYoutube
							style={
								workItem.width &&
								workItem.height && {
									paddingBottom: `${(workItem.height * 100) / workItem.width}%`,
								}
							}
							workItem={workItem.url}
							onLoadImage={onLoadImage}
						/>
					</div>
				)
			)}
		</div>
	);
};

export default CustomGrid;
