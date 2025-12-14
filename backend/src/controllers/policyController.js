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
// See the License for the specific language govern permissions and
// limitations under the License.

const { Policy } = require('../models');
const { Op } = require('sequelize');

exports.getAllPolicies = async (req, res) => {
  try {
    const { search } = req.query;
    const where = {};
    if (search) {
      where[Op.or] = [
        { title: { [Op.iLike]: `%${search}%` } },
        { content: { [Op.iLike]: `%${search}%` } }
      ];
    }
    const policies = await Policy.findAll({ where });
    res.json(policies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPolicyById = async (req, res) => {
  try {
    const policy = await Policy.findByPk(req.params.id);
    if (policy) {
      res.json(policy);
    } else {
      res.status(404).json({ error: 'Policy not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createPolicy = async (req, res) => {
  try {
    const { title, content, category } = req.body;
    const policy = await Policy.create({ title, content, category });
    res.status(201).json(policy);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updatePolicy = async (req, res) => {
  try {
    const policy = await Policy.findByPk(req.params.id);
    if (policy) {
      const { title, content, category } = req.body;
      await policy.update({ title, content, category });
      res.json(policy);
    } else {
      res.status(404).json({ error: 'Policy not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deletePolicy = async (req, res) => {
  try {
    const policy = await Policy.findByPk(req.params.id);
    if (policy) {
      await policy.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Policy not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
