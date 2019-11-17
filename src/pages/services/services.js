import React, { Component } from 'react';
import { Card, CardContent, Collapse, Button } from '@material-ui/core';

import styles from './services.module.scss'

export default class Services extends Component {
  constructor(props) {
    super(props)

    this.state = {
      frailCare: {
        isOpen: false
      },
      subCare: {
        isOpen: false
      },
      assistLive: {
        isOpen: false
      }
    }

    this.ToggleFrailCare = this.ToggleFrailCare.bind(this)
    this.ToggleSubCare = this.ToggleSubCare.bind(this)
    this.ToggleAssistLive = this.ToggleAssistLive.bind(this)
  }

  ToggleFrailCare() {
    this.setState((prevState) => ({
      ...prevState,
      frailCare: {
        isOpen: !prevState.frailCare.isOpen
      }
    }))
  }

  ToggleSubCare() {
    this.setState((prevState) => ({
      ...prevState,
      subCare: {
        isOpen: !prevState.subCare.isOpen
      }
    }))
  }

  ToggleAssistLive() {
    this.setState((prevState) => ({
      ...prevState,
      assistLive: {
        isOpen: !prevState.assistLive.isOpen
      }
    }))
  }

  render() {
    return (
      <div className={`${styles['services']}`}>
        <h1 style={{textAlign: 'center'}}>Services Overview</h1>
        <Card className={`${styles['card']}`}>
          <div className={`${styles['img']}`}>
            <img alt='Frail care' src={require('../../static/pexels-photo-302083.jpeg')} />
          </div>

          <CardContent className={`${styles['content']}`}>
            <h2>Frail Care</h2>
            <p>
              Frail care is the care you need when you are no longer
              able to look after yourself because of physical frailty
              or mental incapacity.
            </p>
            <div style={{display: 'flex', justifyContent: 'space-between', marginTop: 10}}>
              <Button variant='outlined' color='primary'>Contact</Button>
              <Button variant='contained' color='primary' onClick={this.ToggleFrailCare}>Learn More</Button>
            </div>
            
            <Collapse in={this.state.frailCare.isOpen}>
              <ul>
                <li>
                  Qualified nursing staff 24 hours per day, care affectionately for the elderly
                </li>
                <li>
                  Private and double rooms
                </li>
                <li>
                  Full assistance towards:
                  <ul>
                    <li>
                      Personal Hygiene
                    </li>
                    <li>
                      Mobility
                    </li>
                    <li>
                      Medicine and General Health monitored in conjunction with family and local doctors
                    </li>
                  </ul>
                </li>
                <li>
                  Balanced Diets
                </li>
                <li>
                  Registered with B.H.F., S.A.A.H.A. and Department of Health
                </li>
                <li>
                  All rooms fitted with:
                  <ul>
                    <li>
                      24 Hour emergency nurse call system
                    </li>
                    <li>
                      telephone points
                    </li>
                    <li>
                      DSTV & SABC connection points
                    </li>
                  </ul>
                </li>
              </ul>
            </Collapse>
          </CardContent>
        </Card>

        <Card className={`${styles['card']}`}>
          <div className={`${styles['img']}`}>
            <img alt='Sub-acute Care / Step Down' src={require('../../static/pexels-photo-339620.jpeg')} />
          </div>

          <CardContent className={`${styles['content']}`}>
            <h2>Sub-acute Care / Step Down</h2>
            <p>
              Sub-acute care is relatively new and rapidly growing medical service.  It merges the sophisticated technology of a hospital and the efficiency of a skilled nursing facility to reduce the cost of services while maintaining quality of care.
            </p>
            <div style={{display: 'flex', justifyContent: 'space-between', marginTop: 10}}>
              <Button variant='outlined' color='primary'>Contact</Button>
              <Button variant='contained' color='primary' onClick={this.ToggleSubCare}>Learn More</Button>
            </div>
            
            <Collapse in={this.state.subCare.isOpen}>
              <ul>
                <li>
                  <b>Criteria for Admission:</b>
                  <ul>
                    <li>Surgical (post-operative cases)</li>
                    <li>Medical (i.e. post-heart attack)</li>
                    <li>Chronic patients (i.e. emphysema etc.)</li>
                    <li>Terminal patients (cancer, etc.)</li>
                    <li>Paediatric (ages between 2 and 12 years)</li>
                  </ul>
                </li>
                <li>
                  <b>Excluding:</b>
                  <ul>
                    <li>Psychiatric</li>
                    <li>Maternity</li>
                  </ul>
                </li>
                <li>24 hour qualified nursing care</li>
                <li>fully equipped treatment room, B.H.F. - standard</li>
                <li>Registered with B.H.F. (Board of Health Care Funders) and Department of Health</li>
                <li>Registered with all Medical Aids</li>
              </ul>
            </Collapse>
          </CardContent>
        </Card>

        <Card className={`${styles['card']}`}>
          <div className={`${styles['img']}`}>
            <img alt='Assisted Living Apartments' src={require('../../static/old-people-couple-together-connected.jpg')} />
          </div>

          <CardContent className={`${styles['content']}`}>
            <h2>Assisted Living Apartments</h2>
            <p>
              These apartments are ideal if you want your freedom but still need some extra care when needed.
            </p>
            <div style={{display: 'flex', justifyContent: 'space-between', marginTop: 10}}>
              <Button variant='outlined' color='primary'>Contact</Button>
              <Button variant='contained' color='primary' onClick={this.ToggleAssistLive}>Learn More</Button>
            </div>
            
            <Collapse in={this.state.assistLive.isOpen}>
              <ul>
                <li>Three meals per day, 7 days per week, to be served in the dining room or in the residents suite at the discretion of the nursing staff and management.</li>
                <li>5kg of personal laundry per week.  This does not include dry cleaning.</li>
                <li>Servicing of units once per week on days specified by the management.  (no washing of dishes)</li>
                <li>24 Hour nurse call system</li>
                <li>General health monitoring in conjunction with the residents doctors.</li>
                <li>Post and admin service.</li>
                <li>Water, electricity, municipal services and insurance.</li>
                <li>Bathing and dressing assistance - as needed.</li>
                <li>Making of beds - as needed.</li>
                <li>Administration of medicine.</li>
                <li>Visits by nursing staff. (not including medicine and other medical consumables).</li>
              </ul>
            </Collapse>
          </CardContent>
        </Card>
      </div>
    );
  }
}
