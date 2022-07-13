const asyncHandler = require('express-async-handler');

const express = require('express');
const Employee = require('../models/employeesModel');

const router = express.Router();

const getAllEmployees = (req, res) => {
  res.json({ message: 'HUhuh' });
};

const createNewEmployee = asyncHandler(async (req, res) => {
  const { firstname, lastname } = req.body;

  // Validation
  if (!firstname || !lastname) {
    res.status(400);
    throw new Error('Please include all fields');
  }

  try {
    const employee = await Employee.create({
      firstname,
      lastname,
    });
    res.status(200).json(employee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

const updateEmployee = (req, res) => {
  res.json({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
  });
};

const deleteEmployee = (req, res) => {
  res.json({ id: req.body.id });
};

const getEmployee = (req, res) => {
  console.log(req.user);
  res.json({ id: req.params.id });
};

module.exports = {
  getAllEmployees,
  createNewEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployee,
};
