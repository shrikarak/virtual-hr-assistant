
const db = require('./models');

const syncDb = async () => {
  try {
    await db.sequelize.sync({ alter: true });
    console.log('Database synchronized successfully.');
  } catch (error) {
    console.error('Error synchronizing the database:', error);
  } finally {
    await db.sequelize.close();
  }
};

syncDb();
