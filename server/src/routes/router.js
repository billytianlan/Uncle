import path from 'path';
import userController from '../users/userController';
import profileController from '../profile/profileController';
import teamController from '../teams/teamController';
import jobController from '../jobs/jobController';
import tagController from '../tags/tagController'
import jobTagController from '../jobs_tags/jobTagController';

export default (app, express) => {
  //////////////////////////////////////////////
  //Handling Team Oauth
  //////////////////////////////////////////////
  app.get('/slack/teams/auth', teamController.addTeam);

  //////////////////////////////////////////////
  //Handling Users
  //////////////////////////////////////////////
  app.get('/slack/users', userController.findUser);
  app.post('/slack/users', userController.addUser);
  app.delete('/slack/users', userController.deleteUser);

  //////////////////////////////////////////////
  //Handling Profile
  //////////////////////////////////////////////
  app.get('/slack/users/profile', profileController.findProfile);
  app.post('/slack/users/profile', profileController.addProfile);
  app.put('/slack/users/profile', profileController.updateProfile);
  app.delete('/slack/users/profile', profileController.deleteProfile);

  //////////////////////////////////////////////
  //Handling Oauth
  //////////////////////////////////////////////
  app.get('/slack/users/auth', userController.authUser);

  //////////////////////////////////////////////
  //Handling Job
  //////////////////////////////////////////////
  app.post('/api/job', jobController.addJob);

  //////////////////////////////////////////////
  //Handling Tag
  //////////////////////////////////////////////
  app.post('/api/tags/job', tagController.addJobTags);

  //////////////////////////////////////////////
  //Handling Error
  //////////////////////////////////////////////
  app.get('*', (req, res)=>{
    res.sendFile(path.resolve(__dirname + '/../../../client/index.html'));
  });
}
