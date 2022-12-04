import { Button, Form, Row, Col } from 'react-bootstrap';

const DrinksForm = () => {
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
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
        </Form>
    );
}

export default DrinksForm;