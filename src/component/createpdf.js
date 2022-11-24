import React, { Component, useHistory } from 'react';
import SendIcon from '@mui/icons-material/Send'
import Axios from 'axios'
import BlackButton from './blackbutton';

class CreatePDF extends Component {
    constructor(props, state) {
        super(props)
    }

    handleButtonClick = () => {
        if (this.props.dataTransferList.length <= 0) {
            alert('Upload PDF files')
        } else {
            if ((this.props.selectType.current == null) || (this.props.selectType.current == 'null')) {
                alert('Choose the Select Summary Type')
            } else {
                this.props.serialNumber.current = Math.floor(100000000 + Math.random() * 900000000)
                this.props.setLoading(() => (1));

                const dataTransfer = new DataTransfer()
                this.props.dataTransferList.forEach(item => {
                    dataTransfer.items.add((item.file))
                })
                console.log(dataTransfer)
                // Axios.postForm('http://localhost:3000/', {
                // Axios.post('http://localhost:3000/', {
                //     'filecount': dataTransfer.files.length,
                //     'files[]': dataTransfer.files,
                //     'id': this.props.serialNumber.current,
                //     'selecttype': this.props.selectType.current
                // }).then(
                //     (response) => {
                //         console.log(response)
                //         this.props.response.current = response;
                //         this.props.setLoading(() => (2));
                //     }
                // ).catch(
                //     () => {
                //         this.props.setLoading(load => 2);
                //     }
                // )
            }
        }
    }

    render() {
        return (
            <div
                style={{ marginTop: "40px", marginBottom: "40px" }}
                onClick={this.handleButtonClick}>
                <BlackButton name={'Summarize'} icon={<SendIcon sx={{ color: 'white' }} />} />
            </div >
        );
    }
}

export default CreatePDF;