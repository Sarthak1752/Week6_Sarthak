import { Request, Response } from 'express';
import gocardless from '../common/gocardless';

export const createCustomer = async (req: Request, res: Response) => {
  try {
    const { given_name, family_name, email, address_line1, city, postal_code, country_code } = req.body;

    // Validate required fields
    if (!given_name || !family_name || !email || !address_line1 || !city || !postal_code || !country_code) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const customer = await gocardless.customers.create({
      given_name,
      family_name,
      email,
      address_line1,
      city,
      postal_code,
      country_code,
    });

    res.status(201).json(customer);
  } catch (error : any) {
    console.error('Error creating customer:', error);

    // Check if the error is from GoCardless
    if (error.response && error.response.body) {
      const { code, message, errors } = error.response.body;
      return res.status(500).json({ code, message, errors });
    }

    res.status(500).json({ error: 'Internal Server Error' });
  }
};
