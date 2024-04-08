import React, {useState} from 'react'

const FetchData = () => {
    const [inpVal, setInpVal] = useState()
    const handleMakeGetRequest = async()=>{
        try {
            const res = await fetch ('http://localhost:4000/api/v1/product')
            const data = await res.json()
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    async function sendDataToServer(){
        try {
            const res = await fetch ('http://localhost:4000/api/v1/createProduct',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: inpVal
                }),
            })
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div>
        <button onClick={handleMakeGetRequest}>Make Request To Server</button>

        <input onChange={(e) => setInpVal(e.target.value)} type="text"/>

        <button onClick={sendDataToServer}>Send Server a Data</button>
      
    </div>
  )
}

export default FetchData
