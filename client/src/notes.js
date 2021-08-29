import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  InputGroup,
  FormControl,
} from 'react-bootstrap';
function Notes() {
  return (
    <Container>
      <Row>
        <Col sm={4}>
          <Card>
            <Card.Header>Notes</Card.Header>
            <Card.Body>
            <ListGroup variant='flush'>
              <ListGroup.Item>Note 1</ListGroup.Item>
              <ListGroup.Item>Note 2</ListGroup.Item>
              <ListGroup.Item>Note 3</ListGroup.Item>
            </ListGroup>
            </Card.Body>

          </Card>
        </Col>
        <Col sm={8}>
          <InputGroup size='lg'>
            <InputGroup.Text id='inputGroup-sizing-lg'>Title</InputGroup.Text>
            <FormControl
              aria-label='Large'
              aria-describedby='inputGroup-sizing-sm'
            />
          </InputGroup>

          <InputGroup>
            <InputGroup.Text>Note</InputGroup.Text>
            <FormControl as='textarea' aria-label='With textarea' />
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default Notes;
