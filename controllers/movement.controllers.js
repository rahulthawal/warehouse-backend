// Database Connection
var db = require('../dbconfig/database.config')

const getMovementData = (request, response) => {

  db.select('*').from('product_movement')
    .then(movementList => {
      if(movementList.length){
        response.json({data:movementList})
      } else {
        response.json({data: []})
      }
    })
    .catch(err => response.status(400).json({dbError: 'Database Error'}))
}

const postMovementData = (request, response) => {
  const { productid, timestamp, fromlocation, tolocation } = request.body
  db('product_movement').insert({ productid, timestamp, fromlocation, tolocation })
    .returning('*')
    .then(item => {
      response.json(item)
    })
    .catch(err => response.status(400).json({dbError: 'Database Error'}))
}

const putMovementData = (request, response) => {
  const { movementid, timestamp, fromlocation, tolocation, qty } = request.body
  db('product_movement').where({movementid}).update({ timestamp, fromlocation, tolocation, qty })
    .returning('*')
    .then(item => {
      response.json(item)
    })
    .catch(err => res.status(400).json({dbError: 'Database Error'}))
}

const deleteMovementData = (request, response) => {
  const { movementid } = request.body
  db('product_movement').where({movementid}).del()
    .then(() => {
      response.json({delete: 'true'})
    })
    .catch(err => response.status(400).json({dbError: 'Database Error'}))
}

module.exports = {
  getMovementData,
  postMovementData,
  putMovementData,
  deleteMovementData
}