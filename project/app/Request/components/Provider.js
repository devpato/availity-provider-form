import React from 'react';
import { observer, inject } from 'mobx-react';
import { Label, UncontrolledTooltip } from 'reactstrap';
import propTypes from './props';
import { AvField } from 'availity-reactstrap-validation';

const Provider = ({ stateStore: { request }, appStore }) => {
  const { provider } = request;
  console.log(provider);
  const { fullName } = provider;
  const { npiID } = provider;
  const { businessAdress } = provider;
  const { telephone } = provider;
  const { email } = provider;

  return (
    <fieldset>
      <legend>New Health Care Provider</legend>

      <Label id="memberid-help" for="fullName">
        Full Legal Name
      </Label>

      <AvField
        name="fullName"
        value={fullName}
        onChange={appStore.onChange}
        validate={{
          pattern: { value: '^[a-zA-Z ]+$', errorMessage: 'Must be a letters only' },
          minLength: { value: 5, errorMessage: '5 Character Minimum' },
        }}
      />

      <Label id="memberid-help" for="npiID">
        NPI Number
        <span className="inline-help">What&apos;s this?</span>
      </Label>
      <UncontrolledTooltip target="memberid-help" placement="top">
        Also known as National Provider Identifier
      </UncontrolledTooltip>

      <AvField
        name="npiID"
        value={npiID}
        onChange={appStore.onChange}
        validate={{
          pattern: { value: '^[0-9]*$', errorMessage: 'Must be a number' },
          minLength: { value: 5, errorMessage: '5 Character Minimum' },
        }}
      />
      <Label id="memberid-help" for="businessAdress">
        Business Address
      </Label>
      <AvField
        name="businessAdress"
        value={businessAdress}
        onChange={appStore.onChange}
        validate={{
          pattern: { value: '[a-zA-Z0-9 ]+$', errorMessage: 'Must be Alfa numeric' },
          minLength: { value: 5, errorMessage: '5 Character Minimum' },
        }}
      />

      <Label id="memberid-help" for="telephone">
        Telephone Number
      </Label>
      <AvField
        name="telephone"
        value={telephone}
        onChange={appStore.onChange}
        validate={{
          pattern: { value: '^[0-9]*$', errorMessage: 'Must be a Valid Phone Number' },
          minLength: { value: 10, errorMessage: '10 Character Minimum' },
        }}
      />
      <Label id="memberid-help" for="email">
        Email
      </Label>
      <AvField
        name="email"
        value={email}
        onChange={appStore.onChange}
        validate={{
          pattern: {
            value: '/^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[A-Za-z]+$/',
            errorMessage: 'Must be valid email',
          },
          minLength: { value: 6, errorMessage: '6 Character Minimum' },
        }}
      />
    </fieldset>
  );
};

Provider.propTypes = propTypes;

export default inject('stateStore', 'appStore')(observer(Provider));
