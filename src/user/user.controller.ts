import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('users')
export class UserController {
  /* 
    GET     /users
    GET     /users/:id
    POST    /users/create
    PATCH   /users/:id/update
    DELETE  /users/:id/delete
 */

  // _> Get all
  @Get()
  findUserByQuery(@Query('role') role?: 'ADMIN' | 'USER') {
    return { role };
  }
  // _> Getting all users from db
  @Get()
  findAllUsers() {
    return [];
  }

  // _> Getting only the single user by its id
  @Get(':id') // TODO --> GET /users/:id
  findUserByID(@Param('id') id: string) {
    return { id };
  }

  // _> Getting only the single user by its id
  @Get('/interns') // TODO --> GET /users/:id
  findAUser() {
    return { interns: 'interns' };
  }

  @Post('/create')
  createNewUserIntoDB(@Body() body: {}) {
    return { ...body };
  }

  @Patch('/:id/update') // _> PATCH /users/:id/update
  updateUserById(@Param('id') id: string, @Body() userData: {}) {
    return { id: id, ...userData };
  }
}
