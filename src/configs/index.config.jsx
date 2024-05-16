import { Navigate, useRoutes, useNavigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./router.config";
import { useEffect } from "react";
import Layout from "../layout";

const isLoggedIn = true;

export const AppCreatePublicRoutes = (props) => {
    const routes = useRoutes(publicRoutes(props));
    return routes ? routes : <Navigate replace to={{ pathname: '/' }} />;
}

export const AppCreatePrivateRoutes = (props) => {
    const routes = useRoutes(privateRoutes(props));
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/home');
    }, [navigate]);
    return routes;
}

export const PublicRoute = (props) => {
    if (isLoggedIn) return <Layout />
    return <AppCreatePublicRoutes {...props} />;
}