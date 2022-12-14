import { Col, Card, Button } from 'react-bootstrap';
import useDrinks from '../hooks/useDrinks';

const Drink = ({drink}) => {
    const { handleModalClick, handleDrinkIdClick } = useDrinks();

    return (
        <Col md={2} lg={3} className='mb-5'>
            <Card className='mb-1'>
                <Card.Img variant='top' src={drink.strDrinkThumb} alt={drink.strDrink} />
            </Card>
            <Card.Body className='d-flex flex-column justify-content-between' style={{height: "8.5rem"}}>
                <Card.Title>{drink.strDrink}</Card.Title>
                <Button 
                    className='w-100 text-uppercase mt-2' 
                    variant='danger' 
                    onClick={() => { 
                        handleModalClick(); 
                        handleDrinkIdClick(drink.idDrink); 
                        }}
                >
                    See recipe
                </Button>
            </Card.Body>
        </Col>
    );
}

export default Drink;