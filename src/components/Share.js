import React from 'react'
import PropTypes from 'prop-types'

import withI18n from './withI18n'

import '../styles/components/Share.pcss'

const Share = ({
  _self, translate,
}) => (
  <div className="Share">
    <h2>{translate('share.shareResource')}</h2>
    <div className="shareContent">
      <span className="title">{translate('share.permalink')}</span>
      <div className="content">{_self}</div>
    </div>

    <br />

    <div className="embedContent">
      <span className="title">{translate('embed')}</span>
      <div className="content">
        {`<iframe src="${_self}" width="560" height="315" frameborder="0"></iframe>`}
      </div>
    </div>

    <div className="shareIcons">
      <a target="_blank" rel="noopener noreferrer" href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(_self)}`}>
        <i aria-hidden="true" className="fa fa-twitter" />
      </a>
      <a target="_blank" rel="noopener noreferrer" href={`https://www.facebook.com/sharer.php?u=${encodeURIComponent(_self)}`}>
        <i aria-hidden="true" className="fa fa-facebook" />
      </a>
      <a target="_blank" rel="noopener noreferrer" href={`https://reddit.com/submit?url=${encodeURIComponent(_self)}`}>
        <i aria-hidden="true" className="fa fa-reddit-alien" />
      </a>
      <a target="_blank" rel="noopener noreferrer" href={`mailto:?subject=&body=${encodeURIComponent(_self)}`}>
        <i aria-hidden="true" className="fa fa-envelope" />
      </a>

    </div>
  </div>
)

Share.propTypes = {
  _self: PropTypes.string.isRequired,
  translate: PropTypes.func.isRequired,
}

export default withI18n(Share)
