import React, { useState, useEffect } from "react";
import CardCat from "../component/cardCat";
import Navbar from "../component/Navbar";
import axios from "axios";
import Search from "../component/Search";
import { useNavigate } from "react-router-dom";
import Sort from "../component/sort";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../component/Loader";
import EndMsg from "../component/EndMsg";

function Cat() {
  const navigate = useNavigate();
  const [cat, setCat] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("asc");
  const [hasMore, sethasMore] = useState(true);

  const [page, setpage] = useState(2);

  useEffect(() => {
    const getComments = async () => {
      const res = await fetch(`https://api.thecatapi.com/v1/breeds?_page=1&_limit=10`);
      const data = await res.json();
      setCat(data);
    };

    getComments();
  }, [sort]);

  const fetchComments = async () => {
    const res = await fetch(`https://api.thecatapi.com/v1/breeds?_page=${page}&_limit=10`);
    const data = await res.json();
    return data;
  };

  const fetchData = async () => {
    const commentsFormServer = await fetchComments();

    setCat([...cat, ...commentsFormServer]);
    if (commentsFormServer.length === 0 || commentsFormServer.length < 10) {
      sethasMore(false);
    }
    setpage(page + 1);
  };

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

      <InfiniteScroll
        dataLength={cat.length} //This is important field to render the next data
        next={fetchData}
        hasMore={hasMore}
        loader={<Loader />}
        endMessage={<EndMsg />}
      >
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
      </InfiniteScroll>
    </div>
  );
}

export default Cat;
