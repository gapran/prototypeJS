import { Mongo } from "meteor/mongo"; 

export const Projects = new Mongo.Collection("Projects");

var project_details = {
name: "test1",
status: "test1",
updated_on: "test1",
updated_by: "test1",
progress: "20%",
start_date: "16.07.2019",
sarif_file_name:"sarif_file_1",
sarif_file_id:"1234"
}

Projects.insert(project_details);


