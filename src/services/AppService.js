import appApi from '../appApi/api';

const AppService = {};

AppService.getClientsData = async () =>
  await appApi
    .getClientsData()
    .then((clientsData) => clientsData)
    .catch((error) => ({ error }));

AppService.uploadNewClientData = async (data) =>
  await appApi
    .uploadNewClientData(data)
    .then((response) => response)
    .catch((error) => ({ error }));

export default AppService;
