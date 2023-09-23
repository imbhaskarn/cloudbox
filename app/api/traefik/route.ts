import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, res: NextResponse) => {
  const data = {
    http: {
      routers: {
        cloudbox: {
          entryPoints: ["https"],
          rule: "Host(`cloudbox.ibhaskar.com`)",
          service: "cloudbox",
          tls: {
            certResolver: "myresolver",
          },
        },
        cloudbox_secure: {
          entryPoints: ["http"],
          rule: "Host(`cloudbox.ibhaskar.com`)",
          service: "cloudbox",
          middlewares: ["https_redirect"],
        },
      },
      middlewares: {
        https_redirect: {
          redirectscheme: {
            scheme: "https",
            permanent: true,
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
        cloudbox_secure: {
          loadbalancer: {
            servers: [
              {
                url: "http://128.199.30.61:3000",
              },
            ],
          },
        },
      },
    },
    // certificatesResolvers: {
    //   myresolver: {
    //     acme: {
    //       email: "imbhaskaran@gmail.com", // Replace with your email
    //       storage: "acme.json", // Store certificates in acme.json file
    //       httpChallenge: {
    //         entryPoint: "web",
    //       },
    //     },
    //   },
    // },
    // entryPoints: {
    //   http: {
    //     address: ":80",
    //   },
    //   https: {
    //     address: ":443",
    //   },
    // },
  };

  return new NextResponse(JSON.stringify({ http: data.http }), {
    status: 200,
  });
}
