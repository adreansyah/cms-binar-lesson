import Home from "../pages/home"
import Login from "../pages/login"


export const privateRoutes = (props) => {
    return [{
        index: true,
        path: "/home",
        element: <Home title="Home" {...props} />,
    }, {
        index: true,
        path: "/car",
        element: "upload mobil",
    }]
}

export const publicRoutes = (props) => {
    return [{
        index: true,
        path: "/",
        element: <Login title="Login" {...props} />,
    }, {
        index: true,
        path: "/login",
        element: <Login title="Login" {...props} />,
    }]
}
