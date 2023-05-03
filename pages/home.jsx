import React, { useState, useEffect, useRef, useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './../scss/style.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
// import { Swiper as SwiperCore } from 'swiper/types';
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper'

import buildingImg from './../public/home/building.jpg'
import designImg from './../public/home/design.jpg'
import realEstategImg from './../public/home/real_estate.jpg'
import teamImg from './../public/home/team.jpg'

import Menu from '../settings/menu'

import { AppSettings } from "../settings/app-settings"

const sliderHomeData = [{
    img: buildingImg,
    alt: "buildingImage"
}, {
    img: designImg,
    alt: "designImage"
}, {
    img: buildingImg,
    alt: "buildingImage"
}, {
    img: realEstategImg,
    alt: "realEstateImage"
}, {
    img: teamImg,
    alt: "teamImage"
}]

const Home = (props) => {
    const appSettings = useContext(AppSettings)
    const swiperRef = useRef()
    const [titleMenu, setTitleMenu] = useState({
        title: "",
        path: "",
        icon: ""
    })
    const [indexSlider, setIndexSlider] = useState(0)

    useEffect(() => {
        let isSubscribed = true
        if (isSubscribed) {
            appSettings.appSidebarFunc(true)
            appSettings.appFooterFunc(true)
            setTitleMenu(Menu[0])
        }
        return () => {
            isSubscribed = false
        }
    }, []);

    const onSlideChange = (e) => {
        // console.log(e)
        // console.log(e.snapIndex)
        // console.log(indexSlider)
        setIndexSlider(parseInt(e.snapIndex, 10))
        setTitleMenu(Menu[e.snapIndex])
    }
    return (
        <>
            <div className={styles.appContent}>
                <div className={`row`}>
                    <div className={`col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ${styles.appHome}`}>
                        <div className="row g-0 justify-content-end">
                            <div className="col-md-1 col-sm-1 col-1 text-end">
                                <div className={`text-end me-1 ${styles.progressNumber}`}>{indexSlider + 1}</div>
                            </div>
                            <div className={`col-md-1 col-sm-1 col-2 ${styles.homeProgressBar}`}>
                                <div className={`progress ${styles.progressBarStyle}`}>
                                    <div
                                        className={`progress-bar ${styles.progressBarEl}`}
                                        role="progressbar"
                                        aria-label="Basic example"
                                        style={{ width: `${20 * (indexSlider + 1)}%` }}
                                        aria-valuenow={20 * (indexSlider + 1)}
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    ></div>
                                </div>
                            </div>
                            <div className="col-md-1 col-sm-1 col-1">
                                <div className={`ms-1 ${styles.progressNumber}`}>5</div>
                            </div>
                        </div>
                        <Swiper
                            navigation={false}
                            modules={[Navigation]}
                            className={styles.swiperHome}
                            onSlideChange={(e) => onSlideChange(e)}
                            onBeforeInit={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                        // onSwiper={(swiper) => console.log(swiper)}
                        >
                            {
                                sliderHomeData.length > 0 && <>
                                    {
                                        sliderHomeData?.map((row, i) => (
                                            <SwiperSlide className={styles.swiperSlide} key={i}>
                                                <Image
                                                    src={row.img}
                                                    alt={row.alt}
                                                    className={styles.swiperImgMain}
                                                />
                                                {
                                                    titleMenu && <Image
                                                        src={titleMenu?.img_mask}
                                                        alt={titleMenu?.title || ""}
                                                        className={styles.swiperWaterMark}
                                                    />
                                                }
                                            </SwiperSlide>
                                        ))
                                    }
                                </>
                            }
                        </Swiper>
                    </div>
                    <div className={`col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-5 ${styles.homeTitle}`}>
                        <div className={styles.homeIconNavigation}>
                            {
                                indexSlider > 0 && <i
                                    className="fa-solid fa-circle custom-prev-sw"
                                    onClick={(e) => swiperRef.current?.slidePrev()}
                                />
                            }
                        </div>
                        <div className={`${styles.homeLLeft} ${indexSlider === 0 ? `${styles.hideBarHome}` : ""}`}></div>
                        <div className={styles.homeTitleA}>
                            <Link
                                href={titleMenu?.path || "/home"}
                            >
                                {titleMenu?.title || "S/N"}
                            </Link>
                        </div>
                        <div className={`${styles.homeLRight} ${indexSlider === (sliderHomeData.length - 1) ? `${styles.hideBarHome}` : ""}`}></div>
                        <div className={styles.homeIconNavigation}>
                            {
                                indexSlider < (sliderHomeData.length - 1) && <i
                                    className="fa-solid fa-circle"
                                    onClick={(e) => swiperRef.current?.slideNext()}
                                />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
