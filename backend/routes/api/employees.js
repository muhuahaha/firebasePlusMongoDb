const express = require('express');

const router = express.Router();
const employeesController = require('../../controllers/employeesController');

router
  .route('/')
  .get(employeesController.getAllEmployees)
  .post(employeesController.createNewEmployee)
  .put(employeesController.updateEmployee)
  .delete(employeesController.deleteEmployee);

router
  .route('/:id')
  .get(employeesController.getEmployee)
  .patch((req, res) => {
    res.send(`Update Employee with id ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete Employee with id ${req.params.id}`);
  });

module.exports = router;
