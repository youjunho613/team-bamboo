const CURRENT_USER = "App/userInfo/CURRENT";
const LOGOUT_USER = "App/userInfo/LOGOUT";
const UPDATE_USER = "App/userInfo/UPDATE";

export const currentUser = payload => {
  return { type: CURRENT_USER, payload };
};

export const logoutUser = payload => {
  return { type: LOGOUT_USER, payload };
};

export const updateUser = payload => {
  return { type: UPDATE_USER, payload };
};

const initialState = {
  uid: null,
  displayName: null,
  photoURL: null,
  email: null
};

const userInfo = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_USER:
      console.log("리덕스 로그인 작동");
      return action.payload;

    case LOGOUT_USER:
      return { ...state, uid: null, displayName: null, photoURL: null };

    case UPDATE_USER:
      console.log("리덕스 로그아웃 작동");
      console.log(action.payload);
      return { ...state, photoURL: action.payload };

    default:
      return state;
  }
};

export default userInfo;
