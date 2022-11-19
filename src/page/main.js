import '../style/main.css';
import { FaHourglass } from "react-icons/fa";
import SelectType from '../component/selecttype';
import UploadPDF from '../component/uploadpdf';
import CreatePDF from '../component/createpdf.js'
import DragDropList from '../component/dragdroplist';
import Loader from './loader';

import React, { useRef, useState } from 'react';

function Main() {
  const fileInputRef = useRef(null)
  const [dataTransferList, setDataTransferList] = useState([])
  const serialNumber = useRef(0)
  const selectType = useRef(null)
  const [loading, setLoading] = useState(false)
  const dataFileCounter = useRef(0)

  console.log('main', dataFileCounter);
  console.log(loading);

  return (
    <div>
      {loading ? <Loader /> : <div></div>}
      <div className='App-body'>
        {/* <div className='b-title'>Save your time</div> */}
        <div className='b-subtitle'>Upload your PDF files, then we will create summarized PDF file for you!</div>
        <CreatePDF serialNumber={serialNumber} selectType={selectType} loading={loading} setLoading={setLoading} dataTransferList={dataTransferList} />
        <div className='b-outer-two-buttons'>
          <div className='b-selecttype'><SelectType selectType={selectType} /></div>
          <UploadPDF fileInputRef={fileInputRef} dataFileCounter={dataFileCounter} dataTransferList={dataTransferList} setDataTransferList={setDataTransferList} />
        </div>
        <div className='b-dragdrop'>
          <DragDropList fileInputRef={fileInputRef} dataFileCounter={dataFileCounter} dataTransferList={dataTransferList} setDataTransferList={setDataTransferList} />
        </div>
        <div className='b-explain'>* All files uploaded to the server will be permanently deleted after download.</div>
      </div>
    </div>
  );
}

export default Main;
