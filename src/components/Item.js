import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Item = ({ item }) => {

  const titleDisplay = (name, brand) => {
    const title = `${name} ${brand}`
    if(title.length <= 24) {
      return title
    }else{
      return `${title.slice(0, 21)}...`
    }
}

    return (
        <>
        <div className="product-wrapper">
          <Card style={{ width: '18rem' }}>
            <Card.Img className='card-box' src={item.image}/>
            <Card.Body>
              <Card.Title>{titleDisplay(item.name, item.brand)}</Card.Title>
              <Card.Text>
                {item.stock} unidades disponibles
              </Card.Text>
              <Button variant="primary"><Link className="button-link" to={`/item/${item.id}`}>Ver detalle del producto</Link></Button>
            </Card.Body>
          </Card>
        </div>
        </>
      );
    }

export default Item;
