const {Router} = require('express');
const router = Router();
const chatCtrl = require("../controller/chat.controller");


router.get("/chat", chatCtrl.getChat); //para mostrar la lista de chat
router.post("/chat", chatCtrl.postChat);//para crear/añadir un nuevo chat dentro de la lista de chat
// router.get("/chat", chatCtrl.verificarChat);//

router.post("/conversacion",chatCtrl.postMensaje);//para crear un nuevo mensaje entre 2 usuarios
router.get("/conversacion",chatCtrl.getMensaje);//para mostrar los mensajes de una conversacion-chat determinado
router.get("/user2",chatCtrl.getUser2);//muestra datos del usuario2
// router.post("/chat", chatCtrl.postChat);
router.get("/conversacionPropietarioPrenda/:iduser2",chatCtrl.getUser2);//muestra datos del usuario2

module.exports = router;