import {Url} from "./../config/Url";
import {serverValidate} from "./../lib";
import {switchToTabScreen} from "./../lib/HandleScreen";
import {ServerRequestWithToken} from "./../lib/ApiRequest";
import {AsyncStorage} from "react-native";

export const handleCompleteRegistrationRecruiter = (values, navigator) => {
  return (dispatch) => {
    dispatch({type: "START_COMPLETE_RECRUITER_REGISTRATION"});

    ServerRequestWithToken("/api/v1/complete_registration/user", "PUT", {...values, gender: "male"})
    .then((response) => {
      try {
        AsyncStorage.setItem("user", JSON.stringify(response.data));
        dispatch({
          type: "COMPLETE_RECRUITER_REGISTRATION_SUCCESS"
        });
        switchToTabScreen();
      } catch (error) {
        throw {status: 100};
      }
    })
    .catch((error) => {
      dispatch({
        type: "COMPLETE_RECRUITER_REGISTRATION_FAIL"
      });
      serverValidate(error, "CompleteRegistrationRecruiter", dispatch, navigator);
    });
  }
}
