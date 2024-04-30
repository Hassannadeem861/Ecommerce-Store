const db = require("../models");
const Product = db.products;
const Op = db.Sequelize.Op;

// CREATE PRODUCT
exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, category, quantity, shipping } = req.body;
    console.log(
      "name, description, price, category, quantity,shipping ",
      req.body
    );

    if (
      !name ||
      !price ||
      !description ||
      !category ||
      !quantity ||
      !shipping
    ) {
      return res.status(400).json({
        message: "Required parameters are missing",
        exampleRequestBody: {
          name: "abc name",
          price: "abc price",
          description: "abc description",
          // category: "abc category",
          quantity: "abc quantity",
          shipping: "abc shipping",
        },
      });
    }

    const productCreated = await Product.create(req.body);
    console.log("product_create_successfull:", productCreated);
    return res.status(201).json({
      message: "Product created successfully",
      productCreated,
    });
  } catch (error) {
    console.error("createProduct error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// GET ALL PRODUCTS

// GET ALL PRODUCTS
// exports.getAllProducts = async (req, res) => {
//     try {

//         const products = await Product.findAll(req.query)
//         console.error("searching data:", req.query);
//         console.error("createProduct:", products);

//         if (!products || products === 0) {
//             return res.status(404).json({
//                 message: "products not found",
//             })
//         }
//         console.log("products :", products);
//         return res.status(200).json({
//             message: "Get All products Successfull",
//             products
//         })

//     } catch (error) {
//         console.error("getAllProducts error:", error);
//         return res.status(500).json({ message: "Internal server error" });
//     }
// }

// GET ALL PRODUCTS
exports.findAll = (req, res) => {
  const name = req.query.name;
  console.log("name :", name);

  const searchQuery = req?.query?.searchQuery; // Yeh assume karta hai ke tum 'searchQuery' naam ka parameter pass kar rahe ho
  console.log("searchQuery :", searchQuery);

  let condition = {};

  // Check karo ke name parameter provide kiya gaya hai aur wo khali nahi hai
  if (name !== undefined && name !== null && name.trim() !== "") {
    condition.name = { [Op.like]: `%${name}%` };
  }

  console.log("condition before searchQuery check:", condition);

  // Agar search query provide ki gayi hai aur wo khali nahi hai, to ise condition mein shamil karo
  if (
    searchQuery !== undefined &&
    searchQuery !== null &&
    searchQuery.trim() !== ""
  ) {
    // Try to parse searchQuery as a number
    const numericSearchQuery = parseFloat(searchQuery);
    if (!isNaN(numericSearchQuery)) {
      // Check karo ke searchQuery number hai ya nahi
      condition.price = { [Op.eq]: numericSearchQuery };
    } else {
      condition = {
        ...condition,
        [Op.or]: [
          { name: { [Op.like]: `%${searchQuery}%` } },
          { price: { [Op.like]: `%${searchQuery}%` } },
        ],
      };
    }
  }

  console.log("final condition :", condition);

  Product.findAll({ where: condition, limit: 20 }) // Limit 20 products
    .then((data) => {
      if (!data) {
        return res.status(404).json({
          message: "Products not found",
        });
      }
      res.send({ message: "Get all products successful ", data });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Products.",
      });
    });
};

// GET SINGLE PRODUCT
exports.getSingleProduct = async (req, res) => {
  try {
    const id = req.params.id;
    console.error("getsingleproduct id:", id);

    // Find by single product
    const findById = await Product.findByPk(id);
    console.error("findById:", findById);

    if (findById) {
      return res.status(200).json({
        message: "Get Single Product Successful",
        findById,
      });
    } else {
      return res.status(404).json({
        message: "Product Not Found",
      });
    }
  } catch (error) {
    console.error("getsingleproduct error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// UPDATE SINGLE PRODUCT
exports.updateSingleProduct = async (req, res) => {
  try {
    const id = req.params.id;
    console.error("updateSingleProduct id:", id);

    Product.update(req.body, {
      where: { id: id },
    }).then((num) => {
      if (num == 1) {
        res.send({
          id,
          message: "Product was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Product with id=${id}. Maybe Product was not found or req.body is empty!`,
        });
      }
    });
  } catch (error) {
    console.error("updateSingleProduct error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

//SINGLE DELETE PRODUCT
exports.deleteProductById = async (req, res) => {
  try {
    const id = req.params.id;
    console.log("delete all products with id :", id);

    const deleteUser = await Product.destroy({ where: { id: id } });
    console.log("deleteUser :", deleteUser);

    if (deleteUser) {
      return res.status(201).json({
        id,
        message: "Delete single product successfully!",
      });
    } else {
      return res.status(404).json({
        message: "Product Not Found!",
      });
    }
  } catch (error) {
    console.error("delete all products error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// DELETE ALL PRODUCTS
exports.deleteAllProducts = (req, res) => {
  Product.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Products were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Products.",
      });
    });
};
