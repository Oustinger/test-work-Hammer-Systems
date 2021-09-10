import {
    CompassOutlined, GlobalOutlined, MailOutlined, MobileOutlined, UserOutlined
} from '@ant-design/icons';
import { Avatar, Divider, Drawer } from 'antd';
import React, { Component } from 'react';

export class ClientView extends Component {
  render() {
    const { data, visible, close } = this.props;
    return (
      <Drawer width={300} placement="right" onClose={close} closable={false} visible={visible}>
        <div className="text-center mt-3">
          <Avatar size={80} src={data?.img} />
          <h3 className="mt-2 mb-0">{data?.name}</h3>
          <span className="text-muted">{data?.username}</span>
        </div>
        <Divider dashed />
        <div className="">
          <h6 className="text-muted text-uppercase mb-3">Account details</h6>
          <p>
            <UserOutlined />
            <span className="ml-3 text-dark">id: {data?.id}</span>
          </p>
        </div>
        <div className="mt-5">
          <h6 className="text-muted text-uppercase mb-3">CONTACT</h6>
          <p>
            <MobileOutlined />
            <span className="ml-3 text-dark">{data?.phone}</span>
          </p>
          <p>
            <MailOutlined />
            <span className="ml-3 text-dark">{data?.email ? data?.email : '-'}</span>
          </p>
          <p>
            <CompassOutlined />
            <span className="ml-3 text-dark">
              {data?.address ? `${data?.address.city}, ${data?.address.street}, ${data?.address.suite}` : '-'}
            </span>
          </p>
        </div>
        <div className="mt-5">
          <h6 className="text-muted text-uppercase mb-3">Social profiles</h6>
          <p>
            <GlobalOutlined />
            <a href="/#" className="ml-3 text-dark">
              {data?.website ? data?.website : '-'}
            </a>
          </p>
        </div>
      </Drawer>
    );
  }
}

export default ClientView;
