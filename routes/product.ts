const express = require('express');
const router = express.Router();

import { getAllProducts, getAllProductsStatic } from '../controllers/product';

router.route('/').get(getAllProducts)
router.route('/static').get(getAllProductsStatic)


export {
    router
}