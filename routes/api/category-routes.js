const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  try { 
    const catData = await Category.findAll({
    include: {  // include its associated Products
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }
  })
  if(!catData[0]) {
        res.status(404).json({message: 'These categories do not exist'}); //status code for wrong query
        return;
      }
      res.status(200).json(catData); // status code for the response
    }
    catch (err) {
      res.status(500).json(err) //status code for Internal Server Error, it is a generic "catch-all" response
    }
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  try { 
    const catData = await Category.findOne({
    Where: { 
      id: req.params.id 
    },
    include: {  // include its associated Products
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }
  })
  if(!catData[0]) {
        res.status(404).json({message: 'This category does not exist'}); //status code for wrong query
        return;
      }
      res.status(200).json(catData); // status code for the response
    }
    catch (err) {
      res.status(500).json(err) //status code for Internal Server Error, it is a generic "catch-all" response
    }
});

router.post('/', (req, res) => {
  // create a new category
  try {
    const catData = await User.create({
      category_name: req.body.category_name
    });
    res.status(200).json(catData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  try {
    const catData = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!catData[0]) {
      res.status(404).json({ message: 'No category exists with this id!' });
      return;
    }
    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  try {
    const catData = await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!catData) {
      res.status(404).json({ message: 'No category exists with this id!' });
      return;
    }
    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
