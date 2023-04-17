	// import Head from 'next/head'
	// import Image from 'next/image'
	// import { Inter } from 'next/font/google'
	import styles from '@/styles/Home.module.css'
	import Link from 'next/link'

	// const inter = Inter({ subsets: ['latin'] })

	export default function Home() {
		return (
			<div className={styles.container}>
				<header className={styles.header}>
					<div className={styles.left}>
						<Link href="/www.google.com">
							<h1>
								ANYAWEE SR.
							</h1>
						</Link>
					</div>
					<div className={styles.right}>
						<nav>
							<ul>
								<li>
									<Link href="/www.google.com">
										<span>WORK</span>
									</Link>
								</li>
								<li>
									<Link href="/www.google.com">
										<span>ABOUT ME</span>
									</Link>
								</li>
							</ul>
						</nav>
					</div>
				</header>
				<main>
					<div className={styles.gallery}>
						<div className={styles.galleryItem}>
							<img src="\images\coverPage\Cover_1-Show.png" alt="Image 1"/>
							<div className={styles.galleryItemOverlay}>
								<img src="\images\coverPage\hover\HCover_1-Show.png"/>
							</div>
						</div>
						<div className={styles.galleryItem}>
							<img src="\images\coverPage\Cover_2-Travel.png" alt="Image 2"/>
						</div>
						<div className={styles.galleryItem}>
							<img src="\images\coverPage\Cover_3-Challenge.png" alt="Image 3"/>
						</div>
						<div className={styles.galleryItem}>
							<img src="\images\coverPage\Cover_4-Shopping.png" alt="Image 4"/>
						</div>
					</div>
				</main>
			</div>
		)
	}
