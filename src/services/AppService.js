import appApi from '../appApi/api';

const AppService = {};

AppService.getClientsData = async () =>
  await appApi
    .getClientsData()
    .then((clientsData) => clientsData)
    .catch((error) => ({ error }));

export default AppService;
