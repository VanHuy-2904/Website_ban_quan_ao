const Products =  require ("../models/product");

class ProductController {
    async  getproduct (req, res) {
        try {
            const product = await Products.find({});
                res.json(product);
        } catch (error) {
            
        }
    }

}

module.exports = new ProductController();