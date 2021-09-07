import React from 'react'
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
    const newsArticle =(heading, subtitle) =>  (
        <div className="widgets_article">
        <div className="widgets_articleLeft">
            <FiberManualRecordIcon  />
        </div>
        <div className="widgets_articleRight">
            <h4>{heading}</h4>
            <p>{subtitle}</p>
        </div>
        </div>
    );
    return (
        <div className="widgets">
           <div className="widgets_header">
               <h2>LinkedIn News</h2>
               <InfoIcon />
            </div>
         {newsArticle("Rahul Started to code","999 readers")}
         {newsArticle("Mumbai City News Updade","100 readers")}
         {newsArticle("Chennai City News Updade","105 readers")}
         {newsArticle("Bengluru City News Updade","200 readers")}
         {newsArticle("Kochi City News Updade","555 readers")}
         {newsArticle("Hydrabad News Updade","10 readers")}
         {newsArticle("Noida City News Updade","204 readers")}
         {newsArticle("Delhi City News Updade","325 readers")}
         {newsArticle("Kolkata City News Updade","999 readers")}
        </div>
    );
}

export default Widgets
