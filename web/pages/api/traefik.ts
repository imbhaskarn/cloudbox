import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json({
    http: {
      routers: {

        cloudbox: {
          entryPoints: ["https"],
          rule: "Host(`cloudbox.ibhaskar.com`)",
          service: "cloudbox",
          tls: {
            "certResolver": "myresolver"
          },
        },
        traefik: {
          entryPoints: ["https"],
          rule: "Host(`traefik.ibhaskar.com`)",
          service: "traefik",
          tls: {
            "certResolver": "myresolver"
          },
        },
      },
      services: {
        cloudbox: {
          loadbalancer: {
            servers: [
              {
                url: "http://128.199.30.61:3000",
              },
            ],
          },
        },
        traefik: {
          loadbalancer: {
            servers: [
              {
                url: "http://128.199.30.61:8080",
              },
            ],
          },
        },
      },

    },

    certificatesResolvers: {
      myresolver: {
        acme: {
          email: 'imbhaskaran@gmail.com',  // Replace with your email
          storage: 'acme.json',     // Store certificates in acme.json file
          httpChallenge: {
            entryPoint: 'web',
          },
        },
      },
    },
    entryPoints: {
      http: {
        address: ':80',
      },
      https: {
        address: ':443',
      },
    },
  });
}
