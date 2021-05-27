const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  try { 
    const CatData = await Category.findAll({
    include: {  // include its associated Products
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }
  })
  if(!CatData[0]) {
        res.status(404).json({message: 'This categories does not exist'}); //status code for wrong query
        return;
      }
      res.status(200).json(CatData); // status code for the response
    }
    catch (err) {
      res.status(500).json(err) //status code for Internal Server Error, it is a generic "catch-all" response
    }
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
