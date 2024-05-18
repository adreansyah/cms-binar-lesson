import { useNavigate } from "react-router"

const Sidebars = () => {
    const navigate = useNavigate();
    return (
        <div className="d-flex" style={{ height: '100vh', width: '290px' }}>
            <div className="d-flex gap-3 flex-column" style={{ background: '#0D28A6', width: 70 }}>
                <div className="p-3">
                    <div style={{ width: 34, height: 34, background: '#CFD4ED' }} />
                </div>
                <ul className="d-flex flex-column justify-content-center text-center" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                    <li onClick={() => navigate('/home')} className="d-flex flex-column align-items-center" style={{ height: 64, cursor: 'pointer' }}>
                        <i className="fa fa-home d-flex align-items-center" style={{ color: 'white', flex: 1 }}></i>
                        <p style={{ color: 'white', fontSize: 12, margin: 0, flex: 1 }}>Dashboard</p>
                    </li>
                    <li onClick={() => navigate('/car')} className="d-flex cursor-pointer flex-column align-items-center" style={{ height: 64, cursor: 'pointer' }}>
                        <i className="fa fa-car d-flex align-items-center" style={{ color: 'white', flex: 1 }}></i>
                        <p style={{ color: 'white', fontSize: 12, margin: 0, flex: 1 }}>Cars</p>
                    </li>
                </ul>
            </div>
            <div className="d-flex gap-3 flex-column" style={{ flex: 1 }}>
                <div className="d-flex align-items-center justify-content-center" style={{ height: 70, width: '`100%' }}>
                    <h4>Binar CMS</h4>
                </div>
                <div>
                    <div style={{ width: '`100%', height: 45 }} className="d-flex ms-4 align-items-center ">
                        <span style={{ flex: 1, color: 'gray', fontSize: 16, fontWeight: '500' }}>DASHBOARD</span>
                    </div>
                    <div style={{ width: '`100%', height: 45 }} className="d-flex ms-4 align-items-center ">
                        <span style={{ flex: 1, color: 'gray', fontSize: 14, fontWeight: '400' }}>dashboard</span>
                    </div>
                </div>
                <div>
                    <div style={{ width: '`100%', height: 45 }} className="d-flex ms-4 align-items-center ">
                        <span style={{ flex: 1, color: 'gray', fontSize: 16, fontWeight: '500' }}>CARS</span>
                    </div>
                    <div style={{ width: '`100%', height: 45 }} className="d-flex ms-4 align-items-center ">
                        <span style={{ flex: 1, color: 'gray', fontSize: 14, fontWeight: '400' }}>Car</span>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Sidebars