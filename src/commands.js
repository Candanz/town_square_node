export const ROLE_COMMAND = {
  name: 'role',
  description: 'Get information about specified role',
  options: [
    {
      name: 'role',
      description: 'The role you want information on',
      type: 3, //STRING
      required: true,
    },
  ],
};
