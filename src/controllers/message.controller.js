import { Message } from "../models/Message.js"


const addMessage = async(req, res) => {
 
  const message = new Message(req.body);

  try {
    const menssageAdded = await message.save();

    res.status(200).json(menssageAdded)
  } catch (error) {
    res.status(500).json({msg: "No se pudo guardar el mensaje"});
  }
}


const getMessages = async(req, res) => {
  
  try {
    const messages = await Message.find({
      conversationId: req.params.conversationId
    })

    res.status(200).json(messages)

  } catch (error) {
    res.status(500).json({msg: "No se pudo obtener los mensajes"});
  }
}


export {
  addMessage,
  getMessages
}