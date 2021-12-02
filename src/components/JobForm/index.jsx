import React from "react";
import { Form, Input, Select, DatePicker, Button } from "antd";
import { saveJobThunk } from "../../redux/actions/jobs.actions";
import { useDispatch, useSelector } from "react-redux";

function JobForm() {
  const { token, id } = useSelector(state => state.users);
  const dispatch = useDispatch();

  const onFinish = (values) => {
    dispatch(saveJobThunk({...values, dateToWork: values.dateToWork._d, authorId: id}, token));
  };

  return (
    <Form
      labelCol={{ span: 6 }}
      layout="horizontal"
      onFinish={onFinish}
      style={{ marginTop: "24px" }}
    >
      <Form.Item
        name="groupJob"
        label="Tipo de trabajo"
        rules={[{ required: true, message: "Campo requerido" }]}
      >
        <Select>
          <Select.Option value="Mecanica">Mecanica</Select.Option>
          <Select.Option value="Limpieza">Limpieza</Select.Option>
          <Select.Option value="Plomeria">Plomeria</Select.Option>
          <Select.Option value="Albanileria">Albanileria</Select.Option>
          <Select.Option value="Pintura">Pintura</Select.Option>
          <Select.Option value="Educacion">Educacion</Select.Option>
          <Select.Option value="Otros">Otros</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="dateToWork"
        label="Fecha a realizar"
        rules={[{ required: true, message: "Campo requerido" }]}
      >
        <DatePicker placeholder="Seleccionar fecha" />
      </Form.Item>
      <Form.Item
        name="location"
        label="Ubicación"
        rules={[{ required: true, message: "Campo requerido" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="description"
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
          Publicar
        </Button>
      </Form.Item>
    </Form>
  );
}
export default JobForm;
