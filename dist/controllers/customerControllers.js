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
exports.createCustomer = void 0;
const gocardless_1 = __importDefault(require("../common/gocardless"));
const createCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { given_name, family_name, email, address_line1, city, postal_code, country_code } = req.body;
        // Validate required fields
        if (!given_name || !family_name || !email || !address_line1 || !city || !postal_code || !country_code) {
            return res.status(400).json({ error: 'Missing required fields' });
        }
        const customer = yield gocardless_1.default.customers.create({
            given_name,
            family_name,
            email,
            address_line1,
            city,
            postal_code,
            country_code,
        });
        res.status(201).json(customer);
    }
    catch (error) {
        console.error('Error creating customer:', error);
        // Check if the error is from GoCardless
        if (error.response && error.response.body) {
            const { code, message, errors } = error.response.body;
            return res.status(500).json({ code, message, errors });
        }
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.createCustomer = createCustomer;
//# sourceMappingURL=customerControllers.js.map