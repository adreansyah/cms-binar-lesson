const Sidebars = () => {
    return (
        <div className="d-flex" style={{ height: 902, width: '290px' }}>
            <div className="d-flex gap-3 flex-column" style={{ background: '#0D28A6', width: 70 }}>
                <div className="p-3">
                    <div style={{ width: 34, height: 34, background: '#CFD4ED' }} />
                </div>
                <ul className="d-flex flex-column justify-content-center text-center" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                    <li className="d-flex flex-column align-items-center" style={{ height: 64, cursor: 'pointer' }}>
                        <i className="fa fa-home d-flex align-items-center" style={{ color: 'white', flex: 1 }}></i>
                        <p style={{ color: 'white', fontSize: 12, margin: 0, flex: 1 }}>Dashboard</p>
                    </li>
                    <li className="d-flex cursor-pointer flex-column align-items-center" style={{ height: 64, cursor: 'pointer' }}>
                        <i className="fa fa-car d-flex align-items-center" style={{ color: 'white', flex: 1 }}></i>
                        <p style={{ color: 'white', fontSize: 12, margin: 0, flex: 1 }}>Cars</p>
                    </li>
                </ul>
            </div>
            <div> </div>
        </div>
    )
}


export default Sidebars