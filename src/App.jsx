import Image from "./components/Image"
import Input from "./components/Input"
import { useState } from "react";


function App() {

  const [img, setImg] = useState("")


  async function send(value) {
    setImg('https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700')
    const result = await fetch(`https://source.unsplash.com/random/900x700/?${value}`)
    setImg(result.url)

  }


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6 offset-3 mt-5">
            <Input send={send} />
            <Image src={img} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
