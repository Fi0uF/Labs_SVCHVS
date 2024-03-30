import React from "react";
import { Accordion, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const FaqPage = () => {
  return (
    <Container>
    <Accordion className="mt-4">
      <Accordion.Item eventKey="0">
        <Accordion.Header className="bg-primary text-white">
        Можно ли сделать предзаказ на кофе?
        </Accordion.Header>
        <Accordion.Body>
        Да, мы принимаем предзаказы. Вы можете сделать заказ через наш веб-сайт или по телефону. Пожалуйста, учтите, что на обработку заказа может потребоваться некоторое время.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header className="bg-primary text-white">
          Что включено в наше меню кофейни?
        </Accordion.Header>
        <Accordion.Body>
        В нашем меню кофейни представлены разнообразные виды кофе, включая эспрессо, латте, капучино и мокко. Мы также предлагаем различные виды чая и домашние десерты.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header className="bg-primary text-white">
        Можно ли у вас купить подарочные карты?
        </Accordion.Header>
        <Accordion.Body>
        Да, у нас есть подарочные карты, которые можно приобрести на любую сумму. Они идеально подходят в качестве подарка для любителей кофе. Подарочные карты можно купить в нашем заведении.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header className="bg-primary text-white">
        У вас есть бесплатный Wi-Fi?
        </Accordion.Header>
        <Accordion.Body>
        Да, у нас есть бесплатный Wi-Fi для всех наших гостей. Пожалуйста, обратитесь к нашему персоналу для получения информации о подключении.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Container>
  );
};

export default FaqPage;