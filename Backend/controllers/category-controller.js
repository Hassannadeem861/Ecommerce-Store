const db = require("../models");
const Category = db.categorys;
const Op = db.Sequelize.Op;

// CREATE CATEGORY
exports.createCategory = async (req, res) => {
  try {
    const { name } = req.body; // Extracting 'name' from the request body
    console.log("name =>", name);

    if (!name) {
      return res.status(400).json({
        message: "Required parameters are missing",
        exampleRequestBody: {
          name: "abc name",
        },
      });
    }

    const existingCategory = await Category.findOne({ where: { name: name } });
    console.log("existingCategory:", existingCategory);

    if (existingCategory) {
      return res.status(403).json({
        message: "Category already exists, please try a different category.",
      });
    }

    const createCategory = await Category.create({ name: name }); // Creating the category with the correct format
    console.log("createCategory_successful:", createCategory);

    return res.status(201).json({
      message: "Category created successfully",
      createCategory,
    });
  } catch (error) {
    console.error("category error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// GET ALL CATEGORY
exports.getAllCategory = (req, res) => {
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
          { name: { [Op.like]: `%${searchQuery}%` } },
        ],
      };
    }
  }

  console.log("final condition :", condition);

  Category.findAll({ where: condition })

    .then((data) => {
      if (!data) {
        return res.status(404).json({
          message: "Products not found",
        });
      }
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Category.",
      });
    });
};

// GET SINGLE CATEGORY
exports.getSingleCategory = async (req, res) => {
  try {
    const id = req.params.id;
    console.error("getSingleCategory id:", id);

    // Find by single product
    const findById = await Category.findByPk(id);
    console.error("findById:", findById);

    if (findById) {
      return res.status(200).json({
        message: "Get Single Category Successful",
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

// UPDATE SINGLE CATEGORY
exports.updateSingleCategory = async (req, res) => {
  try {
    const id = req.params.id;
    console.error("updateSingleProduct id:", id);

    Category.update(req.body, {
      where: { id: id },
    }).then((num) => {
      if (num == 1) {
        res.send({
          id,
          message: "Category was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Category with id=${id}. Maybe Category was not found or req.body is empty!`,
        });
      }
    });
  } catch (error) {
    console.error("updateSingleProduct error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

//SINGLE DELETE CATEGORY
exports.singleDeleteCategory = async (req, res) => {
  try {
    const id = req.params.id;
    console.log("delete all products with id :", id);

    const deleteUser = await Category.destroy({ where: { id: id } });
    console.log("deleteUser :", deleteUser);

    if (deleteUser) {
      return res.status(201).json({
        id,
        message: "Delete single Category successfully!",
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

// DELETE ALL CATEGORY
exports.deleteAllCategory = (req, res) => {
  Category.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Categorys were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Category.",
      });
    });
};
