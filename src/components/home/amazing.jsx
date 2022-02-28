import React, { useLayoutEffect } from "react";
import axios, { Axios } from "axios";

function Amazing() {
  const getNfts = () => {
    const options = { q: "Pancake", chain: "bsc", filter: "name" };
    const queryUrl = ` https://deep-index.moralis.io/api/v2/nft/search?chain=eth&format=decimal&q=${options.q}&filter=${options.filter} `;
    axios
      .get(queryUrl, {
        headers: {
          // 'application/json' is the modern content-type for JSON, but some
          // older servers may use 'text/json'.
          // See: http://bit.ly/text-json
          "content-type": "text/json",
          "X-API-Key":
            "pwIhkgtK0IP6Bm8e6ClDWRZJjQgxPRPHdFU8OCRLqIAXXxMZScKFy2adwJxs90BE",
        },
      })
      .then((response) => console.log(response.data.result[0].metadata))
      .catch((error) => console.log(error));
  };

  useLayoutEffect(() => {
    getNfts();
  }, []);

  return (
    <section className="container">
      <div className="col-md-9 col-lg-9 col-sm-12 mx-auto">
        <h4 className="amazing_header">See Amazing NFTs</h4>
        <div className="row">
          <div className="col-md-4 col-sm-11">
            <img
              src="https://ipfs.io/ipfs/QmNQFXCZ6LGzvpMW9Q5PWbCrEnLknQrPwr2r8pbQAgzQ9A/4863BD6B-6C92-4B96-BF80-8020B2F7C3A5.jpeg"
              alt=""
              height="300px"
              width="300px"
            />
          </div>
          <div className="col-md-4 col-sm-11">
            <img
              src="https://img.cn.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/4647.svg"
              alt=""
              height="300px"
              width="300px"
            />
          </div>
          <div className="col-md-4 col-sm-11">
            <img
              src="https://lh3.googleusercontent.com/d8Cs35dkMs_eStP-oyw4MuGI_wcgoEh2ixvS-RJLVBrriiaboH0ufn89u9gHFWfH3QjFWYsKklG_4dzWcs-bBivPoo4F_ZyEma2GQQ"
              alt=""
              height="300px"
              width="300px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Amazing;
