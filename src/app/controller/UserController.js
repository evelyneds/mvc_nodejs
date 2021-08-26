import User from '../models/User'

class UserController{
  async store(req, res){
    const { id, name, email } = await User.create(req.body);
    return res.json({id, name, email});
  };

    async index(req, res) {
        const person = {
            name: "Nome da Pessoa",
            age: 21
        }
        return res.status(200).json(person);
    };

    async delete(req, res) {
        return res.status(200).json({ message: 'Metodo de Delete' });
    }

    async update(req, res) {
        return res.status(200).json({ message: 'Metodo Update' });
    };

}

export default new UserController();
