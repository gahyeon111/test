import '../style/result.css';
import BlackButton from '../util/blackbutton';
import React, { useState, useRef } from 'react';
import { TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send'
import FileDownloadIcon from '@mui/icons-material/FileDownload';

function Result() {
    const email = useRef('');
    const [emailError, setEmailError] = useState("Enter your email to receive");

    const handleChange = (e) => {
        e.preventDefault();
        email.current = e.target.value;
    }

    const handleButtonClick = (e) => {
        console.log(email.current)
        const emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
        if (!emailRegex.test(email.current)) {
            console.log(!emailRegex.test(email.current));
            setEmailError(() => 'Invalid E-mail');
        } else {
            setEmailError(() => "Valid E-mail");
            // send email to server
        }
    }

    return (
        <div className="Result-body">
            <div style={{ marginTop: "50px" }}>
                <svg id="completion" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 101">
                    <g id="cirkel">
                        <g id="Mask">
                            <path id="path-1_1_" className="st1" d="M49 21c22.1 0 40 17.9 40 40s-17.9 40-40 40S9 83.1 9 61s17.9-40 40-40z" />
                        </g>
                    </g>
                    <path id="check" className="st2" d="M31.3 64.3c-1.2-1.5-3.4-1.9-4.9-.7-1.5 1.2-1.9 3.4-.7 4.9l7.8 10.4c1.3 1.7 3.8 1.9 5.3.4L71.1 47c1.4-1.4 1.4-3.6 0-5s-3.6-1.4-5 0L36.7 71.5l-5.4-7.2z" />
                </svg>
            </div>
            <div className='send-result'>
                <div className='download'><BlackButton name={'Download'} icon={<FileDownloadIcon sx={{ color: 'white' }} />} /></div>
                <hr className='hr' />
                <div className='email'>
                    <div style={{ height: "100%" }}>
                        <TextField
                            ref={email}
                            id="email" type="email" label="E-mail"
                            size="small"
                            helperText={emailError}
                            error={(emailError == 'Invalid E-mail')}
                            onChange={handleChange}>
                        </TextField>
                    </div>
                    <div onClick={handleButtonClick}><BlackButton name={'Send to Email'} icon={<SendIcon sx={{ color: 'white' }} />} /></div>
                </div>
            </div>
            <div className='result-inner'>result preview</div>
        </div >
    );
}

export default Result;