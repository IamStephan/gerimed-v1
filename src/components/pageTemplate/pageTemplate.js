import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';

export default class PageTemplate extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <meta name="keywords" content={this.props.keywords ? this.props.keywords.join(', ') : ''} />
          <meta name="description" content={this.props.description} />
          <title>
            {this.props.title}
          </title>
        </Helmet>

        <div>
          {this.props.children}
        </div>
      </Fragment>
    );
  }
}
