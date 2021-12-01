import React from 'react';
// import styles from './NewSingle.module.css'

const NewSingle = ({item}) => (
   /* 
    <div className={styles}>
        <div className="cardHolder">
        */
            <div className="col s4">
                <div className="card medium">  
                    <div className="card-image">
                        <img src={item.urlToImage} alt={item.title}/>
                        <span className="card-title">{item.source.name}</span>
                    </div>  
                    <div className="card-content">
                        <p>{item.title}</p>
                    </div>   
                        <div className="card-action">
                            <a href={item.url} target="_blank">Full article</a>
                    </div>
                </div>
            </div> 
            /*
        </div>  
    </div>  
    */
);

export default NewSingle;