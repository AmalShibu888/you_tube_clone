import { Link } from "react-router-dom";
import {
  demoChannelTitle,
  demoChannelurl,
  demoProfilePic,
} from "../utils/index";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const ChannelCard = ({ cid, csnip, marginTop, statistics }) => {

  return (
    <div className="CCard">
      <Link
        to={`/channel/${cid}` || demoChannelurl}
        style={{
          textDecoration: "none",

          color: "White",
          display: "flex",
          justifyContent: "center",
          marginTop,
        }}
      >
        <div
          className="ChannelCard"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "320px",
            height: "300px",
            margin: "10px",
          }}
        >
          <img
            style={{
              borderRadius: "50%",
              height: " 170px",
            }}
            src={csnip?.thumbnails?.medium?.url || demoProfilePic}
            alt={csnip.thumbnails.title}
          />
          <div
            className="title_desc"
            style={{
              display: "flex",
              paddingBottom: "0px",
            }}
          >
            <h5
              style={{
                textAlign: "Center",
                fontSize: "1.2em",
                margin: "10px",
              }}
            >
              {csnip?.title.slice(0, 60) || demoChannelTitle}
            </h5>
            <div className="VideoChannelName">
              <CheckCircleIcon />
            </div>
          </div>
          {statistics && (
            <p
              style={{
                color: "#aaa",
                fontFamily: "Arial, Helvetica, sans-serif",
              }}
            >
              {statistics?.subscriberCount} Subcribers
            </p>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ChannelCard;
