import { Link } from 'react-router-dom'

export const Alert = (prop) => {
    return (
        <div className="alert alert-success d-flex align-items-center" role="alert">
            {prop.message}
            <Link className="btn btn-primary" to='/'> Go to home </Link>
        </div>
    )
}