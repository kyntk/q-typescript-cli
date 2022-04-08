import fetch from 'node-fetch'

export const getUser = () => {
  return fetch('https://qiita.com/api/v2/authenticated_user', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.TOKEN}`,
    },
  })
}
