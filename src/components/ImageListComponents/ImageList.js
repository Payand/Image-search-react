import React, { useState } from "react";
import "./ImageList.css";
const ImageList = ({ images }) => {
  const [show, setShow] = useState("");

  const img = images.map(({ id, urls, alt_description }) => (
    <img
      key={id}
      src={urls.regular}
      alt={alt_description}
      onMouseOver={(e) => setShow(e.target.src)}
    />
  ));

  return (
    <div className="show">
      <div className="image-list">{img}</div>
      <div>
        <img className="big-show" src={show} alt={show.substring(0, 10)} />
      </div>
    </div>
  );
};

export default ImageList;
