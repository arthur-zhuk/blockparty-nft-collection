import { Divider, Grid, Link, Typography } from "@mui/material";

import { Box } from "@mui/joy";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import LaunchIcon from "@mui/icons-material/Launch";
import { useCollection } from "./useCollection";

export default function CollectionDetails() {
  const { data } = useCollection();

  return (
    <>
      <Typography color="#fff" variant="h4">
        {data?.contract?.name}
      </Typography>
      <Grid container spacing={3}>
        <Grid item>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 0.2,
            }}
          >
            <Typography color="#fff" variant="caption">
              0x8ae7...d1ad
            </Typography>
            <ContentCopyIcon
              sx={{ color: "#fff", marginLeft: 1 }}
              fontSize="12"
              cursor="pointer"
              onClick={() => {
                navigator.clipboard.writeText(
                  "0x8ae7cd5bd5072011f57dc00b6f094df545efd1ad"
                );
              }}
            />
          </Box>
        </Grid>
        <Grid item>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Link
              sx={{ fontFamily: "Roboto,Helvetica,Arial,sans-serif" }}
              href="https://www.etherscan.io/address/0x8ae7cd5bd5072011f57dc00b6f094df545efd1ad"
              target="_blank"
              rel="noopener"
              underline="always"
            >
              <Typography variant="caption">View on Etherscan</Typography>
            </Link>
            <LaunchIcon sx={{ color: "#fff", marginLeft: 1 }} fontSize="12" />
          </Box>
        </Grid>
      </Grid>
      <Divider
        sx={{ marginTop: 3, marginBottom: 6, backgroundColor: "gray" }}
      />
    </>
  );
}
