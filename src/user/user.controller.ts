import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/guard';

// solve the interface 'incompatibility'
interface UserRequest extends Request {
  user: object;
}

@Controller('users')
export class UserController {
  @UseGuards(JwtGuard)
  @Get('me')
  getMe(@Req() req: UserRequest) {
    return req.user;
  }
}
