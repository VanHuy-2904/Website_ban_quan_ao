const Carts =  require ("../models/cart");


class CartController {
    async addcart(req, res) {
    try {
        const {email, name , price, image} = req.body;
    let results = await Carts.findOne({user: email, 'CartItems.name': name},);
    if(results) {
       const updates =  await Carts.updateOne({user: email, 'CartItems.name': name} , { $inc: {'CartItems.$.quantity': 1}})

       res.status(200).json(results + "Update thành công")
    }
    else {
        const results1 = await Carts.findOneAndUpdate(
            { user: email},
            { $push: {CartItems: {name, price, image, quantity: 1}}},
            { upsert: true, new: true }
     
            )

        res.status(200).json("Đã thêm vào giỏ hàng")
    }

    } catch (error) {
        console.log(error);
    }
    }

    async getcart(req, res) {
        try {
            const email = req.body.email;
        const results = await Carts.findOne({user: email});
        if(results) {
        res.status(200).json(results.CartItems);
        }
        else {
        res.status(404).json({message: 'Giỏ hàng trống',
                            results
    })
        }
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new CartController;