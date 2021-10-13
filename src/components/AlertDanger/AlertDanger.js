import React from "react"

const AlertDanger = ({setError, error}) => {

    function onCloseError () {
        setError('');
    }

    return (
        <div id="alert_danger" className='alert alert-danger alert-dismissible fade show' role="alert">
            <strong>{error}</strong>
            <button id="btn_close_alert" type="button" className="btn-close" data-dismiss="alert" aria-label="Close" onClick={() => onCloseError()}>
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}

export default AlertDanger
