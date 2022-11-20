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
                this.props.setLoading(load => (load || true));

                const dataTransfer = new DataTransfer()
                this.props.dataTransferList.forEach(item => {
                    dataTransfer.items.add((item.file))
                })
                // Axios.postForm('http://localhost:3000/', {
                //     'filecount': dataTransfer.files.length,
                //     'files[]': dataTransfer.files,
                //     'id': this.props.serialNumber.current,
                //     'selecttype': this.props.selectType.current
                // }).then(
                //     (response) => {
                //         this.props.setLoading(load => (load && false));
                //         const history = useHistory();
                //         history.push('/result');
                //     }
                // ).catch(
                //     () => {
                //         this.props.setLoading(load => (load && false));
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
                <BlackButton name={'Create PDF'} icon={<SendIcon sx={{ color: 'white' }} />} />
            </div >
        );
    }
}

export default CreatePDF;