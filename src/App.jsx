import { useState } from 'react'
import './App.css'
import Axios from 'axios'
import { Image } from 'cloudinary-react'

function App() {

  const [imageSelected, setImageselected] = useState()

  const uploadImage = () => {
    // console.log(files[0])
    const formData = new FormData()
    formData.append('file', imageSelected)
    formData.append('upload_preset', 'sfjaahz4')

    Axios.post("https://api.cloudinary.com/v1_1/dsqpytomn/image/upload", formData).then((response) => {
      console.log(response)
    })
  }

  return (
    <>
      <input type="file" onChange={(event) => { setImageselected(event.target.files[0]) }} />
      <button onClick={uploadImage}>Upload Image</button>

      < Image cloudName="dsqpytomn" publicId="https://res.cloudinary.com/dsqpytomn/image/upload/v1720272139/u4tgurdui1fps0glxdyx.jpg" />
    </>
  )
}

export default App
