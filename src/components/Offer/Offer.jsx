import { Avatar, Button, Comment, Rate, Typography } from "antd";
import React from "react";

function Offer({author, description, price, date}) {
  const avatarInitials = author.firstName[0] + author.lastName[0];
  return (
    <>
      <Comment
        author={
          <>
            {author.firstName} {author.lastName} - <Rate disabled defaultValue={author.rate} />
          </>
        }
        avatar={<Avatar>{avatarInitials}</Avatar>}
        datetime={
            <span>{date}</span>
        }
        content={
          <ContentOffer
            price={price}
            description={description}
          />
        }
        actions={[<Button>Aceptar oferta</Button>]}
      ></Comment>
    </>
  );
}

function ContentOffer({ price, description }) {
  return (
    <>
      <Typography.Text strong>${price}</Typography.Text>
      <Typography.Paragraph>{description}</Typography.Paragraph>
    </>
  );
}

export default Offer;
