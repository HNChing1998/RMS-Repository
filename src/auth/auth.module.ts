
import { AuthUserService } from "./auth.service";
import { AuthAdminService } from "./auth.index.service";
import { Module } from '@nestjs/common';

import { AuthController } from "./auth.controller";
import { AuthAdminController } from "./auth.controller";
import { User } from "../users/user-entity";
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [AuthController,AuthAdminController],
    providers: [AuthUserService,AuthAdminService],
    exports: [AuthUserService,AuthAdminService]
})
export class AuthModule {}