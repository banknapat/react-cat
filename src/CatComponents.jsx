import React, { useEffect, useState } from "react";
import "./CatComponents.css";
import { Card, Spin } from "antd";
import axios from "axios";


const CatComponents = () => {
  const [showData, setShowData] = useState([]);
  const [showControl, setShowControl] = useState(false);

  const handleClick = () => {
    setShowControl((prevShowControl) => !prevShowControl);
  };

  useEffect(() => {
    fetchData();
  }, [showControl]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api.thecatapi.com/v1/images/search?format=json"
      );
      setShowData(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(showData);
  return (
    <div>
      {showData.length === 0 ? (
        <Spin />
      ) : (
        <div className="container">
          <Card
            hoverable
            style={{}}
            cover={<img alt="cat" src={showData[0]?.url} />}
          >
            <button onClick={handleClick}>เปลี่ยนรูป</button>
          </Card>

        </div>
      )}
    </div>
  );
};

export default CatComponents;
