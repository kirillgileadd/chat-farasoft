import React, {useEffect} from 'react';
import {Navigate, Outlet, Route, Routes, useLocation} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import Join from "./Join";
import Rooms from "./Rooms";
import Chat from "./Chat";
import {AuthActionCreators} from "../store/reducers/auth/action-creators";

const ProtectedRoute = ({isAuth, redirectPath = '/'}) => {
    const dispatch = useDispatch()
    const location = useLocation()

    useEffect(() => {
        dispatch(AuthActionCreators.setLocation(location))
    }, [])

    if (!isAuth) {
        return <Navigate to={redirectPath} replace/>;
    }

    return <Outlet/>;
};

const AppRouter = () => {
    const {isAuth} = useSelector(state => state.auth);

    return (
        <Routes>
            <Route path='/' element={<Join isAuth={isAuth}/>}/>
            <Route element={<ProtectedRoute isAuth={isAuth} />}>
                <Route path='/rooms' element={<Rooms/>}/>
                <Route path='/chat/' element={<Chat/>}/>
            </Route>
        </Routes>
    );
};

export default AppRouter;