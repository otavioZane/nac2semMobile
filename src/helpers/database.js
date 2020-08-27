import {Component} from 'react';
import Db from 'react-native-sqlite-storage';

export default class DataBase extends Component {
  constructor() {
    super();
    // this.state = {db: null};
    this.db = null
    this.openDataBase();
  }

  openDataBase = () => {
      this.db = Db.openDatabase({
        name: 'nac1DB',
        location: 'default',
        createFromLocation: '~nac1DB.db',
      })
  };

  executeQuery = (sql, params = []) => {
    return new Promise((resolve, reject) => {
      this.db.transaction((t) => {
        t.executeSql(
          sql,
          params,
          (t, results) => {
            resolve(results);
          },
          (error) => {
            reject(error);
          },
        );
      });
    });
  };
}
