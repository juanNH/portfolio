import { Route, Navigate  } from "react-router-dom";

const PrivateRouter = (props: any) => { 
    const { userSession } = props;
    if (userSession.token) {
        return <Route {...props} />;
    } else {
        return <Navigate to='/login' replace />;
    }

}
export default PrivateRouter;
