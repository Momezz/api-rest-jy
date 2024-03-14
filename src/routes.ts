import { Application } from 'express';
import upload from './api/upload';
import user from './api/user';
import product from './api/product';
import healthcheck from './api/healthcheck';
import authLocal from './auth/local';
import sendMail from './utils/emails';

function routes(app: Application): void {
  app.use('/api/healthcheck', healthcheck);
  app.use('/api/send-mail', sendMail);
  app.use('/api/users', user);
  app.use('/api/products', product);
  app.use('/api/upload', upload);
  app.use('/auth/local', authLocal);
};

export default routes;
