import { Conversation } from '../models/Conversation.js'

const newConversation = async(req, res) => {
  const newConversation = new Conversation({
    members: [req.body.senderId, req.body.reciverId]
  })
  try {

    const saveConversation = await newConversation.save()

    res.status(200).json(saveConversation)
  } catch (error) {
    res.status(500).json({msg: "No se pudo entablar conversacion"});
  }
}

const getConversationByUserId = async(req, res) => {
  
  try {
    const conversation = await Conversation.find({
      members: {$in: [req.params.userId]}
    })
    res.status(200).json(conversation);
  } catch (error) {
    res.status(500).json({msg: "No se pudo obtener la conversacion"});
  }
}

export {
  newConversation,
  getConversationByUserId
}