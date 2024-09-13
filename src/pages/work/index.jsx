// TODO: search set default "select indentation" for p'Ake
import Head from 'next/head';
import Image from 'next/image';
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
	return (
		<main>
			<div className={styles.gallery}>
				<div className={styles.galleryItem}>
					<Link href="/work/show">
						<Image
							width={340}
							height={735}
							src="/images/coverPage/Cover_1-Show.png"
							alt="work show"
							// เพิ่มเวลาในการโหลดหน้าเว็บ ใช้เฉพาะรูปภาพสำคัญ
							// priority
						/>
						<div className={styles.galleryItemOverlay}>
							<Image
								width={340}
								height={735}
								src="/images/coverPage/hover/HCover_1-Show.png"
								alt="work show (hover)"
							/>
						</div>
					</Link>
				</div>
				<div className={styles.galleryItem}>
					<Link href="/work/travel">
						<Image
							width={340}
							height={735}
							src="/images/coverPage/Cover_2-Travel.png"
							alt="work travel"
						/>
						<div className={styles.galleryItemOverlay}>
							<Image
								width={340}
								height={735}
								src="/images/coverPage/hover/HCover_2-Travel.png"
								alt="work travel (hover)"
							/>
						</div>
					</Link>
				</div>
				<div className={styles.galleryItem}>
					<Link href="/work/challenge">
						<Image
							width={340}
							height={735}
							src="/images/coverPage/Cover_3-Challenge.png"
							alt="work challenge"
						/>
						<div className={styles.galleryItemOverlay}>
							<Image
								width={340}
								height={735}
								src="/images/coverPage/hover/HCover_3-Challenge.png"
								alt="work challenge (hover)"
							/>
						</div>
					</Link>
				</div>
				<div className={styles.galleryItem}>
					<Link href="/work/shopping">
						<Image
							width={340}
							height={735}
							src="/images/coverPage/Cover_4-Shopping.png"
							alt="work shopping"
						/>
						<div className={styles.galleryItemOverlay}>
							<Image
								width={340}
								height={735}
								src="/images/coverPage/hover/HCover_4-Shopping.png"
								alt="work shopping (hover)"
							/>
						</div>
					</Link>
				</div>
				<div className={styles.galleryItem}>
					<Link href="/work/kkk">
						<Image
							width={340}
							height={735}
							src="/images/coverPage/Cover_5-KKK.png"
							alt="work kkk"
						/>
						<div className={styles.galleryItemOverlay}>
							<Image
								width={340}
								height={735}
								src="/images/coverPage/hover/HCover_5-KKK.png"
								alt="work kkk (hover)"
							/>
						</div>
					</Link>
				</div>
				<div className={styles.galleryItem}>
					<Link href="/work/review">
						<Image
							width={340}
							height={735}
							src="/images/coverPage/Cover_6-Review.png"
							alt="work review"
						/>
						<div className={styles.galleryItemOverlay}>
							<Image
								width={340}
								height={735}
								src="/images/coverPage/hover/HCover_6-Review.png"
								alt="work review (hover)"
							/>
						</div>
					</Link>
				</div>
				<div className={styles.galleryItem}>
					<Link href="/work/vlog">
						<Image
							width={340}
							height={735}
							src="/images/coverPage/Cover_7-Vlog.png"
							alt="work vlog"
						/>
						<div className={styles.galleryItemOverlay}>
							<Image
								width={340}
								height={735}
								src="/images/coverPage/hover/HCover_7-Vlog.png"
								alt="work vlog (hover)"
							/>
						</div>
					</Link>
				</div>
				<div className={styles.galleryItem}>
					<Link href="/work/knowledge">
						<Image
							width={340}
							height={735}
							src="/images/coverPage/Cover_8-Knowledge.png"
							alt="work knowledge"
						/>
						<div className={styles.galleryItemOverlay}>
							<Image
								width={340}
								height={735}
								src="/images/coverPage/hover/HCover_8-Knowledge.png"
								alt="work knowledge (hover)"
							/>
						</div>
					</Link>
				</div>
				<div className={styles.galleryItem}>
					<Link href="/work/artwork">
						<Image
							width={340}
							height={735}
							src="/images/coverPage/Cover_9-Artwork.png"
							alt="work artwork"
						/>
						<div className={styles.galleryItemOverlay}>
							<Image
								width={340}
								height={735}
								src="/images/coverPage/hover/HCover_9-Artwork.png"
								alt="work artwork (hover)"
							/>
						</div>
					</Link>
				</div>
			</div>
		</main>
	);
}
