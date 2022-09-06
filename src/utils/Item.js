import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';


const Item = ({ item }) => {

    return (
        <>
        <Card style={{ width: '18rem' }}>
          <Card.Img className='card-box' src={item.image}/>
          <Card.Body>
            <Card.Title>{item.name} {item.brand}</Card.Title>
            <Card.Text>
              {item.stock} unidades disponibles
            </Card.Text>
            <Button variant="primary">Ver detalle del producto</Button>
          </Card.Body>
        </Card>
        </>
      );
    }

export default Item;
