import { model } from './model.js';
import { Site } from './classes/site';
import { Sidebar } from './classes/sidebar'
import './css/main.css';

const site = new Site('#site')

site.render(model);

const update = newBlock => {
   model.push(newBlock)
   site.render
}

new Sidebar('#panel', update)