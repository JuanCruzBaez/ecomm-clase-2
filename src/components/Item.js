import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Item = ({ item }) => {

    return (
        <>
        <div className="product-wrapper">
          <Card style={{ width: '18rem' }}>
            <Card.Img className='card-box' src={item.image}/>
            <Card.Body>
              <Card.Title>{item.name} {item.brand}</Card.Title>
              <Card.Text>
                {item.stock} unidades disponibles
              </Card.Text>
              <Button variant="primary"><Link className="button-link" to={`/item/${item.id}`}>Ver detalle del producto</Link></Button>
            </Card.Body>
          </Card>
        </div>
        <hr />
        </>
      );
    }

export default Item;
