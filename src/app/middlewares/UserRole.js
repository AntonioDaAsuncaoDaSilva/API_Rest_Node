import {body, validationResult} from 'express-validator'

export const validateUser=[
  body('nome').notEmpty().withMessage('Nome é obrigatório'),
  body('email').isEmail().withMessage('Email invalido'),
  body('password').isLength({min:8}).withMessage('A senha deve ter pelo menos 8 caracteres'),
  
  (req,res,next)=>{
    const errors= validationResult(req)
    if (!errors.isEmpty()){
      return res.status(400).json({errors:errors.array()})
    }
    next()
  }
  
  
]