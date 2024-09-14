import Image from 'next/image';

const CategoryCard = ({ url }) => {
	return <Image width={340} height={735} src={url} alt={url} />;
};

export default CategoryCard;
