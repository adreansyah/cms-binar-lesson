import { AppCreatePrivateRoutes } from "../configs/index.config";
import Headers from "./layout.header";
import Sidebars from "./layout.sidebar";

const Layout = (props) => {
    return (
        <div className="d-flex">
            <div>
                <Sidebars />
            </div>
            <div style={{ width: '100%' }}>
                <Headers />
                <div className="p-5" style={{ width: '100%', height: '100vh', background: '#f4f5f7' }}>
                    <AppCreatePrivateRoutes {...props} />
                </div>
            </div>
        </div >
    )
}

export default Layout;