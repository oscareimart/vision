import React, { useState, useEffect } from 'react'
import styles from './../../scss/style.module.scss'

const QuoteFormOpc = (props) => {
    const { dataQuotate, showQuote, dataOpt, optCheckData = [] } = props
    console.log(dataOpt)
    // useEffect(() => {
    //     if (dataOpt.attributes?.detail_interest?.length > 0) {
    //         let arrayTemp = []
    //         for (let row of dataOpt.attributes?.detail_interest) {
    //             arrayTemp.push(false)
    //         }
    //         optCheckData.func(arrayTemp)
    //     }
    // }, []);

    const onChange = ({ name, value }) => {
        dataQuotate.func({ ...dataQuotate.state, [name]: value })
    }

    const cancel = () => {
        dataQuotate.func({
            name: "",
            phone: "",
            email: ""
        })
        optCheckData.func([])
        showQuote.func()
    }

    const onChangeCheck = (dataRow, index) => {
        // let arrayTemp = optCheckData.state
        // arrayTemp[index] = !arrayTemp[index]
        // optCheckData.func([...arrayTemp])
        let arrayTemp = optCheckData.state
        const foundDouble = arrayTemp.some(row => row === dataRow.id)
        // console.log(foundDouble)
        if (foundDouble) {
            arrayTemp = arrayTemp.filter(f => f !== dataRow.id)
        } else {
            arrayTemp.push(dataRow.id)
        }
        optCheckData.func(arrayTemp)
    }

    return (
        <>
            <div className={styles.dataDetailsRealStateQuote}>
                <div className="row">
                    <div className="col-md-12">
                        <i
                            className="fa-solid fa-xmark float-end mt-2 me-2"
                            role="button"
                            onClick={cancel}
                        />
                    </div>
                </div>
                <form autoComplete='off'>
                    <div className="row mx-3 mt-2">
                        <div className="col-md-12 mb-3">
                            <label className='col-form-label'>Nombre:</label>
                            <input
                                className={`form-control ${styles.inputCustom}`}
                                type="text"
                                name='name'
                                autoComplete="new-name"
                                placeholder='Nombre'
                                onChange={(e) => onChange(e.target)}
                                value={dataQuotate?.state?.name}
                            />
                        </div>
                        <div className="col-md-12 mb-3">
                            <label className='col-form-label'>Telefono:</label>
                            <input
                                className={`form-control ${styles.inputCustom}`}
                                type="text"
                                name='phone'
                                autoComplete="new-phone"
                                placeholder='Telefono'
                                onChange={(e) => onChange(e.target)}
                                value={dataQuotate?.state?.phone}
                            />
                        </div>
                        <div className="col-md-12 mb-3">
                            <label className='col-form-label'>Correo Electrónico:</label>
                            <input
                                className={`form-control ${styles.inputCustom}`}
                                type="email"
                                name='email'
                                autoComplete="new-email"
                                placeholder='Correo Electrónico'
                                onChange={(e) => onChange(e.target)}
                                value={dataQuotate?.state?.email}
                            />
                        </div>
                        <div className="col-md-12 mb-3">
                            <label className='col-form-label mb-1'>Departamento de Interes:</label>

                            {
                                dataOpt.attributes?.departments?.data?.length > 0 ? <>
                                    {
                                        dataOpt.attributes?.departments?.data?.map((row, i) => (
                                            <div className="form-check ms-2" key={i}>
                                                <input
                                                    className={`form-check-input ${styles.checkCustom}`}
                                                    type="checkbox"
                                                    id={`opt${i}`}
                                                    onChange={() => onChangeCheck(row, i)}
                                                    value={row.attributes?.code}
                                                />
                                                <label className="form-check-label" htmlFor={`opt${i}`}>
                                                    {/* {row.name}{row.description && ` | ${row.description}`} */}
                                                    {row.attributes?.title}
                                                </label>
                                            </div>
                                        ))
                                    }
                                </> : <div>
                                    <label className=''>Sin Opciones</label>
                                </div>
                            }
                        </div>
                    </div>
                </form>
            </div >
        </>
    )
}

export default QuoteFormOpc