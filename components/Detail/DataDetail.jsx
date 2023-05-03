import React, { useState, useEffect } from 'react'

import styles from './../../scss/style.module.scss'
import QuotateFormOpc from './QuotateFormOpc'

const DataDetail = (props) => {
    const { type, dataShow, dataDescription = {} } = props
    const [dataQuotate, setDataQuotate] = useState({
        name: "",
        phone: "",
        email: ""
    })
    const [optCheckData, setOptCheckData] = useState([])
    const [showQuote, setShowQuote] = useState(false)

    const onClickQuotate = (e) => {
        e.preventDefault()
        if (showQuote) {
            console.log(dataQuotate)
            console.log(optCheckData)
            if (dataQuotate.email && dataQuotate.name) {
                if (optCheckData.length > 0) {
                    try {

                    } catch (error) {
                        console.log(error)
                    }
                } else {
                    console.log("Seleccione algun departamento")
                }
            } else {
                console.log("Seleccione email y nombre")
            }
        } else {
            setShowQuote(true)
        }
    }

    return (
        <>
            <div className={styles.dataDetails}>
                <div className={`row ${styles.dataDetailsTitle} pt-4 pt-md-0`}>
                    <div className="col-xl-10 col-lg-9 col-md-9 col-sm-10 col-9 g-0"
                        style={{ minHeight: "2px" }}>
                        <label className='text-uppercase fw-500'>{dataShow?.attributes?.title || ""}</label>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-3 col-sm-2 col-3 g-0">
                        <label className={`float-end fw-bold ${styles.dataDetailsCode}`}>{dataShow?.attributes?.code || "00"}</label>
                    </div>
                </div>
                {(type === "building" || type === "design") && <>
                    <div className={styles.dataDetailsDescription}>
                        <p className='text-muted'>{dataShow?.attributes?.description || ""}</p>
                    </div>
                    <div className={`text-muted ${styles.dataDetailsTechnical}`}>
                        <label className='text-uppercase fw-bold mb-2'>Datos Técnicos</label>
                        <br />
                        <label className='fw-bold'>Ubicación:</label>
                        <br />
                        <span>{dataShow?.attributes?.location || "S/N"}</span>
                        <br />
                        <label className='mt-2 fw-bold'>Superficie Construida:</label>
                        <br />
                        <span>{dataShow?.attributes?.surface || "0 m2"}</span>
                        <br />
                        <label className='mt-2 fw-bold'>Año Conclusión:</label>
                        <br />
                        <span>{dataShow?.attributes?.year || "S/N"}</span>
                    </div>
                </>}
                {
                    (type === "real_estate" && !showQuote) && <>
                        <div className={`text-muted ${styles.dataDetailsRealStateTitle} mt-3`}>
                            <h4>{dataDescription?.state?.attributes?.title || ""} <span className='float-end'>{dataDescription?.state?.attributes?.surface || ""}</span></h4>
                        </div>
                        <div
                            className={`text-muted ${styles.dataDetailsRealState} mt-3`}
                            dangerouslySetInnerHTML={{ __html: dataDescription?.state?.attributes?.description }}
                        />
                    </>
                }
                <form onSubmit={(e) => onClickQuotate(e)} autoComplete='off'>
                    {
                        showQuote && <QuotateFormOpc
                            dataQuotate={{ state: dataQuotate, func: (dat) => setDataQuotate(dat) }}
                            showQuote={{ func: () => setShowQuote(!showQuote) }}
                            dataOpt={dataShow}
                            optCheckData={{ state: optCheckData, func: (dat) => setOptCheckData(dat) }}
                        />
                    }
                    {
                        type === "real_estate" && <>
                            <div className={styles.dataDetailsRealStateBtn}>
                                <button
                                    className='text-uppercase'
                                    type='submit'
                                // onClick={() => onClickQuotate()}
                                >
                                    {showQuote ? 'Enviar' : 'Cotizar'}
                                </button>
                            </div>
                        </>
                    }
                </form>
            </div>
        </>
    )
}

export default DataDetail
