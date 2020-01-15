import React, { Component } from 'react';
// import { Button } from '@material-ui/core';

import styles from './about.module.scss';

import Page from '../../components/pageTemplate/pageTemplate';

export default class About extends Component {
  render() {
    return (
      <Page
        title='Gerimed: About Us'
        description='Here you can learn all about us and what it is we do.'
      >
        <div className={`${styles['about']}`}>
          <h1 className={`${styles['title']}`}>Our Company</h1>
          <p>
            Gerimed is a family business with the founders and owners, Flip & Irene Fouche, and their children, Carel & Marisa Pieterse, working together to guarantee excellent care for the
            elderly, proven during the past ten years.
          </p>

          <div className={`${styles['owners']}`}>
            <div className={`${styles['owner']}`}>
              <div className={`${styles['photo']}`}>
                <img alt='Carel & Marisa Pieterse' src={require('../../static/production/gerimed2.jpg')} />
              </div>
              <p>Carel & Marisa Pieterse</p>
            </div>
            <div className={`${styles['owner']}`}>
              <div className={`${styles['photo']}`}>
                <img alt='Flip & Irene Fouche' src={require('../../static/production/Gerimed1.jpg')} />
              </div>
              <p>Flip & Irene Fouche</p>
            </div>
          </div>

          <p>
            We all believe in caring for the elderly in the best way possible. With their vision and passion, Gerimed became a leader in elderly care.
          </p>
          <br />
          <p>
            Gerimed started off as Kogelpark Clinic in Kogelpark Retirement Village and opened their doors on 1 July 2001 in Kleinmond with only 1 patient. In 2004 it was renamed to
            Gerimed to incorporate the clinic in Langebaan. Gerimed Langebaan opened their doors on 3 May 2005 in the Langebaan Retirement Village.
          </p>
          <br/>
          <p>
            Today Gerimed consists of two Care Centres which together consist of 50 beds for Sub-acute and Frail Care n single & double rooms and 60 Assisted Apartments in Kleinmond
            and Langebaan.
          </p>
          <br/>

          <h2 className={`${styles['title']}`} >Our Mission</h2>
          <p>
            Our mission is to improved quality of life through quality service and care in a safe and comfortable environment.
          </p>
          <br />

          <h2 className={`${styles['title']}`} >Our Vision</h2>
          <p>
            Gerimed strives to improve dignity and quality of life for their residents & Patients through the high standards of companionship and care to their residents and patients and to
            become known as an institution that really cares and focuses on the Kingdom of God.
          </p>
          <br />
          
          {/* <h2 className={`${styles['title']}`} >Our Locations</h2>
          <section className={`${styles['locations']}`}>
            <div className={`${styles['location']}`}>
              <div className={`${styles['map']}`}>
              <iframe title='Langebaan' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3342.695422260265!2d18.030970965190075!3d-33.09079673087838!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1c34aa1d8f53734d%3A0x18c036f8cb7d2d00!2sGerimed%20Langebaan%20cc!5e0!3m2!1sen!2sza!4v1574001394531!5m2!1sen!2sza" />
              </div>
              <div className={`${styles['content']}`}>
                <h2>
                  Langebaan
                </h2>
                <br />
                <p>Tel: 022 772 1252 / 1296 / 2385</p>
                <p>Fax: 022 772 2061</p>
                <p>Langebaan Retirement Village, Aftree-Oord, Suffren Street, Langebaan</p>
                <p>P.O. Box 893, Langebaan, 7357</p>
                <br />
                <Button variant='contained' color='primary'>View</Button>
              </div>
            </div>

            <div className={`${styles['location']}`}>
              <div className={`${styles['map']}`}>
              <iframe title='Kleinmond' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3294.6379134575013!2d19.033504215219118!3d-34.334239550796376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcdd998782f7d45%3A0xfc46b306ba2d84ec!2sKogelpark%20Clinic!5e0!3m2!1sen!2sza!4v1574001632011!5m2!1sen!2sza" />
              </div>
              <div className={`${styles['content']}`}>
                <h2>
                  Kleinmond
                </h2>
                <br />
                <p>Tel: 028 271 3994</p>
                <p>Fax: 028 271 3488</p>
                <p>Kogelpark Retirement Village, Botriver Road, Kleinmond</p>
                <p>P.O. Box 585, Kleinmond, 7195</p>
                <br />
                <Button variant='contained' color='primary'>View</Button>
              </div>
            </div>
          </section> */}
        </div>
      </Page>
      
    );
  }
}
