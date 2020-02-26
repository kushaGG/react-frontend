import authActions from './authActions';
import courseActions from './courseActions';
import lessonActions from './lessonActions'

export default {
  ...authActions,
  ...courseActions,
  ...lessonActions
};
