module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '884282c1efd659e3bbb790b30c55db7e'),
  },
});
