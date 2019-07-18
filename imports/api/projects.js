import { Mongo } from "meteor/mongo"; 

export const Projects = new Mongo.Collection("Projects");

var projectDetails = {
name: "test1",
status: "test1",
updatedOn: "test1",
updatedBy: "test1",
progress: "20%",
startDate: "16.07.2019",
sarifFileName:"sarif_file_1",
sarifFileId:"1234"
};

Projects.insert(projectDetails);


