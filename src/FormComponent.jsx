import React, { useState ,useEffect ,useContext } from "react";
import { DataContext } from "./App";

const FormComponents = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {setLoginState} = useContext(DataContext)


  const validateForm = (e) => {
    e.preventDefault();
    if (userName === "cat" && password === "cat1234") {
      alert("ยินดีต้อนรับเข้าสู่ระบบ");
      setLoginState(true)
    } else {
      alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
      setUsername("");
      setPassword("");
    }
  };


  return (
    <div className="container">
      <form className="form" onSubmit={validateForm}>
        <h2>ลงชื่อเข้าใช้งาน</h2>
        <br />
        <div className="form-control">
          <label htmlFor="name">ชื่อผู้ใช้</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="name">รหัสผ่าน</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">ลงชื่อเข้าใช้</button>
      </form>
    </div>
  );
};

export default FormComponents;
