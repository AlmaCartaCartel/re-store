import React from 'react'

import './error-indicator.css';
// Этот компонент занимается отображением ошибки
const ErrorIndicator = () => {
    return(
        <div className="error-indicator">
            <h2>
                Fatal Error 404...
            </h2>
        </div>
    )
}

export default ErrorIndicator;