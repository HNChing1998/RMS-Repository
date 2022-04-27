import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class loginUser{
    
  @ApiProperty()
    @IsEmail()
  Email: string;

  @ApiProperty()
  @IsNotEmpty() 
  Password: string;
  
  @ApiProperty()
  @IsNotEmpty() 
  Position: 'Student' ;

  @ApiProperty()
  @IsNotEmpty() 
  Type: 'Requestor';
}
