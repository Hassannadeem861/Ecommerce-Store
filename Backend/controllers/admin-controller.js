const { where } = require("sequelize");
const db = require("../modules");
const User = db.registers;
const Contact = db.contacts;


// GET ALL USERS
const getAllUsers = async (req, res) => {
    try {

        const users = await User.findAll()
        if (!users || users === 0) {
            return res.status(404).json({
                message: "Users not found",
            })
        }
        console.log("users :", users);
        return res.status(200).json({
            message: "Get All Users Successfull",
            users
        })



    } catch (error) {
        next(error)
        console.log("getAllUsers error :", error);
        res.status(500).json({ message: "internal server" })
    }
}
// getSingleUser
const getSingleUser = async (req, res) => {
    try {

        const id = req.params.id;
        console.log("getSingleUser id:", id);

        // Assuming there's a method to get contacts by user ID
        const contacts = await getContactsByUserId(id);
        console.log("contacts", contacts);

        // Find by single user
        const findSingleUser = await User.findByPk(id);
        console.log("findSingleUser", findSingleUser);
        if (findSingleUser) {
            return res.status(200).json({
                message: "Get Single User Successful",
                findSingleUser,
                contacts

            });
        } else {
            return res.status(404).json({
                message: `Cannot find user with id=${id}.`
            });
        }
    } catch (error) {
        console.log("getAllUsers error :", error);
        return res.status(500).json({
            message: "Error retrieving user with id=" + req.params.id,
            error: error.message // Include the error message in the response
        });
    }
}

// Update User Logic
const updateUserById = async (req, res) => {
    const id = req.params.id;
    console.log("updateUserById :", id);

    User.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    id,
                    message: "User was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tutorial with id=" + id
            });
        });
};


// delete User Logic
const deleteUserById = async (req, res) => {
    try {
        const id = req.params.id
        console.log("deleteUserById :", id);
        const deleteUser = await User.destroy({ where: { id: id } });
        console.log("deleteUser :", deleteUser);
        res.status(201).json({
            id,
            message: "Register User was deleted successfully!",
        })
    } catch (error) {
        console.log("deleteUserById Error :", error);

    }

}
// GET ALL CONTACTS
const getAllContacts = async (req, res) => {
    try {

        const contacts = await Contact.findAll()
        if (!contacts || contacts === 0) {
            return res.status(404).json({
                message: "Contacts not found",
            })
        }
        console.log("getAllContacts :", contacts);
        return res.status(200).json({
            message: "Get All Users Successfull",
            contacts
        })
    } catch (error) {
        next(error)
        console.log("getAllContacts error :", error);
        res.status(500).json({ message: "internal server" })
    }
}

module.exports = {
    getAllUsers,
    getSingleUser,
    getAllContacts,
    deleteUserById,
    updateUserById
}