import mongoose from 'mongoose';
const objectId = mongoose.Types.ObjectId;
import { Apps, Todos } from '../../../Database/mongo/models.js';

export const getAppModel = async (user_id) => {
  let apps = await Apps.find({ user_id: objectId(user_id) });

  //To make symmetric with SQL output
  apps = apps.map((item) => ({
    ...item._doc,
    app_id: item._id
  }));

  return apps;
};

export const postAppModel = async (name, user_id) => {
  let app = new Apps({ app_name: name, user_id });
  await app.save();
  return {
    app_id: app._id
  };
};

export const deleteAppModel = async (app_id) => {
  console.log('app_id', app_id);
  await Todos.findOneAndDelete({ app_id: objectId(app_id) });
  await Apps.findOneAndDelete({ _id: objectId(app_id) });
};
