const { Router } = require("express");
const typeRouter = Router();
const {getTypeHandler} = require('../routes/handlers/handlerType')

typeRouter.get("/", getTypeHandler);


module.exports = typeRouter;
