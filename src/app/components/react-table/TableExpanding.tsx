"use client";
import * as React from "react";
import {
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Avatar,
  Typography,
  TableHead,
  Chip,
  Box,
  AvatarGroup,
  Grid,
} from "@mui/material";
import { Stack } from "@mui/system";
import DownloadCard from "@/app/components/shared/DownloadCard";
import {
  basicsTableData,
  EnTableType,
} from "@/app/components/tables/tableData";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const basics = basicsTableData;

const columnHelper = createColumnHelper<EnTableType>();

const columns = [
  columnHelper.accessor("actions", {
    cell: ({ row }) => (
      <span onClick={() => row.toggleExpanded()}>
        {row.getIsExpanded() ? (
          <KeyboardArrowDownIcon sx={{ cursor: "pointer" }} />
        ) : (
          <KeyboardArrowRightIcon sx={{ cursor: "pointer" }} />
        )}
      </span>
    ),
    header: () => <span></span>,
  }),
  columnHelper.accessor("imgsrc", {
    header: () => "Users",
    cell: (info) => (
      <Stack direction="row" spacing={2}>
        <Avatar
          src={info.getValue()}
          alt={info.getValue()}
          sx={{ width: 40, height: 40 }}
        />
        <Box>
          <Typography variant="h6" fontWeight="600">
            {info.row.original.name}
          </Typography>
          <Typography color="textSecondary" variant="subtitle2">
            {info.row.original.post}
          </Typography>
        </Box>
      </Stack>
    ),
  }),
  columnHelper.accessor("pname", {
    header: () => "Project Name",
    cell: (info) => (
      <Typography color="textSecondary" variant="h6" fontWeight={400}>
        {info.row.original.pname}
      </Typography>
    ),
  }),
  columnHelper.accessor("teams", {
    header: () => "Team",
    cell: (info) => (
      <Stack direction="row">
        <AvatarGroup max={4}>
          {info.getValue().map((team) => (
            <Avatar
              key={team.id}
              sx={{
                bgcolor: team.color,
                width: 35,
                height: 35,
              }}
            >
              {team.text}
            </Avatar>
          ))}
        </AvatarGroup>
      </Stack>
    ),
  }),
  columnHelper.accessor("status", {
    header: () => "Status",
    cell: (info) => (
      <Chip
        sx={{
          bgcolor:
            info.getValue() === "Active"
              ? (theme) => theme.palette.success.light
              : info.getValue() === "Pending"
              ? (theme) => theme.palette.warning.light
              : info.getValue() === "Completed"
              ? (theme) => theme.palette.primary.light
              : info.getValue() === "Cancel"
              ? (theme) => theme.palette.error.light
              : (theme) => theme.palette.secondary.light,
          color:
            info.getValue() === "Active"
              ? (theme) => theme.palette.success.main
              : info.getValue() === "Pending"
              ? (theme) => theme.palette.warning.main
              : info.getValue() === "Completed"
              ? (theme) => theme.palette.primary.main
              : info.getValue() === "Cancel"
              ? (theme) => theme.palette.error.main
              : (theme) => theme.palette.secondary.main,
          borderRadius: "8px",
        }}
        size="small"
        label={info.getValue()}
      />
    ),
  }),
  columnHelper.accessor("budget", {
    header: () => "Budget",
    cell: (info) => (
      <Typography variant="h6">${info.row.original.budget}</Typography>
    ),
  }),
];

const TableExpanding = () => {
  const [data, _setData] = React.useState<any>(() => [...basics]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const handleDownload = () => {
    const headers = ["Users", "Project Name", "Team", "Status", "Budget"];
    const rows = data.map(
      (item: {
        name: any;
        pname: any;
        teams: any[];
        status: any;
        budget: any;
      }) => [
        item.name,
        item.pname,
        item.teams.map((team) => team.text).join(", "),
        item.status,
        item.budget,
      ]
    );

    const csvContent = [
      headers.join(","),
      ...rows.map((e: any[]) => e.join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "table-data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <DownloadCard title="Expanding Table" onDownload={handleDownload}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box>
            <TableContainer>
              <Table
                sx={{
                  whiteSpace: "nowrap",
                }}
              >
                <TableHead>
                  {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                      {headerGroup.headers.map((header) => (
                        <TableCell key={header.id}>
                          <Typography variant="h6">
                            {header.isPlaceholder
                              ? null
                              : flexRender(
                                  header.column.columnDef.header,
                                  header.getContext()
                                )}
                          </Typography>
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableHead>
                <TableBody>
                  {table.getRowModel().rows.map((row) => (
                    <React.Fragment key={row.id}>
                      <TableRow>
                        {row.getVisibleCells().map((cell) => (
                          <TableCell key={cell.id}>
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </TableCell>
                        ))}
                      </TableRow>
                      {row.getIsExpanded() ? (
                        <TableRow>
                          <TableCell colSpan={columns.length}>
                            <Box p={2}>
                              <Typography variant="h6" fontWeight="600">
                                Details:
                              </Typography>
                              <Typography>
                                Avatar:{" "}
                                <Avatar
                                  src={row.original.imgsrc}
                                  alt="Avatar"
                                />
                              </Typography>
                              <Typography>
                                Name: {row.original.name}.
                              </Typography>
                              <Typography>
                                post: {row.original.post}.
                              </Typography>
                              <Typography>
                                Project Name: {row.original.pname}
                              </Typography>
                              <Typography>
                                Status:
                                <Chip
                                  sx={{
                                    bgcolor:
                                      row.original.status === "Active"
                                        ? (theme) => theme.palette.success.light
                                        : row.original.status === "Pending"
                                        ? (theme) => theme.palette.warning.light
                                        : row.original.status === "Completed"
                                        ? (theme) => theme.palette.primary.light
                                        : row.original.status === "Cancel"
                                        ? (theme) => theme.palette.error.light
                                        : (theme) =>
                                            theme.palette.secondary.light,
                                    color:
                                      row.original.status === "Active"
                                        ? (theme) => theme.palette.success.main
                                        : row.original.status === "Pending"
                                        ? (theme) => theme.palette.warning.main
                                        : row.original.status === "Completed"
                                        ? (theme) => theme.palette.primary.main
                                        : row.original.status === "Cancel"
                                        ? (theme) => theme.palette.error.main
                                        : (theme) =>
                                            theme.palette.secondary.main,
                                    borderRadius: "8px",
                                  }}
                                  label={row.original.status}
                                />
                              </Typography>
                              <Typography>
                                teams:
                                <Box mt={1} display="flex" gap={1}>
                                  <AvatarGroup max={4}>
                                    {row.original.teams.map((team) => (
                                      <Avatar
                                        sx={{
                                          bgcolor: team.color,
                                          width: 35,
                                          height: 35,
                                        }}
                                      >
                                        {team.text}
                                      </Avatar>
                                    ))}
                                  </AvatarGroup>
                                </Box>
                              </Typography>
                              <Typography>
                                budget: ${row.original.budget}
                              </Typography>
                            </Box>
                          </TableCell>
                        </TableRow>
                      ) : null}
                    </React.Fragment>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Grid>
      </Grid>
    </DownloadCard>
  );
};
export default TableExpanding;
