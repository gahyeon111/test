import './style/App.css';
import { FaHourglass } from "react-icons/fa";
import SelectType from './component/selecttype';
import UploadPDF from './component/uploadpdf';
import DragNDrop from './component/dragndrop';
import DragDrop from './component/dragdrop';

import logo from './asset/logo.svg'
import send from './asset/send.svg'

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <header className='App-header'>
        <div className='h-body'>
          {/* <FaHourglass color='#2856A0' /> */}
          <img className='h-logo' src={logo} alt="logo" />
          <div className='h-headline'>PDF Summarizer</div>
          <div className='h-moreinfo'>More Info.</div>
          <a className="h-aboutus" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >ABOUT US</a>
        </div>
      </header>
      <div className='App-body'>
        <div className='b-title'>Save your time</div>
        <div className='b-subtitle'>Upload your PDF files, than we will create summarized PDF file for you!</div>
        <div className='b-createPDF'>
          <div className='b-inner-createPDF'>create PDF</div>
          <img src={send} alt=">" />
        </div>
        <div className='b-outer-two-buttons'>
          <div className='b-selecttype'><SelectType /></div>
          <div className='b-outer-uploadpdf'><UploadPDF /></div>
        </div>
        <DragNDrop />
        {/* <div className='b-dragdrop'><DragDrop /></div> */}
      </div>
    </div>
  );
}

export default App;
