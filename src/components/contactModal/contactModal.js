import React, { Component } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button } from '@material-ui/core';

export default class ContactModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: {
        value: '',
        error: false,
        helperText: null
      },
      email: {
        value: '',
        error: false,
        helperText: null
      },
      message: {
        value: '',
        error: false,
        helperText: null
      },
      formWorking: false
    }

    this.setStateAsync = this.setStateAsync.bind(this)
    this.onSubmitForm = this.onSubmitForm.bind(this)
    this.resetForm = this.resetForm.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.validateEmail = this.validateEmail.bind(this)
  }

  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve)
    });
  }

  async onSubmitForm() {
    let errors = false

    await this.setStateAsync({
      ...this.state,
      formWorking: true
    })

    // Check For Form Errors
    if(!this.state.name.value || this.state.name.value.length === 0 || /^\s*$/.test(this.state.name.value)) {
      errors = true

      await this.setStateAsync({
        ...this.state,
        name: {
          ...this.state.name,
          error: true,
          helperText: 'Name cannot be empty'
        }
      })
    } else {
      await this.setStateAsync({
        ...this.state,
        name: {
          ...this.state.name,
          error: false,
          helperText: null
        }
      })
    }

    if(!this.validateEmail(this.state.email.value)) {
      errors = true
      
      await this.setStateAsync({
        ...this.state,
        email: {
          ...this.state.email,
          error: true,
          helperText: 'Invalid email'
        }
      })
    } else {
      await this.setStateAsync({
        ...this.state,
        email: {
          ...this.state.email,
          error: false,
          helperText: null
        }
      })
    }

    if(!this.state.message.value || this.state.message.value.length === 0 || /^\s*$/.test(this.state.message.value)) {
      errors = true
      
      await this.setStateAsync({
        ...this.state,
        message: {
          ...this.state.message,
          error: true,
          helperText: 'Message cannot be empty'
        }
      })
    } else {
      await this.setStateAsync({
        ...this.state,
        message: {
          ...this.state.message,
          error: false,
          helperText: null
        }
      })
    }

    //Check if there was any errors
    if(!errors) {
      let PostRequest = {
        customData: {
          name: this.state.name.value,
          email: this.state.email.value,
          message: this.state.message.value
        }
      }

      try{
        const response = await fetch('http://gerimed.co.za/.netlify/functions/contactV2', {
          method: 'POST',
          body: JSON.stringify(PostRequest),
        })
      
        if (!response.ok) {
          await this.setStateAsync({
            ...this.state,
            formWorking: false
          })
          alert(`Error: Your form has not been submited, ${response.body || 'Server not responding or client error'}`)

          return
        }

        await this.setStateAsync({
          ...this.state,
          formWorking: false
        })

        this.props.onClose()
          
      } catch(e){
        await this.setStateAsync({
          ...this.state,
          formWorking: false
        })

        alert(`Error: Your form has not been submited, ${e.body || 'Server not responding or client error'}`)
      }

      this.props.onClose()
    } else {
      await this.setStateAsync({
        ...this.state,
        formWorking: false
      })
    }
  }

  resetForm() {
    this.setState({
      name: {
        value: '',
        error: false,
        helperText: null
      },
      email: {
        value: '',
        error: false,
        helperText: null
      },
      message: {
        value: '',
        error: false,
        helperText: null
      },
      formWorking: false
    })
  }

  handleChange(type, value) {
    switch (type) {
      case 'name':
        this.setState({
          ...this.state,
          name: {
            ...this.state.name,
            value: value
          }
        })
        break;

      case 'email':
        this.setState({
          ...this.state,
          email: {
            ...this.state.name,
            value: value
          }
        })
        break;

      case 'message':
        this.setState({
          ...this.state,
          message: {
            ...this.state.name,
            value: value
          }
        })
        break;
    
      default:
        break;
    }
  }

  closeModal() {
    if(this.state.formWorking) {
      return
    } else {
      this.resetForm()
      this.props.onClose()
    }
  }

  validateEmail(email) {
    let regexEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

    return regexEmail.test(email)
  }

  render() {
    return (
      <Dialog open={this.props.open} onClose={this.closeModal}>
        <DialogTitle>Send us a message</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can send us a message directly by simply filling in the below fields.
          </DialogContentText>

          <TextField
            autoFocus
            error={this.state.name.error}
            helperText={this.state.name.helperText}
            margin='dense'
            id='name'
            label='Full name'
            type='text'
            fullWidth
            onChange={(e) => this.handleChange('name', e.target.value)}
          />
          <TextField
            error={this.state.email.error}
            helperText={this.state.email.helperText}
            margin='dense'
            id='email'
            label='Email'
            type='email'
            fullWidth
            onChange={(e) => this.handleChange('email', e.target.value)}
          />
          <TextField
            error={this.state.message.error}
            helperText={this.state.message.helperText}
            margin='dense'
            id='message'
            label='Message'
            type='text'
            multiline
            rows='5'
            fullWidth
            onChange={(e) => this.handleChange('message', e.target.value)}
          />
        </DialogContent>

        <DialogActions>
          <Button
            disabled={this.state.formWorking}
            onClick={this.props.onClose}
            color='primary'
          >
            Cancel
          </Button>
          <Button
            disabled={this.state.formWorking}
            onClick={this.onSubmitForm}
            color='primary'
            variant='contained'
          >
            Send
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
