// NewsInfo.js
import React from 'react';
import './Newsinfo.css'
import banner from '../../assets/news.jpg'

function NewsInfo() {
  return (
    <div className='newsPage'>
      <div className="topBanner">
        <img src={banner} alt="" />
        <h1>NEWS</h1>
      </div>
      <div className="news-container">
        <div className="newsBox">
          <a href='https://open.spotify.com/episode/3WBictfozfZfMTRH0H99Yn?si=wUfyLqMERtSwyZJi50y8dw&amp;fbclid=IwAR2F5aSnR_sAWSr8bgrKUNXC-j2D6JfWuLWM-q-9OW-VUJAWzZPvrAmZE1Q&amp;nd=1&amp;dlsi=8aed6011dd4443a5' target='_blank' className="newsImg">
            <img src="/spotify.png" alt="" />
          </a>
          <div className="newsContent">
            <a href='https://open.spotify.com/episode/3WBictfozfZfMTRH0H99Yn?si=wUfyLqMERtSwyZJi50y8dw&amp;fbclid=IwAR2F5aSnR_sAWSr8bgrKUNXC-j2D6JfWuLWM-q-9OW-VUJAWzZPvrAmZE1Q&amp;nd=1&amp;dlsi=8aed6011dd4443a5' target='_blank'>
              <h1>Immigration New Zealand's perfect stroam.</h1>
            </a>
            <small>March, 2024.</small>
            <p>A review into a new visa category that sparked more problems than it solved is scathing about Immigration NZ's processes and systems.</p>
          </div>
        </div>
        <div className="newsBox">
          <a href='https://www.rnz.co.nz/news/national/511156/immigration-the-winners-losers-and-missed-opportunities' target='_blank' className="newsImg">
            <img src="/news2.webp" alt="" />
          </a>
          <div className="newsContent">
            <a href='https://www.rnz.co.nz/news/national/511156/immigration-the-winners-losers-and-missed-opportunities' target='_blank'>
              <h1>Immigration - the winners, losers and missed opportunities.</h1>
            </a>
            <small>March, 2024.</small>
            <p>
              Analysis - It took three months for immigration officials to reverse a 'light touch' approach to work visa applications after it was told of concerns over lax checks and migrants buying jobs for up to $50,000... <a className='blueLink' href="https://www.rnz.co.nz/news/national/511156/immigration-the-winners-losers-and-missed-opportunities">read more</a>
            </p>
          </div>
        </div>
        <div className="newsBox">
          <a href='https://www.rnz.co.nz/news/indonz/497397/indian-and-chinese-nationals-have-topped-deportation-figures-since-2018' target='_blank' className="newsImg">
            <img src="https://media.rnztools.nz/rnz/image/upload/s--HMbizesK--/ar_16:10,c_fill,f_auto,g_auto,q_auto,w_1050/v1693961227/4L33SHJ_AdobeStock_10495084_jpeg" alt="" />
          </a>
          <div className="newsContent">
            <a href='https://www.rnz.co.nz/news/indonz/497397/indian-and-chinese-nationals-have-topped-deportation-figures-since-2018' target='_blank'>
              <h1>Indian and Chinese nationals have topped deportation figures since 2018</h1>
            </a>
            <small>September, 2024.</small>
            <p>
              Nearly half of all deportations from the country over the past five years have involved Indian and Chinese nationals, according to the latest statistics from Immigration New Zealand... <a className='blueLink' href="https://www.rnz.co.nz/news/national/511156/immigration-the-winners-losers-and-missed-opportunities">read more</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsInfo;
