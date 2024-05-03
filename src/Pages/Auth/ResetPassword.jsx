import { useParams } from "react-router-dom";

function ResetPassword() {
  const { token } = useParams();
  console.log(token);
  return (
    <div>
      Reset Password
    </div>
  )
}

export default ResetPassword
