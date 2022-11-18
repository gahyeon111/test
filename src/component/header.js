import logo from '../asset/logo.svg'

function Header() {
    return (
        <div className='App-header'>
            <div className='h-body'>
                {/* <FaHourglass color='#2856A0' /> */}
                {/* <img className='h-logo' src={logo} alt="logo" /> */}
                <div className='h-headline'>PDF Summarizer</div>
                <div className='h-moreinfo'>More Info.</div>
                <a className="h-aboutus" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >ABOUT US</a>
            </div>
        </div>
    )
}

export default Header;