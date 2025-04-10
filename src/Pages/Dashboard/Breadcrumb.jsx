import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const Breadcrumb = ({ pageName }) => {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-[26px] font-semibold text-neutral-900 ">
        {pageName}
      </h2>

      <nav>
        <ol className="flex items-center gap-2 text-[16px]">
          <li>
            <Link className="font-medium capitalize" to="/dashboard">
              Dashboard /
            </Link>
          </li>
          <li className="font-medium text-primary">{pageName}</li>
        </ol>
      </nav>
    </div>
  );
};
Breadcrumb.propTypes = {
  pageName: PropTypes.string,
};
export default Breadcrumb;
