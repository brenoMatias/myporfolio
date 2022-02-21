import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  FrontEndPortfolio,
  BackEndPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("frontEnd");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "frontEnd",
      title: "Front End",
    },
    {
      id: "backEnd",
      title: "Back End",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "frontEnd":
        setData(FrontEndPortfolio);
        break;
      case "backEnd":
        setData(BackEndPortfolio);
        break;
      default:
        setData(FrontEndPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Stack</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}