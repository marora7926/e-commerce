// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category 
    // ref w13 activity 21
    // License.belongsTo(Driver, {
    //   foreignKey: 'driver_id',
    // });

// Categories have many Products
    // ref w13 activity 23
    // Driver.hasMany(Car, {
    //   foreignKey: 'driver_id',
    //   onDelete: 'CASCADE',
    // });

// Products belongToMany Tags (through ProductTag)
    // ref W13 activity 28
    // Traveller.belongsToMany(Location, {
    //   // Define the third table needed to store the foreign keys
    //   through: {
    //     model: Trip,
    //     unique: false
    //   },
    //   // Define an alias for when data is retrieved
    //   as: 'planned_trips'
    // });

// Tags belongToMany Products (through ProductTag)
    // ref W13 activity 28
    // Traveller.belongsToMany(Location, {
    //   // Define the third table needed to store the foreign keys
    //   through: {
    //     model: Trip,
    //     unique: false
    //   },
    //   // Define an alias for when data is retrieved
    //   as: 'planned_trips'
    // });

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
