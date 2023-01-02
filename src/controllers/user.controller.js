import CyptoJS from "crypto-js";
import jwt from "jsonwebtoken";
import {User} from '../models/Users.js'

// Register
const register = async (req, res) => {
  try {
    const passwordEncript = CyptoJS.AES.encrypt(
      req.body.password,
      "salta2578"
    ).toString();
    const newUser = new User({ ...req.body, password: passwordEncript });
    const accessToken = jwt.sign({
      id: newUser._id,
      username: newUser.username,
      email: newUser.email,
    }, 'salta2578', {
      expiresIn: '3d'
    })
    
    await newUser.save();


    res.json({...newUser ,accessToken});
  } catch (error) {
    res.status(500).json({msg: "Algo salio mal al crear el usuario"});
  }
};

// Login
const login = async (req, res) => {
  try {
    const userFinded = await User.findOne({
      email: req.body.email,
    });

    if (!userFinded) {
      return res.status(401).json({msg: "Contraseña o Email incorrectos"});
    }
 
    const passwordDecrypt = CyptoJS.AES.decrypt(
      userFinded.password ,
      "salta2578"
    ).toString(CyptoJS.enc.Utf8);

    if (passwordDecrypt === req.body.password) {

      const accessToken = jwt.sign({
        id: userFinded._id,
        username: userFinded.username,
        email: userFinded.email,
      }, 'salta2578', {
        expiresIn: '3d'
      })

      return res.status(200).json({
        _id: userFinded._id,
        username: userFinded.username,
        email: userFinded.email,
        accessToken
      });
    } else {
      return res.status(401).json({msg: "Contraseña o Email incorrectos"});
    }
  } catch (error) {
    return res.status(500).send("Algo salio mal al logearse");
  }
};

const getUserById = async(req, res) => {
  
  const id = req.params.userId

  try {
    
    const userFinded = await User.findById(id);

    res.json(userFinded)

  } catch (error) {
    return res.status(500).send("No se pudo encontrar usuario");
  }
};

const getUsers = async(req, res) => {
  

  try {  
    const userFinded = await User.find();

    res.json(userFinded)

  } catch (error) {
    return res.status(500).send("No se pudo encontrar usuarios");
  }
};

export {
  register,
  login,
  getUserById,
  getUsers
}