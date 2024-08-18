import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/register`,
        { name, email, password, phone, address, answer }
      );
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h1 className="title">Register Page</h1>
          <div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter the password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Entre your Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Entre Your Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Your fav sports"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              REGISTER
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
