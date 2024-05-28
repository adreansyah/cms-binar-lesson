import ListCar from "../pages/car"
import CarForm from "../pages/car/form"
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
        element: <ListCar title="List Car" {...props} />,
    }, {
        index: true,
        path: "/car/form",
        element: <CarForm title="Add New Car" {...props} />,
    }, {
        index: true,
        path: "/car/:id",
        element: "detail mobil",
    }, {
        index: true,
        path: "/car/:id/edit",
        element: <CarForm title="Created Car" {...props} />,
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
