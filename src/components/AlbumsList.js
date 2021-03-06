import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';
import _ from 'lodash';
import music from '../assets/images/music.jpeg';

const AlbumsList = ({ albums }) => {

  return (
    <Fragment>
      {Object.keys(albums).length > 0 && (
        <div className="albums">
          {albums.items.map((album,index) => {
            return (
              <Fragment key={index}>
                <Card style={{ width: '18rem'}}>
                  <a target="_blank" 
                     href={album.external_urls.spotify}
                     rel="noopener noreferrer"
                     className="card-image-link">
                    {!_.isEmpty(album.images) ? (
                      <Card.Img 
                        variant="top"
                        src={album.images[0].url}
                        alt=""
                      />
                    ) : (
                      <img src={music} alt=""/>
                    )}
                  </a>
                  <Card.Body>
                    <Card.Title>{album.name}</Card.Title>
                    <Card.Text>
                      <small>
                        {album.artists.map((artist) => artist.name).join(', ')}
                      </small>
                    </Card.Text>
                  </Card.Body> 
                </Card>
              </Fragment>
            )
          })}
        </div>
      )}
    </Fragment>
  )
}

export default AlbumsList;