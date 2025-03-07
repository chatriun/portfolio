import { useMemo, useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import VideoElement from './VideoElement';

const ImageRow = ({ mediaArtworks }) => {
	const [imageData, setImageData] = useState([]);

	const onLoadImage = (e, index) => {
		const newWidth = (e.target.offsetWidth * 500) / e.target.offsetHeight;
		setImageData((prevState) => {
			const newImageData = [...prevState];
			newImageData[index] = newWidth;

			return newImageData;
		});
	};

	const calculatedWidthPercent = useMemo(() => {
		const sum = imageData.reduce((partialSum, a) => partialSum + a, 0);
		const newCalculated = imageData.map((data) => {
			return (data * 100) / sum;
		});

		return newCalculated;
	}, [imageData]);

	return (
		<div className={styles.gifContainer}>
			{mediaArtworks.map((media, index) => {
				if (media.type === 'image') {
					return (
						<Image
							key={media.url}
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
							src={media.url}
							alt="artwork"
							// สร้าง fn มาครอบเพื่อรับ parameter จาก callback แล้วส่งไป fn ข้างบนอีกที
							onLoad={(event) => onLoadImage(event, index)}
						/>
					);
				} else if (media.type === 'vdo') {
					return (
						<div
							key={media.url}
							style={{
								height: 'auto',
								flex: `${
									calculatedWidthPercent?.[index]
										? `${calculatedWidthPercent[index]}%`
										: '100%'
								} 1 1`,
							}}
						>
							<VideoElement
								url={media.url}
								index={index}
								onSetImageData={setImageData}
							/>
						</div>
					);
				} else if (media.type === 'iframe') {
					return (
						<div
							key={media.url}
							style={{
								height: 'auto',
								flex: `${
									calculatedWidthPercent?.[index]
										? `${calculatedWidthPercent[index]}%`
										: '100%'
								} 1 1`,
							}}
						>
							<div
								className={styles.videoItem}
								style={
									media.width &&
									media.height && {
										paddingBottom: `${(media.height * 100) / media.width}%`,
									}
								}
							>
								<iframe
									onLoad={(event) => onLoadImage(event, index)}
									src={media.url}
									title="YouTube video player"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									allowFullScreen
								/>
							</div>
							{/* TODO: use component LinkYoutube */}
							{/* <LinkYoutube workItem={media.url} /> */}
						</div>
					);
				} else {
					return null;
				}
			})}
		</div>
	);
};

export default ImageRow;
