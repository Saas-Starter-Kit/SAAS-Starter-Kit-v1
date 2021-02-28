import db from '../../../Database/sql/db.js';

export const getAppModel = async (user_id) => {
  let text = `
      SELECT * FROM apps
      WHERE user_id=$1
  `;

  let values = [user_id];

  let queryResult = await db.query(text, values);
  return queryResult.rows;
};

export const postAppModel = async (name, user_id) => {
  let text = `INSERT INTO apps(app_name, user_id)
              VALUES ($1, $2)
              RETURNING app_id`;
  let values = [name, user_id];

  let queryResult = await db.query(text, values);

  return queryResult.rows[0];
};

export const deleteAppModel = async (app_id) => {
  let appText = `DELETE FROM apps WHERE app_id=$1`;
  let appValues = [app_id];

  let todosText = `DELETE FROM todos WHERE app_id=$1`;
  let todosValues = [app_id];

  await db.query(appText, appValues);

  await db.query(todosText, todosValues);

  return;
};
