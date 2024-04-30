const express = require('express');
const AdminAuthMiddleWare = require('../middlewares/authMiddleware');
const adminRouter = require('../controllers/admin-controller');
const router = express.Router();

router.route('/users').get(AdminAuthMiddleWare, adminRouter.getAllUsers)
router.route('/contacts').get(AdminAuthMiddleWare, adminRouter.getAllContacts)

router.route('/users/delete/:id').delete(AdminAuthMiddleWare, adminRouter.deleteUserById)
router.route('/users/update/:id').put(AdminAuthMiddleWare, adminRouter.updateUserById)

// Retrieve a single admin with id
router.get("/users/:id", adminRouter.getSingleUser);
router.get("/contacts/:id", adminRouter.getSingleUser);

module.exports = router