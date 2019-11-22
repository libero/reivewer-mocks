import { Request, Response } from 'express';
import { ConfigType } from '../config';

export const Authenticate = (config: ConfigType, sign) => (req: Request, resp: Response): void => {
    const token = sign(
      {
        token_id: "fd7d795a-67bc-4266-a426-722170a06e7d",
        token_version: "0.1-alpha",
        identity: {
          user_id: "e4b91392-52d5-4c04-838a-9a5006d46d73",
          external: [
            { id: "ewwboc7m", domain: "elife-profiles" },
            { id: "0000-0002-6277-0372", domain: "orcid" }
          ]
        },
        roles: [
          { journal: "elife", kind: "author" }
        ],
        meta: null
      },
        config.continuumAuthJwtSecret,
        {
            expiresIn: '1d',
        },
    );

    const redirectUrl = config.continuumAuthRedirectUrl + '#' + token;

    resp.redirect(redirectUrl);
};
