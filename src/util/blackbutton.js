function BlackButton(props) {
    return (
        <button className='b-createPDF'>
            <div className='b-inner-createPDF'>{props.name}</div>
            {props.icon}
        </button>
    );
}

export default BlackButton;