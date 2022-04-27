import { loginUser} from './auth.user.dto';
import { loginAdmin} from './auth.admin.dto';
import { AuthUserService } from "./auth.service";
import { AuthAdminService } from "./auth.index.service";
import { Body, Controller, Get, Patch, Post, Param, Delete } from "@nestjs/common";

@Controller('auth')
export class AuthController{
   constructor(private readonly userService: AuthUserService){}

  

   @Post()
   loginUser(@Body()loginuserdto:loginUser){
      return this.userService.loginUser(loginuserdto);
   }
   
 

}
@Controller('auths')
export class AuthAdminController{
   constructor(private readonly userService: AuthAdminService){}
   
   @Post()
   loginAdmin(@Body()loginadmindto:loginAdmin){
      return this.userService.loginAdmin(loginadmindto);
   } 

}
