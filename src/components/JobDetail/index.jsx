import {
  PageHeader,
  Tag,
  Descriptions,
  Button,
  Typography,
} from "antd";
import moment from "moment";
import React from "react";
import Offer from "../../components/Offer/Offer";
import UserInfo from "../../components/Profile/UserInfo";
import { Offers } from "../../mocks/jobs";

function JobDetail({ job }) {
  const isCurrentUserPublisher = false;
  return (
    <>
      <div className="container">
        <PageHeader
          subTitle="Publicado el 13/2/2021"
          tags={<Tag color="blue">En búsqueda</Tag>}
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
              />
            </Descriptions.Item>
            <Descriptions.Item label="Descripción">
              {job.description}
            </Descriptions.Item>
            <Descriptions.Item label="Ubicación">
              {job.location}
            </Descriptions.Item>
            <Descriptions.Item label="Fecha a realizar">
              {moment(job.dateToWork).format("DD/MM/YYYY")}
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

export default JobDetail;
