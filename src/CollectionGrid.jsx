import { Box, Card, CardContent, CardCover, Chip } from "@mui/joy";

import { Grid } from "@mui/material";
import { useCollection } from "./useCollection";

export default function CollectionGrid({ handleOpen }) {
  const { data } = useCollection();

  return (
    <Grid container spacing={3}>
      {data?.contract.tokens.tokens.map((item, i) => (
        <Grid key={i} item xs={12} sm={6} md={3}>
          <Card
            onClick={() => handleOpen(item)}
            variant="outlined"
            sx={{
              "&:hover": {
                cursor: "pointer",
              },
              minHeight: 262,
              "--Card-radius": "4px",
              border: "1px solid #F1F1EC80",
            }}
          >
            <CardCover>
              <img
                alt={item.name}
                src={`https://nftnode.org${item.image.thumbnails[5].url}`}
              />
            </CardCover>
            <CardContent
              sx={{
                justifyContent: "space-between",
              }}
              variant="soft"
            >
              <Box
                sx={{
                  width: 39,
                  height: 29,
                  border: "1px solid darkgray",
                  backgroundColor: "#151515B2",
                  marginTop: -2,
                  marginLeft: -2,
                  borderRadius: "4px 0px",
                  paddingX: 1,
                  paddingTop: 1,
                  textAlign: "center",
                }}
                color="#fff"
                variant="solid"
              >
                #{item.tokenID}
              </Box>
              <Chip
                variant="outlined"
                color="primary"
                size="md"
                sx={{
                  pointerEvents: "none",
                  backgroundColor: "#151515B2",
                  color: "#fff",
                  "--Chip-radius": "4px",
                }}
              >
                {item.name}
              </Chip>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
