import Buttons from "./components/Buttons"
import Cards from "./components/Cards"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import { useEffect, useState } from "react"

function App() {

  const [data, setData] = useState([]);


  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => {
        response.json()
          .then(result => {
            setData(result)
          })
      })
  }, []);

  return (
    <>
      <header>
        <Navbar />
      </header>

      <Buttons title="All products" mode="btn btn-info " />

      <section>
        <h1 className="text-center my-5">Products</h1>

        <div className="container">
          <div className="row">
            {
              data.map((item) => (

                <Cards key={item.id} items={item} />
              ))
            }
          </div>
        </div>

      </section>
    </>
  )
}

export default App
