// ContactSection.tsx
import React, { useState } from 'react';
import { Form, Input, Button, message, Row, Col, Card, Drawer } from 'antd';
import { MailOutlined, PhoneOutlined, UserOutlined, GithubOutlined, LinkedinOutlined, MediumOutlined } from '@ant-design/icons';
import CustomInput from '../Common/Input/TextInput';
import { useTranslations } from 'next-intl';

const { TextArea } = Input;

type Props = {
  open: boolean;
  onClose: (value: boolean) => void;
}

interface ContactFormValues {
  to_email: string;
  title: string;
  message: string;
}

export default function ContactMe({ open, onClose } : Props) {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const tContactMe = useTranslations("Portfolio.contact_me")

  const onFinish = async (values: ContactFormValues) => {
    setLoading(true);
    try {

      const subject = encodeURIComponent(values.title);
      const body = encodeURIComponent(values.message);
      window.open(`https://mail.google.com/mail/?view=cm&to=${values.to_email}&su=${subject}&body=${body}`, '_blank');

      form.resetFields();
    } catch (error) {
      message.error('Failed to send your message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Drawer
      title={tContactMe("drawer_title")}
      open={open}
      onClose={() => onClose(false)}
      width="600px"
    >
      <div className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{tContactMe("title")}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {tContactMe("description")}
            </p>
          </div>
          <Row gutter={[32, 32]} className="items-start">
            <Col xs={24}>
              <Card>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">{tContactMe("contact_info")}</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <MailOutlined className="text-xl text-blue-500 mr-4" />
                    <div>
                      <h4 className="font-medium text-gray-700">{tContactMe("email")}</h4>
                      <p className="text-gray-600">fardee.tat@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <PhoneOutlined className="text-xl text-blue-500 mr-4" />
                    <div>
                      <h4 className="font-medium text-gray-700">{tContactMe("phone")}</h4>
                      <p className="text-gray-600">065-0505-204</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h4 className="font-medium text-gray-700 mb-4">{tContactMe("find_me_on")}</h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/FardeeUseng"
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="text-2xl text-gray-700 hover:text-blue-500 transition-colors"
                    >
                      <GithubOutlined />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/fardee-useng-060b88264"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl text-gray-700 hover:text-blue-500 transition-colors"
                    >
                      <LinkedinOutlined />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/fardee-useng-060b88264"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl text-gray-700 hover:text-blue-500 transition-colors"
                    >
                      <MediumOutlined />
                    </a>
                  </div>
                </div>
              </Card>
            </Col>
            
            <Col xs={24}>
              <Card>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">{tContactMe("send_a_message")}</h3>
                
                <Form
                  form={form}
                  layout="vertical"
                  onFinish={onFinish}
                  requiredMark={false}
                >
                  <Form.Item
                    name="to_email"
                    label={tContactMe("to_email")}
                    initialValue="fardee.tat@gmail.com"
                  >
                    <CustomInput
                      prefix={<MailOutlined className="text-gray-400" />} 
                      size="large"
                      disabled
                    />
                  </Form.Item>

                  <Form.Item
                    name="title"
                    label={tContactMe("form_title")}
                    rules={[{ required: true, message: tContactMe("please_enter_your_title") }]}
                  >
                    <CustomInput
                      placeholder={tContactMe("form_your_title")}
                      size="large"
                    />
                  </Form.Item>
                  
                  <Form.Item
                    name="message"
                    label={tContactMe("form_message")}
                    rules={[{ required: true, message: tContactMe("please_enter_your_message") }]}
                  >
                    <TextArea
                      placeholder={tContactMe("form_your_message")}
                      rows={6}
                      className="resize-none"
                    />
                  </Form.Item>
                  
                  <Form.Item>
                    <Button 
                      type="primary" 
                      htmlType="submit" 
                      loading={loading}
                      size="large"
                      className="bg-blue-500 hover:bg-blue-600 border-blue-500 hover:border-blue-600 w-full md:w-auto"
                    >
                      {tContactMe("send_message")}
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </Drawer>
  );
};