import React from 'react';
import upload from '../asset/upload.svg'

function UploadPDF(props) {
    const fileInput = React.useRef(null);

    const handleButtonClick = e => {
        fileInput.current.click();
    };

    const handleChange = e => {
        console.log(e.target.files[0]);
    };

    return (
        <React.Fragment>
            <button className='b-uploadpdf' onClick={handleButtonClick}>
                Upload PDF <img src={upload} style={{ marginLeft: '10px' }} />
            </button>
            <input type="file"
                ref={fileInput}
                onChange={handleChange}
                style={{ display: "none" }} />
        </React.Fragment>
    );
}

export default UploadPDF;