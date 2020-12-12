import React from "react";
import { useState, useEffect } from "react";
import { Card, Button, Row, Col, Container, Spinner } from "react-bootstrap";

export default function Body() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    setLoading(true);
    const res = await fetch(
      "https://api.nytimes.com/svc/books/v3/lists/combined-print-and-e-book-fiction.json?api-key=YJZcHPfKK7ABZ7jPz81dVGRprexNMB7D"
    );
    const data = await res.json();
    setBooks(data);
    setLoading(false);
    console.log(data);
  };

  if (loading) {
    return (
      <Container>
        <Row>
          <Spinner animation="border" role="status" className="m-auto">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </Row>
      </Container>
    );
  }

  return (
    <Container>
      <Row>
        {books.results.books.map((item, index) => (
          <Col xl={3} lg={3} md={6} sm={6} xs={12}>
            <Card className="m-1 ">
              <Card.Img variant="top" src={item.book_image} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Button variant="primary" href={"more/" + item.title}>
                  More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
