import { FC } from "react"
import { SkeletonLoader } from "../../heading/SkeletonLoader"
import { IUploadField } from "../form.interface"
import { useUpload } from "./useUpload"
import Image from "next/image"

import styles from '../form.module.scss'

import cn from 'classnames'

export const UploadField: FC<IUploadField> = ({
	placeholder,
	error,
	style,
	image,
	folder,
	onChange,
	isNoImage = false,
}) => {
	const { uploadImage, isLoading } = useUpload(onChange, folder)

	return (
		<div className={cn(styles.field, styles.uploadField)} style={style}>
			<div className={styles.uploadFlex}>
				<label>
					<span>{placeholder}</span>
					<input type="file" onChange={uploadImage} />
					{error && <div className={styles.error}>{error}</div>}
				</label>
				{!isNoImage && (
					<div className={styles.uploadImageContainer}>
						{isLoading ? (
							<SkeletonLoader count={1} className="w-full h-full" />
						) : (
							image && <Image src={image} alt="" layout="fill" unoptimized />
						)}
					</div>
				)}
			</div>
		</div>
	)
}
