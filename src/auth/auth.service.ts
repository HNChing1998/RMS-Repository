import { Injectable } from "@nestjs/common";
import { loginUser } from "./auth.user.dto";
import { loginAdmin } from "./auth.admin.dto";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '../users/user-entity';


@Injectable()
export class AuthUserService{

    constructor(@InjectRepository(User)
    private usersRepository: Repository<User>,){
       
    }
       async loginUser(loginuserdto:loginUser){ 
           const Email = loginuserdto.Email;
           const Password = loginuserdto.Password;
           const Position = loginuserdto.Position;
           const Type = loginuserdto.Type;
        return this.usersRepository.find({where: { Email: Email, Password: Password, Position: 'Student', Type: 'Requestor' }});
    }
    
   
    
}



