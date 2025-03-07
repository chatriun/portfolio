import { useEffect, useRef } from 'react';

/**
 * TODO:
 * - move handleCanplay up to ImageRow
 * - use attribute "onCanplay" instead of "addEventListener"
 */

const VideoElement = ({ url, index, onSetImageData }) => {
	const videoRef = useRef(null);

	useEffect(() => {
		const video = videoRef.current;

		const handleCanplay = () => {
			if (video) {
				const newWidth = (video.videoWidth * 500) / video.videoHeight;
				onSetImageData((prevState) => {
					const newImageData = [...prevState];
					newImageData[index] = newWidth;

					return newImageData;
				});
			}
		};

		if (video) {
			video.addEventListener('canplay', handleCanplay);
		}

		return () => {
			if (video) {
				video.removeEventListener('canplay', handleCanplay);
			}
		};
	}, [index, onSetImageData]);

	return (
		<video ref={videoRef} autoPlay loop muted width="100%">
			<source src={url} type="video/mp4" />
		</video>
	);
};

export default VideoElement;
