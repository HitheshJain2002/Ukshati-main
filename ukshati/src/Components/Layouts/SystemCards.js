import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { SystemInfo } from "../Utils/Data";

const SystemCards = () => {
  const navigate = useNavigate();

  const handleCardClick = (path, owned) => {
    if (owned) {
      navigate(path);
    }
  };

  return (
    <div className="bg-gray-100 py-10">
      <Container className="mt-5">
        <Row className="flex justify-center space-x-6 flex-wrap">
          {SystemInfo.map((product) => (
            <Col key={product.id} xs={8} md={3} className="mb-6">
              <Card
                onClick={() => handleCardClick(`${product.nav}`, product.owned)}
                className={`bg-white shadow-lg rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${
                  !product.owned ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <Card.Img
                  className="rounded-t-lg object-cover h-48 w-full"
                  variant="top"
                  src={product.img}
                  alt={`${product.title} image`}
                />
                <Card.Body className="p-4 flex flex-col justify-center items-center">
                  <Card.Title className="text-xl font-semibold text-gray-800 mb-2">
                    {product.title}
                  </Card.Title>
                  <div className="flex space-x-2 mb-3">
                    {product.icons.map((icon, idx) => (
                      <img
                        key={idx}
                        src={icon}
                        alt={`${product.title} icon ${idx + 1}`}
                        className="w-5 h-5"
                      />
                    ))}
                  </div>
                  <Card.Text className="text-gray-600 text-center">
                    {product.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default SystemCards;
