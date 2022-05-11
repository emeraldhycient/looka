import React, { useEffect, useState } from "react";
import axios from "axios";

function Community() {
  //const { REACT_APP_MORALIS_KEY } = process.env;
  const [nfts, setnfts] = useState([]);
  const [query, setquery] = useState("computer");

  const getNfts = () => {
    const options = { q: query, chain: "bsc", filter: "name" };
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
      .then((response) => {
        setnfts(response.data.result);
        //console.log(response.data.result[steps].metadata);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getNfts();
  }, [query]);

  function isURL(str) {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return pattern.test(str);
  }

  function isIpfs(str) {
    var pattern = new RegExp("^(ipfs?:\\/\\/)?"); // protocol
    return pattern.test(str);
  }

  function changeProtocol(nft) {
    if (JSON.parse(nft.metadata).image) {
      return JSON.parse(nft.metadata).image;
    } else if (JSON.parse(nft.metadata).image_url) {
      return JSON.parse(nft.metadata).image_url;
    } else if (isURL(JSON.parse(nft.metadata).image_url)) {
      JSON.parse(nft.metadata).image_url;
    } else if (isIpfs(JSON.parse(nft.metadata).image_url)) {
      return JSON.parse(nft.metadata).image_url.replace(
        /^ipfs?:\/\//,
        "https://ipfs.io/ipfs/"
      );
    } else if (isIpfs(JSON.parse(nft.metadata).image)) {
      return JSON.parse(nft.metadata).image.replace(
        /^ipfs?:\/\//,
        "https://ipfs.io/ipfs/"
      );
    } else if (isURL(JSON.parse(nft.metadata).image)) {
      return JSON.parse(nft.metadata).image;
    } else {
      return `https://ipfs.io/ipfs/${JSON.parse(nft.metadata).image_url}`;
    }
  }

  //console.log(import.meta.env.MORALIS);

  return (
    <section className="container">
      <div className="col-md-10 col-lg-10 mx-auto">
        <h4 className="community_header">Amazing NFTs in the community</h4>
        <form className="mb-5">
          <center>
            <p className="text-muted">Search Nfts </p>
            <input
              type="text"
              placeholder="Search Nft by Key words"
              value={query}
              onChange={(e) => setquery(e.target.value)}
              className="form-control rounded w-75"
            />
          </center>
        </form>
        <div className=" community">
          {nfts.length > 0 ? (
            nfts.map((nft, index) => (
              <div className="box mb-3" key={index}>
                {JSON.parse(nft.metadata).animation_url ? (
                  <video
                    alt=""
                    className="community_vid"
                    autoPlay
                    loop
                    muted
                    loading="lazy"
                    controls
                  >
                    <source
                      src={JSON.parse(nft.metadata).animation_url}
                      type="video/mp4"
                    />
                  </video>
                ) : (
                  <img
                    src={changeProtocol(nft)}
                    alt=""
                    loading="lazy"
                    className="community_img"
                  />
                )}
              </div>
            ))
          ) : (
            <>
              <div className="box mb-3">
                <img
                  src="https://ipfs.io/ipfs/QmNQFXCZ6LGzvpMW9Q5PWbCrEnLknQrPwr2r8pbQAgzQ9A/4863BD6B-6C92-4B96-BF80-8020B2F7C3A5.jpeg"
                  alt=""
                  className="community_img"
                />
              </div>
              <div className="box mb-3">
                <img
                  src="https://s3-us-west-2.amazonaws.com/codex.registry-production/files/1576119776207.f8119224-dea3-4c95-a233-3548a3fef7f7.jpg"
                  alt=""
                  className="community_img"
                />
              </div>
              <div className="box mb-3">
                <img
                  src="https://ipfs.pixura.io/ipfs/QmVCnVvoye2ThWENRyetKVjk3AzDSMAu2Uyk3T3rsWJyuC"
                  alt=""
                  className="community_img"
                />
              </div>
              <div className="box mb-3">
                <video
                  alt=""
                  className="community_vid"
                  autoPlay
                  loop
                  muted
                  controls
                >
                  <source
                    src="https://ipfs.infura.io/ipfs/QmRRMA1SN6gNytbjQZV5RtpaaCWbk3XbV5yskT5HneBpR5/asset.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <div className="box mb-3">
                <img
                  src="https://lh3.googleusercontent.com/WbmHsC6IFBnYoOPGfEcONX6vUog8mju3exsntpAcg1_B_GC8VHj3yMBdTDNoY21qgtkD4mJJ-FackvV01Bzity1m6Q"
                  alt=""
                  className="community_img"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Community;
