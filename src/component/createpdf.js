import SendIcon from '@mui/icons-material/Send'
import { Box, Button, CircularProgress } from '@mui/material'
import React, { Component } from 'react';
import Axios from 'axios'
import BlackButton from '../util/blackbutton';

class CreatePDF extends Component {
    constructor(props, state) {
        super(props)
    }
    render() {
        return (
            <div
                style={{ marginTop: "40px", marginBottom: "40px" }}
                onClick={() => {
                    if (this.props.dataTransferList.length <= 0) {
                        alert('Upload PDF files')
                    } else {
                        if ((this.props.selectType.current == null) || (this.props.selectType.current == 'null')) {
                            alert('Choose the Select Summary Type')
                        } else {
                            this.props.serialNumber.current = Math.floor(100000000 + Math.random() * 900000000)
                            this.props.setLoading(load => !load);

                            // const dataTransfer = new DataTransfer()
                            // this.props.dataTransferList.forEach(file => {
                            //     dataTransfer.items.add((file.file ?? { name: null }))
                            // })
                            // Axios.postForm('http://localhost:3000/', {
                            //     'filecount': dataTransfer.files.length,
                            //     'files[]': dataTransfer.files,
                            //     'id': this.props.serialNumber.current,
                            //     'selecttype': this.props.serialNumber
                            // }).then(
                            //     (response) => {
                            //         this.setState(state => {
                            //             return { ...state, loading: false }
                            //         })
                            //         history.push("/result")
                            //     }
                            // ).catch(
                            //     () => {
                            //         this.setState(state => {
                            //             return { ...state, loading: false }
                            //         })
                            //     }
                            // )
                        }
                    }
                }
                }>
                <BlackButton name={'Create PDF'} icon={<SendIcon sx={{ color: 'white' }} />} />
            </div >
        );
    }
}

export default CreatePDF;