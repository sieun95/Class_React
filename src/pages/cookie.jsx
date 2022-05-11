import axios from "axios";

const Cookie = () => {
    const handleClick = async () => {
        const result = await axios.post('http://localhost:3500/cookie','null', {withCredentials:true})
        console.log(result)
    }
    return (
        <>
            <button onClick={handleClick}>가자!!!</button>
        </>
    )
}
export default Cookie