import React, { useState, useEffect } from "react";
import CardCat from "../component/cardCat";
import Navbar from "../component/Navbar";
import axios from "axios";
import Search from "../component/Search";
import { useNavigate } from "react-router-dom";
import Sort from "../component/sort";
import InfiniteScroll from "react-infinite-scroll-component";

const fetchNextImages = (page, setCat, setPage, setHasmore) => {};

function Cat() {
  const navigate = useNavigate();
  const [cat, setCat] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("asc");
  const [hasMore, setHasmore] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get("https://api.thecatapi.com/v1/breeds")
      .then((result) => {
        const response = result.data;
        // console.log(response);
        setCat(response);
      })
      .catch((err) => {
        // console.log("error", err);
      });
  }, [sort]);

  const DataSearch = cat.filter((item) => item.name.toLowerCase().includes(search));
  const DataSort =
    sort === "asc"
      ? DataSearch.sort((a, b) => (a.title > b.title ? 1 : -1))
      : DataSearch.sort((a, b) => (a.title > b.title ? -1 : 1));

  return (
    <div>
      <Navbar />

      {/* Search sortir */}
      <div className="banner-color">
        <div className="text-center d-flex justify-content-center align-items-center">
          <div className="justify-content-center " style={{ marginTop: "100px" }}>
            <Search search={search} setSearch={setSearch} />
            <span>
              <Sort sort={sort} setSort={setSort} />
            </span>
            <div
              className="d-flex flex-wrap justify-content-center my-2 mx-1 "
              style={{ marginTop: "50px" }}
            >
              <h2 className="topTitle">FIND YOUR BEST FRIEND AND LOVER</h2>
            </div>
          </div>
        </div>
      </div>

      {/* card */}

      <div className="container">
        <div className="row justify-content-center m-2">
          {DataSort?.map((item) => {
            return (
              <div className="col-md-4 justify-content-center">
                <div className="card">
                  <CardCat item={item} key={item.id} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Cat;
