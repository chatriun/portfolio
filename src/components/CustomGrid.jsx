import { useMemo, useState } from 'react';
import Image from 'next/image';
import classes from '@/styles/Page.module.css';
import LinkYoutube from './LinkYoutube';

const CustomGrid = ({ work }) => {
	const [imageData, setImageData] = useState([]);

	const onLoadImage = (e, index) => {
		const newWidth = (e.target.offsetWidth * 500) / e.target.offsetHeight;
		const newImageData = [...imageData];
		newImageData[index] = newWidth;
		setImageData(newImageData);
	};

	const calculatedWidthPercent = useMemo(() => {
		const sum = imageData.reduce((total, a) => total + a, 0);
		const newCalculated = imageData.map((data) => (data * 100) / sum);

		return newCalculated;
	}, [imageData]);

	return (
		<div className={classes.artworkContainer}>
			{work.map((workItem, index) =>
				workItem.type === 'image' ? (
					<Image
						key={workItem.id}
						width={0}
						height={0}
						src={workItem.url}
						alt="artwork"
						style={{
							height: 'auto',
							flex: `${
								calculatedWidthPercent?.[index]
									? `${calculatedWidthPercent[index]}%`
									: '100%'
							} 1 1`,
						}}
						onLoad={(event) => onLoadImage(event, index)}
					/>
				) : (
					<div
						key={workItem.id}
						style={{
							height: 'auto',
							flex: `${
								calculatedWidthPercent?.[index]
									? `${calculatedWidthPercent[index]}%`
									: '100%'
							} 1 1`,
						}}
					>
						<LinkYoutube
							style={
								workItem.width &&
								workItem.height && {
									paddingBottom: `${(workItem.height * 100) / workItem.width}%`,
								}
							}
							workItem={workItem.url}
							onLoadImage={(event) => {
								onLoadImage(event, index);
							}}
						/>
					</div>
				)
			)}
		</div>
	);
};

export default CustomGrid;
