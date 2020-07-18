import User from "../models/User";
import Like from '../models/Like';

class LikeController {
  async store(req, res) {
    const { id } = req.params; // id do usuário que quero dar like
    const userLogged = await User.findByPk(req.userId); // o id de quem irá fazer a ação de dar like
    const userLiked = await User.findOne({ where: { id } }); // achando o usuário que recebeu like

    if (!userLiked) {
      return res.status(400).json({ error: 'User not found.' });
    } // até aqui tudo vai correto

    // agora precisa inserir o "userLiked.id" como um like do usuário que deu like

    // userLiked.likes = userLiked.likes + ', New Again'; 
    // await userLiked.save(); 
    // console.log('USER_LIKES', [userLiked.likes].map(i => i + 'a'));  
    // console.log('USERID', req.userId)

    await Like.create({ user_liked_id: 1 })

    return res.status(200).json({ 
      ok: true
    });
  }
}
 
export default new LikeController();