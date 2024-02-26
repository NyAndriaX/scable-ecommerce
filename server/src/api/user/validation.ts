'use strict';

import { Request } from 'express';

import Joi from 'joi';

function validationUpdateUserRequest(req: Request) {
  const params = Object.assign({}, req.params, req.query, req.body);

  return Joi.attempt(
    params,
    Joi.object({
      id: Joi.string().required(),
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      sexe: Joi.string().valid('Mr', 'Md').required(),
      dateOfBirth: Joi.date().allow(null).optional()
    }).required()
  );
}
function validationUpdatePasswordRequest(req: Request) {
  const params = Object.assign({}, req.params, req.query, req.body);

  return Joi.attempt(
    params,
    Joi.object({
      id: Joi.string().required(),
      currentPassword: Joi.string().required(),
      newPassword: Joi.string().required(),
    })
  );
}

function validationUpdateEmailRequest(req: Request) {
  const params = Object.assign({}, req.params, req.query, req.body);

  return Joi.attempt(
    params,
    Joi.object({
      id: Joi.string().required(),
      newEmail: Joi.string().email().required(),
      currentPassword: Joi.string().min(6).max(20).required()
    })
  );
}

export default {
  validationUpdateUserRequest,
  validationUpdatePasswordRequest,
  validationUpdateEmailRequest
};
