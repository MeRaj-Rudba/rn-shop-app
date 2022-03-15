// export const SIGNUP = "SIGNUP";
// export const SIGNIN = "SIGNIN";

// export const signUp = (email, password) => {
//   return async (dispatch) => {
//     const response = await fetch(
//       "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCj9OKPwZn_REY2hwJrwGiw6EojPLhhCjs",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email,
//           password,
//           returnSecureToken: true,
//         }),
//       }
//     );
//     if (!response.ok) {
//       const errorResData = await response.json();
//       const errorId = errorResData.error.message;
//       let message = "Something went wrong!";
//       if (errorId === "EMAIL_EXISTS") {
//         message = "This Email is exists already!";
//       } else if (errorId === "OPERATION_NOT_ALLOWED") {
//         message = "This Operation is not allowed!";
//       } else if (errorId === "TOO_MANY_ATTEMPTS_TRY_LATER") {
//         message = "Try again Later!";
//       }
//       console.log(errorResData);

//       throw new Error(message);
//     }
//     const resData = await response.json();
//     console.log(resData);

//     dispatch({ type: SIGNUP, token: resData.idToken, userId: resData.localId });
//   };
// };
// export const signIn = (email, password) => {
//   return async (dispatch) => {
//     const response = await fetch(
//       "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCj9OKPwZn_REY2hwJrwGiw6EojPLhhCjs",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email,
//           password,
//           returnSecureToken: true,
//         }),
//       }
//     );
//     if (!response.ok) {
//       const errorResData = await response.json();
//       const errorId = errorResData.error.message;
//       let message = "Something went wrong!";
//       if (errorId === "EMAIL_NOT_FOUND") {
//         message = "This Email could not be found!";
//       } else if (errorId === "INVALID_PASSWORD") {
//         message = "This Password is not valid!";
//       } else if (errorId === "USER_DISABLED") {
//         message = "This Account is currently disabled!";
//       }
//       console.log(errorResData);

//       throw new Error(message);
//     }
//     const resData = await response.json();
//     console.log(resData);

//     dispatch({ type: SIGNIN, token: resData.idToken, userId: resData.localId });
//   };
// };

export const SIGNUP = "SIGNUP";
export const SIGNIN = "LOGIN";

export const signup = (email, password) => {
  return async (dispatch) => {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCj9OKPwZn_REY2hwJrwGiw6EojPLhhCjs",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      }
    );

    if (!response.ok) {
      const errorResData = await response.json();
      const errorId = errorResData.error.message;
      let message = "Something went wrong!";
      if (errorId === "EMAIL_EXISTS") {
        message = "This email exists already!";
      }
      throw new Error(message);
    }

    const resData = await response.json();
    console.log(resData);
    dispatch({ type: SIGNUP, token: resData.idToken, userId: resData.localId });
  };
};

export const signIn = (email, password) => {
  return async (dispatch) => {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCj9OKPwZn_REY2hwJrwGiw6EojPLhhCjs",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      }
    );

    if (!response.ok) {
      const errorResData = await response.json();
      const errorId = errorResData.error.message;
      let message = "Something went wrong!";
      if (errorId === "EMAIL_NOT_FOUND") {
        message = "This email could not be found!";
      } else if (errorId === "INVALID_PASSWORD") {
        message = "This password is not valid!";
      }
      throw new Error(message);
    }

    const resData = await response.json();
    console.log(resData);
    dispatch({ type: SIGNIN, token: resData.idToken, userId: resData.localId });
  };
};
