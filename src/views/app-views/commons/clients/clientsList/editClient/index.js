import { message } from 'antd';
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH } from 'configs/AppConfig';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getClientsData } from 'redux/actions/App';
import EditClientForm from './EditClientForm';

class EditClient extends Component {
  constructor(props) {
    super(props);

    this.clientId = parseInt(this.props.match.params.clientId);

    if (this.clientId) {
      if (this.clientsData === null) {
        this.props.getClientsData();
      } else {
        this.client = this.props.clientsData.find((client) => client.id === this.clientId);
      }
    }
  }

  componentDidMount() {
    if (this.props.showError) {
      setTimeout(() => {
        this.props.hideAppError();
      }, 3000);
    }

    if (this.clientId && !this.client)
      this.client = this.props.clientsData.find((client) => client.id === this.clientId);
  }

  componentDidUpdate() {
    if (this.props.showError) {
      setTimeout(() => {
        this.props.hideAppError();
      }, 3000);
    }

    if (this.clientId && !this.client)
      this.client = this.props.clientsData.find((client) => client.id === this.clientId);
  }

  render() {
    const onFinish = (values) => {
      const data = {
        name: values.name,
        username: values.username,
        email: values.email,
        phone: values.phone,
        website: values.website,
        address: {
          city: values.addressCity,
          street: values.addressStreet,
          suite: values.addressSuite,
          zipcode: values.addressZipcode,
          geo: {
            lat: values.addressGeoLat,
            lgn: values.addressGeoLng,
          },
        },
        company: {
          name: values.name,
          catchPhrase: values.catchPhrase,
          bs: values.bs,
        },
      };

      this.props.setNewClientData(data);

      const key = 'updatable';
      message.loading({ content: 'Updating...', key });
      setTimeout(() => {
        message.success({ content: 'Done!', key, duration: 2 });
        this.props.history.push(`${APP_PREFIX_PATH}/commons/clients/list`);
      }, 1000);
    };

    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };

    return (
      <>
        {this.props.isLoading ? (
          <Loading cover="content" />
        ) : !this.clientId ? (
          <h2>Error: Client ID not specified</h2>
        ) : !this.client ? (
          <h2>Error: Client ID is not correct</h2>
        ) : (
          <EditClientForm
            name={this.client.name}
            username={this.client.username}
            email={this.client.email}
            phone={this.client.phone}
            website={this.client.website}
            addressCity={this.client.address.city}
            addressStreet={this.client.address.street}
            addressSuite={this.client.address.suite}
            addressZipcode={this.client.address.zipcode}
            addressGeoLat={this.client.address.geo.lat}
            addressGeoLng={this.client.address.geo.lng}
            companyName={this.client.company.name}
            companyCatchPhrase={this.client.company.catchPhrase}
            companyBs={this.client.company.bs}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.app.isLoading,
  clientsData: state.app.clientsData,
  showError: state.app.showError,
  errorMessage: state.app.errorMessage,
});

export default compose(
  connect(mapStateToProps, {
    setNewClientData: () => ({ type: 'asd' }),
    getClientsData,
  }),
  withRouter
)(EditClient);
