import React from "react";
import { useState } from "react";
import Menu from "./Menu";
import imageSrc1 from "./download (1).jpg";
import imageSrc2 from "./fastFood.jpg";
import imageSrc3 from "./chinese.jpg";
import imageSrc4 from "./continental.jpg";
import imageSrc5 from "./deserts.jpg";
import imageSrc6 from "./bbq.jpg";
import categories from "./categories";

function Images() {
  let [selectedImage, setSelectedImage] = useState(null);
  const handleImage = (imageId) => {
    setSelectedImage(imageId);
  };

  return (
    <div className="outerDivPic">
      <div className="innerDiv">
        <img className="img1" src={imageSrc1} onClick={handleImage} />
        <img className="img2" src={imageSrc2} onClick={handleImage} />
        <img className="img3" src={imageSrc3} onClick={handleImage} />
      </div>
      <div className="innerDiv2">
        <img className="img4" src={imageSrc4} onClick={handleImage} />
        <img className="img5" src={imageSrc5} onClick={handleImage} />
        <img className="img6" src={imageSrc6} onClick={handleImage} />
      </div>
      {categories(selectedImage)}
    </div>
    // </div>
  );
}
export default Images;
