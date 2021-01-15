// Database Connection
var db = require('../dbconfig/database.config')

const getProductData = (request, response) => {

  db.select('*').from('product')
    .then(productList => {
      if(productList.length){
        response.json(productList)
      } else {
        response.json({data: 'false'})
      }
    })
    .catch(err => response.status(400).json({dbError: 'Database Error'}))
}

const postProductData = (request, response) => {
  const { productname, productimage, productcategory } = request.body
  db('product').insert({ productname, productimage, productcategory })
    .returning('*')
    .then(item => {
      response.json(item)
    })
    .catch(err => response.status(400).json({dbError: 'Database Error'}))
}

const putProductData = (request, response) => {
  const { productid, productname, productimage, productcategory } = request.body
  db('product').where({productid}).update({ productname, productimage, productcategory })
    .returning('*')
    .then(item => {
      response.json(item)
    })
    .catch(err => res.status(400).json({dbError: 'Database Error'}))
}

const deleteProductData = (request, response) => {
  const { productid } = request.body
  db('product').where({productid}).del()
    .then(() => {
      response.json({delete: 'true'})
    })
    .catch(err => response.status(400).json({dbError: 'Database Error'}))
}

module.exports = {
  getProductData,
  postProductData,
  putProductData,
  deleteProductData
}