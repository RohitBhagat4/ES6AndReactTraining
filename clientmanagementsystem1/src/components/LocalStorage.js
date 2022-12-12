export const getListClients = () => {
  if (!localStorage["clients"]) {
    localStorage["clients"] = "[]";
  }

  let clients = localStorage["clients"];
  clients = JSON.parse(clients);
  return clients;
};

export const addClient = (client) => {
  const clients = getListClients();
  clients.push(client);
  localStorage["clients"] = JSON.stringify(clients);
};

export const removeClient = (id) => {
  let clients = getListClients();
  clients = clients.filter((client) => client.id !== id);
  localStorage["clients"] = JSON.stringify(clients);
};

export const getClientById = (id) => {
  const clients = getListClients();
  const client = clients.find((client) => client.id === id);
  return client;
};

export const editClient = (id, newClient) => {
  let clients = getListClients();
  clients = clients.filter((client) => client.id !== id);
  clients.push(newClient);
  localStorage["clients"] = JSON.stringify(clients);
};