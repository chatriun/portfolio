import { useMemo, useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';

const ImageRow = ({ mediaArtworks }) => {
	const [imageData, setImageData] = useState([]);
	const onLoadImage = (e, index) => {
		const newWidth = (e.target.offsetWidth * 500) / e.target.offsetHeight;
		const newImageData = [...imageData];
		newImageData[index] = newWidth;
		setImageData(newImageData);
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
			{mediaArtworks.map((media, index) =>
				media.type === 'image' ? (
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
				) : (
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
						<div className={styles.videoItem}>
							<iframe
								onLoad={(event) => onLoadImage(event, index)}
								src={media.url}
								title="YouTube video player"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowFullScreen
							/>
						</div>
					</div>
				)
			)}
		</div>
	);
};

export default ImageRow;
