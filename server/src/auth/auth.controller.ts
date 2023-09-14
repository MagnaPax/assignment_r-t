import { Controller, Get, UseGuards, Request, Response } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleLogin(): Promise<void> {
    // 이 부분은 브라우저에서 자동으로 Google 인증 페이지로 리디렉션
    // 사용자가 인증 후 돌아오면 Passport에서 자동으로 콜백 메서드를 호출
  }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleLoginCallback(
    @Request() req: any,
    @Response() res: any,
  ): Promise<void> {
    const jwt: string = req.user.jwt;
    if (jwt) res.redirect('http://localhost:5425/login/success/' + jwt);
    else res.redirect('http://localhost:5425/login/failure');
  }

  @Get('protected')
  @UseGuards(AuthGuard('jwt'))
  protectedResource() {
    return 'JWT is working!';
  }
}
