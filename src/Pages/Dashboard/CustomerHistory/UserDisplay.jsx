import PropTypes from "prop-types";
function UserDisplay({ user }) {
  return (
    <div className="flex w-fit gap-x-2 rounded-lg border border-neutral-300 px-4 py-2">
      <img
        className="h-14 w-14 rounded-full "
        src={user?.photo?.url ?? "/userImage.png"}
        alt="User Image"
      />
      <div className="flex flex-col ">
        <h1 className="font-semibold capitalize">
          {user.firstName + " " + user.lastName}
        </h1>
        <span>
          No.visits:&nbsp;
          <span className="font-semibold ">{history.length}</span>
        </span>
      </div>
    </div>
  );
}
UserDisplay.propTypes = {
  user: PropTypes.object.isRequired,
};
export default UserDisplay;
