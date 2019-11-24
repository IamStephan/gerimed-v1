import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';

export default class PageTemplate extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>
            {this.props.title}
          </title>
          <meta name='keywords' content={this.props.keywords.join(', ')} />
          <meta name='description' content={this.props.description} />
        </Helmet>

        <div>
          {this.props.children}
        </div>
      </Fragment>
    );
  }
}
