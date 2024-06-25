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

export const JINX_COMMAND = {
  name: 'jinx',
  description: 'Get information about the jinx between two roles',
  options: [
    {
      name: 'role1',
      description: 'The first role in the jinx',
      type: 3, //STRING
      required: true,
    },
    {
      name: 'role2',
      description: 'The second role in the jinx',
      type: 3,
      required: true,
    },
  ],
};
