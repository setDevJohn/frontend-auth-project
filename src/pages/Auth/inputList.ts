const login = [
  { name: 'login', label: 'E-mail' },
  { name: 'pass', label: 'Senha', type: 'password' },
];

const register = {
  user: [
    { name: 'name', label: 'Nome' },
    { name: 'email', label: 'E-mail' },
    { name: 'pass', label: 'Senha', type: 'password' },
  ],
  company: [
    { name: 'companyName', label: 'Razão Social' },
    { name: 'tradingName', label: 'Nome Fantasia' },
    { name: 'cnpj', label: 'CNPJ' },
  ] 
};



export { login, register };