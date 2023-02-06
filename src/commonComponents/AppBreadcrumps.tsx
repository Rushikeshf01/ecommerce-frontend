import { Breadcrumbs, Link, Typography } from "@mui/material";

const AppBreadcrumps = (props: {
  previousData: { previousText: string; previousLink: string }[];
  currentData: string;
}) => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {props.previousData.map((item, index) => (
        <Link underline="hover" color="inherit" href={item.previousLink}>
          {item.previousText}
        </Link>
      ))}
      <Typography color="text.primary">{props.currentData}</Typography>
    </Breadcrumbs>
  );
};

export default AppBreadcrumps;
