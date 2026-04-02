import { Link } from "react-router-dom";

const Breadcrumb = ({ items = [], separator = " / " }) => {
  return (
    <>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <span key={item.path}>
            {index !== 0 && separator}

            {isLast ? (
              <span style={{ fontWeight: "bold" }}>{item.label}</span>
            ) : (
              <span className="Breadcrumb-link">
                <Link to={item.path}>{item.label}</Link>
              </span>
            )}
          </span>
        );
      })}
    </>
  );
};

export default Breadcrumb;
