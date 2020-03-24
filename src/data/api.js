const endpoints = {
  all: 'https://corona.lmao.ninja/all',
  countries: 'https://corona.lmao.ninja/countries',
  states: 'https://corona.lmao.ninja/states'
};

export const apiFetch = async args => {
  const url = new URL(args.url);
  if (args.params && Object.entries(args.params).length !== 0) {
    Object.keys(args.params).forEach(key =>
      url.searchParams.append(key, args.params[key])
    );
  }

  return fetch(url.toString(), { ...args }).then(res => res.json());
};

export const fetchAll = () => apiFetch({ url: endpoints.all });

export const fetchCountries = () =>
  apiFetch({
    url: endpoints.countries
  });

export const fetchStates = () =>
  apiFetch({
    url: endpoints.states
  });
