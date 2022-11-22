// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
// Categories have many Products
// Products belongToMany Tags (through ProductTag)
// Tags belongToMany Products (through ProductTag)

Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
});

Product.hasMany(ProductTag, {
  foreignKey: 'product_id',
  onDelete: 'CASCADE'
});

Tag.hasMany(ProductTag, {
  foreignKey: 'tag_id',
  onDelete: 'CASCADE'
});

Product.belongsTo(Category, {
  foreignKey: 'category_id'
});

ProductTag.belongsTo(Product, {
  foreignKey: 'product_id'
});

ProductTag.belongsTo(Tag, {
  foreignKey: 'tag_id'
});



module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
