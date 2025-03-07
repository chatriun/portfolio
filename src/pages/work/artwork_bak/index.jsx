import classes from '../../../styles/Page.module.css';
import ImageRow from '@/components/ImageRow';

const ArtworkPage = () => {
	const artwork = [
		[
			{
				type: 'image',
				url: '/images/artwork/artwork_141.gif',
			},
		],
		[
			{
				type: 'image',
				url: '/images/artwork/artwork_4.gif',
			},
			{
				type: 'image',
				url: '/images/artwork/artwork_95.gif',
			},
		],
		[
			{
				type: 'image',
				url: '/images/artwork/artwork_5.gif',
			},
			{
				type: 'image',
				url: '/images/artwork/artwork_137.gif',
			},
		],
		[
			{
				type: 'image',
				url: '/images/artwork/artwork_5-2.gif',
			},
			{
				type: 'image',
				url: '/images/artwork/artwork_5-3.gif',
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
				type: 'image',
				url: '/images/artwork/artwork_28.gif',
			},
			{
				type: 'image',
				url: '/images/artwork/artwork_4-2.gif',
			},
		],
		[
			// ระเบิด
			{
				type: 'iframe',
				url: 'https://www.instagram.com/p/CP-n7rKqBIf/embed',
				width: '600',
				height: '760',
			},
			{
				type: 'image',
				url: '/images/artwork/artwork_45.gif',
			},
		],
		[
			{
				type: 'image',
				url: '/images/artwork/artwork_128.gif',
			},
			{
				type: 'image',
				url: '/images/artwork/artwork_111.gif',
			},
		],
		[
			{
				type: 'image',
				url: '/images/artwork/artwork_102.gif',
			},
		],
		[
			{
				type: 'image',
				url: '/images/artwork/artwork_26.gif',
			},
			{
				type: 'image',
				url: '/images/artwork/artwork_42.gif',
			},
		],
		[
			{
				type: 'image',
				url: '/images/artwork/artwork_sara.gif',
			},
			{
				type: 'image',
				url: '/images/artwork/artwork_135.gif',
			},
		],
		[
			{
				type: 'image',
				url: '/images/artwork/artwork_121.gif',
			},
		],
		[
			{
				type: 'image',
				url: '/images/artwork/artwork_16.gif',
			},
			{
				type: 'image',
				url: '/images/artwork/artwork_19.gif',
			},
		],
		[
			{
				type: 'image',
				url: '/images/artwork/artwork_41.gif',
			},
		],
		[
			{
				type: 'image',
				url: '/images/artwork/artwork_69.gif',
			},
			{
				type: 'image',
				url: '/images/artwork/artwork_96.gif',
			},
		],
		[
			{
				type: 'image',
				url: '/images/artwork/artwork_157.gif',
			},
			{
				type: 'image',
				url: '/images/artwork/artwork_43.gif',
			},
		],
		[
			{
				type: 'image',
				url: '/images/artwork/artwork_31.gif',
			},
		],
		[
			{
				type: 'image',
				url: '/images/artwork/artwork_97.gif',
			},
			{
				type: 'image',
				url: '/images/artwork/artwork_133.gif',
			},
		],
		[
			{
				type: 'image',
				url: '/images/artwork/artwork_101.gif',
			},
			{
				type: 'image',
				url: '/images/artwork/artwork_gnd.gif',
			},
		],
		[
			{
				type: 'image',
				url: '/images/artwork/artwork_20.gif',
			},
		],
	];

	return (
		<div>
			<header className={classes.header}>
				<h1>Artwork</h1>
				<p>some graphics and videos made for use in my work</p>
			</header>
			<main className={classes.content}>
				{artwork.map((row, index) => (
					<ImageRow key={index} mediaArtworks={row} />
				))}
			</main>
		</div>
	);
};

export default ArtworkPage;
