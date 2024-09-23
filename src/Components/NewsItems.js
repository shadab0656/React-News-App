import React, { Component } from 'react'

export default class NewsItems extends Component {


  render() {

    let {title, description, image, url} = this.props;
    return (
      <div>
        <div className="card" >
  <img src={!image?"https://www.hindustantimes.com/ht-img/img/2023/03/15/1600x900/Breaking-News-Live-Blog-pic_1627344775185_1677800210069_1678924160405_1678924160405.jpg":image} className="card-img-top" alt="Image Not Available"/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={url} target="-blank" className="btn btn-primary btn-sm">Read More</a>
  </div>
</div>

      </div>
    )
  }
}
