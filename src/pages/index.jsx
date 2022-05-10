import axios from 'axios'

const Index = () => {
    const handleClick = async () => {
        // alert('click')
        const result = await axios.get('http://localhost:3500')  // return
        console.log(result)
        // promise object
        // http get 인자2 주소 해더
        // http post 인자 3 주소 바디 해더
    }
    return (
        <div>
            <button onClick={handleClick}>서버에게 요청</button>
        </div>
    )
}

export default Index