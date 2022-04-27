import { Injectable } from "@nestjs/common";
import { loginUser } from "./auth.user.dto";
import { loginAdmin } from "./auth.admin.dto";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '../users/user-entity';


@Injectable()

export class AuthAdminService{

    constructor(@InjectRepository(User)
    private adminRepository: Repository<User>,){
       
    }
    async loginAdmin(loginadmindto:loginAdmin){ 
        const Email = loginadmindto.Email;
        const Password = loginadmindto.Password;
        const Position = loginadmindto.Position;
        const Type = loginadmindto.Type;
     return this.adminRepository.find({where: { Email: Email, Password: Password, Position: 'Instructor', Type: 'Admin' }});
    }

   
 
   
    
}


