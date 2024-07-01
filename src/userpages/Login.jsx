import { Button, Form, Input, Checkbox } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import AuthAPI from "../api/AuthAPI";
import openNotificationWithIcon from "../notification";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    console.log("Received values of form: ", values);
    try {
      const response = await AuthAPI.Login(values.email, values.password);
      if (response.data.success) {
        openNotificationWithIcon("success", "Login Successfully");
        localStorage.setItem("token", response.data.data.token);
        localStorage.setItem("userId", response.data.data.userId);
        localStorage.setItem("fullName", response.data.data.fullName);
        navigate("/");
      } else {
        openNotificationWithIcon("error", "Login Failed!", response.data.data);
      }
    } catch (error) {
      openNotificationWithIcon("error", "Login Failed!", error.data);
    }
  };

  return (
    <section className="flex items-center bg-white-100 min-h-screen">
      <div className="mx-auto w-96">
        <div className="text-center mb-8">
          <svg
            width="33"
            height="32"
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.125" width="32" height="32" rx="6.4" fill="#1890FF" />
            <path
              d="M19.3251 4.80005H27.3251V12.8H19.3251V4.80005Z"
              fill="white"
            />
            <path d="M12.925 12.8H19.3251V19.2H12.925V12.8Z" fill="white" />
            <path d="M4.92505 17.6H14.525V27.2001H4.92505V17.6Z" fill="white" />
          </svg>
          <h2 className="text-3xl font-bold mt-4">Login</h2>
        </div>
        <Form
          name="normal_signup"
          onFinish={onFinish}
          layout="vertical"
          requiredMark="optional"
        >
          <div className="">
            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  required: true,
                  message: "Please input your Email!",
                },
              ]}
            >
              <Input
                prefix={<MailOutlined className="text-xl" />}
                placeholder="Email"
                className="h-12"
              />
            </Form.Item>
          </div>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input.Password
              className="h-12"
              prefix={<LockOutlined className="text-xl" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            className="flex justify-start"
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item className="mb-0">
            <Button block type="primary" htmlType="submit">
              Login
            </Button>
            <div className="flex justify-between mt-6">
              <a href="/forgot-password" className="text-blue-500">
                Forgot password?
              </a>
              <a href="/register" className="text-blue-500">
                Do not have an account? Sign Up
              </a>
            </div>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
}
