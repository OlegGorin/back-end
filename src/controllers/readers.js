const Reader = require("../models/reader");

const getReaders = (request, response) => {
  return Reader.find({})
    .then((reader) => {
      if (!reader) {
        return response.status(404).send("Читатели не найдены");
      }
      response.status(200).send(reader);
    })
    .catch((error) => {
      response.status(500).send(error.message);
    });
};

const getReader = (request, response) => {
  const { reader_id } = request.params;
  return Reader.findById(reader_id)
    .then((reader) => {
      if (!reader) {
        return response.status(404).send("Читатель не найден");
      }
      response.status(200).send(reader);
    })
    .catch((error) => {
      response.status(500).send(error.message);
    });
};

const createReader = (request, response) => {
  return Reader.create({ ...request.body })
    .then((reader) => {
      if (!reader) {
        return response.status(404).send("Читатели не найдены");
      }
      response.status(201).send(reader);
    })
    .catch((error) => {
      response.status(500).send(error.message);
    });
};

const updateReader = (request, response) => {
  const { reader_id } = request.params;
  return Reader.findByIdAndUpdate(reader_id, { ...request.body })
    .then((redaer) => {
      if (!reader) {
        return response.status(404).send("Читатель не найден");
      }
      response.status(201).send(reader);
    })
    .catch((error) => {
      response.status(500).send(error.message);
    });
};

const deleteReader = (request, response) => {
  const { reader_id } = request.params;
  return Reader.findByIdAndDelete(reader_id)
    .then((reader) => {
      if (!reader) {
        return response.status(404).send("Читатель не найден");
      }
      response.status(200).send("Success");
    })
    .catch((error) => {
      response.status(500).send(error.message);
    });
};

module.exports = {
  getReaders,
  getReader,
  createReader,
  updateReader,
  deleteReader,
};
