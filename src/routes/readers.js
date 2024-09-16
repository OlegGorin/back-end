const router = require("express").Router();
const loggerThree = require("../middlewares/loggerThree");
const {
  getReaders,
  getReader,
  createReader,
  updateReader,
  deleteReader,
} = require("../controllers/readers");

router.use(loggerThree);

router.get("/readers", getReaders);
router.get("/readers/:reader_id", getReader);
router.post("/readers", createReader);
router.patch("/readers/:reader_id", updateReader);
router.delete("/readers/:reader_id", deleteReader);

module.exports = router;