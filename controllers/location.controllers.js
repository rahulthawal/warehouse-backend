// Database Connection
var db = require('../dbconfig/database.config')

const getLocationData = (request, response) => {

  db.select('*').from('location')
    .then(locationList => {
      if(locationList.length){
        response.json({data:locationList})
      } else {
        response.json({data: []})
      }
    })
    .catch(err => response.status(400).json({dbError: 'Database Error'}))
}

const postLocationData = (request, response) => {
  const { locationname } = request.body
  db('location').insert({ locationname })
    .returning('*')
    .then(item => {
      response.json(item)
    })
    .catch(err => response.status(400).json({dbError: 'Database Error'}))
}

const putLocationData = (request, response) => {
  const { locationid, locationname } = request.body
  db('location').where({locationid}).update({ locationname })
    .returning('*')
    .then(item => {
      response.json(item)
    })
    .catch(err => res.status(400).json({dbError: 'Database Error'}))
}

const deleteLocationData = (request, response) => {
  const { locationid } = request.body
  db('location').where({locationid}).del()
    .then(() => {
      response.json({delete: 'true'})
    })
    .catch(err => response.status(400).json({dbError: 'Database Error'}))
}

module.exports = {
  getLocationData,
  postLocationData,
  putLocationData,
  deleteLocationData
}