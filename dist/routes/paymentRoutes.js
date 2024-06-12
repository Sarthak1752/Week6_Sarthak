"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const paymentController_1 = require("../controllers/paymentController");
const authMiddleware_1 = __importDefault(require("../middleware/authMiddleware"));
const router = express_1.default.Router();
router.post('/payments', authMiddleware_1.default, paymentController_1.createPayment);
router.get('/payments/:id', authMiddleware_1.default, paymentController_1.getPaymentById);
exports.default = router;
//# sourceMappingURL=paymentRoutes.js.map