import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json({
    http: {
      routers: {
        traefik: {
          entryPoints: ["http"],
          rule: "Host(`portal.localhost`)",
          service: "traefik",
        },
      },
      services: {
        traefik: {
          loadbalancer: {
            servers: [
              {
                url: "http://localhost:3000",
              },
            ],
          },
        },
      },
    },
  });
}
