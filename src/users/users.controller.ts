
import { UsersService } from "./users.service";
import { Body, Controller, Get, Patch, Post, Param, Delete } from "@nestjs/common";
import { CreateUserDto } from "./create-users.dto";
import { UpdateUserDto } from "./update-users.dto";
import { identity } from "rxjs";
import { DeleteUserDto } from "./delete-users.dto";
@Controller('users')
export class UserController{
    constructor(private readonly userService: UsersService){}

    @Get()
    getUsers(){
        return this.userService.getUser();
    }
    
    @Post()
    insertUser(@Body()createuserdto:CreateUserDto){
       return this.userService.insertUser(createuserdto);
      
    }

    @Patch(':id')
    updateUser(@Body()updateuserdto:UpdateUserDto, @Param('id')id:number){
        return this.userService.updateUser(updateuserdto, id);
    }

    @Delete(':id')
    remove(@Body()deleteuserdto:DeleteUserDto, @Param('id')id:number){
        return this.userService.remove(deleteuserdto, id);
    }

    
    
    

}