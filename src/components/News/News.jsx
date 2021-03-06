
import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import './News.scss';
    const News = () => {
        const { news, getNews } = useContext(GlobalContext);
        useEffect(() => {
          getNews();
        }, []);
        const New = news.map((New) => {
          console.log(New)
          return (
            <div className="new" key={New.id}>
              <h2>{New.title.toUpperCase()}</h2>
              <h3 className="section_container">Section: {New.section.toUpperCase()}</h3>
              <p className="subsection_container">Subsection: {New.subsection.toUpperCase()}</p>
              <p className="abstract_container">{New.abstract}</p>
              <img src={New.multimedia[1].url} /><br/>
              <a className="link_container" href="{New.url}">Link</a>
            </div>
          );
        });
        return <div className="news_container">{New}</div>;
      };
    export default News;