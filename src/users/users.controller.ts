import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService){}

    @Post('/signup')
    createUser(@Body() body: CreateUserDto) {
        // validate a data coming from user > DTO
        // console.log(body);
        this.userService.create(body.email, body.password);
    }
}
