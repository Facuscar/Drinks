import { Row } from 'react-bootstrap';
import Drink from './Drink';
import useDrinks from "../hooks/useDrinks";

const DrinkList = () => {
    const { drinks } = useDrinks();
    console.log(drinks);
    return (
        <Row>
            {drinks.map(drink => (
                <Drink key={drink.idDrink} drink={drink} />
            ))}
        </Row>
    );
}

export default DrinkList;