import express from 'express';
import homeController from '../controllers/home';

const router = express.Router();

/**
 * GET '/'
 * Default home route. Just relays a success message back.
 * @param  {Object} req
 * @return {Object} json
 */
router.get('/', homeController);

module.exports = router;