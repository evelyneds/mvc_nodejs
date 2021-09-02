
import * as Yup from 'yup';
import { startOfHour, parseISO, isBefore} from 'date-fns';
import User from '../models/User';
import Appointment from '../models/Appointment';

class AppointsContoller{
    async index(req, res){
        return res.status(200).json({ message: 'Registrado'})
    };
    async store(req, res){
        const schema = Yup.object().shape({
            employee_id: Yup.number().required(),
            date: Yup.date().required(),
        })

        if(!(await schema.isValid(req.body))){ //tratamento de exceção
            return res.status(400).json({message: 'Dados são inválidos'})
        }

        //Desestruturar para 
        const {employee_id, date }= req.body
        
        const isEmployee = await User.findOne({
            where: { id: employee_id, employee: true }
        })

        if(!isEmployee){
            return res.status(401).json({message : 'Este usuário não é um colaborador'})
        };

        const starHour = startOfHour(parseISO(date));

        //Se o horário for anterior a data de hoje não permite agendamento
        if(isBefore(starHour, new Date())){
            return res.status(400).json({
                message: 'Data/Horário não disponível'
            })
        }

        const appointment = await Appointment.create({
            user_id: req.userId,
            employee_id, 
            date: starHour, 
        })

        return res.status(200).json({message: "Tudo ok [Store]"});
    };
}

export default new AppointsContoller();