import {
  PageHeader,
  Tag,
  Descriptions,
  Breadcrumb,
  Button,
  Typography,
} from "antd";
import React from "react";
import { Link } from "react-router-dom";
import Offer from "../../components/Offer/Offer";
import UserInfo from "../../components/Profile/UserInfo";
import { Offers } from "../../mocks/jobs";

function Job(props) {
  const isCurrentUserPublisher = false;
  return (
    <>
      <div className="container">
        <PageHeader
          title="Electricista para Zona NNNNN"
          subTitle="Publicado el 13/2/2021"
          tags={<Tag color="blue">En búsqueda</Tag>}
          breadcrumb={
            <Breadcrumb>
              <Breadcrumb.Item>
                <Link to="/jobs">Trabajos</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to="/jobs?type=electricistaID">Electricista</Link>
              </Breadcrumb.Item>
            </Breadcrumb>
          }
          extra={
            <>
              {isCurrentUserPublisher && <Button>Editar</Button>}
              <Button type="primary">Enviar una propuesta</Button>
            </>
          }
        >
          <Descriptions layout="horizontal" column={1} bordered>
            <Descriptions.Item label="Publicado por">
              <UserInfo
                firstName="Marcos"
                lastName="Sosa"
                rate={3}
                userType={"Solicitante"}
              />
            </Descriptions.Item>
            <Descriptions.Item label="Descripción">
              Ant Design&#x27;s design team preferred to design with the HSB
              color model, which makes it easier for designers to have a clear
              psychological expectation of color when adjusting colors, as well
              as facilitate communication in teams.
            </Descriptions.Item>
            <Descriptions.Item label="Ubicación">
              Paseo de la Castellana
            </Descriptions.Item>
            <Descriptions.Item label="Fecha a realizar">
              9/12/2018
            </Descriptions.Item>
          </Descriptions>
        </PageHeader>
        <section id="offers" style={{ padding: "24px" }}>
          <Typography.Title level={4}>Ofertas</Typography.Title>
          <div id="offers">
            {Offers.map((offer) => (
              <Offer
                key={offer.id}
                author={offer.author}
                description={offer.description}
                price={offer.price}
                date={offer.date}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Job;
