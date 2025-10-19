import jsw from 'jsonwebtoken'

export const AuthMiddleware=(req,res,next)=>{
  const authHeader = req.headers.authorization
  if(!authHeader){
    return res.status(401).json({massage:'Token is not provided'})
  }

  const [,token]=authHeader.split('')
  try{
    const decoded = jwt.verifiy(token,process.env.JWT_SECRET)
    req.userId = decoded.id
    next()}
  catch(err){
    return res.status(401).json({massage:'Token is invalid'})
  }
}