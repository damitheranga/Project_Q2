import React from "react";
import { useState, useEffect } from "react";
import {
  Card,
  Button,
  Row,
  Col,
  Container,
  Spinner,
  ListGroup,
  ListGroupItem,
  Image,
} from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function More() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  let { book_name } = useParams();

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    setLoading(true);
    const res = await fetch(
      "https://api.nytimes.com/svc/books/v3/lists/combined-print-and-e-book-fiction.json?api-key=YJZcHPfKK7ABZ7jPz81dVGRprexNMB7D"
    );
    const data = await res.json();
    if (data != null) {
      data.results.books.forEach((element) => {
        if (element.title === book_name) {
          setBooks(element);
          console.log(element);
        }
      });
    }

    setLoading(false);
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
        <Col xl={12} lg={3} md={12} sm={12} xs={12}>
          <Card className="m-1 ">
            <Card.Body>
              <Row>
                <Col xl={3} lg={3} md={6} sm={12} xs={12}>
                  <Image
                    src={books.book_image}
                    className="center"
                    width="100%"
                  />
                </Col>
                <Col xl={9} lg={9} md={6} sm={12} xs={12}>
                  <h1>{books.title}</h1>
                  <Card.Text>{books.description}</Card.Text>

                  <ListGroup className="list-group-flush">
                    <ListGroupItem>Author:{books.author}</ListGroupItem>
                    <ListGroupItem>Publisher:{books.publisher}</ListGroupItem>
                  </ListGroup>
                  <Button variant="primary" href={books.amazon_product_url}>
                    Buy Now
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
