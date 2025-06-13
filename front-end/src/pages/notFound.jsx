import { Link } from "react-router-dom"

export default function NotFoundPage(){
    return (
        <>
        <h1>Page Not Found</h1>
        <p>You look kinda lost, don't ya?</p>
        <Link to=''>
            <p>Take me home, unlost me!</p>
        </Link>
        </>
    )
}