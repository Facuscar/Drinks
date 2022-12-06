import { Button, Form, Row, Col } from 'react-bootstrap';
import useCategories from '../hooks/useCategories';

const DrinksForm = () => {

    const { categories } = useCategories();

    return (
        <Form>
            <Row>
                <Col md={6}>
                    <Form.Group>
                        <Form.Label htmlFor='name'>Drink name</Form.Label>
                        <Form.Control type='text' placeholder='Tequila' name='name' id='name' />
                    </Form.Group>
                </Col>
                <Col md={6}>
                <Form.Group>
                        <Form.Label htmlFor='name'>Category name</Form.Label>
                        <Form.Select id='category' name='category'>
                            <option value="">- Choose a category -</option>
                            { categories && categories.map(category => (
                                <option key={category.strCategory} value={category.strCategory}>{category.strCategory}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <Row className='justify-content-end mt-4'>
                <Col md={3}>
                    <Button variant='danger' className='text-uppercase w-100'>
                        Search Drinks
                    </Button>
                </Col>
            </Row>
        </Form>
    );
}

export default DrinksForm;