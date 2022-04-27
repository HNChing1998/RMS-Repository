import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class loginAdmin{
  
  @ApiProperty()
    @IsEmail()
  Email: string;

  @ApiProperty()
  @IsNotEmpty() 
  Password: string;
  
  @ApiProperty()
  @IsNotEmpty() 
  Position: 'Instructor';

  @ApiProperty()
  @IsNotEmpty() 
  Type: 'Admin';
}