"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPaymentById = exports.createPayment = void 0;
const gocardless_1 = __importDefault(require("../common/gocardless"));
const createPayment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { amount, currency, mandate_id } = req.body;
        const payment = yield gocardless_1.default.payments.create({
            params: {
                amount,
                currency,
                links: {
                    mandate: mandate_id,
                },
            },
        });
        res.status(201).json(payment);
    }
    catch (error) {
        res.status(500).json({ "message": error });
    }
});
exports.createPayment = createPayment;
const getPaymentById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payment = yield gocardless_1.default.payments.find(req.params.id);
        res.status(200).json(payment);
    }
    catch (error) {
        res.status(500).json({ "message": error });
    }
});
exports.getPaymentById = getPaymentById;
//# sourceMappingURL=paymentController.js.map