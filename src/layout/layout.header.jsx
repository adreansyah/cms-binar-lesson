const Headers = () => {
    const logout = () => {
        localStorage.removeItem('TOKEN');
        window.location.replace('/')
    }
    return (
        <div style={{ flex: 1, width: '100%', height: '70px' }} className="shadow-sm justify-content-between d-flex align-items-center p-4">
            <i className="fa fa-bars"></i>
            <div onClick={logout} className='d-flex gap-2 align-items-center' style={{ height: 46, padding: 20, cursor: 'pointer' }}>
                <span>Logout</span>
                <i className="fa fa-chevron-down" style={{ fontSize: 12 }} />
            </div>
        </div>
    )
}


export default Headers