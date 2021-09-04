import File from '../models/Files';


class FileController{
    async store(req, res){
        const {originalname: name, filename:path} = req.file;
        
        const file = await File.created({
            name,
            path,
        })
        
        const userUpdate = await User.findOne({
            where: {id: req.userId}
        })

        /*
        if(!(await userUpdate)){
            return res.json({message:'Usuário não encontrado'})
        }*/

        userUpdate.update({photo_id: req.userId})
        
        return res.json(file)
    }
}

export default new FileController();

//return res.status(200).json({message:'Tudo certo!'})