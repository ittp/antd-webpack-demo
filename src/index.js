import _ from 'lodash';
import 'antd/dist/antd.css';
import 'antd/dist/antd.dark.css';
const { Table, Form, Input, Select } = require('antd');

function component() {
  const element = document.createElement('div');
  const section = document.createElement('section');

  section.appendChild(Form({ children: {} }));

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
