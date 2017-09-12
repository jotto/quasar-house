import Datastore from 'nedb';

const name = 'locations';

export default new Datastore({ filename: name, autoload: true });
