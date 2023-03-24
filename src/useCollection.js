import { gql, request } from "graphql-request";

import { useQuery } from "@tanstack/react-query";

const allNftCollectionItems = gql`
  query {
    contract(id: "0x8ae7cd5bd5072011f57dc00b6f094df545efd1ad") {
      name
      tokens {
        tokens {
          tokenID
          image {
            url
            thumbnails {
              url
              width
              height
            }
          }
          description
          createdAt
          holders {
            count
          }
          name
        }
      }
    }
  }
`;

export const useCollection = () => {
  return useQuery({
    queryKey: ["collection", "givingBack"],
    queryFn: async () =>
      request(
        "https://nftnode.org/v0/nftindexer/mainnet/graphql",
        allNftCollectionItems
      ),
  });
};
