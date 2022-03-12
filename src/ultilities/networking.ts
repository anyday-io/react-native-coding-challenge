export function get(api: RequestInfo) {
  return fetch(api, {
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      return response.json().then((data) => {
        return { data, status: response.status }
      })
    })
    .catch(() => {
      return { data: null, status: 500 }
    })
}
