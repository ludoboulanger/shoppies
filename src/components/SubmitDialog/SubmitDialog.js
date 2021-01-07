import React from 'react';
import './Submit.css';

export default function SubmitDialog() {

    const handleClose = () => {
        window.location.reload();
    };

    return (
        <div className="backdrop">
            <div className="container-dialog">
                <h3>Thank You for Your Submission</h3>

                <button onClick={handleClose}className="button" style={{marginBottom: "12px"}}>
                    Close
                </button>
            </div>
        </div>
    )
}
