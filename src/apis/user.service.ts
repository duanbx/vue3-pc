import axios from '@apis';
import { User } from '@models';

export const getUser = (user: User) => axios.post('/getuser', user);
