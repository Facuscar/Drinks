import { Modal, Image } from "react-bootstrap";
import useDrinks from "../hooks/useDrinks";

const DrinkModal = () => {
    const { showModal, handleModalClick, recipe } = useDrinks();
    const showIngredients = () => {
        let ingredients = [];
        for (let i = 1; i < 16; i++) {
            if (!recipe[`strIngredient${i}`])  continue;
            ingredients.push(<li>{recipe[`strIngredient${i}`]} {recipe[`strMeasure${i}`]}</li>)
        }
        return ingredients;
    }
    return (
        <>
            { recipe && (
                <Modal show={showModal} onHide={handleModalClick}>
                    <Image src={recipe.strDrinkThumb} alt={`Drink ${recipe.strDrink}`} />
                    <Modal.Header>
                        <Modal.Title>{recipe.strDrink}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="p-3">
                            <h2>Steps</h2>
                            <p>{recipe.strInstructions}</p>
                            <h2>Ingredients</h2>
                            <ul>{showIngredients()}</ul>
                            
                        </div>
                    </Modal.Body>
                </Modal>
            )}
        </>
    );
}

export default DrinkModal;