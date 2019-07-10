import connectionProxy from './connectionProxy'

export const create = post => {
  return connectionProxy.post('/api/publications', post)
}
