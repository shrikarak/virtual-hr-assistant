// Copyright 2025 Shrikara Kaudambady
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

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
