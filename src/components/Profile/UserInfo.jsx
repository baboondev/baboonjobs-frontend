import React from "react";
import { Avatar, Space, Rate, Typography } from "antd";

function UserInfo({ firstName, lastName, userType, rate }) {
  const avatarInitials = firstName[0] + lastName[0];
  return (
    <>
      <Space size={6}>
        <Avatar>{avatarInitials}</Avatar>
        <Typography.Text strong>{firstName + " " + lastName}</Typography.Text>
        <Typography.Text type="secondary">{userType}</Typography.Text>
        <Rate disabled defaultValue={rate} />
      </Space>
    </>
  );
}

export default UserInfo;
