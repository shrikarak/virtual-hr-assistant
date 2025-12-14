
const db = require('./models');

const seed = async () => {
  try {
    await db.sequelize.sync({ force: true });
    console.log('Database synchronized successfully.');

    // Create sample employees
    const employee1 = await db.Employee.create({
      name: 'John Doe',
      email: 'john.doe@example.com',
      department: 'Engineering',
      position: 'Software Engineer',
      role: 'employee'
    });

    const employee2 = await db.Employee.create({
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      department: 'HR',
      position: 'HR Manager',
      role: 'admin'
    });

    // Create sample policies
    await db.Policy.create({
      title: 'Leave Policy',
      content: 'Employees are entitled to 20 days of paid leave per year.',
      category: 'Leave'
    });

    await db.Policy.create({
      title: 'Work From Home Policy',
      content: 'Employees can work from home up to 2 days per week.',
      category: 'Remote Work'
    });

    console.log('Sample data created successfully.');
  } catch (error) {
    console.error('Error creating sample data:', error);
  } finally {
    await db.sequelize.close();
  }
};

seed();
