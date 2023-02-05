import ReduxToastrLib from "react-redux-toastr";

export const ReduxToast = () => {
  return (
    <ReduxToastrLib
      newestOnTop={false}
      preventDuplicates
      progressBar
      closeOnToastrClick
      timeOut={4000}
      transitionIn={'fadeIn'}
      transitionOut={'fadeOut'}
    />
  )
}