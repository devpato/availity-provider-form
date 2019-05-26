import React, { Component } from 'react';
import { AvForm } from 'availity-reactstrap-validation';
import { Button, Card, CardBody } from 'reactstrap';
import { navigate } from '@reach/router';

import { Agreement, Provider } from './components';
import { Footer } from '../components';

class AuthorizationsRequest extends Component {
  submit = () => {
    console.log('form submitted');
  };

  render() {
    return (
      <div className="container-sm">
        <AvForm onValidSubmit={this.submit}>
          <Card>
            <CardBody>
              <Provider />
              <Agreement />
              <hr className="divider" />
              <div className="form-controls form-controls-card">
                <Button type="submit" className="btn btn-default">
                  Authorize
                </Button>
              </div>
            </CardBody>
          </Card>
        </AvForm>
        <Footer />
      </div>
    );
  }
}

export default AuthorizationsRequest;
