import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import CollectionDetails from "./CollectionDetails";
import CollectionGrid from "./CollectionGrid";
import { Container } from "@mui/material";
import Popup from "./Popup";
import { useState } from "react";

const queryClient = new QueryClient();

function App() {
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState();
  const handleOpen = (item) => {
    setModalData(item);
    setOpen(true);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Container maxWidth="lg" sx={{ paddingTop: 4 }}>
        <Popup open={open} setOpen={setOpen} modalData={modalData} />
        <CollectionDetails />
        <CollectionGrid handleOpen={handleOpen} />
      </Container>
    </QueryClientProvider>
  );
}

export default App;
