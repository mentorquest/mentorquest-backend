import {app} from './app';
import {config} from './config';

app.listen(config.port, () => {
  console.log(`mentorquest server listening at port ${config.port}...`);
});
