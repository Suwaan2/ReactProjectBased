/* eslint-disable react-refresh/only-export-components */

import { useLoaderData } from "react-router-dom"

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Suwaan2')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl flex flex-col justify-center items-center'>
        Github followers: {data.followers}

        <img className="rounded-3xl bg-blend-darken mb-4 mt-4" src={data.avatar_url} alt="Git Picture" width={300}/>
        <div className="flex flex-col text-black">
        <p>Name:{data.name}</p> 
        <p>Loaction: {data.location}</p> 
        <p>Bio:{data.bio}</p> 
        <p>Twitter:{data.twitter_username}</p> 
        </div>
        
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Suwaan2')
    return response.json()
}
