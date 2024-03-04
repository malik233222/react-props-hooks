import car from '../assets/images/car1.png';
import Buttons from './Buttons';
export default function Cards({items}) {
    return (
        <div className="col-4">
            <div className="card" style={{ width: " 18rem" }}>
                <img src={items.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{items.title}</h5>
                    <p className="card-text">{items.description}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                    <Buttons title="Add Basket" mode="btn btn-success" />

                </div>
            </div>
        </div >
    )
}
