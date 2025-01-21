import { useLocation, useNavigate } from "react-router-dom";

const useBackOnDefaultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleBackOnDefaultPage = () => {
    if (location.key === "default") {
      const pathWithoutParams = location.pathname;
      navigate(pathWithoutParams, { replace: true });
    } else {
      // navigate(-1);
    }
  };

  return handleBackOnDefaultPage;
};

export default useBackOnDefaultPage;
