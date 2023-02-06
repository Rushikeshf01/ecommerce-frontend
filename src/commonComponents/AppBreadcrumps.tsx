import { Breadcrumbs, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const AppBreadcrumps = (props: {
  previousData: { previousText: string; previousLink: string }[];
  currentData: string;
  className?: string;
}) => {
  return (
    <div className={props.className}>
      <Breadcrumbs aria-label="breadcrumb">
        {props.previousData.map((item, index) => (
          <Link
            color="inherit"
            to={item.previousLink}
            key={`breadcrumbs: ${index}`}
          >
            {item.previousText}
          </Link>
        ))}
        <Typography color="text.primary">{props.currentData}</Typography>
      </Breadcrumbs>
    </div>
  );
};

export default AppBreadcrumps;
