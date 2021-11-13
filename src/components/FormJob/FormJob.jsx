import React from "react";
import { Form, Input, Select, DatePicker, Button } from "antd";

function FormJob(props) {
  const {formData, onFinish, onFinishFailed} = props;
  return(<Form
    labelCol={{ span: 6 }}
    layout="horizontal"
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    style={{ marginTop: "24px" }}
  >
    <Form.Item
      name="type"
      label="Tipo de trabajo"
      rules={[{ required: true, message: "Campo requerido" }]}
    >
      <Select>
        <Select.Option value="demo">Tipo de trabajo 1</Select.Option>
        <Select.Option value="demo2">Tipo de trabajo 2</Select.Option>
        <Select.Option value="demo3">Tipo de trabajo 3</Select.Option>
      </Select>
    </Form.Item>
    <Form.Item
      name="dateWork"
      label="Fecha a realizar"
      rules={[{ required: true, message: "Campo requerido" }]}
    >
      <DatePicker placeholder="Seleccionar fecha"/>
    </Form.Item>
    <Form.Item
      name="ubication"
      label="Ubicación"
      rules={[{ required: true, message: "Campo requerido" }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name="detail"
      label="Descripción detallada"
      rules={[{ required: true, message: "Campo requerido" }]}
    >
      <Input.TextArea rows={5} />
    </Form.Item>
    <Form.Item
      wrapperCol={{ offset: 6 }}
      rules={[{ required: true, message: "Campo requerido" }]}
    >
      <Button type="primary" htmlType="submit">
        {formData ? "Editar" : "Publicar"}
      </Button>
    </Form.Item>
  </Form>)
}
export default FormJob