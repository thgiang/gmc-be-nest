export default () => ({
  jwt_secret: process.env.JWT_SECRET || 'jtwecrewiet',
  jwt_ttl: process.env.JWT_TTL || 60,
});
