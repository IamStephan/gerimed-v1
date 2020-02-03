import React, { Component } from 'react';

import styles from './kleinmond.module.scss'

import Page from '../../components/pageTemplate/pageTemplate';

export default class Kleinmond extends Component {
  render() {
    return (
      <Page
        title='Gerimed: Kleinmond'
        description='All the information about Kleinmond.'
      >
        <div className={`${styles['kleinmond']}`}>
          <h1 className={`${styles['title']}`}>Kleinmond</h1>

          <p>
            Kleinmond is set between the Palmiet River and Kleinmond lagoon in the Western Cape.  With stunning beaches ideal for walking, swimming as well as some of the best mouth watering restaurants on offer, and a stunning 18-hole golf course.        </p>
          <br />
          <p>
            There are quaint shops, an art gallery, pottery and craft, interior stores and the seafood restaurants serve fresh fish and sushi.        </p>
          <br />
          <p>
            Close by is the Rooisand nature reserve a few kilometers east of Kleinmond for wild horses and bird life, or hike in the Kogelberg nature reserve, stroll along the cliff path or buy fresh veg at the market. 
          </p>
          <br/>
          <p>
            Kleinmond is an ideal village to relax and enjoy a sundowner.
          </p>
          <br />

          <section className={`${styles['locations']}`}>
            <div className={`${styles['location']}`}>
              <div className={`${styles['map']}`}>
              <iframe title='Kleinmond' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3294.6379134575013!2d19.033504215219118!3d-34.334239550796376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcdd998782f7d45%3A0xfc46b306ba2d84ec!2sKogelpark%20Clinic!5e0!3m2!1sen!2sza!4v1574001632011!5m2!1sen!2sza" />
              </div>
              <div className={`${styles['content']}`}>
                <div className={styles['sub-title']}>Gerimed Kleinmond Kogelpark Clinic</div>
                <br />
                <p>Tel: 028 271 3994</p>
                <p>Fax: 028 271 3488</p>
                <p>Kogelpark Retirement Village, Botriver Road, Kleinmond</p>
                <p>P.O. Box 585, Kleinmond, 7195</p>
                <br />
              </div>
            </div>
          </section>
        </div>
      </Page>
      
    );
  }
}
