import React from 'react';
import withTheme from 'components/withTheme';
import moment from 'moment'
import transformImage from 'helpers/transformImage';

const BlogTeaser = ({ Theme, title, image, createdAt, post }) => {
  const Img = ({ style }) => (
    <div
      alt={title}
      style={{
        width: '100%',
        height: 350,
        overflow: 'hidden',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url("${transformImage(image, '800x0/filters:quality(100)')}")`,
        ...style
      }}
    />
  )
  return (
    <>
      {post && <Img style={{ marginBottom: 30 }} />}
      <h1 style={{ fontSize: 38, fontWeight: 'bold', color: Theme.black }}>{title}</h1>
      <h6 style={{ fontSize: 20, marginTop: 8, marginBottom: 8, color: Theme.black }}>{moment(createdAt).format("MMM Do YYYY")}</h6>
      {/*<p>{post.content.intro}</p>*/}
      {!post && <Img />}
    </>
  )
}

export default withTheme(BlogTeaser)
