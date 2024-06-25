import { AutoRouter } from 'itty-router';
import {
  InteractionResponseType,
  InteractionType,
  verifyKey,
} from 'discord-interactions';
import { ROLE_COMMAND, JINX_COMMAND } from './commands.js';

import { ROLES } from '../roleData.js';
import { JINXES } from '../jinxData.js';

import DamerauLevenshtein from '@crob/damerau-levenshtein';

const damerau = new DamerauLevenshtein();

class JsonResponse extends Response {
  constructor(body, init) {
    const jsonBody = JSON.stringify(body);
    init = init || {
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
    };
    super(jsonBody, init);
  }
}

const router = AutoRouter();

router.get('/', (request, env) => {
  return new Response(`👋 ${env.DISCORD_APPLICATION_ID}`);
});

router.post('/', async (request, env) => {
  const { isValid, interaction } = await server.verifyDiscordRequest(
    request,
    env,
  );

  if (!isValid || !interaction) {
    return new Response('Bad request signature.', { status: 401 });
  }

  if (interaction.type === InteractionType.PING) {
    return new JsonResponse({
      type: InteractionResponseType.PONG,
    });
  }

  if (interaction.type === InteractionType.APPLICATION_COMMAND) {
    switch (interaction.data.name.toLowerCase()) {
      case ROLE_COMMAND.name.toLowerCase(): {
        var roleOpt = interaction.data.options[0].value.toLowerCase();
        var role = ROLES[roleOpt];
        if (!role) {
          var distance = 99;
          var roleId = '';
          Object.keys(ROLES).forEach((roleKey) => {
            if (roleKey.indexOf(roleOpt) > -1) {
              distance = -1;
              roleId = roleKey;
            }

            var dist = damerau.distance(roleOpt, roleKey);
            if (dist < distance) {
              distance = dist;
              roleId = roleKey;
            }
          });

          if (distance > 5) {
            return new JsonResponse({
              type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
              data: {
                content: `No data for specified role "${roleOpt}" exists. Cloest option would be "${roleId}".`,
              },
            });
          }
          role = ROLES[roleId];
        }

        var color = Number('0x000000');
        var type = role.type.charAt(0).toUpperCase() + role.type.slice(1);

        switch (role.type) {
          case 'outsider':
            color = Number('0x368cff');
            break;
          case 'townsfolk':
            color = Number('0x081ee5');
            break;
          case 'minion':
            color = Number('0xb90000');
            break;
          case 'demon':
            color = Number('0xd62d2d');
            break;
          case 'traveler':
            color = Number('0x9c59b6');
            break;
          case 'fabled':
            color = Number('0xe3ab15');
            break;
        }
        return new JsonResponse({
          type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
          data: {
            embeds: [
              {
                color: color,
                author: {
                  name: 'Town Square',
                },
                title: role.name + ' - ' + type,
                description: role.description,
                url: encodeURI(
                  `https://wiki.bloodontheclocktower.com/${role.name}`,
                ),
                thumbnail: {
                  url: role.Icon,
                },
              },
            ],
          },
        });
      }

      case JINX_COMMAND.name.toLowerCase(): {
        var opt1 = interaction.data.options[0].value.toLowerCase();
        var opt2 = interaction.data.options[1].value.toLowerCase();

        var opts = [opt1, opt2];
        var roles = [];
        opts.forEach((opt) => {
          if (ROLES[opt]) {
            roles.push(ROLES[opt]);
          } else {
            let dist = 99;
            let roleId;
            Object.keys(ROLES).forEach((roleKey) => {
              if (roleKey.indexOf(opt) > -1) {
                dist = -1;
                roleId = roleKey;
              } else {
                var d = damerau.distance(opt, roleKey);
                if (d < dist) {
                  dist = d;
                  roleId = roleKey;
                }
              }
            });
            if (dist > 5) {
              return new JsonResponse({
                type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                data: {
                  content: `No data for specified role "${role}" exists. Closest option would be "${roleId}".`,
                },
              });
            }

            roles.push(ROLES[roleId]);
          }
        });

        var selectedJinx;

        JINXES.forEach((jinx) => {
          if (
            (jinx.roles[0] == roles[0].id && jinx.roles[1] == roles[1].id) ||
            (jinx.roles[1] == roles[0].id && jinx.roles[0] == roles[1].id)
          ) {
            selectedJinx = jinx;
          }
        });
        if (selectedJinx) {
          return new JsonResponse({
            type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: {
              embeds: [
                {
                  color: Number('0x9c59b6'),
                  author: {
                    name: 'Town Square',
                  },
                  title: 'Jinx: ' + roles[0].name + ' - ' + roles[1].name,
                  description: selectedJinx.description,
                },
              ],
            },
          });
        } else {
          return new JsonResponse({
            type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: {
              content: `No jinx found between ${roles[0].name} and ${roles[1].name}.`,
            },
          });
        }
      }

      default:
        return new JsonResponse({ error: 'Unknown Type' }, { status: 400 });
    }
  }

  console.error('Unknown Type');
  return new JsonResponse({ error: 'Unknown Type' }, { status: 400 });
});
router.all('*', () => new Response('Not Found.', { status: 404 }));

async function verifyDiscordRequest(request, env) {
  const signature = request.headers.get('x-signature-ed25519');
  const timestamp = request.headers.get('x-signature-timestamp');
  const body = await request.text();
  const isValidRequest =
    signature &&
    timestamp &&
    (await verifyKey(body, signature, timestamp, env.DISCORD_PUBLIC_KEY));
  if (!isValidRequest) {
    return { isValid: false };
  }

  return { interaction: JSON.parse(body), isValid: true };
}

const server = {
  verifyDiscordRequest,
  fetch: router.fetch,
};

export default server;
