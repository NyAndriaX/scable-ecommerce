'use strick';

import { Request } from "express";

import Joi from "joi"

function validateLoginRequest(req: Request) {
  const params = Object.assign({}, req.params, req.query, req.body);

  return Joi.attempt(
    params,
    Joi.object({
      email: Joi.string().email().required(),
      password:Joi.string().min(6).max(20).required()
    }).required(),
  );
}

function validateRegister(req: Request) {
  const params = Object.assign({}, req.params, req.query, req.body);

  return Joi.attempt(params,Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    sexe: Joi.string().valid('Mr', 'Md').required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(20).required()
  }).required() );
}

export default {
  validateLoginRequest,
  validateRegister
};