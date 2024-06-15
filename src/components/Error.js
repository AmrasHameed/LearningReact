import { useRouteError } from "react-router-dom"

const Error = () => {
    const errObj = useRouteError();
    console.log(errObj);
    return(
        <div>
            <h1>
                {errObj.data}
            </h1>
            <h2>
                {errObj.status} : {errObj.statusText}
            </h2>
        </div>
    )
}

export default Error