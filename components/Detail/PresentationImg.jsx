import React, { useState, useEffect } from 'react'
import Image from 'next/image';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { Navigation, Thumbs } from "swiper";
import { env_values } from './../../settings/env'

import styles from './../../scss/style.module.scss'

const PresentationImg = (props) => {
    const { dataShow, type, dataDescription = {} } = props
    // console.log(dataShow)
    const [thumbsSwiper, setThumbsSwiper] = useState(null)
    const [slideCurrent, setSlideCurrent] = useState(0)

    const onChangeSlide = (e) => {
        // console.log(e)
        // console.log(slideCurrent)
        setSlideCurrent(parseInt(e.snapIndex, 10))
        if (type === "real_estate") {
            const findImg = dataShow.attributes?.array_img?.find((f, i) => i === parseInt(e.snapIndex))
            const findInfo = dataShow.attributes?.departments?.data?.find(f => f.id === findImg._id)
            dataDescription.func(findInfo)
        }
    }

    return (
        <>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                // freeMode
                // loop={true}
                spaceBetween={10}
                navigation={false}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[Navigation, Thumbs]}
                className={styles.swiperBuildingDetail}
                onSlideChange={(e) => onChangeSlide(e)}
            >
                {
                    (type !== "real_estate" && dataShow?.attributes?.images?.data?.length > 0) && <>
                        {
                            dataShow?.attributes?.images?.data?.map((row, i) => (
                                <SwiperSlide
                                    className={styles.swiperSlideCustom}
                                    key={i}
                                >
                                    <Image
                                        src={`${env_values.API_URL}${row.attributes?.url}`}
                                        alt={row.attributes?.alternativeText || "S/N"}
                                        fill
                                    />
                                </SwiperSlide>
                            ))
                        }
                    </>
                }
                {
                    (type === "real_estate" && dataShow.attributes?.array_img?.length > 0) && <>
                        {
                            dataShow.attributes?.array_img?.map((row, i) => (
                                <SwiperSlide
                                    className={styles.swiperSlideCustom}
                                    key={i}
                                    data={row.img?._id}
                                >
                                    <Image
                                        src={`${env_values.API_URL}${row.img?.attributes?.url}`}
                                        alt={row.img?.attributes?.alternativeText || "S/N"}
                                        fill
                                    />
                                </SwiperSlide>
                            ))
                        }
                    </>
                }
            </Swiper>

            <Swiper
                onSwiper={setThumbsSwiper}
                // freeMode
                loop={true}
                spaceBetween={8}
                slidesPerView={4}
                watchSlidesProgress={true}
                modules={[Navigation, Thumbs]}
                className={styles.thumbBuildingDetail}
            >
                {
                    (type !== "real_estate" && dataShow?.attributes?.images?.data?.length > 0) && <>
                        {
                            dataShow?.attributes?.images?.data?.map((row, i) => (
                                <SwiperSlide
                                    className={`${styles.thumbSlideCustom} ${slideCurrent === i ? styles.thumbSlideCustomActive : ""}`}
                                    key={i}
                                >
                                    <Image
                                        src={`${env_values.API_URL}${row.attributes?.url}`}
                                        alt={row.attributes?.alternativeText || "S/N"}
                                        fill
                                    />
                                </SwiperSlide>
                            ))
                        }
                    </>
                }

                {
                    (type === "real_estate" && dataShow.attributes?.array_img?.length > 0) && <>
                        {
                            dataShow.attributes?.array_img?.map((row, i) => (
                                <SwiperSlide
                                    className={`${styles.thumbSlideCustom} ${slideCurrent === i ? styles.thumbSlideCustomActive : ""}`}
                                    key={i}
                                >
                                    <Image
                                        src={`${env_values.API_URL}${row.img?.attributes?.url}`}
                                        alt={row.img?.attributes?.alternativeText || "S/N"}
                                        fill
                                    />
                                </SwiperSlide>
                            ))
                        }
                    </>
                }
            </Swiper>
        </>
    )
}

export default PresentationImg