import { DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import { Button, Card, Table, Tooltip } from 'antd';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import React from 'react';
import ClientView from './ClientView';

const ClientList = React.memo(
  ({ clients, viewState, deleteClient, showClientProfile, closeClientProfile, history, currentUrl }) => {
    const { clientProfileVisible, selectedClient } = viewState;

    const tableColumns = [
      {
        title: 'Client',
        dataIndex: 'name',
        render: (_, record) => (
          <div className="d-flex">
            <AvatarStatus src={record.img} name={record.name} subTitle={record.email} />
          </div>
        ),
        sorter: {
          compare: (a, b) => {
            a = a.name.toLowerCase();
            b = b.name.toLowerCase();
            return a > b ? -1 : b > a ? 1 : 0;
          },
        },
      },
      {
        title: 'User name',
        dataIndex: 'username',
      },
      {
        title: 'City',
        dataIndex: ['address', 'city'],
      },
      {
        title: 'Company',
        dataIndex: ['company', 'name'],
        sorter: {
          compare: (a, b) => {
            if (a.company.name < b.company.name) return -1;
            if (a.company.name > b.company.name) return 1;
            return 0;
          },
        },
      },
      {
        title: 'Website',
        dataIndex: 'website',
      },
      {
        title: '',
        dataIndex: 'actions',
        render: (_, elm) => (
          <div className="text-right">
            <Tooltip title="View">
              <Button
                type="primary"
                className="mr-2"
                icon={<EyeOutlined />}
                onClick={(e) => {
                  e.stopPropagation();
                  showClientProfile(elm);
                }}
                size="small"
              />
            </Tooltip>
            <Tooltip title="Delete">
              <Button
                danger
                icon={<DeleteOutlined />}
                onClick={(e) => {
                  e.stopPropagation();
                  deleteClient(elm.id);
                }}
                size="small"
              />
            </Tooltip>
          </div>
        ),
      },
    ];

    const onRowClick = (record) => {
      return {
        onClick: () => {
          history.push(`${currentUrl}/${record.id}`);
        },
      };
    };

    return (
      <Card bodyStyle={{ padding: '0px' }}>
        <Table columns={tableColumns} dataSource={clients} rowKey="id" onRow={onRowClick} />
        <ClientView
          data={selectedClient}
          visible={clientProfileVisible}
          close={() => {
            closeClientProfile();
          }}
        />
      </Card>
    );
  }
);

export default ClientList;
