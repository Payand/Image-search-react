import React from "react";

const ImageList = ({ images }) => {
  console.log(images);
  const img = images.map(({ id, urls, alt_description }) => (
    <img key={id} src={urls.regular} alt={alt_description} />
  ));

  return <div>{img}</div>;
};

export default ImageList;
