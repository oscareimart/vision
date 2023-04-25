import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import imageExample from './../../public/1.jpg'
import styles from './../../scss/style.module.scss'

import { env_values } from './../../settings/env'

const ListItemRight = (props) => {
    const { rowData, pathnameCust } = props
    return (
        <>
            <div className={styles.buildingImgL}>
                <div className={styles.buildingData}>
                    <Link href={`/${pathnameCust}/${rowData?.id}`} className='text-capitalize'>{rowData?.attributes?.title || ""} <span>{rowData?.attributes?.code || "00"}</span></Link>
                    <div className={styles.imageBuildData}>
                        <Link href={`/${pathnameCust}/${rowData?.id}`}>
                            <Image
                                src={pathnameCust === "real_estate" ? `${env_values.API_URL}${rowData?.attributes?.image?.data?.attributes?.url}` :
                                    `${env_values.API_URL}${rowData?.attributes?.images?.data[0]?.attributes?.url}`}
                                alt={rowData?.attributes?.images?.data[0]?.attributes?.alternativeText || "S/N"}
                                fill
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListItemRight