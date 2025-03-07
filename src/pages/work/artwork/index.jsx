import classes from '../../../styles/Page.module.css';
import ImageRow from '@/components/ImageRow';

// TODO: artwork_5 multiple load
const ARTWORKS = [
	[
		{
			type: 'vdo',
			url: '/images/artwork-vdo/artwork_141.mp4',
		},
	],
	[
		{
			type: 'vdo',
			url: '/images/artwork-vdo/artwork_4.mp4',
		},
		{
			type: 'vdo',
			url: '/images/artwork-vdo/artwork_95.mp4',
		},
	],
	[
		{
			type: 'vdo',
			url: '/images/artwork-vdo/artwork_5.mp4',
		},
		{
			type: 'vdo',
			url: '/images/artwork-vdo/artwork_137.mp4',
		},
	],
	[
		{
			type: 'vdo',
			url: '/images/artwork-vdo/artwork_5-2.mp4',
		},
		{
			type: 'vdo',
			url: '/images/artwork-vdo/artwork_5-3.mp4',
		},
	],
	[
		{
			type: 'iframe',
			url: 'https://www.youtube.com/embed/Bc89HufDol4',
		},
	],
	[
		{
			type: 'vdo',
			url: '/images/artwork-vdo/artwork_28.mp4',
		},
		{
			type: 'vdo',
			url: '/images/artwork-vdo/artwork_4-2.mp4',
		},
	],
	[
		// ระเบิด
		{
			type: 'iframe',
			url: 'https://www.instagram.com/p/CP-n7rKqBIf/embed',
			width: '600',
			height: '1000',
		},
		{
			type: 'vdo',
			url: '/images/artwork-vdo/artwork_45.mp4',
		},
	],
	[
		{
			type: 'vdo',
			url: '/images/artwork-vdo/artwork_128.mp4',
		},
		{
			type: 'vdo',
			url: '/images/artwork-vdo/artwork_111.mp4',
		},
	],
	[
		{
			type: 'vdo',
			url: '/images/artwork-vdo/artwork_102.mp4',
		},
	],
	[
		{
			type: 'vdo',
			url: '/images/artwork-vdo/artwork_26.mp4',
		},
		{
			type: 'vdo',
			url: '/images/artwork-vdo/artwork_42.mp4',
		},
	],
	[
		// TODO: change soon
		{
			type: 'image',
			url: '/images/artwork/artwork_sara.gif',
		},
		{
			type: 'vdo',
			url: '/images/artwork-vdo/artwork_135.mp4',
		},
	],
	[
		{
			type: 'vdo',
			url: '/images/artwork-vdo/artwork_121.mp4',
		},
	],
	[
		{
			type: 'vdo',
			url: '/images/artwork-vdo/artwork_16.mp4',
		},
		{
			type: 'vdo',
			url: '/images/artwork-vdo/artwork_19.mp4',
		},
	],
	[
		{
			type: 'vdo',
			url: '/images/artwork-vdo/artwork_41.mp4',
		},
	],
	[
		{
			type: 'vdo',
			url: '/images/artwork-vdo/artwork_69.mp4',
		},
		{
			type: 'vdo',
			url: '/images/artwork-vdo/artwork_96.mp4',
		},
	],
	[
		{
			type: 'vdo',
			url: '/images/artwork-vdo/artwork_157.mp4',
		},
		{
			type: 'vdo',
			url: '/images/artwork-vdo/artwork_43.mp4',
		},
	],
	[
		{
			type: 'vdo',
			url: '/images/artwork-vdo/artwork_31.mp4',
		},
	],
	[
		{
			type: 'vdo',
			url: '/images/artwork-vdo/artwork_97.mp4',
		},
		// TODO: change soon
		{
			type: 'image',
			url: '/images/artwork/artwork_133.gif',
		},
	],
	[
		{
			type: 'vdo',
			url: '/images/artwork-vdo/artwork_101.mp4',
		},
		{
			type: 'vdo',
			url: '/images/artwork-vdo/artwork_gnd.mp4',
		},
	],
	[
		{
			type: 'vdo',
			url: '/images/artwork-vdo/artwork_20.mp4',
		},
	],
];

const ArtworkPage = () => {
	return (
		<div>
			<header className={classes.header}>
				<h1>Artwork</h1>
				<p>some graphics and videos made for use in my work</p>
			</header>
			<main className={classes.content}>
				{ARTWORKS.map((row, index) => (
					<ImageRow key={index} mediaArtworks={row} />
				))}
			</main>
		</div>
	);
};

export default ArtworkPage;
