import { useState } from "react";
import Layout from "../../components/layouts/Layout";
import raze from "../../../public/img/raze.png";
import neon from "../../../public/img/neon.png";
import sage from "../../../public/img/sage.jpg";
import { BsLink, BsPlus } from "react-icons/bs";
export default function portfolio() {
  const filters = [{filter:'*', label: 'All'}, {filter:'.filter-app', label:'app'}, {filter:'.filter-card', label:'card'}, {filter:'.filter-web', label:'web'}];

  const [activeFilter, setActiveFilter] = useState('All');
  const changeFilterHandler = (label) => {
    setActiveFilter(label);
  }

  const myPortfolio = [
    {
      image: raze.src,
      title: 'Raze',
      description: 'Raze is in App filter',
      url: '#',
      filter: 'app'
    },
    {
      image: neon.src,
      title: 'Neon',
      description: 'Neon is in Card filter',
      url: '#',
      filter: 'card'
    },
    {
      image: sage.src,
      title: 'Sage',
      description: 'Sage is in Web filter',
      url: '#',
      filter: 'web'
    },
  ];

  return <Layout headerTop={true} activeNav={'Portfolio'}>
    <div className="portfolio container mx-auto">
      <div className="section-title">
        <h2>Portfolio</h2>
        <p>My Works</p>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full justify-center">
          <ul id="portfolio-flters">
            {filters.map((d,i) => <li key={i} data-filter={d.filter} className={activeFilter == d.label ? 'filter-active' : ''} onClick={() => changeFilterHandler(d.label)}>{d.label}</li>)}
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 protfolio-container">
        {myPortfolio.map((d,i) => <div key={i} className="portfolio-item filter-app" style={{
          display: activeFilter == d.filter || activeFilter == 'All' ? 'block' : 'none'
        }}>
          <div className="portfolio-wrap">
            <img src={d.image} className="img-fluid"/>
            <div className="portfolio-info">
              <h4>{d.title}</h4>
              <p>{d.description}</p>
              <div className="portfolio-links">
                <a href={d.image} data-gallery="portfolioGallery" className="portfolio-lightbox" title={d.title}>
                  <BsPlus height={16} width={16}/>
                </a>
                <a href={d.url} data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title={'Portfolio Details'}>
                  <BsLink height={16} width={16}/>
                </a>
              </div>
            </div>
          </div>
        </div>)}
      </div>
    </div>
  </Layout>
}