import { Button, Col, Form, Input, Row } from 'antd';
import { ROW_GUTTER } from 'constants/ThemeConstant';
import React from 'react';

const EditClientForm = React.memo(({
  name,
  username,
  email,
  phone,
  website,
  addressCity,
  addressStreet,
  addressSuite,
  addressZipcode,
  addressGeoLat,
  addressGeoLng,
  companyName,
  companyCatchPhrase,
  companyBs,
  onFinish,
  onFinishFailed
}) => (
  <div className="mt-4">
    <Form
      name="basicInformation"
      layout="vertical"
      initialValues={{
        name,
        username,
        email,
        phone,
        website,
        addressCity,
        addressStreet,
        addressSuite,
        addressZipcode,
        addressGeoLat,
        addressGeoLng,
        companyName,
        companyCatchPhrase,
        companyBs,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Row>
        <Col xs={24} sm={24} md={24} lg={16}>
          <Row gutter={ROW_GUTTER}>
            <Col xs={24} sm={24} md={12}>
              <Form.Item
                label="Name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: 'Please input your name!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12}>
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12}>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    type: 'email',
                    message: 'Please enter a valid email!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12}>
            </Col>
            <Col xs={24} sm={24} md={12}>
              <Form.Item label="Phone Number" name="phone">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12}>
              <Form.Item label="Website" name="website">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12}>
              <Form.Item label="City" name="addressCity">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12}>
              <Form.Item label="Street" name="addressStreet">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12}>
              <Form.Item label="Suite" name="addressSuite">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12}>
              <Form.Item label="Zipcode" name="addressZipcode">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={24}>
              <h3>Geolocation</h3>
            </Col>
            <Col xs={24} sm={24} md={12}>
              <Form.Item label="Geo latitude" name="addressGeoLat">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12}>
              <Form.Item label="Geo longitude" name="addressGeoLng">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={24}>
              <h3>Company</h3>
            </Col>
            <Col xs={24} sm={24} md={12}>
              <Form.Item label="Name" name="companyName">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12}>
              <Form.Item label="Catch phrase" name="companyCatchPhrase">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12}>
              <Form.Item label="Bs" name="companyBs">
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Button type="primary" htmlType="submit">
            Save Change
          </Button>
        </Col>
      </Row>
    </Form>
  </div>
));

export default EditClientForm;
