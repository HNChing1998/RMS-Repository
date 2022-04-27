import { IsEmail, IsNotEmpty, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto{
    @ApiProperty()
    @IsNotEmpty({message: 'Kindly Fill Up Your Fullname First'})
    @Length(3,255)
  Fullname: string;

  @ApiProperty()
    @IsEmail()
    @IsNotEmpty({message: 'Kindly Enter Your Email'})
    @Length(3,255)
  Email: string;

  @IsNotEmpty({message: 'Kindly Enter Your Password'})
  @Length(3,255)
  @ApiProperty()
  @IsNotEmpty() 
  Password: string;

  @IsNotEmpty({message: 'Kindly Choose Your Gender'})
  @Length(3,255)
  @ApiProperty()
  @IsNotEmpty()
  Gender: string;

  @IsNotEmpty({message: 'Kindly Choose Your Institute'})
  @Length(3,255)
  @ApiProperty()
  @IsNotEmpty()
  Institute: string;

  @IsNotEmpty({message: 'Kindly Choose Your Position'})
  @Length(3,255)
  @ApiProperty()
  @IsNotEmpty()
  Position: string;

  @IsNotEmpty({message: 'Kindly Choose Your Type'})
  @ApiProperty()
  @IsNotEmpty()
  Type: string;


  isActive: boolean;
}