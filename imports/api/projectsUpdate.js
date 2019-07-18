import {Projects} from './projects.js';

Projects.update({status : "test1"}, {$set : { name : "Project test1"}});
