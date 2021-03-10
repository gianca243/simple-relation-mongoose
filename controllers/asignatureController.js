const User = require('../models/user') /* Requerimos el modelo de nuestro documento */
const Asignature = require('../models/asignature')

exports.create = async (req,res)=>{
  const asignatura = new Asignature({
    code:req.body.code,
    nombre:req.body.nombre,
    jornada:req.body.jornada
  })
  const result = await asignatura.save()
  res.status(200).send(result)
}
exports.joining = async (req,res)=>{
  const asignatura = await Asignature.findOne({nombre:req.body.curso})
  if(!asignatura){
    return res.status(404).send({message:"no existe el curso"})
  }
  const user = await User.findOne({userName:req.body.estudiante})
  if(!user){
    return res.status(404).send({message:"no existe el usuario"})
  }
  const checkUser = await Asignature.findOne({cursantes:user._id})
  if(checkUser){
    return res.status(404).send({message:"usuario ya registrado"})
  }
  asignatura.cursantes.push(user._id)
  // console.log(asignatura);
  const result = await asignatura.save()
  res.send({message:"registrado",result})
}
exports.consult = async (req,res)=>{
  const name = req.params.name
  const user = await User.findOne({userName:name})
  if(!user){
    return res.status(404).send({message:"no existe el usuario"})
  }
  const checkUser = await Asignature.find({cursantes:user._id})
  // console.log(checkUser);
  res.send(checkUser)
}