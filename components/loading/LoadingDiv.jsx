import React from 'react'

const LoadingDiv = () => {
    return (
        <>
            <div
                style={{ height: "80vh", alignItems: "center" }}
                className="d-flex justify-content-center"
            >
                <div
                    className="spinner-border text-light"
                    style={{ width: "2.5rem", height: "2.5rem" }}
                    role="status"
                >
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </>
    )
}

export default LoadingDiv