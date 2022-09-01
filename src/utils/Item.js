import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';



const Item = ({ item }) => {
    /* const {id, title, price, pictureUrl, price, stock } = item; */ 
  
    return (
        <>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Ver detalle del producto</Button>
          </Card.Body>
        </Card>
        </>
      );
    }

export default Item;
