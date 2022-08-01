import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

function CardCat({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="title">{item.name}</div>
      <div className="date">
        {item.origin} - {item.temperament}
      </div>
      {/* <div className="d-flex justify-content-center">
        <img src={item.image?.url} className="imageCard rounded" alt="" />
      </div> */}
      <div className="desc">{item.description.slice(0, 250) + "..."}</div>
      <div className="date"> Life Span : {item.life_span}</div>
        <div className="mt-2">
          <Collapse in={open}>
            <div id="example-collapse-text">
              <div className="d-flex justify-content-center">
                <img src={item.image?.url} className="imageCard rounded" alt="" />
              </div>
              <div className="date">
                {" "}
                Informasi Detail : <a href={item.wikipedia_url}>{item.wikipedia_url}</a>{" "}
              </div>
            </div>
          </Collapse>
        </div>
      <div className="mt-3 mb-2">
        <div className="d-flex justify-content-center">
          <Button
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
            style={{ backgroundColor: "#f3c998", borderColor: "#ffa640" }}
          >
            {open ? "Read Less" : "Read More"}
          </Button>
        </div>

      </div>
    </>
  );
}

export default CardCat;
