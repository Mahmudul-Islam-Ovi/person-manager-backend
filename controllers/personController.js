const Person = require("../models/Person");

// Get all persons
exports.getAllPersons = async (req, res, next) => {
  try {
    const persons = await Person.find();
    res.json(persons);
  } catch (err) {
    next(err);
  }
};

// Get person by ID
exports.getPersonById = async (req, res, next) => {
  try {
    const person = await Person.findById(req.params.id);
    if (!person) return res.status(404).json({ message: "Person not found" });
    res.json(person);
  } catch (err) {
    next(err);
  }
};

// Create new person
exports.createPerson = async (req, res, next) => {
  try {
    const person = new Person(req.body);
    await person.save();
    res.status(201).json(person);
  } catch (err) {
    next(err);
  }
};

// Update person
exports.updatePerson = async (req, res, next) => {
  try {
    const person = await Person.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!person) return res.status(404).json({ message: "Person not found" });
    res.json(person);
  } catch (err) {
    next(err);
  }
};

// Delete person
exports.deletePerson = async (req, res, next) => {
  try {
    const person = await Person.findByIdAndDelete(req.params.id);
    if (!person) return res.status(404).json({ message: "Person not found" });
    res.json({ message: "Person deleted" });
  } catch (err) {
    next(err);
  }
};
