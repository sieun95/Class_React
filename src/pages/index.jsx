import axios from 'axios'

const Index = () => {
    const handleClick = async () => {
        const result = await axios({
            method: 'post',
            url: 'http://localhost:3500'}
            )  // return
        console.log(result)
    }
    return (
        <div>
            <button onClick={handleClick}>서버에게 요청</button>
        </div>
    )
}

export default Index