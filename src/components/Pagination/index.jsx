import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  urlQueryToObject,
  objectToUrlQuery,
} from "../../utils/urlQueryToObject";
import { BlackLeft, BlackRight, GreenLeft, GreenRight } from "../ArrowIcon";
import "./styles.scss";
const Paginate = ({ totalPage }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const query = urlQueryToObject({ page: "1" });
  query.page = parseInt(query.page);
  const renderItem = () => {
    let list = [];
    // let start = parseInt(query.page) - 2;
    if (query.page < 3) {
      var start = 1;
      var end = 5;
    } else {
      var start = parseInt(query.page) - 2;
      var end = parseInt(query.page) + 2;
    }
    for (let i = start; i <= end; i++) {
      list.push(
        <Link
          className="link-number"
          to={`${pathname}?${objectToUrlQuery({ page: i })}`}
        >
          {i}
        </Link>
      );
    }
    return list;
  };
  //   console.log(query.page);
  return (
    <div className="Paginate">
      {parseInt(query.page) - 2 > 1 && (
        <Link to={`${pathname}?${objectToUrlQuery({ page: query.page - 1 })}`}>
          <BlackLeft />
        </Link>
      )}
      {renderItem()}
      {parseInt(query.page) + 2 < totalPage && (
        <Link to={`${pathname}?${objectToUrlQuery({ page: query.page + 1 })}`}>
          <BlackRight />
        </Link>
      )}
    </div>
  );
};

export default Paginate;
