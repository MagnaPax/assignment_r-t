import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';
import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';

import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.auth' });

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor(private usersService: UsersService) {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:5425/auth/google', // 콜백 URL
      scope: ['email', 'profile'], // scope
    });
  }

  // OAuth 인증이 끝나고 콜백으로 실행되는 메서드
  async validate(accessToken: string, refreshToken: string, profile: any) {
    const { id, name, emails } = profile;
    console.log(accessToken);
    console.log(refreshToken);

    const providerId = id;
    const email = emails[0].value;

    const jwt = 'placeholderJWT';
    const user: User = { jwt, providerId, email, name };

    return user;
  }
}
