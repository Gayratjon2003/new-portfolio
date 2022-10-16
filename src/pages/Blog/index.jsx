import React, { useEffect, useState } from "react";
import Navbar from "../../container/Navbar/Navbar";
import Blogs from "./Blogs";
import "./index.scss";
import axios from "axios";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
function Blog() {
  const [data, setData] = useState([]);
  const url = `http://localhost:1337/api/blogs`;
  const submitHandler = (id) => {};

  useEffect(() => {
    axios.get(url).then((res) => {
      const [bigData] = res?.data?.data;
      setData(bigData?.attributes?.blog);
    });
  }, []);
  return (
    <React.StrictMode>
      <Navbar />
      <div className="blogs">
        {data.map((item) => (
          <div className="blogs-container" key={item.id}>
            <Fade bottom duration={2000}>
              <h1>{item.header}</h1>
            </Fade>
            <div className="card-box ">
              {data[0].info.map((i) => (
                <Fade bottom duration={2000} key={i.id}>
                  <div className="card">
                    <div className="card-child">
                      <div className="card-title">
                        <p>{i.data}</p>
                      </div>
                      <div className="card-body">
                        <Link
                          to={`/markdown/${i.id}/${item.id}`}
                          onClick={submitHandler}
                          key={i.id}
                        >
                          {i.title}
                        </Link>
                      </div>
                      <div className="card-footer">
                        <a href="#">{item.projectFooter} key={i.id}</a>
                      </div>
                    </div>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        ))}
      </div>
    </React.StrictMode>
  );
}

export default Blog;
