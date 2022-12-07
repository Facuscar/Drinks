import { Col, Card, Button } from 'react-bootstrap';

const Drink = ({drink}) => {
    return (
        <Col md={2} lg={3}>
            <Card className='mb-1'>
                <Card.Img variant='top' src={drink.strDrinkThumb} alt={drink.strDrink} />
            </Card>
            <Card.Body>
                <Card.Title>{drink.strDrink}</Card.Title>
                <Button className='w-100 text-uppercase mt-2' variant='danger'>
                    See recipe
                </Button>
            </Card.Body>
        </Col>
    );
}

export default Drink;