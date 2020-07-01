import axios from "axios";

const getVisibleApps = (
  applications,
  application_status,
  application_intern
) => {
  return applications.filter((application) => {
    const application_statusMatch =
      application_status === "" ||
      application.app_status === application_status;
    const application_internMatch =
      application_intern === "" ||
      application.internship.internship_title === application_intern;

    return application_statusMatch && application_internMatch;
  });
};

export const applications_f = (config) => {
  return (dispatch, getState) => {
    const token = localStorage.usertoken;

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .get("/application/ofCandidate", config)

      .then((response) => {
        console.log(response.data.data);

        const applications = response.data.data;
        const apps_filtered = getVisibleApps(
          applications,
          getState().app_filter.application_status,
          getState().app_filter.application_intern
        );
        console.log(apps_filtered);

        dispatch({ type: "GET_APPLICATIONS", apps_filtered });
      })

      .catch((err) => {
        return err;
      });
  };
};
