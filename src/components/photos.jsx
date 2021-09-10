import React from "react"

export default class PhotoCard extends React.Component {
  
    render() {
      const { photo } = this.props;
      return (
        <div>
        <div className="nasa-photo">
          {photo.media_type === "image" ? (
            <img
              src={photo.url}
              alt={photo.title}
              className="photo"
            />
          ) : (
            <iframe
              title="space-video"
              src={photo.url}
              frameBorder="0"
              allow="encrypted-media"
              allowFullScreen
              className="photo"
            />
          )}
        </div>
        <h2>Title: {photo.title}</h2>
        <p className="date">date: {photo.date}</p>
          
        </div>
      )
    }
}